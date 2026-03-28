/** メニュー項目 */
export interface MenuItem {
  name: string;
  price: number;
  description: string;
  isRecommended: boolean;
}

/** 口コミコメント */
export interface YataiComment {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

/** 屋台詳細データ（メニュー・口コミを含む） */
export interface YataiDetail {
  yataiId: string;
  menu: MenuItem[];
  comments: YataiComment[];
}
