import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n";
import { CityGrid } from "@/components/CityGrid";
import { Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.destinations };
}

export default async function DestinationsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Header dict={dict} locale={locale} active="destinations" />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 pt-16 pb-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="m-0 font-serif text-[40px] font-normal sm:text-[48px]">{dict.destinations.title}</h1>
          <p className="m-0 max-w-[40em] text-lg leading-[1.7] text-ink-soft">{dict.destinations.lead}</p>
        </div>
        <CityGrid
          locale={locale}
          ourTeam={dict.destinations.ourTeamNote}
          partner={dict.destinations.partnerNote}
          somewhereElse={dict.home.somewhereElse}
          somewhereElseText={dict.home.somewhereElseText}
        />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
