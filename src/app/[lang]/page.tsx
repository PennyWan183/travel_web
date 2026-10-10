import Link from "next/link";
import { cities } from "@/content/cities";
import { getDictionary, getLocale, href, pick } from "@/i18n";
import { ContactButtons } from "@/components/ContactButtons";
import { CityGrid } from "@/components/CityGrid";
import { StepSeal, WaveBand } from "@/components/Motifs";
import { QuickRequest } from "@/components/QuickRequest";
import { Eyebrow, Footer, Header } from "@/components/SiteChrome";

export default async function HomePage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const h = dict.home;

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        {/* Hero */}
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pt-16 pb-20">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <h1 className="m-0 font-serif text-[40px] leading-[1.12] font-normal sm:text-[56px]">{h.title}</h1>
            <p className="m-0 max-w-[32em] text-lg leading-[1.7] text-ink-soft">{h.lead}</p>
            <ContactButtons dict={dict} />
          </div>
          <div className="min-w-0 flex-[1_1_380px]">
            <QuickRequest
              dict={dict}
              locale={locale}
              title={h.formTitle}
              cities={cities.map((c) => pick(c.name, locale))}
            />
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-glaze-soft bg-white px-6 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
            <h2 className="m-0 text-center font-serif text-[38px] font-normal">{h.howTitle}</h2>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8 p-0">
              {h.steps.map((step, i) => (
                <li key={step.title} className="flex flex-col items-center gap-3 text-center">
                  <StepSeal n={i + 1} />
                  <h3 className="m-0 text-lg font-semibold">{step.title}</h3>
                  <p className="m-0 leading-relaxed text-ink-soft">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="m-0 text-center">
              <Link href={href(locale, "/how-it-works")}>{dict.nav.how} →</Link>
            </p>
          </div>
        </section>

        {/* Why us */}
        <section className="mx-auto max-w-[1200px] px-6 pt-18 pb-10">
          <div className="overflow-hidden rounded-[28px] bg-cobalt text-white">
            <WaveBand light />
            <div className="flex flex-col gap-7 px-6 pt-9 pb-12 sm:px-12">
              <h2 className="m-0 font-serif text-[32px] font-normal">{h.whyTitle}</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7">
                {h.why.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <h3 className="m-0 text-[17px] font-semibold">{item.title}</h3>
                    <p className="m-0 leading-relaxed text-[#D5DEF2]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-9 px-6 pt-14 pb-24">
          <div className="flex flex-col items-center gap-2.5 text-center">
            <h2 className="m-0 font-serif text-[38px] font-normal">{h.whereTitle}</h2>
            <Link href={href(locale, "/request")} className="font-medium">
              {h.askAnyCity}
            </Link>
          </div>
          <CityGrid locale={locale} ourTeam={dict.common.ourTeam} partner={dict.common.localPartner} somewhereElse={h.somewhereElse} somewhereElseText={h.somewhereElseText} />
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
