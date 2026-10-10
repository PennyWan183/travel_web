import type { Localized } from "@/i18n";

/**
 * Destinations shown on the site.
 *
 * - kind "home": our own team guides here (Hangzhou, Shanghai)
 * - kind "partner": a checked local partner guides here
 * - a city without `page` appears in the destination grid only; its card
 *   opens the request form with the city pre-filled.
 *
 * Text fields take { en, ko, zh }. Missing ko / zh falls back to English.
 * To add a photo, put the file in /public/images/cities/ and set `image`.
 */
export type CityKind = "home" | "partner";

export type CityIdea = {
  duration: Localized;
  title: Localized;
  text: Localized;
  photo: Localized; // describes the photo to shoot or buy for this slot
  image?: string;
};

export type CityPage = {
  intro: Localized;
  heroPhoto: Localized;
  facts: { stay: Localized; gettingThere: Localized; pairsWith: Localized; arrangedBy: Localized };
  ideas: CityIdea[];
  faq: { q: Localized; a: Localized }[];
  /** Home cities: the guides on our own team */
  team?: { name: string; languages: string; themes: Localized }[];
  /** Partner cities: the agency we work with */
  partnerName?: string;
  partnerText?: Localized;
};

export type City = {
  slug: string;
  name: Localized;
  chineseName: string;
  kind: CityKind;
  image?: string;
  page?: CityPage;
};

