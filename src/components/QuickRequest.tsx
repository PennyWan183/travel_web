import { href, type Dictionary, type Locale } from "@/i18n";

/**
 * Short request form (home page, city pages). It simply opens the full
 * request page with these answers filled in, so it works without JavaScript.
 */
export function QuickRequest({
  dict,
  locale,
  destination,
  variant = "card",
  title,
  cities = [],
}: {
  dict: Dictionary;
  locale: Locale;
  destination?: string;
  variant?: "card" | "band";
  title: string;
  cities?: string[];
}) {
  const f = dict.form;

  if (variant === "band") {
    return (
      <form action={href(locale, "/request")} method="get" className="flex flex-wrap items-end gap-4">
        <h2 className="m-0 mb-1 basis-full font-serif text-[28px] font-normal">{title}</h2>
        <label className="flex flex-[1_1_200px] flex-col gap-1.5 text-sm">
          {f.where}
          <input name="dest" defaultValue={destination} className="field border-none" />
        </label>
        <label className="flex flex-[1_1_180px] flex-col gap-1.5 text-sm">
          {f.arrival}
          <input name="arrival" type="date" className="field border-none" />
        </label>
        <label className="flex flex-[1_1_140px] flex-col gap-1.5 text-sm">
          {f.travellers}
          <input name="travellers" placeholder={f.travellersPlaceholder} className="field border-none" />
        </label>
        <button
          type="submit"
          className="min-h-12 rounded-full bg-white px-6 font-semibold text-cobalt hover:bg-glaze-tint"
        >
          {dict.common.continue}
        </button>
      </form>
    );
  }

  return (
    <form
      action={href(locale, "/request")}
      method="get"
      className="rounded-3xl border-[1.5px] border-cobalt bg-white p-2"
    >
      <div className="flex flex-col gap-4 rounded-[18px] border border-glaze-line p-6 sm:p-7">
        <h2 className="m-0 font-serif text-2xl font-semibold text-cobalt">{title}</h2>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          {f.where}
          <input name="dest" defaultValue={destination} placeholder={f.wherePlaceholder} list="city-suggestions" className="field" />
          {cities.length > 0 && (
            <datalist id="city-suggestions">
              {cities.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          )}
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.arrival}
            <input name="arrival" type="date" className="field" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {f.travellers}
            <input name="travellers" placeholder={f.travellersPlaceholder} className="field" />
          </label>
        </div>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          {f.help}
          <input name="help" placeholder={f.helpPlaceholder} className="field" />
        </label>
        <button
          type="submit"
          className="min-h-12 rounded-full bg-cobalt px-6 text-base font-semibold text-white hover:bg-cobalt-deep"
        >
          {f.submit}
        </button>
        <p className="m-0 text-[13px] text-ink-soft">{dict.home.formNote}</p>
      </div>
    </form>
  );
}
