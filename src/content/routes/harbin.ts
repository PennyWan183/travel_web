import { L } from "@/i18n";
import type { Route } from "./types";

export const harbin: Route = {
  slug: "harbin-snow-country",
  theme: "nature",
  seasons: ["winter"],
  heroPhoto: L(
    "Harbin Ice and Snow World lit up at night",
    "夜晚灯火通明的哈尔滨冰雪大世界",
    "밤에 불을 밝힌 하얼빈 빙설대세계",
    "Harbin Ice and Snow World yang bercahaya di malam hari",
    "夜にライトアップされたハルビン氷雪大世界"
  ),
  name: L("Harbin & the Snow Country", "哈尔滨与雪乡", "하얼빈과 설향", "Harbin & Negeri Salju", "ハルビンと雪郷"),
  tagline: L(
    "Ice palaces, a frozen river and a village buried in snow",
    "冰雪城堡、冰封的江面，还有被大雪覆盖的村庄",
    "얼음 궁전, 얼어붙은 강, 눈에 파묻힌 마을",
    "Istana es, sungai yang membeku, dan desa yang terkubur salju",
    "氷の宮殿、凍った大河、雪に埋もれた村"
  ),
  intro: L(
    "Every winter, Harbin builds a city out of ice. Whole castles, slides and temples are carved from blocks cut from the frozen Songhua River, then lit up in every colour at night. Add Russian-era streets, a ski day and a night in Snow Town, where roofs disappear under soft round pillows of snow. If you have never seen real snow, this is the place to start.",
    "每年冬天，哈尔滨都会用冰建起一座城。城堡、滑梯和殿宇都用从冰封的松花江上切下的冰块雕成，夜里亮起五彩灯光。再加上俄式风情的老街、一天滑雪，以及在雪乡住上一晚，屋顶都埋在一团团蓬松的积雪下。如果你从没见过真正的雪，这里就是最好的开始。",
    "하얼빈은 매년 겨울 얼음으로 도시를 짓습니다. 얼어붙은 쑹화강에서 잘라 온 얼음으로 성과 미끄럼틀, 전각을 조각하고, 밤이면 형형색색의 조명을 밝힙니다. 여기에 러시아풍 거리, 하루 스키, 그리고 지붕이 폭신한 눈더미에 파묻히는 설향에서의 하룻밤까지. 진짜 눈을 처음 보신다면 여기서 시작하세요.",
    "Setiap musim dingin, Harbin membangun sebuah kota dari es. Kastel, perosotan, dan kuil dipahat dari balok es yang dipotong dari Sungai Songhua yang membeku, lalu menyala warna-warni di malam hari. Ditambah jalan-jalan bergaya Rusia, sehari bermain ski, dan semalam di Snow Town, tempat atap-atap rumah tertutup gundukan salju yang lembut. Kalau Anda belum pernah melihat salju sungguhan, di sinilah tempat terbaik untuk memulai.",
    "ハルビンは毎年冬、氷で街をつくります。凍った松花江から切り出した氷で城や滑り台、楼閣を彫り上げ、夜には色とりどりにライトアップ。ロシア風の街並み、スキーの一日、そして屋根がふんわりとした雪にすっぽり埋もれる雪郷での一泊。本物の雪を見たことがないなら、ここから始めましょう。"
  ),
  facts: {
    bestTime: L("Late December to February", "12 月下旬至次年 2 月", "12월 하순~2월", "Akhir Desember sampai Februari", "12月下旬〜2月"),
    length: L("6–8 days", "6–8 天", "6~8일", "6–8 hari", "6〜8日"),
    level: L(
      "Easy walking, but very cold",
      "步行轻松，但非常寒冷",
      "걷기는 쉽지만 매우 추움",
      "Jalan kaki ringan, tetapi sangat dingin",
      "歩くのは楽ですが、とても寒いです"
    ),
    startFrom: L("Harbin", "哈尔滨", "하얼빈", "Harbin", "ハルビン"),
  },
  highlights: [
    {
      title: L("Ice and Snow World", "冰雪大世界", "빙설대세계", "Ice and Snow World", "氷雪大世界"),
      text: L(
        "A whole park of ice castles and long ice slides, at its best after dark when everything glows.",
        "整座园区都是冰城堡和长长的冰滑梯，天黑后灯光亮起时最美。",
        "얼음 성과 긴 얼음 미끄럼틀로 가득한 공원. 해가 지고 모든 것이 빛날 때 가장 아름답습니다.",
        "Taman penuh kastel es dan perosotan es yang panjang, paling indah setelah gelap saat semuanya menyala.",
        "氷の城と長い氷の滑り台が並ぶ一大パーク。すべてが光り出す日没後がいちばんの見どころです。"
      ),
      photo: L("Ice castles at night", "夜色中的冰城堡", "밤의 얼음 성", "Kastel es di malam hari", "夜の氷の城"),
    },
    {
      title: L("Central Street & St. Sophia", "中央大街与圣索菲亚教堂", "중앙대가와 성 소피아 성당", "Central Street & St. Sophia", "中央大街と聖ソフィア大聖堂"),
      text: L(
        "Cobbled streets, Russian-era buildings and a green-domed cathedral. Locals eat ice cream outside at −20°C, and so can you.",
        "石板路、俄式老建筑和绿色穹顶的教堂。当地人在零下二十度的街头吃冰棍，你也可以试试。",
        "돌길, 러시아 시대 건물, 초록 돔의 성당. 현지인들은 영하 20도에도 길에서 아이스크림을 먹는데, 여러분도 도전해 보세요.",
        "Jalan berbatu, bangunan era Rusia, dan katedral berkubah hijau. Warga lokal makan es krim di luar pada suhu −20°C, Anda juga bisa mencobanya.",
        "石畳の道、ロシア時代の建物、緑のドームの大聖堂。地元の人はマイナス20度の屋外でアイスを食べます。ぜひお試しを。"
      ),
      photo: L("St. Sophia Cathedral in snow", "雪中的圣索菲亚教堂", "눈 속의 성 소피아 성당", "Katedral St. Sophia di tengah salju", "雪の聖ソフィア大聖堂"),
    },
    {
      title: L("Snow Town", "雪乡", "설향", "Snow Town", "雪郷"),
      text: L(
        "A forest village where snow piles up on roofs like giant marshmallows, glowing under red lanterns at night.",
        "林区里的小村庄，屋顶上的积雪堆成一个个大棉花糖，夜里在红灯笼下闪着光。",
        "지붕 위에 눈이 커다란 마시멜로처럼 쌓이는 숲속 마을. 밤에는 붉은 등불 아래 반짝입니다.",
        "Desa di tengah hutan, salju menumpuk di atap seperti marshmallow raksasa dan berkilau di bawah lampion merah saat malam.",
        "屋根に巨大なマシュマロのような雪が積もる森の村。夜は赤い提灯に照らされて輝きます。"
      ),
      photo: L("Snow Town under red lanterns", "红灯笼下的雪乡", "붉은 등불 아래의 설향", "Snow Town di bawah lampion merah", "赤い提灯に照らされた雪郷"),
    },
    {
      title: L("Your first ski day", "人生第一次滑雪", "생애 첫 스키", "Hari pertama bermain ski", "はじめてのスキー"),
      text: L(
        "At Yabuli, one of China's best-known ski resorts, a patient instructor gets beginners sliding by lunchtime.",
        "在中国知名的亚布力滑雪场，耐心的教练能让初学者在午饭前就滑起来。",
        "중국의 대표 스키장 야부리에서 친절한 강사가 초보자도 점심 전까지 스키를 타게 해 줍니다.",
        "Di Yabuli, salah satu resor ski paling terkenal di Tiongkok, instruktur yang sabar membuat pemula sudah bisa meluncur sebelum makan siang.",
        "中国有数のスキー場・亜布力で、やさしいインストラクターが初心者でもお昼までに滑れるようにしてくれます。"
      ),
      photo: L("Skiers on a snowy slope at Yabuli", "亚布力雪道上的滑雪者", "야부리 설원의 스키어들", "Pemain ski di lereng bersalju Yabuli", "亜布力のゲレンデを滑るスキーヤー"),
    },
  ],
  itinerary: [
    {
      title: L("Arrive in Harbin", "抵达哈尔滨", "하얼빈 도착", "Tiba di Harbin", "ハルビン到着"),
      text: L(
        "We meet you at the airport, check your winter gear and top up anything missing. Evening stroll on Central Street.",
        "机场接机，帮你检查御寒装备，缺什么就补什么。晚上漫步中央大街。",
        "공항에서 만나 방한 장비를 점검하고 부족한 것은 채워 드립니다. 저녁에는 중앙대가 산책.",
        "Kami menjemput Anda di bandara, mengecek perlengkapan musim dingin, dan melengkapi yang kurang. Malamnya jalan-jalan di Central Street.",
        "空港でお迎えし、防寒装備をチェック。足りないものはその場でそろえます。夜は中央大街を散策。"
      ),
    },
    {
      title: L("Frozen river and Ice and Snow World", "冰封的松花江与冰雪大世界", "얼어붙은 강과 빙설대세계", "Sungai beku dan Ice and Snow World", "凍った松花江と氷雪大世界"),
      text: L(
        "St. Sophia Cathedral, then sledging and ice games on the frozen Songhua River. After dark, Ice and Snow World.",
        "参观圣索菲亚教堂，然后在冰封的松花江上坐雪橇、玩冰上游戏。天黑后去冰雪大世界。",
        "성 소피아 성당을 둘러본 뒤 얼어붙은 쑹화강에서 썰매와 얼음 놀이. 해가 지면 빙설대세계로.",
        "Katedral St. Sophia, lalu naik kereta salju dan bermain di atas Sungai Songhua yang membeku. Setelah gelap, Ice and Snow World.",
        "聖ソフィア大聖堂を見学し、凍った松花江でそり遊び。日が暮れたら氷雪大世界へ。"
      ),
    },
    {
      title: L("Snow sculptures and Siberian tigers", "雪雕与东北虎", "눈 조각과 시베리아 호랑이", "Patung salju dan harimau Siberia", "雪像とアムールトラ"),
      text: L(
        "Giant snow sculptures on Sun Island, then the Siberian Tiger Park. A warm, slow afternoon to rest.",
        "太阳岛上看巨型雪雕，再去东北虎林园。下午慢下来，暖暖地休息。",
        "태양도의 거대한 눈 조각, 이어서 시베리아 호랑이 공원. 오후는 따뜻하게 쉬어 갑니다.",
        "Patung salju raksasa di Pulau Matahari, lalu Taman Harimau Siberia. Sore hari santai dan beristirahat di tempat hangat.",
        "太陽島で巨大な雪像を見て、東北虎林園へ。午後は暖かい場所でゆっくり休みます。"
      ),
    },
    {
      title: L("Train to Yabuli, ski day", "坐高铁去亚布力滑雪", "고속철로 야부리, 스키의 날", "Kereta ke Yabuli, hari bermain ski", "高速鉄道で亜布力へ、スキーの日"),
      text: L(
        "About an hour or so by high-speed train. A ski or snowboard lesson with an instructor, or just play in the snow.",
        "坐高铁一个多小时。跟教练上一堂滑雪或单板课，也可以只在雪地里玩。",
        "고속철로 한 시간 남짓. 강사와 스키나 스노보드 강습을 받거나, 그냥 눈밭에서 놀아도 좋습니다.",
        "Sekitar satu jam lebih dengan kereta cepat. Les ski atau snowboard bersama instruktur, atau sekadar bermain salju.",
        "高速鉄道で1時間ほど。インストラクターとスキーやスノーボードのレッスン、または雪遊びだけでも。"
      ),
    },
    {
      title: L("Into Snow Town", "前往雪乡", "설향으로", "Menuju Snow Town", "雪郷へ"),
      text: L(
        "A scenic drive through the forest to Snow Town. Sleigh rides, a warm farmhouse dinner and the lanterns at night.",
        "穿过林海开往雪乡。坐马拉爬犁，在农家吃一顿热乎乎的晚饭，夜里看满村灯笼。",
        "숲을 지나 설향까지 아름다운 드라이브. 썰매를 타고, 농가에서 따뜻한 저녁을 먹고, 밤에는 등불 구경.",
        "Perjalanan indah melewati hutan menuju Snow Town. Naik kereta luncur, makan malam hangat di rumah warga, dan lampion di malam hari.",
        "森を抜けて雪郷へ。馬そりに乗り、農家で温かい夕食、夜は村中の提灯を眺めます。"
      ),
    },
    {
      title: L("Snow Town morning, back to Harbin", "雪乡清晨，返回哈尔滨", "설향의 아침, 하얼빈으로", "Pagi di Snow Town, kembali ke Harbin", "雪郷の朝、ハルビンへ戻る"),
      text: L(
        "Quiet early photos before the day visitors arrive, then back to Harbin for a farewell dinner.",
        "趁一日游客人到来前，在安静的清晨拍照，然后返回哈尔滨吃告别晚餐。",
        "당일 여행객이 오기 전 조용한 아침에 사진을 찍고, 하얼빈으로 돌아와 작별 만찬.",
        "Foto pagi yang tenang sebelum pengunjung harian datang, lalu kembali ke Harbin untuk makan malam perpisahan.",
        "日帰り客が来る前の静かな朝に写真を撮り、ハルビンに戻ってお別れの夕食。"
      ),
    },
    {
      title: L("Fly home", "返程", "귀국", "Pulang", "帰国"),
      text: L(
        "Airport transfer, with time for a last Russian bread and sausage shopping stop if you like.",
        "送机。想的话，还可以顺路买些大列巴和红肠带回家。",
        "공항 배웅. 원하시면 러시아식 빵과 소시지를 사 갈 시간도 있습니다.",
        "Antar ke bandara, dengan waktu untuk membeli roti Rusia sebagai oleh-oleh jika Anda mau.",
        "空港へお送りします。お好みでロシア風の大きなパンをおみやげに。"
      ),
    },
  ],
  weHandle: [
    L(
      "A warm-clothing checklist before you fly, and boots, gloves and thermals to buy or borrow on arrival",
      "出发前给你一份保暖清单，到了以后可以买或借雪地靴、手套和保暖内衣",
      "출발 전 방한 준비물 목록, 도착 후 방한화·장갑·내복 구매나 대여",
      "Daftar pakaian hangat sebelum berangkat, serta sepatu bot, sarung tangan, dan pakaian termal untuk dibeli atau dipinjam saat tiba",
      "出発前の防寒チェックリストと、到着後のブーツ・手袋・防寒インナーの購入やレンタル"
    ),
    L(
      "Ice and Snow World tickets for the right night, and train tickets that sell out fast in peak season",
      "冰雪大世界合适日期的门票，以及旺季很快售罄的火车票",
      "적절한 날짜의 빙설대세계 입장권, 성수기에 빨리 매진되는 기차표",
      "Tiket Ice and Snow World untuk malam yang tepat, dan tiket kereta yang cepat habis di musim ramai",
      "ちょうどいい日の氷雪大世界チケットと、繁忙期にすぐ売り切れる列車のチケット"
    ),
    L(
      "Halal or no-pork meals planned in advance, including in Snow Town where choices are few",
      "提前安排清真或不含猪肉的餐食，包括选择很少的雪乡",
      "할랄 또는 돼지고기 없는 식사를 미리 준비. 선택지가 적은 설향에서도요",
      "Makanan halal atau tanpa babi direncanakan sejak awal, termasuk di Snow Town yang pilihannya sedikit",
      "ハラールや豚肉なしの食事を事前に手配。選択肢の少ない雪郷でも対応します"
    ),
    L(
      "A ski instructor who speaks English, booked ahead",
      "提前预约会说英语的滑雪教练",
      "영어가 가능한 스키 강사를 미리 예약",
      "Instruktur ski yang bisa berbahasa Inggris, dipesan lebih awal",
      "英語が話せるスキーインストラクターを事前予約"
    ),
    L(
      "A private driver for the long, snowy roads, and someone to call any time",
      "雪路长途有专车司机，任何时候都有人可以打电话求助",
      "눈길 장거리는 전용 차량으로, 언제든 연락할 수 있는 사람도 있습니다",
      "Sopir pribadi untuk jalan bersalju yang jauh, dan seseorang yang bisa dihubungi kapan saja",
      "長い雪道は専用車で。いつでも電話できる担当者もいます"
    ),
  ],
  goodToKnow: [
    L(
      "Nights often drop to −20°C to −30°C. Layers, a hat that covers your ears and warm boots matter more than anything.",
      "夜间气温常在零下二十到三十度。多层穿衣、能盖住耳朵的帽子和保暖的靴子比什么都重要。",
      "밤 기온은 영하 20~30도까지 내려갑니다. 여러 겹의 옷, 귀를 덮는 모자, 따뜻한 신발이 무엇보다 중요합니다.",
      "Malam hari suhu sering turun hingga −20°C sampai −30°C. Pakaian berlapis, topi yang menutup telinga, dan sepatu bot hangat adalah yang paling penting.",
      "夜はマイナス20〜30度になることも。重ね着、耳まで隠れる帽子、暖かいブーツが何より大切です。"
    ),
    L(
      "Phone batteries drain fast in the cold. Keep your phone in an inside pocket and bring a power bank.",
      "手机电池在低温下掉电很快，放在贴身口袋里，记得带充电宝。",
      "추위에 휴대폰 배터리가 빨리 닳습니다. 안주머니에 넣고 보조 배터리를 챙기세요.",
      "Baterai ponsel cepat habis saat dingin. Simpan ponsel di saku dalam dan bawa power bank.",
      "寒さでスマホの電池はすぐ減ります。内ポケットに入れて、モバイルバッテリーを持ちましょう。"
    ),
    L(
      "Ice and Snow World usually opens in mid to late December. We confirm the date for your year before you book.",
      "冰雪大世界通常在 12 月中下旬开园，预订前我们会确认当年的具体日期。",
      "빙설대세계는 보통 12월 중하순에 개장합니다. 예약 전에 그해 개장일을 확인해 드립니다.",
      "Ice and Snow World biasanya dibuka pertengahan sampai akhir Desember. Kami memastikan tanggalnya untuk tahun Anda sebelum memesan.",
      "氷雪大世界の開園は例年12月中旬〜下旬。ご予約前にその年の日程を確認します。"
    ),
    L(
      "New Year and Chinese New Year are the busiest weeks. Mid-January and late February are calmer.",
      "元旦和春节前后是最忙的时候，1 月中旬和 2 月下旬相对清静。",
      "신정과 춘절 기간이 가장 붐빕니다. 1월 중순과 2월 하순이 비교적 한산합니다.",
      "Tahun Baru dan Imlek adalah minggu tersibuk. Pertengahan Januari dan akhir Februari lebih tenang.",
      "年末年始と春節がいちばん混みます。1月中旬と2月下旬は比較的落ち着いています。"
    ),
  ],
  faq: [
    {
      q: L("I've never been in real cold. Will I be OK?", "我从没经历过严寒，能受得了吗？", "혹한은 처음인데 괜찮을까요?", "Saya belum pernah merasakan dingin ekstrem. Apakah saya akan baik-baik saja?", "本格的な寒さは初めてですが、大丈夫ですか？"),
      a: L(
        "Yes. Most of the day is spent moving between warm places, and we plan short outdoor stretches with warm breaks. We'll tell you exactly what to wear.",
        "可以的。大部分时间都是在暖和的地方之间活动，户外的时间我们会安排得短一些，中间有取暖休息。穿什么我们会告诉你。",
        "괜찮습니다. 대부분은 따뜻한 곳 사이를 이동하고, 야외 활동은 짧게 나누어 중간에 몸을 녹이도록 계획합니다. 무엇을 입어야 할지도 정확히 알려 드립니다.",
        "Ya. Sebagian besar waktu dihabiskan berpindah antara tempat yang hangat, dan kami membuat waktu di luar ruangan singkat dengan jeda untuk menghangatkan badan. Kami akan memberi tahu persis apa yang harus dipakai.",
        "大丈夫です。一日の大半は暖かい場所の間を移動し、屋外は短い時間に区切って休憩をはさみます。服装も具体的にお伝えします。"
      ),
    },
    {
      q: L("Is this trip good for children and older travellers?", "适合带孩子或长辈吗？", "아이나 어르신과 함께 가도 될까요?", "Apakah cocok untuk anak-anak dan orang tua?", "子どもや年配の方にも向いていますか？"),
      a: L(
        "Yes, with a gentler pace. Children love the ice slides and Snow Town. We add more warm breaks and shorter days for older travellers.",
        "适合，节奏放慢一些就好。孩子们最喜欢冰滑梯和雪乡；有长辈同行时，我们会安排更多取暖休息，每天的行程也短一些。",
        "네, 속도를 조금 늦추면 됩니다. 아이들은 얼음 미끄럼틀과 설향을 아주 좋아합니다. 어르신이 계시면 쉬는 시간을 늘리고 하루 일정을 짧게 합니다.",
        "Ya, dengan tempo yang lebih santai. Anak-anak suka perosotan es dan Snow Town. Untuk orang tua, kami menambah waktu istirahat yang hangat dan membuat hari lebih singkat.",
        "はい、ペースをゆるめれば大丈夫です。子どもたちは氷の滑り台と雪郷が大好き。年配の方には休憩を増やし、一日の予定を短くします。"
      ),
    },
    {
      q: L("Can you arrange halal food?", "可以安排清真餐吗？", "할랄 음식을 준비해 주실 수 있나요?", "Bisakah Anda mengatur makanan halal?", "ハラールの食事は手配できますか？"),
      a: L(
        "Yes. Harbin has halal restaurants, and outside the city we plan meals in advance so you always have a safe choice.",
        "可以。哈尔滨有清真餐厅；在市区以外，我们会提前安排好餐食，保证你每餐都有放心的选择。",
        "네. 하얼빈에는 할랄 식당이 있고, 시외에서는 식사를 미리 준비해 언제나 안심하고 드실 수 있게 합니다.",
        "Ya. Di Harbin ada restoran halal, dan di luar kota kami merencanakan makanan lebih dulu agar Anda selalu punya pilihan yang aman.",
        "はい。ハルビンにはハラールのレストランがあり、郊外では事前に食事を手配して、いつでも安心して食べられるようにします。"
      ),
    },
  ],
};
