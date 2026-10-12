/**
 * Business details used across the site.
 * Replace every value marked TODO before launch.
 */
export const site = {
  name: "Lantern Local",
  url: "https://lanternlocaltours.com",

  // TODO: WhatsApp number in international format, digits only (e.g. "8613800000000")
  whatsappNumber: "6287752220135",
  // TODO: KakaoTalk channel link, e.g. "https://pf.kakao.com/_xxxx/chat"
  kakaoUrl: "",
  // TODO: public contact email
  email: "lanternlocal@zohomail.com",

  // Optional legal details. Leave "" to hide them; fill in to show them
  // on About (and the licence number in the footer).
  companyName: "",
  companyCity: "",
  licenseNumber: "",
  insurer: "",

  // TODO: shown on the request form and How it works
  responseTime: "24h",
  supportHours: "[SUPPORT HOURS]",
  depositPercent: "[DEPOSIT %]",
  balanceTiming: "[BALANCE TIMING]",
};

export function whatsappLink(): string {
  return site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "#contact";
}

export function kakaoLink(): string {
  return site.kakaoUrl || "#contact";
}
