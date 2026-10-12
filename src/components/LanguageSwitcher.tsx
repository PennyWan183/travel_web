"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const languages = [
  { code: "en", short: "EN", label: "English" },
  { code: "id", short: "ID", label: "Bahasa Indonesia" },
  { code: "ja", short: "日本語", label: "日本語" },
  { code: "ko", short: "한국어", label: "한국어" },
  { code: "zh", short: "中文", label: "中文" },
];

/** Language menu: switches language while staying on the same page. */
export function LanguageSwitcher({ current, label }: { current: string; label: string }) {
  const pathname = usePathname() ?? `/${current}`;
  const rest = pathname.replace(/^\/(en|id|ja|ko|zh)(?=\/|$)/, "");
  const menu = useRef<HTMLDetailsElement>(null);
  const active = languages.find((l) => l.code === current) ?? languages[0];

  // Close when clicking outside or pressing Escape.
  useEffect(() => {
    const close = (e: Event) => {
      const el = menu.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Node)) el.open = false;
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <details ref={menu} className="relative">
      <summary
        aria-label={label}
        className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-full border border-glaze-line px-3 text-sm whitespace-nowrap text-cobalt sm:gap-2 sm:px-4 [&::-webkit-details-marker]:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        <span className="font-semibold">{active.short}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <ul className="absolute right-0 z-30 m-0 mt-2 min-w-[190px] list-none rounded-2xl border border-glaze-line bg-white p-1.5 shadow-[0_8px_24px_rgba(31,60,136,0.12)]">
        {languages.map((lang) => {
          const isActive = lang.code === current;
          return (
            <li key={lang.code}>
              <Link
                href={`/${lang.code}${rest}`}
                hrefLang={lang.code}
                lang={lang.code}
                aria-current={isActive ? "true" : undefined}
                onClick={() => menu.current && (menu.current.open = false)}
                className={`flex min-h-11 items-center rounded-xl px-3.5 no-underline ${
                  isActive ? "bg-glaze-tint font-semibold text-cobalt-deep" : "text-ink hover:bg-glaze-tint"
                }`}
              >
                {lang.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
