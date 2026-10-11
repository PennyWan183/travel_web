import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/content/cities";
import { getDictionary, getLocale, href, pick } from "@/i18n";
import { fmt } from "@/lib/format";
import { PhotoSlot } from "@/components/Motifs";
import { QuickRequest } from "@/components/QuickRequest";
import { CtaPanel, Footer, Header } from "@/components/SiteChrome";

export async function generateStaticParams() {
  return cities.filter((c) => c.page).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  const locale = await getLocale();
  return city ? { title: pick(city.name, locale) } : {};
}

const check = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-cobalt">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.5 2.5L16 9.5" />
  </svg>
);

export default async function CityPage({ params }: PageProps<"/[lang]/destinations/[slug]">) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city?.page) notFound();

  const locale = await getLocale();
  const dict = await getDictionary();
  const c = dict.city;
  const page = city.page;
  const name = pick(city.name, locale);
  const isHome = city.kind === "home";

  const facts = [
    [c.suggestedStay, page.facts.stay],
    [c.gettingThere, page.facts.gettingThere],
    [c.pairsWith, page.facts.pairsWith],
    [c.arrangedBy, page.facts.arrangedBy],
  ] as const;

  return (
    <>
      <Header dict={dict} locale={locale} active="destinations" />
      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-6 pt-5 text-sm text-ink-soft">
          <Link href={href(locale, "/destinations")} className="no-underline">
            {dict.nav.destinations}
          </Link>{" "}
          / {name}
        </nav>

        {/* Hero */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pt-8 pb-18">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium ${
                  isHome ? "bg-cobalt text-white" : "bg-glaze-tint text-cobalt-deep"
                }`}
              >
                {isHome ? c.homeBadge : c.partnerBadge}
              </span>
              <span className="text-[13px] text-ink-soft">{c.guidesAvailable}</span>
            </div>
            <h1 className="m-0 font-serif text-[40px] leading-[1.1] font-normal sm:text-[56px]">
              {name}{" "}
              {locale !== "zh" && <span className="text-[0.64em] text-cobalt-mid">{city.chineseName}</span>}
            </h1>
            <p className="m-0 max-w-[32em] text-lg leading-[1.7] text-ink-soft">{pick(page.intro, locale)}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={href(locale, `/request?dest=${encodeURIComponent(name)}`)}
                className="inline-flex min-h-12 items-center rounded-full bg-cobalt px-6 font-semibold text-white no-underline hover:bg-cobalt-deep hover:text-white"
              >
                {fmt(c.plan, { city: name })}
              </Link>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-cobalt px-5 font-medium text-cobalt no-underline"
              >
                {dict.common.askQuestion}
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_360px] justify-center">
            <PhotoSlot src={city.image} label={pick(page.heroPhoto, locale)} className="tile-frame aspect-square w-full max-w-[380px] rounded-[20px]" />
          </div>
        </section>

        {/* Quick facts */}
        <section className="mx-auto max-w-[1200px] px-6 pb-18">
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {facts.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1.5 rounded-2xl border border-glaze-soft bg-white p-5">
                <dt className="text-[13px] tracking-[0.12em] text-cobalt-mid uppercase">{label}</dt>
                <dd className="m-0 leading-snug font-semibold">{pick(value, locale)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Ideas */}
        <section className="border-y border-glaze-soft bg-white px-6 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-9">
            <div className="flex flex-col gap-2.5">
              <h2 className="m-0 font-serif text-[38px] font-normal">{c.ideasTitle}</h2>
              <p className="m-0 text-[17px] text-ink-soft">{c.ideasLead}</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {page.ideas.map((idea) => (
                <article key={idea.title.en} className="flex flex-col overflow-hidden rounded-[20px] border border-glaze-soft bg-porcelain">
                  <PhotoSlot src={idea.image} label={pick(idea.photo, locale)} className="h-[200px] w-full" />
                  <div className="flex flex-col gap-2.5 p-5.5">
                    <span className="self-start rounded-full border border-glaze-line px-2.5 py-1 text-xs text-cobalt">
                      {pick(idea.duration, locale)}
                    </span>
                    <h3 className="m-0 text-[19px] font-semibold">{pick(idea.title, locale)}</h3>
                    <p className="m-0 leading-relaxed text-ink-soft">{pick(idea.text, locale)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Home city: our team. Partner city: what the guide does + who the partner is. */}
        {isHome && page.team ? (
          <section className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-20">
            <div className="flex flex-col gap-2.5">
              <h2 className="m-0 font-serif text-[34px] font-normal">{fmt(c.teamTitle, { city: name })}</h2>
              <p className="m-0 text-[17px] text-ink-soft">{c.teamLead}</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
              {page.team.map((guide, i) => (
                <div key={i} className="flex items-center gap-4.5 rounded-[20px] border border-glaze-soft bg-white p-6">
                  <PhotoSlot label="Photo" className="plate-frame h-24 w-24 shrink-0 p-0 text-xs" />
                  <div className="flex flex-col gap-1">
                    <b className="font-serif text-[19px] font-semibold">{guide.name}</b>
                    <span className="text-sm text-ink-soft">{guide.languages}</span>
                    <span className="text-[13px] text-cobalt-mid">{pick(guide.themes, locale)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="mx-auto flex max-w-[1200px] flex-wrap gap-8 px-6 py-20">
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4.5">
              <h2 className="m-0 font-serif text-[32px] font-normal">{c.takesCareTitle}</h2>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {c.takesCare.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    {check}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 flex-[1_1_400px] rounded-3xl border-[1.5px] border-cobalt bg-white p-2">
              <div className="flex h-full flex-col gap-3.5 rounded-[18px] border border-glaze-line p-7">
                <h2 className="m-0 font-serif text-2xl font-normal text-cobalt">{c.partnerTitle}</h2>
                {page.partnerText && (
                  <p className="m-0 leading-[1.7] text-ink-soft">
                    {fmt(pick(page.partnerText, locale), { partner: page.partnerName ?? "" })}
                  </p>
                )}
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]">
                  {c.partnerChecks.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 pb-20">
          <h2 className="m-0 font-serif text-[32px] font-normal">{fmt(c.faqTitle, { city: name })}</h2>
          {page.faq.map((item) => (
            <details key={item.q.en} className="rounded-2xl border border-glaze-soft bg-white px-5.5 py-4.5">
              <summary className="cursor-pointer font-semibold">{pick(item.q, locale)}</summary>
              <p className="m-0 mt-3 leading-[1.7] text-ink-soft">{pick(item.a, locale)}</p>
            </details>
          ))}
        </section>

        <CtaPanel>
          <QuickRequest dict={dict} locale={locale} variant="band" destination={name} title={fmt(c.planTitle, { city: name })} />
        </CtaPanel>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
