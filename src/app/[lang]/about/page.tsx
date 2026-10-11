import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { getDictionary, getLocale, href } from "@/i18n";
import { PhotoSlot } from "@/components/Motifs";
import { TeamScene } from "@/components/TeamScene";
import { CtaPanel, Eyebrow, Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.about };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const a = dict.about;

  return (
    <>
      <Header dict={dict} locale={locale} active="about" />
      <main>
        <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 py-18">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow>{a.eyebrow}</Eyebrow>
            <h1 className="m-0 font-serif text-[38px] leading-[1.15] font-normal sm:text-[50px]">{a.title}</h1>
            <p className="m-0 text-lg leading-[1.7] text-ink-soft">{a.story}</p>
          </div>
          <PhotoSlot label="Team photo by West Lake" className="tile-frame h-[380px] min-w-0 flex-[1_1_380px] rounded-[20px]" />
        </section>

        <section className="border-y border-glaze-soft bg-white px-6 py-20">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-6">
            <h2 className="m-0 text-center font-serif text-[36px] font-normal">{a.teamTitle}</h2>
            <TeamScene
              title={a.teamTitle}
              hint={a.teamHint}
              labels={a.peopleLabels}
              members={(["penny", "holiday", "cassie"] as const).map((id) => ({
                id,
                name: id[0].toUpperCase() + id.slice(1),
                ...a.people[id],
              }))}
            />
          </div>
        </section>

        <section className="mx-auto flex max-w-[1200px] flex-wrap gap-12 px-6 py-20">
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-3.5">
            <h2 className="m-0 font-serif text-[34px] font-normal">{a.partnersTitle}</h2>
            <p className="m-0 leading-[1.7] text-ink-soft">{a.partnersLead}</p>
          </div>
          <ol className="m-0 grid min-w-0 flex-[2_1_520px] list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {a.checks.map((check, i) => (
              <li key={check.title} className="flex flex-col gap-2 rounded-2xl border border-glaze-soft bg-white p-5.5">
                <span className="font-serif text-xl text-cobalt">0{i + 1}</span>
                <b className="font-semibold">{check.title}</b>
                <span className="leading-relaxed text-ink-soft">{check.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <div className="rounded-3xl border-[1.5px] border-cobalt bg-white p-2">
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 rounded-[18px] border border-glaze-line p-8">
              {[
                [a.company, site.companyName, `${site.companyCity}, China`],
                [a.licence, site.licenseNumber, ""],
                [a.insurance, a.insuranceText, site.insurer],
                [a.contact, site.email, "WhatsApp · KakaoTalk"],
              ].map(([label, value, sub]) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <dt className="text-[13px] tracking-[0.12em] text-cobalt-mid uppercase">{label}</dt>
                  <dd className="m-0 font-semibold">{value}</dd>
                  {sub && <dd className="m-0 text-ink-soft">{sub}</dd>}
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CtaPanel>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="m-0 font-serif text-[30px] font-normal">{a.ctaTitle}</h2>
            <Link
              href={href(locale, "/request")}
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-cobalt no-underline hover:bg-glaze-tint"
            >
              {dict.common.sendRequest}
            </Link>
          </div>
        </CtaPanel>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
