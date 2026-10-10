import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { getDictionary, getLocale, href } from "@/i18n";
import { fmt } from "@/lib/format";
import { StepSeal } from "@/components/Motifs";
import { CtaPanel, Eyebrow, Footer, Header } from "@/components/SiteChrome";
import { ContactButtons } from "@/components/ContactButtons";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.how };
}

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const h = dict.how;
  const vars = { supportHours: site.supportHours, depositPercent: site.depositPercent, balanceTiming: site.balanceTiming };

  return (
    <>
      <Header dict={dict} locale={locale} active="how" />
      <main>
        <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 pt-16 pb-10 text-center">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="m-0 max-w-[16em] font-serif text-[38px] leading-[1.15] font-normal sm:text-[52px]">{h.title}</h1>
          <p className="m-0 max-w-[36em] text-lg leading-[1.7] text-ink-soft">{h.lead}</p>
        </section>

        <section className="mx-auto max-w-[880px] px-6 pt-8 pb-18">
          <ol className="m-0 flex list-none flex-col p-0">
            {h.steps.map((step, i) => {
              const last = i === h.steps.length - 1;
              return (
                <li key={step.title} className="flex gap-5 sm:gap-7">
                  <div className="flex shrink-0 flex-col items-center">
                    <StepSeal n={i + 1} size={60} filled={last} />
                    {!last && <span className="min-h-10 w-[1.5px] flex-1 bg-glaze-line" />}
                  </div>
                  <div className={`flex flex-col gap-2 ${last ? "" : "pb-10"}`}>
                    <h2 className="m-0 font-serif text-[26px] font-normal">{step.title}</h2>
                    <p className="m-0 leading-[1.7] text-ink-soft">{step.text}</p>
                    <span className="text-sm text-cobalt-mid">{fmt(step.note, vars)}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="border-y border-glaze-soft bg-white px-6 py-18">
          <div className="mx-auto flex max-w-[1000px] flex-col gap-7">
            <h2 className="m-0 text-center font-serif text-[36px] font-normal">{h.compareTitle}</h2>
            <div className="overflow-x-auto rounded-2xl border border-glaze-soft">
              <table className="w-full min-w-[560px] border-collapse text-[15px]">
                <thead>
                  <tr className="bg-glaze-tint">
                    {h.compareHead.map((cell, i) => (
                      <th key={i} scope="col" className="px-5 py-4 text-left font-semibold text-cobalt">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {h.compareRows.map((row) => (
                    <tr key={row[0]} className="border-t border-glaze-soft">
                      <th scope="row" className="px-5 py-4 text-left font-medium">
                        {row[0]}
                      </th>
                      <td className="px-5 py-4 text-ink-soft">{row[1]}</td>
                      <td className="px-5 py-4 text-ink-soft">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-20">
          <h2 className="m-0 font-serif text-[36px] font-normal">{h.pricingTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {h.pricing.map((card, i) => (
              <div key={card.title} className="flex flex-col gap-3 rounded-[20px] border border-glaze-soft bg-white p-7">
                <h3 className="m-0 text-[19px] font-semibold">{card.title}</h3>
                <p className="m-0 leading-[1.7] text-ink-soft">
                  {fmt(card.text, vars)}
                  {i === 2 && (
                    <>
                      {" "}
                      <Link href={href(locale, "/terms")}>→</Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-ink-soft">
            <span>{h.included}</span>
            <span>{h.notIncluded}</span>
          </div>
        </section>

        <CtaPanel>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="m-0 font-serif text-[30px] font-normal">{h.ctaTitle}</h2>
              <p className="m-0 text-[#D5DEF2]">{h.ctaText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={href(locale, "/request")}
                className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-cobalt no-underline hover:bg-glaze-tint"
              >
                {dict.common.sendRequest}
              </Link>
              <ContactButtons dict={dict} onDark />
            </div>
          </div>
        </CtaPanel>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
