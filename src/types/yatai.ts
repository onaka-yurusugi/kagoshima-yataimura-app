/** 屋台のエリア */
export type YataiArea = "バスチカ" | "ライカ";

/** 屋台のサブエリア（バスチカのみ） */
export type YataiSubArea = "南薩摩・離島" | "北薩摩" | "大隅";

/** 屋台のジャンル */
export type YataiGenre =
  | "海鮮・炉端"
  | "肉炉端"
  | "奄美料理"
  | "海鮮・鶏"
  | "イタリアンバル"
  | "寿司・海鮮"
  | "焼き鳥・炭火焼き"
  | "海鮮・天ぷら"
  | "灰干し料理"
  | "鶏鉄板焼"
  | "焼とん・野菜"
  | "黒豚しゃぶしゃぶ"
  | "姶良料理"
  | "海鮮・地鶏"
  | "とんかつ"
  | "ホルモン・肉"
  | "うなぎ・焼鶏"
  | "バー＆カフェ"
  | "串焼き"
  | "鶏・鰻炭火焼き"
  | "海鮮・焼酎"
  | "鉄板焼き"
  | "寿司・刺身"
  | "食堂"
  | "焼餃子・焼豚";

/** 屋台データ */
export interface Yatai {
  id: string;
  name: string;
  genre: YataiGenre;
  area: YataiArea;
  subArea?: YataiSubArea;
  region: string;
  location: string;
  businessHours: string;
  closedDays: string;
  recommendedMenu: string[];
  imageUrl: string;
  description: string;
  fukyoCount: number;
  isOshiYatai: boolean;
}
