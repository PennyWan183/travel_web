/**
 * Receives trip requests from the request form.
 *
 * If RESEND_API_KEY and INQUIRY_TO_EMAIL are set (see .env.example), the
 * request is emailed to the team through Resend (https://resend.com).
 * Otherwise it is only printed to the server log, which is fine for local
 * development but means requests are NOT delivered anywhere.
 */

type Inquiry = Record<string, unknown> & {
  destination?: string;
  name?: string;
  email?: string;
  website?: string;
};

function line(label: string, value: unknown): string {
  if (value === undefined || value === null || value === "") return "";
  const text = Array.isArray(value) ? value.join(", ") : String(value);
  return text ? `${label}: ${text}\n` : "";
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Bots fill in the hidden field; pretend success and drop it.
  if (body.website) return Response.json({ ok: true });

  const email = String(body.email ?? "");
  if (!body.destination || !body.name || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const text =
    line("Name", body.name) +
    line("Email", email) +
    line("Chat via", body.chatVia) +
    line("WhatsApp / Kakao", body.handle) +
    line("Site language", body.locale) +
    "\n" +
    line("Destination", body.destination) +
    line("Arrival", body.arrival) +
    line("Departure", body.departure) +
    line("Flexible dates", body.flexible ? "yes" : "") +
    line("Adults", body.adults) +
    line("Children", body.children) +
    line("Travellers (quick form)", body.travellers) +
    line("Guide language", body.guideLanguage) +
    line("Services", body.services) +
    line("Interests", body.interests) +
    line("Travel style", body.style) +
    line("Notes", body.notes);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "Lantern Local <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.log("[inquiry] Email not configured; request received:\n" + text);
    return Response.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `New trip request: ${body.destination} (${body.name})`,
      text,
      html: `<pre style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    console.error("[inquiry] Resend error", res.status, await res.text());
    return Response.json({ ok: false, error: "Email failed" }, { status: 502 });
  }
  return Response.json({ ok: true, delivered: true });
}
