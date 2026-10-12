import { L } from "@/i18n";
import type { Route } from "./types";

export const northernXinjiang: Route = {
  slug: "northern-xinjiang",
  theme: "nature",
  seasons: ["winter", "autumn", "summer"],
  heroPhoto: L(
    "Hemu village under snow, with smoke rising from log cabins",
    "雪中的禾木村，木屋炊烟袅袅",
    "눈 덮인 허무 마을과 통나무집의 굴뚝 연기",
    "Desa Hemu tertutup salju, dengan asap mengepul dari pondok kayu",
    "雪に包まれた禾木村と、丸太小屋から立ちのぼる煙"
  ),
  name: L("Northern Xinjiang: Altay & Kanas", "北疆：阿勒泰与喀纳斯", "북신장: 알타이와 카나스", "Xinjiang Utara: Altay & Kanas", "北新疆：アルタイとカナス"),
  tagline: L(
    "Fairy-tale snow villages, wild skiing and a lake with its own monster legend",
    "童话般的雪村、野趣十足的滑雪，还有一个流传着水怪传说的湖",
    "동화 같은 눈 마을, 자연 그대로의 스키, 괴물 전설이 있는 호수",
    "Desa salju bak dongeng, ski di alam liar, dan danau dengan legenda monsternya sendiri",
    "おとぎ話のような雪の村、大自然のスキー、そして怪物伝説のある湖"
  ),
  intro: L(
    "In the far north-west of China, the Altay Mountains meet the borders of Kazakhstan, Russia and Mongolia. In winter, log-cabin villages like Hemu sit deep in snow, Kazakh herders ride past on horseback, and Altay itself calls itself the place where skiing began. Come back in autumn and the same valleys turn gold. Food here is halal almost everywhere: hand-pulled noodles, lamb skewers, fresh naan and milk tea.",
    "在中国的西北角，阿尔泰山与哈萨克斯坦、俄罗斯、蒙古的边境相接。冬天，禾木这样的木屋村庄深埋在雪里，哈萨克牧民骑马走过，阿勒泰还自称是人类滑雪的起源地。秋天再来，同样的山谷会染成一片金黄。这里几乎处处是清真美食：拉条子、烤肉串、新鲜出炉的馕和奶茶。",
    "중국 북서쪽 끝, 알타이산맥은 카자흐스탄, 러시아, 몽골 국경과 맞닿아 있습니다. 겨울이면 허무 같은 통나무집 마을이 깊은 눈에 잠기고, 카자흐 목동이 말을 타고 지나갑니다. 알타이는 스키가 시작된 곳이라고 스스로 소개하기도 하죠. 가을에 다시 오면 같은 계곡이 온통 금빛으로 물듭니다. 이곳 음식은 거의 모두 할랄입니다. 손으로 뽑은 면, 양꼬치, 갓 구운 난과 밀크티.",
    "Di ujung barat laut Tiongkok, Pegunungan Altai bertemu dengan perbatasan Kazakhstan, Rusia, dan Mongolia. Di musim dingin, desa pondok kayu seperti Hemu terbenam dalam salju, para penggembala Kazakh lewat menunggang kuda, dan Altay sendiri menyebut dirinya tempat lahirnya ski. Datanglah lagi di musim gugur, lembah yang sama berubah keemasan. Makanan di sini hampir semuanya halal: mi tarik, sate kambing, roti naan hangat, dan teh susu.",
    "中国の北西の果て、アルタイ山脈はカザフスタン、ロシア、モンゴルとの国境に接しています。冬には禾木のような丸太小屋の村が深い雪に包まれ、カザフの遊牧民が馬で通り過ぎます。アルタイは「スキー発祥の地」を名乗ってもいます。秋に訪れれば、同じ谷が一面の金色に。ここの食事はほとんどがハラール。手延べ麺、羊の串焼き、焼きたてのナン、ミルクティー。"
  ),
  facts: {
    bestTime: L(
      "December to March for snow; mid-September to early October for autumn gold",
      "看雪：12 月至次年 3 月；看秋色：9 月中旬至 10 月初",
      "설경: 12월~3월 / 단풍: 9월 중순~10월 초",
      "Desember–Maret untuk salju; pertengahan September–awal Oktober untuk warna musim gugur",
      "雪景色：12月〜3月／黄葉：9月中旬〜10月上旬"
    ),
    length: L("8–10 days", "8–10 天", "8~10일", "8–10 hari", "8〜10日"),
    level: L(
      "Moderate: long scenic drives and deep cold",
      "中等：长途车程，气温很低",
      "보통: 긴 이동 거리와 혹한",
      "Sedang: perjalanan darat panjang dan sangat dingin",
      "中程度：長距離のドライブと厳しい寒さ"
    ),
    startFrom: L("Urumqi", "乌鲁木齐", "우루무치", "Urumqi", "ウルムチ"),
  },
  highlights: [
    {
      title: L("Hemu snow village", "禾木雪村", "허무 눈 마을", "Desa salju Hemu", "禾木の雪の村"),
      text: L(
        "Log cabins of the Tuvan people, chimney smoke drifting over the valley at sunrise. It's often called the most beautiful village in China.",
        "图瓦人的木屋，日出时炊烟在山谷上飘散。常被称为中国最美的村庄。",
        "투바족의 통나무집, 해 뜰 무렵 계곡 위로 피어오르는 굴뚝 연기. 흔히 중국에서 가장 아름다운 마을로 불립니다.",
        "Pondok kayu suku Tuva, asap cerobong melayang di atas lembah saat matahari terbit. Desa ini sering disebut desa terindah di Tiongkok.",
        "トゥバ族の丸太小屋と、日の出の谷にただよう煙。「中国でいちばん美しい村」とよく呼ばれています。"
      ),
      photo: L("Hemu at sunrise", "日出时的禾木", "해 뜰 무렵의 허무", "Hemu saat matahari terbit", "日の出の禾木"),
    },
    {
      title: L("Kanas Lake", "喀纳斯湖", "카나스 호수", "Danau Kanas", "カナス湖"),
      text: L(
        "A long mountain lake that changes colour with the seasons. Locals tell stories of a huge creature living in its depths.",
        "随季节变换颜色的狭长山湖。当地人流传着湖底住着巨大怪物的故事。",
        "계절마다 색이 바뀌는 길고 푸른 산중 호수. 현지인들은 호수 깊은 곳에 거대한 생물이 산다는 이야기를 전합니다.",
        "Danau pegunungan memanjang yang warnanya berubah setiap musim. Warga lokal bercerita tentang makhluk raksasa yang hidup di kedalamannya.",
        "季節ごとに色を変える細長い山の湖。湖の底に巨大な生き物がすむという言い伝えがあります。"
      ),
      photo: L("Kanas Lake from above", "俯瞰喀纳斯湖", "위에서 본 카나스 호수", "Danau Kanas dari atas", "上から見たカナス湖"),
    },
    {
      title: L("Skiing where skiing may have begun", "在滑雪起源地滑雪", "스키의 발상지에서 스키를", "Bermain ski di tempat asal ski", "スキー発祥の地でスキー"),
      text: L(
        "Ancient rock paintings near Altay show people on skis. Today there's deep, dry powder and a ski resort right next to the city.",
        "阿勒泰附近的古老岩画上画着踩着滑雪板的人。如今这里有干爽的粉雪，滑雪场就在城边。",
        "알타이 근처 고대 암각화에는 스키를 탄 사람이 그려져 있습니다. 지금은 건조하고 깊은 파우더 눈과 시내 바로 옆 스키장이 있습니다.",
        "Lukisan batu kuno di dekat Altay menggambarkan orang bermain ski. Kini ada salju bubuk yang kering dan dalam, serta resor ski tepat di samping kota.",
        "アルタイ近くの古代の岩絵にはスキーをする人が描かれています。今は乾いた深いパウダースノーと、街のすぐそばのスキー場があります。"
      ),
      photo: L("Powder snow in the Altay mountains", "阿尔泰山的粉雪", "알타이산맥의 파우더 눈", "Salju bubuk di Pegunungan Altai", "アルタイ山脈のパウダースノー"),
    },
    {
      title: L("Kazakh and Tuvan homes", "哈萨克与图瓦人家", "카자흐족과 투바족의 집", "Rumah warga Kazakh dan Tuva", "カザフ族とトゥバ族の家"),
      text: L(
        "Milk tea, fresh bread and stories around the stove with a local family.",
        "围着炉子和当地人家一起喝奶茶、吃新鲜馕、听故事。",
        "난로 옆에서 현지 가족과 함께 밀크티와 갓 구운 빵, 그리고 이야기를.",
        "Teh susu, roti hangat, dan cerita di dekat tungku bersama keluarga setempat.",
        "ストーブを囲んで、地元の家族とミルクティーと焼きたてのパン、そしておしゃべりを。"
      ),
      photo: L("Milk tea by the stove in a log cabin", "木屋炉边的奶茶", "통나무집 난로 옆의 밀크티", "Teh susu di dekat tungku pondok kayu", "丸太小屋のストーブとミルクティー"),
    },
  ],
  itinerary: [
    {
      title: L("Arrive in Urumqi", "抵达乌鲁木齐", "우루무치 도착", "Tiba di Urumqi", "ウルムチ到着"),
      text: L(
        "Airport pickup. Evening at the Grand Bazaar and a first halal dinner: polo rice, lamb skewers and naan.",
        "接机。晚上逛大巴扎，吃第一顿清真晚餐：手抓饭、烤肉串和馕。",
        "공항 픽업. 저녁에는 그랜드 바자르를 구경하고 첫 할랄 식사: 폴로 볶음밥, 양꼬치, 난.",
        "Jemput di bandara. Malamnya ke Grand Bazaar dan makan malam halal pertama: nasi polo, sate kambing, dan naan.",
        "空港でお迎え。夜はグランドバザールへ。最初のハラールディナーはポロ（ピラフ）、羊の串焼き、ナン。"
      ),
    },
    {
      title: L("Fly to Altay, first ski", "飞往阿勒泰，初次滑雪", "알타이로 이동, 첫 스키", "Terbang ke Altay, ski pertama", "アルタイへ、はじめてのスキー"),
      text: L(
        "A short flight north. Afternoon on the slopes at the ski resort beside the city, with an instructor if you like.",
        "坐飞机北上，下午在城边的滑雪场滑雪，需要的话可以请教练。",
        "짧은 비행으로 북쪽으로. 오후에는 시내 옆 스키장에서, 원하시면 강사와 함께.",
        "Penerbangan singkat ke utara. Sore hari bermain ski di resor dekat kota, bersama instruktur jika Anda mau.",
        "北へ短いフライト。午後は街のそばのスキー場で、ご希望ならインストラクターと一緒に。"
      ),
    },
    {
      title: L("Drive to Hemu", "前往禾木", "허무로 이동", "Perjalanan ke Hemu", "禾木へ"),
      text: L(
        "A long, beautiful drive through snowy steppe and forest. Check in to a warm wooden guesthouse in the village.",
        "一路穿过雪原和森林，车程较长但风景极美。入住村里温暖的木屋民宿。",
        "눈 덮인 초원과 숲을 지나는 길고 아름다운 드라이브. 마을의 따뜻한 목조 게스트하우스에 체크인.",
        "Perjalanan panjang dan indah melewati padang salju dan hutan. Menginap di penginapan kayu yang hangat di desa.",
        "雪の草原と森を抜ける、長くて美しいドライブ。村の暖かい木造の宿にチェックイン。"
      ),
    },
    {
      title: L("Hemu: sunrise and a family visit", "禾木：日出与家访", "허무: 일출과 가정 방문", "Hemu: matahari terbit dan kunjungan keluarga", "禾木：日の出と家庭訪問"),
      text: L(
        "Sunrise from the viewing hill, a horse-drawn sleigh ride, and milk tea with a Tuvan family.",
        "在观景台看日出，坐马拉雪橇，去图瓦人家喝奶茶。",
        "전망 언덕에서 일출, 말썰매 타기, 투바족 가정에서 밀크티.",
        "Matahari terbit dari bukit pandang, naik kereta luncur kuda, dan minum teh susu bersama keluarga Tuva.",
        "展望の丘から日の出を眺め、馬そりに乗り、トゥバ族の家でミルクティー。"
      ),
    },
    {
      title: L("Kanas in winter", "冬日喀纳斯", "겨울의 카나스", "Kanas di musim dingin", "冬のカナス"),
      text: L(
        "The frozen lake, snowy forests and the quiet Tuvan village nearby. Part of the way may be by snow bus, depending on the snow.",
        "冰封的湖面、雪林和附近安静的图瓦村落。视积雪情况，部分路段可能需要换乘雪地车。",
        "얼어붙은 호수, 눈 덮인 숲, 근처의 조용한 투바 마을. 눈 상황에 따라 일부 구간은 설상 버스로 이동할 수 있습니다.",
        "Danau yang membeku, hutan bersalju, dan desa Tuva yang tenang di dekatnya. Sebagian jalan mungkin ditempuh dengan bus salju, tergantung kondisi salju.",
        "凍った湖、雪の森、近くの静かなトゥバ族の村。積雪によっては一部の区間を雪上バスで移動します。"
      ),
    },
    {
      title: L("Back to Altay", "返回阿勒泰", "알타이로 귀환", "Kembali ke Altay", "アルタイへ戻る"),
      text: L(
        "Drive back with stops for photos. A free evening, or another ski session if you're hooked.",
        "返程途中停车拍照。晚上自由活动，如果滑上瘾了可以再滑一场。",
        "돌아가는 길에 사진 촬영. 저녁은 자유 시간, 스키에 빠지셨다면 한 번 더.",
        "Perjalanan pulang dengan berhenti untuk foto. Malam bebas, atau ski lagi kalau Anda sudah ketagihan.",
        "帰り道は写真を撮りながら。夜は自由時間、スキーにはまった方はもう一度ゲレンデへ。"
      ),
    },
    {
      title: L("Fly to Urumqi", "飞回乌鲁木齐", "우루무치로 이동", "Terbang ke Urumqi", "ウルムチへ"),
      text: L(
        "Visit the Xinjiang Museum to see the Silk Road story, then a farewell dinner.",
        "参观新疆博物馆，了解丝绸之路的故事，然后吃告别晚餐。",
        "신장 박물관에서 실크로드 이야기를 보고, 작별 만찬.",
        "Kunjungi Museum Xinjiang untuk melihat kisah Jalur Sutra, lalu makan malam perpisahan.",
        "新疆博物館でシルクロードの物語に触れ、お別れの夕食。"
      ),
    },
    {
      title: L("Fly home", "返程", "귀국", "Pulang", "帰国"),
      text: L("Airport transfer.", "送机。", "공항 배웅.", "Antar ke bandara.", "空港へお送りします。"),
    },
  ],
  addOn: {
    title: L("Summer and autumn version", "夏秋版本", "여름·가을 버전", "Versi musim panas dan gugur", "夏・秋バージョン"),
    text: L(
      "From June to early October, swap snow for the turquoise Sayram Lake, the Duku Highway across the Tianshan Mountains, and Kanas and Hemu in their golden autumn colours.",
      "6 月到 10 月初，可以把雪景换成湛蓝的赛里木湖、穿越天山的独库公路，以及金秋时节的喀纳斯和禾木。",
      "6월부터 10월 초까지는 눈 대신 청록빛 사이람호, 톈산산맥을 가로지르는 두쿠 도로, 황금빛 가을의 카나스와 허무를 만날 수 있습니다.",
      "Dari Juni sampai awal Oktober, ganti salju dengan Danau Sayram yang biru toska, Jalan Raya Duku yang melintasi Pegunungan Tianshan, serta Kanas dan Hemu dalam warna emas musim gugur.",
      "6月〜10月上旬は、雪景色の代わりにターコイズブルーのサイラム湖、天山山脈を越える独庫公路、黄金色に染まるカナスと禾木を。"
    ),
  },
  weHandle: [
    L(
      "Checking the current rules for border areas and preparing any registration or permits before you go",
      "核实边境地区的最新规定，出发前办好需要的登记或通行证",
      "국경 지역의 최신 규정을 확인하고, 필요한 등록이나 허가를 미리 준비",
      "Mengecek aturan terbaru untuk wilayah perbatasan dan menyiapkan pendaftaran atau izin yang diperlukan sebelum berangkat",
      "国境地域の最新ルールを確認し、必要な登録や許可を出発前に準備"
    ),
    L(
      "Hotels and guesthouses that are allowed to host foreign guests",
      "安排可以接待外国客人的酒店和民宿",
      "외국인 투숙이 가능한 호텔과 게스트하우스",
      "Hotel dan penginapan yang boleh menerima tamu asing",
      "外国人が宿泊できるホテルや宿の手配"
    ),
    L(
      "An experienced winter driver and a vehicle ready for snow",
      "有冬季驾驶经验的司机和适合雪地的车辆",
      "겨울 운전 경험이 많은 기사와 눈길에 맞는 차량",
      "Sopir berpengalaman di musim dingin dan kendaraan yang siap untuk salju",
      "冬道に慣れたドライバーと雪に対応した車両"
    ),
    L(
      "Flights and plans that allow for snow delays",
      "预留雪天航班延误的余量",
      "눈으로 인한 지연을 감안한 항공편과 일정",
      "Penerbangan dan rencana yang memperhitungkan keterlambatan karena salju",
      "雪による遅れも見込んだフライトと日程"
    ),
    L(
      "Halal food every day, which is easy here",
      "每天都是清真餐，在这里很容易做到",
      "매일 할랄 식사. 이곳에서는 어렵지 않습니다",
      "Makanan halal setiap hari, yang di sini mudah ditemukan",
      "毎日ハラールの食事。ここでは難しくありません"
    ),
  ],
  goodToKnow: [
    L(
      "Winter in Altay is serious: −20°C to −30°C is normal and it can go lower. We send a packing list and can arrange rentals.",
      "阿勒泰的冬天很冷：零下二三十度很常见，有时更低。我们会发给你装备清单，也可以安排租借。",
      "알타이의 겨울은 혹독합니다. 영하 20~30도가 보통이고 더 내려가기도 합니다. 준비물 목록을 보내 드리고 대여도 도와드립니다.",
      "Musim dingin di Altay sangat serius: −20°C sampai −30°C itu biasa, bahkan bisa lebih rendah. Kami mengirim daftar perlengkapan dan bisa mengatur sewa.",
      "アルタイの冬は本格的です。マイナス20〜30度は普通で、さらに下がることも。持ち物リストをお送りし、レンタルも手配できます。"
    ),
    L(
      "Distances are big. Some days have several hours in the car, always with beautiful views and stops.",
      "这里距离很远，有几天会在车上待好几个小时，不过一路风景都很美，也会停车休息。",
      "거리가 멉니다. 몇몇 날은 차로 몇 시간을 이동하지만, 풍경이 아름답고 중간에 쉬어 갑니다.",
      "Jaraknya jauh. Beberapa hari ada beberapa jam di mobil, tetapi pemandangannya indah dan ada banyak perhentian.",
      "距離が長く、車で数時間移動する日もあります。景色はずっと美しく、途中で休憩もします。"
    ),
    L(
      "Expect frequent ID and security checks. Always carry your passport; we'll be with you to help.",
      "证件和安检比较频繁，请随身带好护照，我们会陪你一起处理。",
      "신분증 확인과 보안 검색이 잦습니다. 여권을 항상 지니시고, 저희가 함께 도와드립니다.",
      "Pemeriksaan identitas dan keamanan cukup sering. Selalu bawa paspor Anda; kami akan mendampingi untuk membantu.",
      "身分証の確認や保安検査がよくあります。パスポートは常に携帯してください。私たちが一緒に対応します。"
    ),
    L(
      "Mobile data works in towns but can drop in the mountains. Download maps and translations before you set off.",
      "镇上手机信号正常，山里可能会断，出发前请先下载地图和翻译。",
      "마을에서는 데이터가 잘 되지만 산속에서는 끊길 수 있습니다. 출발 전에 지도와 번역을 내려받아 두세요.",
      "Data seluler lancar di kota, tetapi bisa hilang di pegunungan. Unduh peta dan terjemahan sebelum berangkat.",
      "町ではモバイル通信が使えますが、山の中では途切れることも。出発前に地図と翻訳をダウンロードしておきましょう。"
    ),
  ],
  faq: [
    {
      q: L("Is Xinjiang easy for Muslim travellers?", "新疆对穆斯林游客方便吗？", "무슬림 여행자에게 신장은 편한가요?", "Apakah Xinjiang nyaman untuk wisatawan Muslim?", "ムスリムの旅行者にとって新疆は過ごしやすいですか？"),
      a: L(
        "Very. Halal food is the norm in much of Xinjiang, and many local people share the same faith. Tell us about prayer times and we'll plan the days around them.",
        "非常方便。新疆很多地方清真饮食是常态，不少当地人也有相同的信仰。告诉我们你的礼拜时间，我们会据此安排每天的行程。",
        "아주 편합니다. 신장 대부분 지역에서 할랄 음식이 기본이고, 같은 신앙을 가진 현지인도 많습니다. 기도 시간을 알려 주시면 일정을 그에 맞춰 짭니다.",
        "Sangat nyaman. Makanan halal adalah hal biasa di sebagian besar Xinjiang, dan banyak warga lokal yang seiman. Beri tahu kami waktu salat Anda, dan kami akan menyusun jadwal harian sesuai waktu tersebut.",
        "とても過ごしやすいです。新疆の多くの地域ではハラールの食事が当たり前で、同じ信仰を持つ地元の人も多くいます。礼拝の時間を教えていただければ、それに合わせて日程を組みます。"
      ),
    },
    {
      q: L("I've never skied. Is that a problem?", "我从没滑过雪，有问题吗？", "스키를 타 본 적이 없는데 괜찮을까요?", "Saya belum pernah bermain ski. Apakah itu masalah?", "スキーをしたことがないのですが大丈夫ですか？"),
      a: L(
        "Not at all. Skiing is optional. Beginners take a lesson, and the snow villages, sleighs and scenery are the real stars.",
        "完全没问题。滑雪是可选的，初学者可以上课，而雪村、雪橇和风景才是真正的主角。",
        "전혀 문제없습니다. 스키는 선택 사항이고, 초보자는 강습을 받으면 됩니다. 진짜 주인공은 눈 마을과 썰매, 그리고 풍경입니다.",
        "Sama sekali tidak. Ski itu pilihan. Pemula bisa ikut les, dan bintang utamanya justru desa salju, kereta luncur, dan pemandangannya.",
        "まったく問題ありません。スキーは自由参加で、初心者はレッスンを受けられます。主役は雪の村、そり、そして景色です。"
      ),
    },
    {
      q: L("Summer or winter: which is better?", "夏天去还是冬天去更好？", "여름과 겨울 중 언제가 좋을까요?", "Musim panas atau musim dingin, mana yang lebih baik?", "夏と冬、どちらがおすすめですか？"),
      a: L(
        "Both are wonderful. Winter is for snow lovers and quiet villages. Mid-September to early October brings golden forests and easier travel. Tell us what you'd love to see and we'll suggest dates.",
        "都很美。冬天适合爱雪的人，村子也安静；9 月中旬到 10 月初是金色的森林，出行也更轻松。告诉我们你想看什么，我们来建议日期。",
        "둘 다 멋집니다. 겨울은 눈을 좋아하고 조용한 마을을 원하는 분께, 9월 중순~10월 초는 황금빛 숲과 편한 이동을 원하는 분께 좋습니다. 보고 싶은 것을 알려 주시면 날짜를 추천해 드립니다.",
        "Keduanya luar biasa. Musim dingin untuk pencinta salju dan desa yang tenang. Pertengahan September sampai awal Oktober membawa hutan keemasan dan perjalanan yang lebih mudah. Ceritakan apa yang ingin Anda lihat, dan kami akan menyarankan tanggalnya.",
        "どちらもすばらしいです。冬は雪と静かな村が好きな方に。9月中旬〜10月上旬は黄金色の森と移動のしやすさが魅力です。見たいものを教えていただければ、時期をご提案します。"
      ),
    },
  ],
};
