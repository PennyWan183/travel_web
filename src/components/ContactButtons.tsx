import { kakaoLink, whatsappLink } from "@/config/site";
import type { Dictionary } from "@/i18n";

/** WhatsApp + KakaoTalk buttons. `onDark` for use on the cobalt panels. */
export function ContactButtons({ dict, onDark = false }: { dict: Dictionary; onDark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappLink()}
        className={`inline-flex min-h-12 items-center rounded-full px-5 font-medium no-underline ${
          onDark
            ? "border-[1.5px] border-white text-white hover:bg-white/10 hover:text-white"
            : "border-[1.5px] border-cobalt text-cobalt hover:bg-glaze-tint"
        }`}
      >
        {dict.common.whatsapp}
      </a>
      <a
        href={kakaoLink()}
        className="inline-flex min-h-12 items-center rounded-full bg-kakao px-5 font-medium text-ink no-underline hover:text-ink hover:brightness-95"
      >
        {dict.common.kakao}
      </a>
    </div>
  );
}
