import { notFound } from "next/navigation";
import Link from "next/link";
import { yataiList } from "@/data/yatai-mock";
import { getYataiDetail } from "@/data/yatai-detail-mock";
import { MenuItem, YataiComment } from "@/types/yatai-detail";
import { FukyoButton } from "@/components/FukyoButton";
import { ShareButtons } from "@/components/ShareButtons";
import { FavoriteButton } from "@/components/FavoriteButton";

export default async function YataiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const yatai = yataiList.find((y) => y.id === id);

  if (!yatai) {
    notFound();
  }

  const detail = getYataiDetail(id);
  const isOshi = yatai.isOshiYatai;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* 戻るリンク */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-chochin-500"
      >
        <span>&larr;</span>
        <span>屋台一覧に戻る</span>
      </Link>

      {/* ヘッダー */}
      <div
        className={`relative mt-4 overflow-hidden rounded-2xl p-8 ${
          isOshi
            ? "bg-gradient-to-br from-sakurajima-600 via-sakurajima-500 to-chochin-400 text-white shadow-2xl"
            : "bg-gradient-to-br from-chochin-100 via-sakurajima-50 to-chochin-50 text-foreground"
        }`}
      >
        {/* 推し屋台の炎エフェクト */}
        {isOshi && (
          <>
            <div className="animate-flame-flicker pointer-events-none absolute -left-4 -top-4 text-6xl opacity-30 blur-sm">
              🔥
            </div>
            <div className="animate-flame-flicker pointer-events-none absolute -bottom-2 -right-4 text-6xl opacity-30 blur-sm">
              🔥
            </div>
            <div className="animate-flame-flicker pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-5xl opacity-20 blur-sm">
              🔥
            </div>
          </>
        )}

        <div className="relative">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                isOshi
                  ? "bg-white/20 text-white"
                  : "bg-chochin-100 text-chochin-700"
              }`}
            >
              {yatai.genre}
            </span>
            {isOshi && (
              <span className="animate-pulse-glow inline-flex items-center gap-1 rounded-full bg-chochin-300 px-3 py-1 text-xs font-extrabold text-sakurajima-800 shadow">
                🔥 推し屋台
              </span>
            )}
          </div>

          <h1
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isOshi ? "drop-shadow-lg" : ""
            }`}
          >
            {yatai.name}
          </h1>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isOshi ? "text-white/90" : "text-muted"
            }`}
          >
            {yatai.description}
          </p>

          <div
            className={`mt-4 flex flex-col gap-1 text-sm ${
              isOshi ? "text-white/80" : "text-muted"
            }`}
          >
            <p>📍 {yatai.location}</p>
            <p>🕐 {yatai.businessHours}</p>
          </div>
        </div>
      </div>

      {/* インタラクションエリア */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <FukyoButton
          yataiId={yatai.id}
          yataiName={yatai.name}
          initialCount={yatai.fukyoCount}
        />
        <FavoriteButton yataiId={yatai.id} yataiName={yatai.name} />
        <ShareButtons yataiName={yatai.name} yataiId={yatai.id} />
      </div>

      {/* メニュー一覧 */}
      {detail && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            メニュー
          </h2>
          <div className="space-y-4">
            {detail.menu.map((item) => (
              <MenuCard key={item.name} item={item} isOshi={isOshi} />
            ))}
          </div>
        </section>
      )}

      {/* 口コミセクション */}
      {detail && detail.comments.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            口コミ
          </h2>
          <div className="space-y-4">
            {detail.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function MenuCard({ item, isOshi }: { item: MenuItem; isOshi: boolean }) {
  return (
    <div
      className={`rounded-xl border p-5 transition-shadow hover:shadow-md ${
        item.isRecommended && isOshi
          ? "border-sakurajima-300 bg-sakurajima-50 shadow-sm"
          : item.isRecommended
            ? "border-chochin-300 bg-chochin-50 shadow-sm"
            : "border-card-border bg-card-bg"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-foreground">
              {item.name}
            </h3>
            {item.isRecommended && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold text-white ${
                  isOshi
                    ? "bg-sakurajima-500"
                    : "bg-chochin-500"
                }`}
              >
                おすすめ
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted">
            {item.description}
          </p>
        </div>
        <div className="shrink-0 text-lg font-bold text-foreground">
          ¥{item.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: YataiComment }) {
  return (
    <div className="rounded-xl border border-card-border bg-card-bg p-5">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-bold text-foreground">
          {comment.author}
        </span>
        <span className="text-xs text-muted">{comment.date}</span>
      </div>
      <div className="mb-2 flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < comment.rating ? "text-chochin-400" : "text-card-border"}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted">
        {comment.content}
      </p>
    </div>
  );
}
