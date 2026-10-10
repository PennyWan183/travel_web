"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import { StepSeal } from "./Motifs";

type Props = {
  form: Dictionary["form"];
  sections: Pick<Dictionary["request"], "sectionWhere" | "sectionWho" | "sectionWhat" | "sectionContact">;
  successText: string;
  privacyHref: string;
  locale: string;
  quickCities: string[];
};

/** A pill-shaped checkbox or radio. */
function Chip({
  type,
  name,
  value,
  checked,
  onChange,
  children,
}: {
  type: "checkbox" | "radio";
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-3.5 text-sm ${
        checked ? "border-[1.5px] border-cobalt bg-glaze-tint text-cobalt-deep" : "border border-field-line"
      }`}
    >
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} className="accent-cobalt" />
      {children}
    </label>
  );
}

function Fieldset({ n, legend, children }: { n: number; legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="m-0 flex flex-col gap-5 rounded-[20px] border border-glaze-soft bg-white p-6 sm:p-7">
      <legend className="flex items-center gap-3 px-2 font-serif text-[22px]">
        <StepSeal n={n} size={36} />
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export function InquiryForm({ form: f, sections, successText, privacyHref, locale, quickCities }: Props) {
  const params = useSearchParams();
  const [destination, setDestination] = useState(params.get("dest") ?? "");
  const [services, setServices] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [style, setStyle] = useState(f.styleOptions[1].title);
  const [chatVia, setChatVia] = useState(f.chatOptions[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "invalid" | "error">("idle");

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const addCity = (city: string) => {
    const current = destination.split(",").map((s) => s.trim()).filter(Boolean);
    if (!current.includes(city)) setDestination([...current, city].join(", "));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!destination.trim() || !String(data.get("name") ?? "").trim() || !/^\S+@\S+\.\S+$/.test(email) || !data.get("consent")) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    const payload = {
      locale,
      destination,
      arrival: data.get("arrival"),
      departure: data.get("departure"),
      flexible: Boolean(data.get("flexible")),
      adults: data.get("adults"),
      children: data.get("children"),
      guideLanguage: data.get("guideLanguage"),
      services,
      interests,
      style,
      notes: data.get("notes"),
      help: params.get("help") ?? "",
      travellers: params.get("travellers") ?? "",
      name: data.get("name"),
      email,
      chatVia,
      handle: data.get("handle"),
      website: data.get("website"), // honeypot, should stay empty
    };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-[20px] border-[1.5px] border-cobalt bg-white p-8">
        <h2 className="m-0 font-serif text-[28px] font-normal text-cobalt">{f.successTitle}</h2>
        <p className="m-0 leading-relaxed text-ink-soft">{successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <Fieldset n={1} legend={sections.sectionWhere}>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          {f.where}
          <input
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={f.wherePlaceholder}
            className="field"
            required
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {quickCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => addCity(city)}
              className="min-h-11 rounded-full border border-field-line bg-white px-3.5 text-sm text-ink hover:border-cobalt"
            >
              + {city}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.arrival}
            <input type="date" name="arrival" defaultValue={params.get("arrival") ?? ""} className="field" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.departure}
            <input type="date" name="departure" className="field" />
          </label>
        </div>
        <label className="flex min-h-11 items-center gap-2.5 text-sm">
          <input type="checkbox" name="flexible" className="h-5 w-5 accent-cobalt" />
          {f.flexible}
        </label>
      </Fieldset>

      <Fieldset n={2} legend={sections.sectionWho}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.adults}
            <input type="number" name="adults" min={1} defaultValue={2} className="field" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.children}
            <input type="number" name="children" min={0} defaultValue={0} className="field" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.guideLanguage}
            <select name="guideLanguage" defaultValue={locale === "ko" ? "Korean" : "English"} className="field">
              <option value="English">English</option>
              <option value="Korean">한국어 Korean</option>
              <option value="Chinese">中文 Chinese</option>
            </select>
          </label>
        </div>
      </Fieldset>

      <Fieldset n={3} legend={sections.sectionWhat}>
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{f.services}</span>
          <div className="flex flex-wrap gap-2">
            {f.serviceOptions.map((option) => (
              <Chip key={option} type="checkbox" name="services" value={option} checked={services.includes(option)} onChange={() => toggle(services, setServices, option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{f.interests}</span>
          <div className="flex flex-wrap gap-2">
            {f.interestOptions.map((option) => (
              <Chip key={option} type="checkbox" name="interests" value={option} checked={interests.includes(option)} onChange={() => toggle(interests, setInterests, option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{f.style}</span>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {f.styleOptions.map((option) => {
              const checked = style === option.title;
              return (
                <label
                  key={option.title}
                  className={`flex cursor-pointer items-start gap-2.5 rounded-[14px] p-3.5 text-sm ${
                    checked ? "border-[1.5px] border-cobalt bg-glaze-tint" : "border border-field-line"
                  }`}
                >
                  <input type="radio" name="travelStyle" value={option.title} checked={checked} onChange={() => setStyle(option.title)} className="mt-1 accent-cobalt" />
                  <span>
                    <b className="block font-semibold">{option.title}</b>
                    <span className="text-ink-soft">{option.text}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          {f.notes}
          <textarea name="notes" rows={4} placeholder={f.notesPlaceholder} defaultValue={params.get("help") ?? ""} className="field" />
        </label>
      </Fieldset>

      <Fieldset n={4} legend={sections.sectionContact}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.name}
            <input name="name" autoComplete="name" className="field" required />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.email}
            <input type="email" name="email" autoComplete="email" className="field" required />
          </label>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{f.chatVia}</span>
          <div className="flex flex-wrap gap-2">
            {f.chatOptions.map((option) => (
              <Chip key={option} type="radio" name="chatVia" value={option} checked={chatVia === option} onChange={() => setChatVia(option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          {f.handle}
          <input name="handle" placeholder={f.handlePlaceholder} className="field" />
        </label>
        {/* Honeypot: hidden from people, bots tend to fill it in */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <label className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input type="checkbox" name="consent" className="mt-0.5 h-5 w-5 shrink-0 accent-cobalt" required />
          <span>
            {f.consent} <a href={privacyHref}>→</a>
          </span>
        </label>
      </Fieldset>

      {(status === "invalid" || status === "error") && (
        <p role="alert" className="m-0 rounded-xl border-2 border-error bg-white p-4 text-sm text-error">
          {status === "invalid" ? f.errorRequired : f.errorSend}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-[52px] rounded-full bg-cobalt px-8 text-[17px] font-semibold text-white hover:bg-cobalt-deep disabled:opacity-60"
        >
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
