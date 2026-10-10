"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
];

/** Switches language while staying on the same page. */
export function LanguageSwitcher({ current, label }: { current: string; label: string }) {
  const pathname = usePathname() ?? `/${current}`;
  const rest = pathname.replace(/^\/(en|ko|zh)(?=\/|$)/, "");

  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-glaze-line text-sm">
      {languages.map((lang) => {
        const active = lang.code === current;
        return (
          <Link
            key={lang.code}
            href={`/${lang.code}${rest}`}
            hrefLang={lang.code}
            aria-current={active ? "true" : undefined}
            className={`flex min-h-11 items-center px-3 no-underline first:rounded-l-full last:rounded-r-full ${
              active ? "bg-glaze-tint font-semibold text-cobalt-deep" : "text-cobalt"
            }`}
          >
            {lang.label}
          </Link>
        );
      })}
    </nav>
  );
}
