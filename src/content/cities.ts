import type { Localized } from "@/i18n";

/**
 * Destinations shown on the site.
 *
 * - kind "home": our own team guides here (Hangzhou, Shanghai)
 * - kind "partner": a checked local partner guides here
 * - a city without `page` appears in the destination grid only; its card
 *   opens the request form with the city pre-filled.
 *
 * Text fields take { en, id, ja, ko, zh }. A missing language falls back to English.
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
    image: "/images/cities/shanghai.jpg",
    name: { en: "Shanghai", id: "Shanghai", ja: "上海", ko: "상하이", zh: "上海" },
    chineseName: "上海",
    kind: "home",
  },
  {
    slug: "hangzhou",
    image: "/images/cities/hangzhou.jpg",
    name: { en: "Hangzhou", id: "Hangzhou", ja: "杭州", ko: "항저우", zh: "杭州" },
    chineseName: "杭州",
    kind: "home",
    page: {
      intro: {
        en: "West Lake, tea hills and quiet temples, an hour from Shanghai by high-speed train. This is where our team lives, so we plan and guide your days here ourselves.", id: "Danau Barat, bukit teh, dan kuil-kuil yang tenang, satu jam dari Shanghai dengan kereta cepat. Di sinilah tim kami tinggal, jadi kami sendiri yang merencanakan dan memandu hari-hari Anda di sini.", ja: "西湖、茶畑、静かな寺院。上海から高速鉄道で約1時間。私たちのチームが暮らす街なので、ここでの旅は私たち自身がプランニングし、ご案内します。",
        ko: "서호, 차밭, 고요한 사찰. 상하이에서 고속철로 약 1시간. 저희 팀이 사는 곳이라 일정 기획부터 안내까지 직접 합니다.",
        zh: "西湖、茶山和静谧的寺院，距上海高铁约一小时。这是我们团队生活的城市，所以这里的行程由我们亲自规划、亲自带领。",
      },
      heroPhoto: { en: "West Lake with Leifeng Pagoda at dusk", id: "Danau Barat dan Pagoda Leifeng saat senja", ja: "夕暮れの西湖と雷峰塔", ko: "해 질 녘 서호와 뇌봉탑", zh: "黄昏的西湖与雷峰塔" },
      facts: {
        stay: { en: "2–4 days", id: "2–4 hari", ja: "2〜4日", ko: "2–4일", zh: "2–4 天" },
        gettingThere: {
          en: "About 1 hour by high-speed rail from Shanghai, or fly into Xiaoshan", id: "Sekitar 1 jam dengan kereta cepat dari Shanghai, atau terbang ke Bandara Xiaoshan", ja: "上海から高速鉄道で約1時間、または蕭山空港へ",
          ko: "상하이에서 고속철로 약 1시간, 또는 샤오산 공항",
          zh: "从上海乘高铁约 1 小时，或飞抵萧山机场",
        },
        pairsWith: { en: "Shanghai · Wuzhen · Suzhou", id: "Shanghai · Wuzhen · Suzhou", ja: "上海 · 烏鎮 · 蘇州", ko: "상하이 · 우전 · 쑤저우", zh: "上海 · 乌镇 · 苏州" },
        arrangedBy: { en: "Our own Hangzhou team", id: "Tim Hangzhou kami sendiri", ja: "杭州の自社チーム", ko: "저희 항저우 직영 팀", zh: "我们自己的杭州团队" },
      },
      ideas: [
        {
          duration: { en: "Half day", id: "Setengah hari", ja: "半日", ko: "반나절", zh: "半天" },
          title: { en: "West Lake on foot and by boat", id: "Danau Barat dengan jalan kaki dan perahu", ja: "歩きと船で楽しむ西湖", ko: "걷고 배 타며 즐기는 서호", zh: "步行加游船游西湖" },
          text: {
            en: "Walk the causeways before the crowds, then cross the lake by boat with the stories behind each view.", id: "Susuri tanggul sebelum ramai, lalu seberangi danau dengan perahu sambil mendengar kisah di balik setiap pemandangan.", ja: "混み合う前に堤を歩き、船で湖を渡りながら、それぞれの景色にまつわる物語を。",
            ko: "인파가 몰리기 전 제방을 걷고, 배를 타고 호수를 건너며 풍경 속 이야기를 들어보세요.",
            zh: "趁人少走一走苏堤白堤，再乘船游湖，听每处风景背后的故事。",
          },
          photo: { en: "Boats on West Lake", id: "Perahu di Danau Barat", ja: "西湖の遊覧船", ko: "서호의 유람선", zh: "西湖游船" },
          image: "/images/ideas/hz-su-causeway.jpg",
        },
        {
          duration: { en: "Half day", id: "Setengah hari", ja: "半日", ko: "반나절", zh: "半天" },
          title: { en: "Longjing tea village", id: "Desa teh Longjing", ja: "龍井茶の村", ko: "룽징 차 마을", zh: "龙井茶村" },
          text: {
            en: "Walk the tea hills, meet a tea family and taste Dragon Well tea where it grows.", id: "Jelajahi bukit teh, bertemu keluarga petani teh, dan cicipi teh Longjing langsung di tempat asalnya.", ja: "茶畑を歩き、茶農家を訪ね、産地で龍井茶を味わいます。",
            ko: "차밭을 걷고, 차 농가를 만나고, 룽징차를 산지에서 맛보세요.",
            zh: "漫步茶山，拜访茶农人家，在产地品一杯龙井。",
          },
          photo: { en: "Longjing tea terraces", id: "Kebun teh Longjing", ja: "龍井の茶畑", ko: "룽징 차밭", zh: "龙井茶园" },
          image: "/images/ideas/hz-longjing.jpg",
        },
        {
          duration: { en: "Half day", id: "Setengah hari", ja: "半日", ko: "반나절", zh: "半天" },
          title: { en: "Lingyin Temple and Feilai Feng", id: "Kuil Lingyin dan Feilai Feng", ja: "霊隠寺と飛来峰", ko: "영은사와 비래봉", zh: "灵隐寺与飞来峰" },
          text: {
            en: "Stone carvings in the cliffs and one of China's best-known Buddhist temples, explained in your language.", id: "Ukiran batu di tebing dan salah satu kuil Buddha paling terkenal di Tiongkok, dijelaskan dalam bahasa Inggris.", ja: "崖の石彫と中国有数の仏教寺院を、英語で解説します。",
            ko: "절벽의 석각과 중국의 대표적인 불교 사찰을 한국어로 들어보세요.",
            zh: "崖壁石刻与中国最知名的佛寺之一，用你的语言讲给你听。",
          },
          photo: { en: "Lingyin Temple", id: "Kuil Lingyin", ja: "霊隠寺", ko: "영은사", zh: "灵隐寺" },
          image: "/images/ideas/hz-lingyin.jpg",
        },
        {
          duration: { en: "Day trip", id: "Sehari penuh", ja: "日帰り", ko: "당일치기", zh: "一日游" },
          title: { en: "Water town day trip", id: "Wisata sehari ke kota air", ja: "水郷への日帰り旅", ko: "수향마을 당일 여행", zh: "水乡一日游" },
          text: {
            en: "Stone bridges and canals in Wuzhen or Xitang, with a private driver there and back.", id: "Jembatan batu dan kanal di Wuzhen atau Xitang, pulang-pergi dengan sopir pribadi.", ja: "烏鎮または西塘の石橋と運河へ、専用車で往復。",
            ko: "우전 또는 시탕의 돌다리와 운하, 전용 차량으로 왕복.",
            zh: "乌镇或西塘的石桥与河道，专车往返。",
          },
          photo: { en: "Wuzhen canals at night", id: "Kanal Wuzhen di malam hari", ja: "夜の烏鎮の運河", ko: "밤의 우전 운하", zh: "夜色中的乌镇" },
        },
        {
          duration: { en: "Evening", id: "Sore hari", ja: "夕方", ko: "저녁", zh: "傍晚" },
          title: { en: "Old streets and a Hangzhou dinner", id: "Jalan tua dan makan malam khas Hangzhou", ja: "古い街並みと杭州料理の夕食", ko: "옛 거리와 항저우 요리", zh: "老街漫步与杭帮菜晚餐" },
          text: {
            en: "Stroll the old imperial street, then sit down to local dishes we'd order for our own family.", id: "Susuri jalan kekaisaran kuno, lalu nikmati hidangan lokal yang biasa kami pesan untuk keluarga sendiri.", ja: "南宋の御街を歩き、私たちが家族のために頼むような地元料理を。",
            ko: "옛 황성 거리를 거닐고, 저희 가족에게 시켜줄 법한 현지 요리를 맛보세요.",
            zh: "逛逛南宋御街，再坐下来吃一顿我们会给家人点的杭帮菜。",
          },
          photo: { en: "Southern Song Imperial Street", id: "Jalan Kekaisaran Song Selatan", ja: "南宋御街", ko: "남송 어가", zh: "南宋御街" },
        },
      ],
      faq: [
        {
          q: { en: "Can you pick us up in Shanghai?", id: "Bisakah menjemput kami di Shanghai?", ja: "上海まで迎えに来てもらえますか？", ko: "상하이에서 픽업해 주실 수 있나요?", zh: "可以在上海接我们吗？" },
          a: {
            en: "Yes. We can meet you at Pudong or Hongqiao and bring you to Hangzhou by private car or high-speed train.", id: "Bisa. Kami bisa menjemput Anda di Pudong atau Hongqiao dan membawa Anda ke Hangzhou dengan mobil pribadi atau kereta cepat.", ja: "はい。浦東または虹橋でお迎えし、専用車か高速鉄道で杭州までお連れします。",
            ko: "네. 푸둥 또는 훙차오에서 만나 전용 차량이나 고속철로 항저우까지 모십니다.",
            zh: "可以。我们可以在浦东或虹桥接你，乘专车或高铁到杭州。",
          },
        },
        {
          q: { en: "When is the best time to visit?", id: "Kapan waktu terbaik untuk berkunjung?", ja: "ベストシーズンはいつですか？", ko: "언제 가는 게 가장 좋나요?", zh: "什么季节去最好？" },
          a: {
            en: "Spring (March to May) and autumn (September to November) are the loveliest. Spring brings fresh Longjing tea and blossom around West Lake; autumn brings mild days and the scent of osmanthus. Summer is hot and humid, with a rainy spell from mid-June, but lotus fills the lake. Winter is quiet and chilly, and snow on West Lake is a rare treat. If you can, avoid China's national holidays in early May and 1–7 October, when everywhere is very crowded.", id: "Musim semi (Maret–Mei) dan musim gugur (September–November) adalah yang terindah. Musim semi membawa teh Longjing segar dan bunga di sekitar Danau Barat; musim gugur membawa hari-hari sejuk dan harum bunga osmanthus. Musim panas panas dan lembap, dengan musim hujan mulai pertengahan Juni, tetapi danau dipenuhi teratai. Musim dingin tenang dan dingin, dan salju di Danau Barat adalah hadiah langka. Jika bisa, hindari libur nasional Tiongkok di awal Mei dan 1–7 Oktober, saat semua tempat sangat ramai.", ja: "春（3〜5月）と秋（9〜11月）がいちばんです。春は新茶の龍井と西湖の花、秋は穏やかな気候と金木犀の香り。夏は蒸し暑く6月中旬から梅雨がありますが、湖は蓮の花でいっぱいに。冬は静かで寒く、雪の西湖はめったに見られないごほうびです。できれば、どこも大混雑する5月初めと10月1〜7日の中国の大型連休は避けましょう。",
            ko: "봄(3~5월)과 가을(9~11월)이 가장 좋습니다. 봄에는 햇 룽징차와 서호의 꽃을, 가을에는 온화한 날씨와 계화 향기를 즐길 수 있습니다. 여름은 덥고 습하며 6월 중순부터 장마가 있지만, 호수 가득 연꽃이 핍니다. 겨울은 한적하고 쌀쌀하며, 눈 내린 서호는 드문 선물입니다. 가능하면 사람이 매우 많은 중국 연휴(5월 초, 10월 1~7일)는 피하세요.",
            zh: "春季（3–5 月）和秋季（9–11 月）最好。春天可以喝到新茶龙井，看西湖边花开；秋天天气温和，满城桂花香。夏天炎热潮湿，6 月中旬起有梅雨，但湖里开满荷花。冬天游人少、天气冷，偶尔能遇到难得的西湖雪景。尽量避开五一假期和国庆（10 月 1–7 日），到处人都很多。",
          },
        },
        {
          q: { en: "How do I pay?", id: "Bagaimana cara membayar?", ja: "支払い方法は？", ko: "결제는 어떻게 하나요?", zh: "怎么付款？" },
          a: {
            en: "By card or PayPal, to us. A deposit confirms your trip and the rest is due before you travel.", id: "Dengan kartu atau PayPal, langsung ke kami. Uang muka mengonfirmasi perjalanan Anda dan sisanya dibayar sebelum berangkat.", ja: "カードまたはPayPalで私たちにお支払いください。予約金で旅行が確定し、残りはご出発前にお支払いいただきます。",
            ko: "카드 또는 PayPal로 저희에게 결제합니다. 예약금으로 확정하고 잔금은 출발 전에 결제합니다.",
            zh: "用银行卡或 PayPal 付给我们。定金确认行程，尾款出发前付清。",
          },
        },
      ],
      team: [
        { name: "Penny", languages: "中文 · English", themes: { en: "Trip planner", id: "Perencana perjalanan", ja: "旅のプランナー", ko: "여행 플래너", zh: "行程规划师" } },
        { name: "Holiday", languages: "中文 · English", themes: { en: "Local guide", id: "Pemandu lokal", ja: "現地ガイド", ko: "현지 가이드", zh: "本地向导" } },
        { name: "Cassie", languages: "中文 · 한국어 · English", themes: { en: "Trip planner & local guide", id: "Perencana perjalanan & pemandu lokal", ja: "旅のプランナー・現地ガイド", ko: "여행 플래너 · 현지 가이드", zh: "行程规划师 · 本地向导" } },
      ],
    },
  },
  {
    slug: "xian",
    image: "/images/cities/xian.jpg",
    name: { en: "Xi'an", id: "Xi'an", ja: "西安", ko: "시안", zh: "西安" },
    chineseName: "西安",
    kind: "partner",
    page: {
      intro: {
        en: "The ancient capital at the start of the Silk Road. We arrange your guide through a checked local partner in Xi'an, and stay with you on chat for the whole trip.", id: "Ibu kota kuno di awal Jalur Sutra. Kami mengatur pemandu melalui mitra lokal di Xi'an yang sudah kami periksa, dan menemani Anda lewat chat sepanjang perjalanan.", ja: "シルクロードの起点となった古都。西安の確認済みの現地パートナーを通じてガイドを手配し、旅のあいだずっとチャットでサポートします。",
        ko: "실크로드의 출발점이었던 고도. 시안의 검증된 현지 파트너를 통해 가이드를 연결하고, 여행 내내 채팅으로 함께합니다.",
        zh: "丝绸之路起点的千年古都。我们通过经过核验的西安当地合作方为你安排向导，并全程在线陪伴。",
      },
      heroPhoto: { en: "Terracotta Army", id: "Pasukan Terakota", ja: "兵馬俑", ko: "병마용", zh: "兵马俑" },
      facts: {
        stay: { en: "2–3 days", id: "2–3 hari", ja: "2〜3日", ko: "2–3일", zh: "2–3 天" },
        gettingThere: {
          en: "High-speed rail from Beijing or Shanghai, or fly in", id: "Kereta cepat dari Beijing atau Shanghai, atau naik pesawat", ja: "北京や上海から高速鉄道、または飛行機で",
          ko: "베이징·상하이에서 고속철, 또는 항공",
          zh: "从北京或上海乘高铁，或乘飞机",
        },
        pairsWith: { en: "Beijing · Chengdu", id: "Beijing · Chengdu", ja: "北京 · 成都", ko: "베이징 · 청두", zh: "北京 · 成都" },
        arrangedBy: { en: "Our Xi'an partner, with us on chat", id: "Mitra kami di Xi'an, dengan kami di chat", ja: "西安のパートナーと、チャットでサポートする私たち", ko: "시안 파트너 + 저희 채팅 지원", zh: "西安合作方，我们在线陪同" },
      },
      ideas: [
        {
          duration: { en: "Half day", id: "Setengah hari", ja: "半日", ko: "반나절", zh: "半天" },
          title: { en: "The Terracotta Army, explained", id: "Pasukan Terakota, dengan penjelasan", ja: "兵馬俑をじっくり理解する", ko: "병마용, 제대로 알고 보기", zh: "听懂兵马俑" },
          text: {
            en: "Skip the confusion at the gates. Your guide handles tickets and tells the story behind the pits.", id: "Tak perlu bingung di gerbang masuk. Pemandu mengurus tiket dan menceritakan kisah di balik situs galian.", ja: "入口で迷うことはありません。ガイドがチケットを手配し、坑の背景にある物語を語ります。",
            ko: "입구에서 헤맬 필요 없이, 가이드가 티켓을 처리하고 갱도 뒤의 이야기를 들려줍니다.",
            zh: "不用在门口手忙脚乱。向导搞定门票，并讲述俑坑背后的故事。",
          },
          photo: { en: "Terracotta warriors, Pit 1", id: "Prajurit terakota, Lubang 1", ja: "兵馬俑一号坑", ko: "병마용 1호갱", zh: "兵马俑一号坑" },
          image: "/images/ideas/xa-terracotta.jpg",
        },
        {
          duration: { en: "Afternoon to evening", id: "Sore sampai malam", ja: "午後〜夜", ko: "오후~저녁", zh: "下午到晚上" },
          title: { en: "City Wall and a Muslim Quarter food walk", id: "Tembok Kota dan wisata kuliner Kampung Muslim", ja: "城壁と回民街の食べ歩き", ko: "성벽과 회족 거리 미식 산책", zh: "城墙与回民街美食漫步" },
          text: {
            en: "Cycle the old wall, then eat your way through the lanes with someone who knows what to order.", id: "Bersepeda di atas tembok kuno, lalu jelajahi kuliner di gang-gang bersama orang yang tahu apa yang harus dipesan.", ja: "古い城壁をサイクリングし、何を頼めばいいか知っている人と路地を食べ歩き。",
            ko: "옛 성벽을 자전거로 달리고, 뭘 시켜야 하는지 아는 사람과 골목 맛집을 누벼보세요.",
            zh: "在古城墙上骑行，再跟着懂行的人一路吃遍小巷。",
          },
          photo: { en: "The Bell Tower at night", id: "Menara Lonceng di malam hari", ja: "夜の鐘楼", ko: "밤의 종루", zh: "钟楼夜景" },
          image: "/images/ideas/xa-bell-tower.jpg",
        },
        {
          duration: { en: "Full day", id: "Sehari penuh", ja: "一日", ko: "하루", zh: "一天" },
          title: { en: "Museums, pagodas and Tang-dynasty Xi'an", id: "Museum, pagoda, dan Xi'an era Dinasti Tang", ja: "博物館、仏塔、そして唐代の西安", ko: "박물관, 탑, 그리고 당나라의 시안", zh: "博物馆、古塔与大唐西安" },
          text: {
            en: "The Shaanxi History Museum and the Big Wild Goose Pagoda, with reservations sorted in advance.", id: "Museum Sejarah Shaanxi dan Pagoda Angsa Liar Besar, dengan reservasi yang sudah diurus sebelumnya.", ja: "陝西歴史博物館と大雁塔。予約は事前に済ませておきます。",
            ko: "산시 역사박물관과 대안탑, 예약은 미리 해결해 드립니다.",
            zh: "陕西历史博物馆和大雁塔，预约提前帮你搞定。",
          },
          photo: { en: "Big Wild Goose Pagoda", id: "Pagoda Angsa Liar Besar", ja: "大雁塔", ko: "대안탑", zh: "大雁塔" },
          image: "/images/ideas/xa-big-goose-pagoda.jpg",
        },
      ],
      faq: [
        {
          q: { en: "Can I combine Xi'an with other cities?", id: "Bisakah Xi'an digabung dengan kota lain?", ja: "西安とほかの都市を組み合わせられますか？", ko: "시안과 다른 도시를 함께 여행할 수 있나요?", zh: "西安可以和其他城市一起安排吗？" },
          a: {
            en: "Yes. Tell us your full route and we'll arrange guides and train tickets for each stop.", id: "Bisa. Ceritakan rute lengkap Anda dan kami akan mengatur pemandu serta tiket kereta untuk setiap persinggahan.", ja: "はい。全体のルートを教えていただければ、各地のガイドと列車のチケットを手配します。",
            ko: "네. 전체 일정을 알려주시면 도시마다 가이드와 기차표를 준비해 드립니다.",
            zh: "可以。告诉我们完整路线，我们为每一站安排向导和火车票。",
          },
        },
        {
          q: { en: "Do I need a visa to visit?", id: "Apakah saya perlu visa?", ja: "ビザは必要ですか？", ko: "비자가 필요한가요?", zh: "需要签证吗？" },
          a: {
            en: "It depends on your passport. Ask us and we'll point you to the current official rules.", id: "Tergantung paspor Anda. Tanyakan kepada kami dan kami akan menunjukkan aturan resmi yang berlaku saat ini.", ja: "パスポートによって異なります。ご相談いただければ、最新の公式情報をご案内します。",
            ko: "여권에 따라 다릅니다. 문의하시면 최신 공식 규정을 안내해 드립니다.",
            zh: "取决于你的护照。问我们，我们会告诉你最新的官方规定。",
          },
        },
      ],
      // Add the agency's name here and put {partner} back in the text to show it.
      partnerName: "",
      partnerText: {
        en: "In Xi'an we work with a licensed local agency we've checked ourselves. You book and pay with us; they provide your guide on the ground.", id: "Di Xi'an kami bekerja sama dengan agen lokal berlisensi yang sudah kami periksa sendiri. Anda memesan dan membayar ke kami; mereka menyediakan pemandu di lapangan.", ja: "西安では、私たち自身が確認した公認の現地旅行会社と協力しています。予約とお支払いは私たちに、現地のガイドはパートナーが担当します。",
        ko: "시안에서는 저희가 직접 확인한 정식 허가 현지 여행사와 함께합니다. 예약과 결제는 저희와, 현장 가이드는 파트너가 담당합니다.",
        zh: "在西安，我们与亲自考察过的持证当地旅行社合作。你在我们这里预订和付款，他们负责现场向导。",
      },
    },
  },
  {
    slug: "beijing",
    image: "/images/cities/beijing.jpg",
    name: { en: "Beijing", id: "Beijing", ja: "北京", ko: "베이징", zh: "北京" },
    chineseName: "北京",
    kind: "partner",
  },
  {
    slug: "chengdu",
    image: "/images/cities/chengdu.jpg",
    name: { en: "Chengdu", id: "Chengdu", ja: "成都", ko: "청두", zh: "成都" },
    chineseName: "成都",
    kind: "partner",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
