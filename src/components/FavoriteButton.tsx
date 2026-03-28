"use client";

import { useState, useCallback } from "react";
import { useFavorite, useMounted } from "@/lib/use-storage";

interface FavoriteButtonProps {
  yataiId: string;
  yataiName: string;
}

export function FavoriteButton({ yataiId, yataiName }: FavoriteButtonProps) {
  const { favorited, toggle } = useFavorite(yataiId);
  const mounted = useMounted();
  const [animating, setAnimating] = useState(false);

  const handleToggle = useCallback(() => {
    toggle();
    if (!favorited) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 600);
    }
  }, [favorited, toggle]);

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
        favorited
          ? "bg-sakurajima-50 text-sakurajima-600 hover:bg-sakurajima-100"
          : "border border-card-border bg-card-bg text-muted hover:bg-chochin-50 hover:text-foreground"
      }`}
      aria-label={`${yataiName}を${favorited ? "お気に入りから外す" : "お気に入りに追加"}`}
      aria-pressed={favorited}
    >
      <span
        className={`text-base transition-transform ${
          animating ? "animate-[heart-pop_0.6s_ease-out]" : ""
        }`}
      >
        {mounted && favorited ? "❤️" : "🤍"}
      </span>
      <span>{mounted && favorited ? "お気に入り済み" : "お気に入り"}</span>
    </button>
  );
}
