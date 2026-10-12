import Link from "next/link";
import type { Route } from "@/content/routes";
import { href, pick, type Dictionary, type Locale } from "@/i18n";
import { PhotoSlot } from "./Motifs";

/** Card linking to a journey page. */
export function RouteCard({ route, dict, locale }: { route: Route; dict: Dictionary; locale: Locale }) {
  return (
    <Link
      href={href(locale, `/journeys/${route.slug}`)}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-glaze-soft bg-white text-ink no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(31,60,136,0.10)]"
    >
      <PhotoSlot src={route.image} label={pick(route.heroPhoto, locale)} className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col gap-2.5 p-5.5">
        <div className="flex flex-wrap gap-1.5">
          {route.seasons.map((s) => (
            <span key={s} className="rounded-full border border-glaze-line px-2.5 py-0.5 text-xs text-cobalt">
              {dict.journeys.seasons[s]}
            </span>
          ))}
        </div>
        <h3 className="m-0 font-serif text-[21px] leading-snug font-semibold group-hover:text-cobalt">{pick(route.name, locale)}</h3>
        <p className="m-0 flex-1 leading-relaxed text-ink-soft">{pick(route.tagline, locale)}</p>
        <span className="text-sm text-cobalt-mid">{pick(route.facts.length, locale)}</span>
      </div>
    </Link>
  );
}
