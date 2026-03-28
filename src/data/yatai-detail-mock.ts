import { YataiDetail } from "@/types/yatai-detail";

export const yataiDetails: YataiDetail[] = [
  {
    yataiId: "meramera-makurazaki",
    menu: [
      {
        name: "枕崎カツオラーメン",
        price: 900,
        description:
          "枕崎直送のカツオ節から取った濃厚出汁に中太ちぢれ麺。トッピングの炙りカツオが香ばしい。",
        isRecommended: true,
      },
      {
        name: "炙りチャーシュー丼",
        price: 650,
        description: "黒豚チャーシューをバーナーで炙り、特製タレで仕上げた一品。",
        isRecommended: true,
      },
      {
        name: "黒豚餃子",
        price: 500,
        description:
          "かごしま黒豚をたっぷり使った手作り餃子。パリッとした皮の食感が決め手。",
        isRecommended: false,
      },
      {
        name: "枕崎カツオの腹皮焼き",
        price: 450,
        description:
          "カツオの腹皮を塩焼きに。焼酎のアテに最高。",
        isRecommended: false,
      },
      {
        name: "さつまいもの天ぷら",
        price: 350,
        description: "甘みの強い紅はるかをカラッと揚げた素朴な一品。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c1",
        author: "カツオ好き太郎",
        content:
          "カツオラーメンは人生で一番うまいラーメン。出汁が深すぎて泣いた。毎週通ってます。",
        rating: 5,
        date: "2026-03-15",
      },
      {
        id: "c2",
        author: "鹿児島グルメ女子",
        content:
          "炙りチャーシュー丼と一緒にいただきました。店主の情熱が味に出てます！",
        rating: 5,
        date: "2026-03-10",
      },
      {
        id: "c3",
        author: "出張サラリーマン",
        content: "空港から直行で来ました。黒豚餃子もビールに合って最高。",
        rating: 4,
        date: "2026-02-28",
      },
    ],
  },
  {
    yataiId: "sakurajima-yakitori",
    menu: [
      {
        name: "桜島溶岩焼き",
        price: 800,
        description: "溶岩プレートでじっくり焼き上げた地鶏もも肉。遠赤外線効果でふっくらジューシー。",
        isRecommended: true,
      },
      {
        name: "地鶏もも串",
        price: 250,
        description: "さつま地鶏のもも肉を炭火で。塩がおすすめ。",
        isRecommended: true,
      },
      {
        name: "砂肝ポン酢",
        price: 400,
        description: "コリコリ食感の砂肝を柚子ポン酢で。さっぱり。",
        isRecommended: false,
      },
      {
        name: "鶏皮串",
        price: 200,
        description: "カリカリに焼き上げた鶏皮。焼酎のお供に。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c4",
        author: "焼き鳥マニア",
        content: "溶岩焼きは初めて。外はカリッと中はジューシーで感動。",
        rating: 5,
        date: "2026-03-12",
      },
      {
        id: "c5",
        author: "観光客A",
        content: "砂肝ポン酢がさっぱりしていて良かった。雰囲気も最高。",
        rating: 4,
        date: "2026-03-01",
      },
    ],
  },
  {
    yataiId: "tenmonkan-oden",
    menu: [
      {
        name: "さつま揚げ",
        price: 300,
        description: "鹿児島名物。ふわふわの魚のすり身を揚げた定番中の定番。",
        isRecommended: true,
      },
      {
        name: "黒豚角煮おでん",
        price: 600,
        description: "とろとろの黒豚角煮をおでん出汁で煮込んだ贅沢な一品。",
        isRecommended: true,
      },
      {
        name: "知覧茶割り",
        price: 450,
        description: "知覧産の深蒸し茶で割った焼酎。香り高い一杯。",
        isRecommended: false,
      },
      {
        name: "大根おでん",
        price: 200,
        description: "出汁がしみしみの大根。シンプルだが極上。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c6",
        author: "おでん通",
        content: "薩摩おでんの奥深さを知った。さつま揚げが別格。",
        rating: 5,
        date: "2026-03-20",
      },
      {
        id: "c7",
        author: "地元民K",
        content: "寒い日に知覧茶割りとおでん。最高の組み合わせ。",
        rating: 4,
        date: "2026-02-15",
      },
    ],
  },
  {
    yataiId: "kinko-kaisen",
    menu: [
      {
        name: "キビナゴ刺身",
        price: 600,
        description: "錦江湾産のキビナゴを新鮮なまま刺身で。酢味噌でどうぞ。",
        isRecommended: true,
      },
      {
        name: "首折れサバ",
        price: 800,
        description: "屋久島沖で獲れた首折れサバの刺身。脂がのって絶品。",
        isRecommended: true,
      },
      {
        name: "伊勢海老味噌汁",
        price: 1200,
        description: "贅沢に伊勢海老を使った味噌汁。海老の旨味が溶け出した至福の一杯。",
        isRecommended: false,
      },
      {
        name: "地魚盛り合わせ",
        price: 1500,
        description: "その日の水揚げから厳選した地魚の盛り合わせ。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c8",
        author: "海鮮ラバー",
        content: "キビナゴの刺身が透き通っていて美しい。味も最高。",
        rating: 5,
        date: "2026-03-18",
      },
    ],
  },
  {
    yataiId: "shimazu-teppan",
    menu: [
      {
        name: "黒豚ステーキ",
        price: 1800,
        description: "かごしま黒豚のロースを鉄板で豪快に。甘みのある脂が絶品。",
        isRecommended: true,
      },
      {
        name: "黒牛ハンバーグ",
        price: 1200,
        description: "鹿児島黒牛100%のハンバーグ。肉汁がジュワッとあふれる。",
        isRecommended: true,
      },
      {
        name: "焼き芋アイス",
        price: 400,
        description: "安納芋の焼き芋をアイスに仕上げた締めのデザート。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c9",
        author: "肉好きM",
        content: "黒豚ステーキの脂の甘さに驚いた。これは布教せざるを得ない。",
        rating: 5,
        date: "2026-03-22",
      },
      {
        id: "c10",
        author: "デート利用S",
        content: "黒牛ハンバーグを二人でシェア。鉄板の臨場感がいい。",
        rating: 4,
        date: "2026-03-05",
      },
    ],
  },
  {
    yataiId: "satsuma-izakaya",
    menu: [
      {
        name: "とんこつ煮込み",
        price: 700,
        description: "黒豚の骨付き肉をじっくり煮込んだ鹿児島郷土料理。",
        isRecommended: true,
      },
      {
        name: "芋焼酎飲み比べセット",
        price: 900,
        description: "厳選した3種の芋焼酎を飲み比べ。森伊蔵・村尾・魔王。",
        isRecommended: true,
      },
      {
        name: "鶏刺し",
        price: 600,
        description: "新鮮な鶏肉を刺身で。甘い醤油とおろし生姜で。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c11",
        author: "焼酎党Y",
        content: "飲み比べセットで森伊蔵が飲めるのは贅沢すぎる。",
        rating: 5,
        date: "2026-03-08",
      },
    ],
  },
  {
    yataiId: "kurozu-gyoza",
    menu: [
      {
        name: "霧島黒酢餃子",
        price: 550,
        description: "霧島産の黒酢を練り込んだ特製餃子。タレなしでも旨い。",
        isRecommended: true,
      },
      {
        name: "黒豚水餃子",
        price: 500,
        description: "もちもちの皮に黒豚の餡。スープごといただく。",
        isRecommended: true,
      },
      {
        name: "酢もつ",
        price: 400,
        description: "黒酢で和えたもつ。コリコリさっぱり。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c12",
        author: "餃子巡りN",
        content: "黒酢餃子は今まで食べた餃子の中で一番。パリッとジュワッと。",
        rating: 5,
        date: "2026-03-14",
      },
    ],
  },
  {
    yataiId: "yakushima-sosaku",
    menu: [
      {
        name: "飛魚つけ揚げ",
        price: 500,
        description: "屋久島産の飛魚を使った手作りつけ揚げ。ふわっと軽い食感。",
        isRecommended: true,
      },
      {
        name: "屋久鹿カルパッチョ",
        price: 900,
        description: "屋久島のジビエ、屋久鹿を薄切りにしてオリーブオイルと柚子胡椒で。",
        isRecommended: true,
      },
      {
        name: "たんかんシャーベット",
        price: 350,
        description: "屋久島名産のたんかんを使った爽やかなシャーベット。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c13",
        author: "島旅好きR",
        content: "屋久鹿カルパッチョは初体験。臭みゼロで驚き。",
        rating: 4,
        date: "2026-03-11",
      },
    ],
  },
];

/** 屋台IDから詳細を取得 */
export function getYataiDetail(yataiId: string): YataiDetail | undefined {
  return yataiDetails.find((d) => d.yataiId === yataiId);
}
