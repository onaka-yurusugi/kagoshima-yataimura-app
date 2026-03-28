import { yataiList, getGenres } from "@/data/yatai-mock";
import { YataiList } from "@/components/YataiList";
import { FukyoRanking } from "@/components/FukyoRanking";

export default function HomePage() {
  const genres = getGenres();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Hero section */}
      <section className="mb-8 rounded-2xl bg-gradient-to-r from-sakurajima-600 via-chochin-600 to-kinkowan-600 p-6 text-center text-white shadow-lg sm:mb-10 sm:p-10">
        <h2 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
          🌋 鹿児島の味、ここに集結 🏮
        </h2>
        <p className="text-sm text-white/85 sm:text-base">
          桜島を望む屋台村で、あなたの「推し屋台」を見つけよう。
          <br className="hidden sm:block" />
          気に入ったら布教して、みんなに広めよう！
        </p>
      </section>

      {/* Yatai list */}
      <YataiList yataiList={yataiList} genres={genres} />

      {/* 布教ランキング */}
      <div className="mt-10">
        <FukyoRanking yataiList={yataiList} />
      </div>
    </div>
  );
}
