"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  hasFukyo,
  markFukyo,
  getFukyoCount,
  setFukyoCount,
  isFavorite,
  addFavorite,
  removeFavorite,
  getFavorites,
} from "./storage";
import { Yatai } from "@/types/yatai";
import { yataiList } from "@/data/yatai-mock";

// ──────────────────────────────────────────
// localStorage 変更を通知するための仕組み
// ──────────────────────────────────────────

type Listener = () => void;
const listeners = new Set<Listener>();

function emitChange(): void {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// ──────────────────────────────────────────
// 布教フック
// ──────────────────────────────────────────

export function useFukyo(
  yataiId: string,
  initialCount: number,
): {
  pushed: boolean;
  count: number;
  doFukyo: () => void;
} {
  const pushed = useSyncExternalStore(
    subscribe,
    () => hasFukyo(yataiId),
    () => false,
  );

  const count = useSyncExternalStore(
    subscribe,
    () => getFukyoCount(yataiId, initialCount),
    () => initialCount,
  );

  const doFukyo = useCallback(() => {
    if (hasFukyo(yataiId)) return;
    const next = getFukyoCount(yataiId, initialCount) + 1;
    markFukyo(yataiId);
    setFukyoCount(yataiId, next);
    emitChange();
  }, [yataiId, initialCount]);

  return { pushed, count, doFukyo };
}

// ──────────────────────────────────────────
// お気に入りフック
// ──────────────────────────────────────────

export function useFavorite(yataiId: string): {
  favorited: boolean;
  toggle: () => void;
} {
  const favorited = useSyncExternalStore(
    subscribe,
    () => isFavorite(yataiId),
    () => false,
  );

  const toggle = useCallback(() => {
    if (isFavorite(yataiId)) {
      removeFavorite(yataiId);
    } else {
      addFavorite(yataiId);
    }
    emitChange();
  }, [yataiId]);

  return { favorited, toggle };
}

// ──────────────────────────────────────────
// お気に入り一覧フック
// ──────────────────────────────────────────

/** JSON文字列でスナップショットを安定化 */
function getFavoritesSnapshot(): string {
  return JSON.stringify(getFavorites());
}

function getFavoritesServerSnapshot(): string {
  return "[]";
}

export function useFavoritesList(): {
  favorites: Yatai[];
  remove: (yataiId: string) => void;
} {
  const raw = useSyncExternalStore(
    subscribe,
    getFavoritesSnapshot,
    getFavoritesServerSnapshot,
  );

  const ids: string[] = JSON.parse(raw);
  const favorites = ids
    .map((id) => yataiList.find((y) => y.id === id))
    .filter((y): y is Yatai => y !== undefined);

  const remove = useCallback((yataiId: string) => {
    removeFavorite(yataiId);
    emitChange();
  }, []);

  return { favorites, remove };
}

// ──────────────────────────────────────────
// マウント検出フック（SSR hydration 用）
// ──────────────────────────────────────────

export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
