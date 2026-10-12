/** Brand motifs from the porcelain design guide. */

export function LanternIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M14 2v3" />
      <rect x="10" y="5" width="8" height="2.5" rx="1" />
      <ellipse cx="14" cy="14.5" rx="8" ry="7" />
      <path d="M14 7.5v14M9 9.5c-1.5 3-1.5 7 0 10M19 9.5c1.5 3 1.5 7 0 10" />
      <rect x="10" y="21.5" width="8" height="2.5" rx="1" />
      <path d="M14 24v3" />
    </svg>
  );
}

const waveCobalt =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='18'%3E%3Cpath d='M0 12 Q9 2 18 12 T36 12' fill='none' stroke='%231F3C88' stroke-width='1.4'/%3E%3Ccircle cx='18' cy='6' r='1.6' fill='%231F3C88'/%3E%3C/svg%3E\")";
const waveLight =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='18'%3E%3Cpath d='M0 12 Q9 2 18 12 T36 12' fill='none' stroke='%23FFFFFF' stroke-opacity='0.5' stroke-width='1.4'/%3E%3C/svg%3E\")";

/** The blue-and-white wave band. Use under the header, above the footer and on dark panels. */
export function WaveBand({ light = false }: { light?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[18px] w-full"
      style={{ backgroundImage: light ? waveLight : waveCobalt, backgroundRepeat: "repeat-x" }}
    />
  );
}

/** Numbered circle used for steps. */
export function StepSeal({ n, filled = false, size = 56 }: { n: number; filled?: boolean; size?: number }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-serif ${
        filled ? "bg-cobalt text-white" : "border-[1.5px] border-cobalt text-cobalt"
      }`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        boxShadow: filled ? undefined : "inset 0 0 0 4px var(--color-porcelain), inset 0 0 0 5px var(--color-glaze-line)",
      }}
    >
      {n}
    </span>
  );
}

/**
 * A photo slot. Shows the image when `src` is set, otherwise a labelled
 * soft porcelain placeholder with the photo's caption until one is added.
 */
export function PhotoSlot({
  src,
  label,
  className = "",
}: {
  src?: string;
  label: string;
  className?: string;
}) {
  if (src) {
    // Framed slots keep the porcelain double ring: the photo sits inside it.
    if (/tile-frame|plate-frame/.test(className)) {
      return (
        <div className={`overflow-hidden p-[8px] ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={label} className="h-full w-full rounded-[inherit] object-cover" />
        </div>
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className={`object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 bg-glaze-tint p-6 text-center text-sm text-cobalt-mid ${className}`}
    >
      <LanternIcon size={30} />
      {label}
    </div>
  );
}
