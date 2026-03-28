/** 屋台のジャンル */
export type YataiGenre =
  | "ラーメン"
  | "焼き鳥"
  | "おでん"
  | "海鮮"
  | "鉄板焼き"
  | "居酒屋"
  | "餃子"
  | "創作料理";

/** 屋台データ */
export interface Yatai {
  id: string;
  name: string;
  genre: YataiGenre;
  location: string;
  businessHours: string;
  recommendedMenu: string[];
  imageUrl: string;
  description: string;
  fukyoCount: number;
  isOshiYatai: boolean;
}
