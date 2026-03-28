import { Yatai } from "@/types/yatai";

export const yataiList: Yatai[] = [
  {
    id: "meramera-makurazaki",
    name: "メラメラ枕崎",
    genre: "ラーメン",
    location: "かごっまふるさと屋台村 1番ブース",
    businessHours: "17:00〜23:00",
    recommendedMenu: ["枕崎カツオラーメン", "炙りチャーシュー丼", "黒豚餃子"],
    imageUrl: "/images/meramera-makurazaki.jpg",
    description:
      "枕崎直送のカツオ出汁が決め手。一口すすれば南薩の風が吹き抜ける、そんな一杯。店主の情熱はまさにメラメラ。",
    fukyoCount: 128,
    isOshiYatai: true,
  },
  {
    id: "sakurajima-yakitori",
    name: "桜島やきとり火山",
    genre: "焼き鳥",
    location: "かごっまふるさと屋台村 2番ブース",
    businessHours: "18:00〜24:00",
    recommendedMenu: ["桜島溶岩焼き", "地鶏もも串", "砂肝ポン酢"],
    imageUrl: "/images/sakurajima-yakitori.jpg",
    description:
      "桜島の溶岩プレートで焼き上げる地鶏は格別。噴火級の旨さと店主が自慢する逸品。",
    fukyoCount: 95,
    isOshiYatai: false,
  },
  {
    id: "tenmonkan-oden",
    name: "天文館おでん横丁",
    genre: "おでん",
    location: "かごっまふるさと屋台村 3番ブース",
    businessHours: "17:30〜23:30",
    recommendedMenu: ["さつま揚げ", "黒豚角煮おでん", "知覧茶割り"],
    imageUrl: "/images/tenmonkan-oden.jpg",
    description:
      "鹿児島名物さつま揚げをはじめ、出汁にこだわった薩摩おでんが勢揃い。",
    fukyoCount: 76,
    isOshiYatai: false,
  },
  {
    id: "kinko-kaisen",
    name: "錦江湾海鮮酒場",
    genre: "海鮮",
    location: "かごっまふるさと屋台村 4番ブース",
    businessHours: "17:00〜23:00",
    recommendedMenu: ["キビナゴ刺身", "首折れサバ", "伊勢海老味噌汁"],
    imageUrl: "/images/kinko-kaisen.jpg",
    description:
      "錦江湾の新鮮な海の幸を堪能できる。キビナゴの刺身は鹿児島でしか味わえない逸品。",
    fukyoCount: 112,
    isOshiYatai: false,
  },
  {
    id: "shimazu-teppan",
    name: "島津鉄板 GRILL",
    genre: "鉄板焼き",
    location: "かごっまふるさと屋台村 5番ブース",
    businessHours: "18:00〜24:00",
    recommendedMenu: ["黒豚ステーキ", "黒牛ハンバーグ", "焼き芋アイス"],
    imageUrl: "/images/shimazu-teppan.jpg",
    description:
      "かごしま黒豚と黒牛を豪快に鉄板で。島津の殿様も唸る味を目指すという心意気。",
    fukyoCount: 88,
    isOshiYatai: false,
  },
  {
    id: "satsuma-izakaya",
    name: "薩摩隼人酒場",
    genre: "居酒屋",
    location: "かごっまふるさと屋台村 6番ブース",
    businessHours: "17:00〜翌1:00",
    recommendedMenu: ["とんこつ煮込み", "芋焼酎飲み比べセット", "鶏刺し"],
    imageUrl: "/images/satsuma-izakaya.jpg",
    description:
      "芋焼酎の品揃えは屋台村随一。鶏刺しに芋焼酎、薩摩の夜はここから始まる。",
    fukyoCount: 64,
    isOshiYatai: false,
  },
  {
    id: "kurozu-gyoza",
    name: "黒酢餃子の壺畑",
    genre: "餃子",
    location: "かごっまふるさと屋台村 7番ブース",
    businessHours: "17:30〜23:00",
    recommendedMenu: ["霧島黒酢餃子", "黒豚水餃子", "酢もつ"],
    imageUrl: "/images/kurozu-gyoza.jpg",
    description:
      "霧島産の黒酢をタレに使った餃子は一度食べたら忘れられない。パリッとジュワッの至福。",
    fukyoCount: 71,
    isOshiYatai: false,
  },
  {
    id: "yakushima-sosaku",
    name: "屋久島キッチン森の恵",
    genre: "創作料理",
    location: "かごっまふるさと屋台村 8番ブース",
    businessHours: "18:00〜23:00",
    recommendedMenu: ["飛魚つけ揚げ", "屋久鹿カルパッチョ", "たんかんシャーベット"],
    imageUrl: "/images/yakushima-sosaku.jpg",
    description:
      "屋久島の山海の幸を創作料理で。飛魚のつけ揚げは島の味そのもの。",
    fukyoCount: 53,
    isOshiYatai: false,
  },
];

/** ジャンル一覧を取得 */
export function getGenres(): string[] {
  const genres = new Set(yataiList.map((y) => y.genre));
  return Array.from(genres);
}
