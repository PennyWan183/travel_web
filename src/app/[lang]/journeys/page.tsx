import type { Metadata } from "next";
import Link from "next/link";
import { routes, themes } from "@/content/routes";
import { getDictionary, getLocale, href } from "@/i18n";
import { CityGrid } from "@/components/CityGrid";
import { RouteCard } from "@/components/RouteCard";
import { Eyebrow, Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.journeys.title, description: dict.journeys.lead };
}

export default async function JourneysPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const j = dict.journeys;

  return (
    <>
      <Header dict={dict} locale={locale} active="journeys" />
      <main>
        <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 pt-16 pb-6 text-center">
          <Eyebrow>{j.eyebrow}</Eyebrow>
          <h1 className="m-0 font-serif text-[40px] leading-[1.15] font-normal sm:text-[52px]">{j.title}</h1>
          <p className="m-0 max-w-[40em] text-lg leading-[1.7] text-ink-soft">{j.lead}</p>
        </section>

        {themes.map((theme) => {
          const list = routes.filter((r) => r.theme === theme);
          return (
            <section key={theme} className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 py-12">
              <div className="flex flex-col gap-2 border-b border-glaze-soft pb-4">
                <h2 className="m-0 font-serif text-[32px] font-normal">{j.themes[theme].title}</h2>
                <p className="m-0 text-[17px] text-ink-soft">{j.themes[theme].text}</p>
              </div>
              {list.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
                  {list.map((route) => (
                    <RouteCard key={route.slug} route={route} dict={dict} locale={locale} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-dashed border-cobalt-mid bg-white p-6">
                  <p className="m-0 max-w-[36em] leading-relaxed text-ink-soft">{j.comingSoon}</p>
                  <Link
                    href={href(locale, "/request")}
                    className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-cobalt px-5 font-medium text-cobalt no-underline hover:bg-glaze-tint"
                  >
                    {dict.common.sendRequest}
                  </Link>
                </div>
              )}
            </section>
          );
        })}

        <section className="border-t border-glaze-soft bg-white px-6 py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="m-0 font-serif text-[32px] font-normal">{j.citiesTitle}</h2>
              <p className="m-0 text-[17px] text-ink-soft">{j.citiesLead}</p>
            </div>
            <CityGrid
              locale={locale}
              ourTeam={dict.destinations.ourTeamNote}
              partner={dict.destinations.partnerNote}
              somewhereElse={dict.home.somewhereElse}
              somewhereElseText={dict.home.somewhereElseText}
            />
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
