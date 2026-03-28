import { YataiDetail } from "@/types/yatai-detail";

export const yataiDetails: YataiDetail[] = [
  {
    yataiId: "meramera-makurazaki",
    menu: [
      {
        name: "カツオの藁焼き",
        price: 980,
        description:
          "枕崎近海市場で競り落とした超新鮮なカツオを、藁でメラメラと焼き上げる看板メニュー。藁の香りとカツオの旨みが絶妙。",
        isRecommended: true,
      },
      {
        name: "枕崎セット",
        price: 1280,
        description:
          "鰹の刺身・藁焼き鰹・唐揚げにサラダ・味噌汁・漬物がついたランチの人気セット。",
        isRecommended: true,
      },
      {
        name: "親子丼セット",
        price: 950,
        description:
          "唐揚げと赤だし（味噌汁）がセット。大盛り無料。ランチタイムの定番。",
        isRecommended: false,
      },
      {
        name: "地鶏の藁焼き",
        price: 880,
        description:
          "鹿児島名物の地鶏刺しも藁焼きで風味豊かに。藁の香ば���さが鶏の旨みを引き立てる。",
        isRecommended: true,
      },
      {
        name: "黒豚の藁焼き",
        price: 980,
        description:
          "かごしま黒豚もメラメラと藁焼きに。���の甘みと藁の香りのハーモニー。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c1",
        author: "カツオ好き太郎",
        content:
          "藁焼きの香りがすごい！枕崎の仲買人直営だけあって鮮度が段違い。5月の初鰹の時期にまた来たい。",
        rating: 5,
        date: "2026-03-15",
      },
      {
        id: "c2",
        author: "鹿児島グルメ女子",
        content:
          "枕崎セットのコスパが最高。藁焼き鰹も刺身も唐揚げも全部美味しい。津貫のウィスキーも気になる。",
        rating: 5,
        date: "2026-03-10",
      },
      {
        id: "c3",
        author: "出張サラリーマン",
        content:
          "鹿児島中央駅の地下で本格的な藁��きが食べられるとは。ランチの親子丼セット950円はお値打ち。",
        rating: 4,
        date: "2026-02-28",
      },
    ],
  },
  {
    yataiId: "nice-toro",
    menu: [
      {
        name: "黒豚炉端焼き",
        price: 1200,
        description: "川辺産の黒豚を炉端で豪快に焼き上げる。脂の甘みが口いっぱいに広がる。",
        isRecommended: true,
      },
      {
        name: "黒牛ステーキ",
        price: 1800,
        description: "鹿児島黒牛を鉄��で。とろけるような食感。",
        isRecommended: true,
      },
    ],
    comments: [
      {
        id: "c4",
        author: "肉好きM",
        content: "黒豚の炉端焼きが絶品。脂が甘くてジューシー。",
        rating: 5,
        date: "2026-03-12",
      },
    ],
  },
  {
    yataiId: "kenmun-sakaba",
    menu: [
      {
        name: "島豚料理",
        price: 900,
        description: "奄美大島の島豚を使った郷土料理。独特の風味がクセになる。",
        isRecommended: true,
      },
      {
        name: "油そうめん",
        price: 650,
        description: "奄美の家庭料理。炒めたそうめんに島の具材がたっぷり。",
        isRecommended: true,
      },
      {
        name: "黒糖焼酎",
        price: 500,
        description: "奄美群島でのみ製造が許された黒糖焼酎。まろやかな甘み。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c5",
        author: "島旅好きR",
        content: "���児島市内で奄美料理が食べられるのは嬉しい。黒糖焼酎の品揃えも豊富。",
        rating: 4,
        date: "2026-03-01",
      },
    ],
  },
  {
    yataiId: "satsuma",
    menu: [
      {
        name: "黒豚しゃぶしゃぶ",
        price: 1500,
        description: "かごしま黒豚を薄切りにしてさっとしゃぶしゃぶ。上質な脂の甘みが絶品。",
        isRecommended: true,
      },
      {
        name: "黒牛しゃぶしゃぶ",
        price: 2000,
        description: "鹿児島黒牛のとろけるようなしゃぶしゃぶ。贅��な一品。",
        isRecommended: true,
      },
    ],
    comments: [
      {
        id: "c6",
        author: "しゃぶ���ゃぶ通",
        content: "黒豚の脂の甘さに感動。屋台村でこのクオリティは驚き。",
        rating: 5,
        date: "2026-03-20",
      },
    ],
  },
  {
    yataiId: "kurokoro-ya",
    menu: [
      {
        name: "知覧鶏の炭火焼き",
        price: 800,
        description: "知覧の地鶏を炭火でじっくり。外はカリッと中はジューシー。",
        isRecommended: true,
      },
      {
        name: "焼き鳥盛り合わせ",
        price: 750,
        description: "もも・せせり・砂肝・皮など各部位を炭火で。塩がおすすめ。",
        isRecommended: true,
      },
    ],
    comments: [
      {
        id: "c7",
        author: "焼き鳥マニア",
        content: "知覧鶏は弾力があって旨味が濃い。炭火の香りが最高。",
        rating: 5,
        date: "2026-03-18",
      },
    ],
  },
  {
    yataiId: "kawayutaka",
    menu: [
      {
        name: "大隅産うなぎ蒲焼き",
        price: 1800,
        description: "大隅半島はうな��の養殖日本一。肉厚でふっくらの蒲焼き。",
        isRecommended: true,
      },
      {
        name: "鹿屋の焼鶏",
        price: 700,
        description: "鹿屋の地鶏を���ばしく焼き上げた逸品。",
        isRecommended: true,
      },
    ],
    comments: [
      {
        id: "c8",
        author: "うなぎ好きT",
        content: "大隅のうな��は脂がのっていてふっくら。たれも甘すぎず上品。",
        rating: 5,
        date: "2026-03-22",
      },
    ],
  },
  {
    yataiId: "yagio",
    menu: [
      {
        name: "黒豚とんかつ",
        price: 1200,
        description: "かごしま黒豚をサクッと揚げたとんかつ。衣の食感と肉汁のバランスが絶妙。",
        isRecommended: true,
      },
      {
        name: "垂水の郷土料理",
        price: 800,
        description: "垂水の食材を使った日替わりの郷土料理。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c9",
        author: "とんかつ巡りN",
        content: "黒豚とんかつの脂が甘くて衣がサクサク。ご飯が進む。",
        rating: 5,
        date: "2026-03-14",
      },
    ],
  },
  {
    yataiId: "hinotama-boy",
    menu: [
      {
        name: "長島の海鮮盛り",
        price: 1300,
        description: "長島の海で獲れた新鮮な魚介の盛り合わせ。",
        isRecommended: true,
      },
      {
        name: "地鶏炭火焼き",
        price: 850,
        description: "長島の地鶏を炭火で豪快に。",
        isRecommended: true,
      },
    ],
    comments: [
      {
        id: "c10",
        author: "海鮮ラバー",
        content: "長島の魚は鮮度抜群。火の玉のような店主の情熱が料理に出てる。",
        rating: 4,
        date: "2026-03-05",
      },
    ],
  },
  {
    yataiId: "tengoku-to-jigoku",
    menu: [
      {
        name: "焼餃子",
        price: 500,
        description: "パリッとジュワッの焼餃子。焼酎との相性は天国級。",
        isRecommended: true,
      },
      {
        name: "焼豚",
        price: 650,
        description: "じっくり焼き上げた焼豚。��辛ダレがやみつき。",
        isRecommended: true,
      },
      {
        name: "焼酎飲み比べ",
        price: 800,
        description: "厳選3種の焼酎を飲み比べ。餃子と焼豚���合う銘柄を厳選。",
        isRecommended: false,
      },
    ],
    comments: [
      {
        id: "c11",
        author: "餃子巡りK",
        content: "焼餃子×焼豚×焼酎の三位一体。まさに天国。",
        rating: 5,
        date: "2026-03-08",
      },
    ],
  },
];

/** 屋台IDから詳細を取得 */
export function getYataiDetail(yataiId: string): YataiDetail | undefined {
  return yataiDetails.find((d) => d.yataiId === yataiId);
}
