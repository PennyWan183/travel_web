import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { href, type Dictionary, type Locale } from "@/i18n";
import { fmt } from "@/lib/format";
import { PhotoSlot } from "./Motifs";

/** Card linking to an Explore China story. `large` is used for the China overview. */
export function ArticleCard({ article, dict, locale, large = false }: { article: ArticleMeta; dict: Dictionary; locale: Locale; large?: boolean }) {
  const e = dict.explore;
  return (
    <Link
      href={href(locale, `/explore/${article.slug}`)}
      className={`group flex overflow-hidden rounded-[20px] border border-glaze-soft bg-white text-ink no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(31,60,136,0.10)] ${
        large ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative ${large ? "md:w-[58%]" : ""}`}>
        <PhotoSlot src={article.cover} label={article.title} className={`w-full ${large ? "aspect-[16/9] md:h-full" : "aspect-[4/3]"}`} />
        {article.video && (
          <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-cobalt shadow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col gap-2.5 ${large ? "justify-center p-7 md:p-10" : "p-5.5"}`}>
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-cobalt-mid">
          {large && <span className="tracking-[0.12em] uppercase">{e.startHere}</span>}
          {article.draft && <span className="rounded-full bg-[#FFF1C9] px-2.5 py-0.5 text-xs font-semibold text-ink">{e.draft}</span>}
        </div>
        <h3 className={`m-0 font-serif leading-snug font-semibold group-hover:text-cobalt ${large ? "text-[30px]" : "text-[21px]"}`}>{article.title}</h3>
        <p className="m-0 flex-1 leading-relaxed text-ink-soft">{article.summary}</p>
        <span className="text-sm text-cobalt-mid">{fmt(e.minRead, { n: String(article.minutes) })}</span>
      </div>
    </Link>
  );
}
