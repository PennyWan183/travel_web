/**
 * Business details used across the site.
 * Replace every value marked TODO before launch.
 */
export const site = {
  name: "Lantern Local",
  url: "https://lanternlocaltours.com",

  // TODO: WhatsApp number in international format, digits only (e.g. "8613800000000")
  whatsappNumber: "",
  // TODO: KakaoTalk channel link, e.g. "https://pf.kakao.com/_xxxx/chat"
  kakaoUrl: "",
  // TODO: public contact email
  email: "lanternlocal@zohomail.com",

  // TODO: legal details shown in the footer and on About
  companyName: "[Company name]",
  companyCity: "[City]",
  licenseNumber: "[Licence no.]",
  insurer: "[Insurer]",

  // TODO: shown on the request form and How it works
  responseTime: "[RESPONSE TIME]",
  supportHours: "[SUPPORT HOURS]",
  depositPercent: "[DEPOSIT %]",
  balanceTiming: "[BALANCE TIMING]",
};

export function whatsappLink(): string {
  return site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "#contact";
}

export function kakaoLink(): string {
  return site.kakaoUrl || "#contact";
}
