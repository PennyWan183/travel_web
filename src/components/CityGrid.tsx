import Link from "next/link";
import { cities } from "@/content/cities";
import { href, pick, type Locale } from "@/i18n";
import { PhotoSlot } from "./Motifs";

/** Square "tile" cards for each destination. */
export function CityGrid({
  locale,
  ourTeam,
  partner,
  somewhereElse,
  somewhereElseText,
}: {
  locale: Locale;
  ourTeam: string;
  partner: string;
  somewhereElse: string;
  somewhereElseText: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {cities.map((city) => {
        const name = pick(city.name, locale);
        const link = city.page
          ? href(locale, `/destinations/${city.slug}`)
          : href(locale, `/request?dest=${encodeURIComponent(name)}`);
        return (
          <Link key={city.slug} href={link} className="group flex flex-col items-center gap-3 text-center text-ink no-underline">
            <PhotoSlot src={city.image} label={name} className="tile-frame aspect-square w-full max-w-[168px] rounded-[14px]" />
            <span className="font-serif text-[19px] font-semibold group-hover:text-cobalt">{name}</span>
            <span className={`text-[13px] ${city.kind === "home" ? "text-cobalt" : "text-ink-soft"}`}>
              {city.kind === "home" ? ourTeam : partner}
            </span>
          </Link>
        );
      })}
      <Link href={href(locale, "/request")} className="flex flex-col items-center gap-3 text-center text-ink no-underline">
        <span className="flex aspect-square w-full max-w-[168px] items-center justify-center rounded-[14px] border-2 border-dashed border-cobalt-mid font-serif text-[40px] text-cobalt">
          +
        </span>
        <span className="font-serif text-[19px] font-semibold">{somewhereElse}</span>
        <span className="text-[13px] text-ink-soft">{somewhereElseText}</span>
      </Link>
    </div>
  );
}
