"use client";

import Link from "next/link";
import { useFavoritesList, useMounted } from "@/lib/use-storage";

export function FavoritesList() {
  const { favorites, remove } = useFavoritesList();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-24 animate-skeleton-shimmer rounded-xl bg-gradient-to-r from-chochin-100 via-chochin-50 to-chochin-100 bg-[length:200%_100%]"
          />
        ))}
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="rounded-2xl border border-card-border bg-card-bg px-6 py-12 text-center">
        <p className="text-4xl">🤍</p>
        <p className="mt-4 text-lg font-bold text-foreground">
          まだお気に入りがありません
        </p>
        <p className="mt-2 text-sm text-muted">
          屋台の詳細ページからお気に入り登録してみましょう！
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1 rounded-full bg-sakurajima-500 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-sakurajima-600 active:scale-95"
        >
          屋台を探す 🏮
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {favorites.map((yatai) => (
        <div
          key={yatai.id}
          className="flex items-center gap-4 rounded-xl border border-card-border bg-card-bg p-4 transition-shadow hover:shadow-md"
        >
          <Link
            href={`/yatai/${yatai.id}`}
            className="flex flex-1 items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-chochin-100 text-xl">
              {yatai.isOshiYatai ? "🔥" : "🏮"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold text-foreground">{yatai.name}</p>
              <p className="truncate text-sm text-muted">
                {yatai.genre} ・ {yatai.location}
              </p>
            </div>
          </Link>

          <button
            onClick={() => remove(yatai.id)}
            className="shrink-0 rounded-full p-2 text-muted transition-colors hover:bg-sakurajima-50 hover:text-sakurajima-500"
            aria-label={`${yatai.name}をお気に入りから削除`}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
