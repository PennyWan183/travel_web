import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoute, routes } from "@/content/routes";
import { getDictionary, getLocale, href, pick } from "@/i18n";
import { fmt } from "@/lib/format";
import { PhotoSlot, StepSeal } from "@/components/Motifs";
import { QuickRequest } from "@/components/QuickRequest";
import { RouteCard } from "@/components/RouteCard";
import { CtaPanel, Footer, Header } from "@/components/SiteChrome";

export async function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/journeys/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  const locale = await getLocale();
  return route ? { title: pick(route.name, locale), description: pick(route.tagline, locale) } : {};
}

const check = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-cobalt">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.5 2.5L16 9.5" />
  </svg>
);

export default async function JourneyPage({ params }: PageProps<"/[lang]/journeys/[slug]">) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const locale = await getLocale();
  const dict = await getDictionary();
  const r = dict.route;
  const name = pick(route.name, locale);
  const others = routes.filter((x) => x.slug !== route.slug).slice(0, 3);

  const facts = [
    [r.bestTime, route.facts.bestTime],
    [r.length, route.facts.length],
    [r.level, route.facts.level],
    [r.startFrom, route.facts.startFrom],
  ] as const;

  return (
    <>
      <Header dict={dict} locale={locale} active="journeys" />
      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-6 pt-5 text-sm text-ink-soft">
          <Link href={href(locale, "/journeys")} className="no-underline">
            {dict.nav.journeys}
          </Link>{" "}
          / {dict.journeys.themes[route.theme].title}
        </nav>

        {/* Hero */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pt-8 pb-16">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {route.seasons.map((s) => (
                <span key={s} className="rounded-full bg-glaze-tint px-3 py-1.5 text-[13px] font-medium text-cobalt-deep">
                  {dict.journeys.seasons[s]}
                </span>
              ))}
            </div>
            <h1 className="m-0 font-serif text-[38px] leading-[1.12] font-normal sm:text-[52px]">{name}</h1>
            <p className="m-0 font-serif text-xl leading-snug text-cobalt">{pick(route.tagline, locale)}</p>
            <p className="m-0 max-w-[34em] text-lg leading-[1.7] text-ink-soft">{pick(route.intro, locale)}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={href(locale, `/request?dest=${encodeURIComponent(name)}`)}
                className="inline-flex min-h-12 items-center rounded-full bg-cobalt px-6 font-semibold text-white no-underline hover:bg-cobalt-deep hover:text-white"
              >
                {r.plan}
              </Link>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-cobalt px-5 font-medium text-cobalt no-underline"
              >
                {dict.common.askQuestion}
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] justify-center">
            <PhotoSlot src={route.image} label={pick(route.heroPhoto, locale)} className="tile-frame aspect-[4/5] w-full max-w-[420px] rounded-[20px]" />
          </div>
        </section>

        {/* Quick facts */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {facts.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1.5 rounded-2xl border border-glaze-soft bg-white p-5">
                <dt className="text-[13px] tracking-[0.12em] text-cobalt-mid uppercase">{label}</dt>
                <dd className="m-0 leading-snug font-semibold">{pick(value, locale)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Highlights */}
        <section className="border-y border-glaze-soft bg-white px-6 py-18">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
            <h2 className="m-0 font-serif text-[36px] font-normal">{r.highlightsTitle}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
              {route.highlights.map((h) => (
                <article key={h.title.en} className="flex flex-col overflow-hidden rounded-[20px] border border-glaze-soft bg-porcelain">
                  <PhotoSlot src={h.image} label={pick(h.photo, locale)} className="h-[190px] w-full" />
                  <div className="flex flex-col gap-2 p-5">
                    <h3 className="m-0 text-[19px] font-semibold">{pick(h.title, locale)}</h3>
                    <p className="m-0 leading-relaxed text-ink-soft">{pick(h.text, locale)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap gap-12 px-6 py-18">
          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3 lg:sticky lg:top-8 lg:self-start">
            <h2 className="m-0 font-serif text-[36px] font-normal">{r.itineraryTitle}</h2>
            <p className="m-0 leading-[1.7] text-ink-soft">{r.itineraryLead}</p>
          </div>
          <ol className="m-0 flex min-w-0 flex-[2_1_520px] list-none flex-col gap-0 p-0">
            {route.itinerary.map((day, i) => (
              <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                {i < route.itinerary.length - 1 && (
                  <span aria-hidden="true" className="absolute top-12 bottom-0 left-[23px] w-px bg-glaze-line" />
                )}
                <StepSeal n={i + 1} size={48} filled={i === 0} />
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-[13px] tracking-[0.12em] text-cobalt-mid uppercase">{fmt(r.day, { n: String(i + 1) })}</span>
                  <h3 className="m-0 text-lg font-semibold">{pick(day.title, locale)}</h3>
                  <p className="m-0 leading-relaxed text-ink-soft">{pick(day.text, locale)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {route.addOn && (
          <section className="mx-auto max-w-[1200px] px-6 pb-18">
            <div className="rounded-3xl border-[1.5px] border-cobalt bg-white p-2">
              <div className="flex flex-col gap-3 rounded-[18px] border border-glaze-line p-7">
                <span className="text-[13px] tracking-[0.12em] text-cobalt-mid uppercase">{r.addOnTitle}</span>
                <h2 className="m-0 font-serif text-[26px] font-normal text-cobalt">{pick(route.addOn.title, locale)}</h2>
                <p className="m-0 max-w-[48em] leading-[1.7] text-ink-soft">{pick(route.addOn.text, locale)}</p>
              </div>
            </div>
          </section>
        )}

        {/* We handle + good to know */}
        <section className="border-y border-glaze-soft bg-white px-6 py-18">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
              <h2 className="m-0 font-serif text-[30px] font-normal">{r.handleTitle}</h2>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {route.weHandle.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 leading-relaxed">
                    {check}
                    {pick(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
              <h2 className="m-0 font-serif text-[30px] font-normal">{r.goodToKnowTitle}</h2>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {route.goodToKnow.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    {pick(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-18">
          <h2 className="m-0 font-serif text-[32px] font-normal">{r.faqTitle}</h2>
          {route.faq.map((item) => (
            <details key={item.q.en} className="rounded-2xl border border-glaze-soft bg-white px-5.5 py-4.5">
              <summary className="cursor-pointer font-semibold">{pick(item.q, locale)}</summary>
              <p className="m-0 mt-3 leading-[1.7] text-ink-soft">{pick(item.a, locale)}</p>
            </details>
          ))}
        </section>

        <CtaPanel>
          <QuickRequest dict={dict} locale={locale} variant="band" destination={name} title={fmt(r.planTitle, { route: name })} />
        </CtaPanel>

        {/* More journeys */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-20">
          <h2 className="m-0 font-serif text-[30px] font-normal">{r.otherTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
            {others.map((o) => (
              <RouteCard key={o.slug} route={o} dict={dict} locale={locale} />
            ))}
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
