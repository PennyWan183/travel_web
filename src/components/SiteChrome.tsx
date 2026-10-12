import Link from "next/link";
import { site } from "@/config/site";
import { href, type Dictionary, type Locale } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { LanternIcon, WaveBand } from "./Motifs";

export type NavKey = "how" | "destinations" | "tips" | "about" | "faq";

export function Header({ dict, locale, active }: { dict: Dictionary; locale: Locale; active?: NavKey }) {
  const items: { key: NavKey; path: string }[] = [
    { key: "how", path: "/how-it-works" },
    { key: "destinations", path: "/destinations" },
    { key: "tips", path: "/tips" },
    { key: "about", path: "/about" },
    { key: "faq", path: "/faq" },
  ];

  return (
    <>
      <header className="relative">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-5">
          <Link href={href(locale)} className="flex items-center gap-3 no-underline">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-cobalt text-cobalt">
              <LanternIcon />
            </span>
            <span className="font-serif text-[21px] font-semibold text-cobalt">{site.name}</span>
          </Link>

          <nav aria-label="Main" className="hidden gap-7 text-[15px] lg:flex">
            {items.map((item) => (
              <Link
                key={item.key}
                href={href(locale, item.path)}
                aria-current={active === item.key ? "page" : undefined}
                className={`no-underline ${active === item.key ? "font-semibold text-cobalt" : "text-ink"}`}
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher current={locale} label={dict.nav.language} />
            </div>
            <Link
              href={href(locale, "/request")}
              className="hidden min-h-11 items-center rounded-full bg-cobalt px-5 text-sm font-semibold text-white no-underline hover:bg-cobalt-deep hover:text-white md:inline-flex"
            >
              {dict.nav.request}
            </Link>
            <MobileMenu
              openLabel={dict.nav.menu}
              closeLabel={dict.nav.close}
              items={[
                ...items.map((item) => ({ href: href(locale, item.path), label: dict.nav[item.key] })),
                { href: href(locale, "/request"), label: dict.nav.request },
              ]}
            />
          </div>
        </div>
        <div className="flex justify-center px-6 pb-4 sm:hidden">
          <LanguageSwitcher current={locale} label={dict.nav.language} />
        </div>
      </header>
      <WaveBand />
    </>
  );
}

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer id="contact" className="mt-auto">
      <WaveBand />
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 pt-7 pb-9 text-sm text-ink-soft">
        <span>
          {site.name}
          {site.licenseNumber && ` · ${dict.footer.licence} ${site.licenseNumber}`}
        </span>
        <span className="flex flex-wrap gap-4">
          <Link href={href(locale, "/privacy")}>{dict.legal.privacyTitle}</Link>
          <Link href={href(locale, "/terms")}>{dict.legal.termsTitle}</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
    </footer>
  );
}

/** Cobalt call-to-action panel with the light wave on top. */
export function CtaPanel({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-20">
      <div className="overflow-hidden rounded-[28px] bg-cobalt text-white">
        <WaveBand light />
        <div className="px-6 pt-8 pb-10 sm:px-12">{children}</div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="m-0 text-[13px] tracking-[0.22em] text-cobalt-mid uppercase">{children}</p>;
}