export const cities: City[] = [
  {
    slug: "shanghai",
    name: { en: "Shanghai", ko: "상하이", zh: "上海" },
    chineseName: "上海",
    kind: "home",
  },
  {
    slug: "hangzhou",
    name: { en: "Hangzhou", ko: "항저우", zh: "杭州" },
    chineseName: "杭州",
    kind: "home",
    page: {
      intro: {
        en: "West Lake, tea hills and quiet temples, an hour from Shanghai by high-speed train. This is where our team lives, so we plan and guide your days here ourselves.",
        ko: "서호, 차밭, 고요한 사찰. 상하이에서 고속철로 약 1시간. 저희 팀이 사는 곳이라 일정 기획부터 안내까지 직접 합니다.",
        zh: "西湖、茶山和静谧的寺院，距上海高铁约一小时。这是我们团队生活的城市，所以这里的行程由我们亲自规划、亲自带领。",
      },
      heroPhoto: { en: "West Lake with Leifeng Pagoda at dusk", ko: "해 질 녘 서호와 뇌봉탑", zh: "黄昏的西湖与雷峰塔" },
      facts: {
        stay: { en: "2–4 days", ko: "2–4일", zh: "2–4 天" },
        gettingThere: {
          en: "About 1 hour by high-speed rail from Shanghai, or fly into Xiaoshan",
          ko: "상하이에서 고속철로 약 1시간, 또는 샤오산 공항",
          zh: "从上海乘高铁约 1 小时，或飞抵萧山机场",
        },
        pairsWith: { en: "Shanghai · Wuzhen · Suzhou", ko: "상하이 · 우전 · 쑤저우", zh: "上海 · 乌镇 · 苏州" },
        arrangedBy: { en: "Our own Hangzhou team", ko: "저희 항저우 직영 팀", zh: "我们自己的杭州团队" },
      },
      ideas: [
        {
          duration: { en: "Half day", ko: "반나절", zh: "半天" },
          title: { en: "West Lake on foot and by boat", ko: "걷고 배 타며 즐기는 서호", zh: "步行加游船游西湖" },
          text: {
            en: "Walk the causeways before the crowds, then cross the lake by boat with the stories behind each view.",
            ko: "인파가 몰리기 전 제방을 걷고, 배를 타고 호수를 건너며 풍경 속 이야기를 들어보세요.",
            zh: "趁人少走一走苏堤白堤，再乘船游湖，听每处风景背后的故事。",
          },
          photo: { en: "Su Causeway in the morning", ko: "아침의 소제", zh: "清晨的苏堤" },
        },
        {
          duration: { en: "Half day", ko: "반나절", zh: "半天" },
          title: { en: "Longjing tea village", ko: "룽징 차 마을", zh: "龙井茶村" },
          text: {
            en: "Walk the tea hills, meet a tea family and taste Dragon Well tea where it grows.",
            ko: "차밭을 걷고, 차 농가를 만나고, 룽징차를 산지에서 맛보세요.",
            zh: "漫步茶山，拜访茶农人家，在产地品一杯龙井。",
          },
          photo: { en: "Longjing tea terraces", ko: "룽징 차밭", zh: "龙井茶园" },
        },
        {
          duration: { en: "Half day", ko: "반나절", zh: "半天" },
          title: { en: "Lingyin Temple and Feilai Feng", ko: "영은사와 비래봉", zh: "灵隐寺与飞来峰" },
          text: {
            en: "Stone carvings in the cliffs and one of China's best-known Buddhist temples, explained in your language.",
            ko: "절벽의 석각과 중국의 대표적인 불교 사찰을 한국어로 들어보세요.",
            zh: "崖壁石刻与中国最知名的佛寺之一，用你的语言讲给你听。",
          },
          photo: { en: "Lingyin Temple", ko: "영은사", zh: "灵隐寺" },
        },
        {
          duration: { en: "Day trip", ko: "당일치기", zh: "一日游" },
          title: { en: "Water town day trip", ko: "수향마을 당일 여행", zh: "水乡一日游" },
          text: {
            en: "Stone bridges and canals in Wuzhen or Xitang, with a private driver there and back.",
            ko: "우전 또는 시탕의 돌다리와 운하, 전용 차량으로 왕복.",
            zh: "乌镇或西塘的石桥与河道，专车往返。",
          },
          photo: { en: "Wuzhen canals at night", ko: "밤의 우전 운하", zh: "夜色中的乌镇" },
        },
        {
          duration: { en: "Evening", ko: "저녁", zh: "傍晚" },
          title: { en: "Old streets and a Hangzhou dinner", ko: "옛 거리와 항저우 요리", zh: "老街漫步与杭帮菜晚餐" },
          text: {
            en: "Stroll the old imperial street, then sit down to local dishes we'd order for our own family.",
            ko: "옛 황성 거리를 거닐고, 저희 가족에게 시켜줄 법한 현지 요리를 맛보세요.",
            zh: "逛逛南宋御街，再坐下来吃一顿我们会给家人点的杭帮菜。",
          },
          photo: { en: "Southern Song Imperial Street", ko: "남송 어가", zh: "南宋御街" },
        },
      ],
      faq: [
        {
          q: { en: "Can you pick us up in Shanghai?", ko: "상하이에서 픽업해 주실 수 있나요?", zh: "可以在上海接我们吗？" },
          a: {
            en: "Yes. We can meet you at Pudong or Hongqiao and bring you to Hangzhou by private car or high-speed train.",
            ko: "네. 푸둥 또는 훙차오에서 만나 전용 차량이나 고속철로 항저우까지 모십니다.",
            zh: "可以。我们可以在浦东或虹桥接你，乘专车或高铁到杭州。",
          },
        },
        {
          q: { en: "When is the best time to visit?", ko: "언제 가는 게 가장 좋나요?", zh: "什么季节去最好？" },
          a: { en: "[YOUR ADVICE ON SEASONS, e.g. spring tea season and autumn.]" },
        },
        {
          q: { en: "How do I pay?", ko: "결제는 어떻게 하나요?", zh: "怎么付款？" },
          a: {
            en: "By card or PayPal, to us. A deposit confirms your trip and the rest is due before you travel.",
            ko: "카드 또는 PayPal로 저희에게 결제합니다. 예약금으로 확정하고 잔금은 출발 전에 결제합니다.",
            zh: "用银行卡或 PayPal 付给我们。定金确认行程，尾款出发前付清。",
          },
        },
      ],
      team: [
        { name: "[Guide name]", languages: "English · 中文", themes: { en: "Tea hills · Old Hangzhou", ko: "차밭 · 옛 항저우", zh: "茶山 · 老杭州" } },
        { name: "[Guide name]", languages: "한국어 · 中文", themes: { en: "Families · Photo spots", ko: "가족 여행 · 포토 스팟", zh: "亲子 · 拍照点" } },
        { name: "[Guide name]", languages: "English · 한국어", themes: { en: "Food walks · Water towns", ko: "미식 산책 · 수향마을", zh: "美食漫步 · 水乡" } },
      ],
    },
  },
  {
    slug: "xian",
    name: { en: "Xi'an", ko: "시안", zh: "西安" },
    chineseName: "西安",
    kind: "partner",
    page: {
      intro: {
        en: "The ancient capital at the start of the Silk Road. We arrange your guide through a checked local partner in Xi'an, and stay with you on chat for the whole trip.",
        ko: "실크로드의 출발점이었던 고도. 시안의 검증된 현지 파트너를 통해 가이드를 연결하고, 여행 내내 채팅으로 함께합니다.",
        zh: "丝绸之路起点的千年古都。我们通过经过核验的西安当地合作方为你安排向导，并全程在线陪伴。",
      },
      heroPhoto: { en: "Terracotta Army", ko: "병마용", zh: "兵马俑" },
      facts: {
        stay: { en: "2–3 days", ko: "2–3일", zh: "2–3 天" },
        gettingThere: {
          en: "High-speed rail from Beijing or Shanghai, or fly in",
          ko: "베이징·상하이에서 고속철, 또는 항공",
          zh: "从北京或上海乘高铁，或乘飞机",
        },
        pairsWith: { en: "Beijing · Chengdu", ko: "베이징 · 청두", zh: "北京 · 成都" },
        arrangedBy: { en: "Our Xi'an partner, with us on chat", ko: "시안 파트너 + 저희 채팅 지원", zh: "西安合作方，我们在线陪同" },
      },
      ideas: [
        {
          duration: { en: "Half day", ko: "반나절", zh: "半天" },
          title: { en: "The Terracotta Army, explained", ko: "병마용, 제대로 알고 보기", zh: "听懂兵马俑" },
          text: {
            en: "Skip the confusion at the gates. Your guide handles tickets and tells the story behind the pits.",
            ko: "입구에서 헤맬 필요 없이, 가이드가 티켓을 처리하고 갱도 뒤의 이야기를 들려줍니다.",
            zh: "不用在门口手忙脚乱。向导搞定门票，并讲述俑坑背后的故事。",
          },
          photo: { en: "Terracotta warriors, Pit 1", ko: "병마용 1호갱", zh: "兵马俑一号坑" },
        },
        {
          duration: { en: "Afternoon to evening", ko: "오후~저녁", zh: "下午到晚上" },
          title: { en: "City Wall and a Muslim Quarter food walk", ko: "성벽과 회족 거리 미식 산책", zh: "城墙与回民街美食漫步" },
          text: {
            en: "Cycle the old wall, then eat your way through the lanes with someone who knows what to order.",
            ko: "옛 성벽을 자전거로 달리고, 뭘 시켜야 하는지 아는 사람과 골목 맛집을 누벼보세요.",
            zh: "在古城墙上骑行，再跟着懂行的人一路吃遍小巷。",
          },
          photo: { en: "City Wall at sunset", ko: "해 질 녘 성벽", zh: "日落时的城墙" },
        },
        {
          duration: { en: "Full day", ko: "하루", zh: "一天" },
          title: { en: "Museums, pagodas and Tang-dynasty Xi'an", ko: "박물관, 탑, 그리고 당나라의 시안", zh: "博物馆、古塔与大唐西安" },
          text: {
            en: "The Shaanxi History Museum and the Big Wild Goose Pagoda, with reservations sorted in advance.",
            ko: "산시 역사박물관과 대안탑, 예약은 미리 해결해 드립니다.",
            zh: "陕西历史博物馆和大雁塔，预约提前帮你搞定。",
          },
          photo: { en: "Big Wild Goose Pagoda", ko: "대안탑", zh: "大雁塔" },
        },
      ],
      faq: [
        {
          q: { en: "Can I combine Xi'an with other cities?", ko: "시안과 다른 도시를 함께 여행할 수 있나요?", zh: "西安可以和其他城市一起安排吗？" },
          a: {
            en: "Yes. Tell us your full route and we'll arrange guides and train tickets for each stop.",
            ko: "네. 전체 일정을 알려주시면 도시마다 가이드와 기차표를 준비해 드립니다.",
            zh: "可以。告诉我们完整路线，我们为每一站安排向导和火车票。",
          },
        },
        {
          q: { en: "Do I need a visa to visit?", ko: "비자가 필요한가요?", zh: "需要签证吗？" },
          a: {
            en: "It depends on your passport. Ask us and we'll point you to the current official rules.",
            ko: "여권에 따라 다릅니다. 문의하시면 최신 공식 규정을 안내해 드립니다.",
            zh: "取决于你的护照。问我们，我们会告诉你最新的官方规定。",
          },
        },
      ],
      partnerName: "[PARTNER AGENCY]",
      partnerText: {
        en: "In Xi'an we work with {partner}, a licensed local agency. You book and pay with us; they provide your guide on the ground.",
        ko: "시안에서는 정식 허가를 받은 현지 여행사 {partner}와 함께합니다. 예약과 결제는 저희와, 현장 가이드는 파트너가 담당합니다.",
        zh: "在西安，我们与持证当地旅行社 {partner} 合作。你在我们这里预订和付款，他们负责现场向导。",
      },
    },
  },
  {
    slug: "beijing",
    name: { en: "Beijing", ko: "베이징", zh: "北京" },
    chineseName: "北京",
    kind: "partner",
  },
  {
    slug: "chengdu",
    name: { en: "Chengdu", ko: "청두", zh: "成都" },
    chineseName: "成都",
    kind: "partner",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
