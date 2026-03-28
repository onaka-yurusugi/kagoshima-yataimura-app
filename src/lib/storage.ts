/** localStorage ヘルパー — SSR-safe かつ型安全 */

const PREFIX = "yataimura_";

function getKey(key: string): string {
  return `${PREFIX}${key}`;
}

function isClient(): boolean {
  return typeof window !== "undefined";
}

/** 値を取得（存在しない場合は fallback を返す） */
export function getStoredValue<T>(key: string, fallback: T): T {
  if (!isClient()) return fallback;
  try {
    const raw = localStorage.getItem(getKey(key));
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** 値を保存 */
export function setStoredValue<T>(key: string, value: T): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(getKey(key), JSON.stringify(value));
  } catch {
    // quota exceeded — 静かに無視
  }
}

/** キーを削除 */
export function removeStoredValue(key: string): void {
  if (!isClient()) return;
  localStorage.removeItem(getKey(key));
}

// ──────────────────────────────────────────
// 布教カウント専用
// ──────────────────────────────────────────

/** ユーザーが布教済みかどうか */
export function hasFukyo(yataiId: string): boolean {
  return getStoredValue<boolean>(`fukyo_${yataiId}`, false);
}

/** 布教済みとしてマーク */
export function markFukyo(yataiId: string): void {
  setStoredValue(`fukyo_${yataiId}`, true);
}

/** 布教カウントを取得 */
export function getFukyoCount(yataiId: string, initial: number): number {
  return getStoredValue<number>(`fukyo_count_${yataiId}`, initial);
}

/** 布教カウントを保存 */
export function setFukyoCount(yataiId: string, count: number): void {
  setStoredValue(`fukyo_count_${yataiId}`, count);
}

// ──────────────────────────────────────────
// お気に入り専用
// ──────────────────────────────────────────

const FAVORITES_KEY = "favorites";

/** お気に入り一覧を取得 */
export function getFavorites(): string[] {
  return getStoredValue<string[]>(FAVORITES_KEY, []);
}

/** お気に入りに追加 */
export function addFavorite(yataiId: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(yataiId)) {
    setStoredValue(FAVORITES_KEY, [...favorites, yataiId]);
  }
}

/** お気に入りから削除 */
export function removeFavorite(yataiId: string): void {
  const favorites = getFavorites();
  setStoredValue(
    FAVORITES_KEY,
    favorites.filter((id) => id !== yataiId),
  );
}

/** お気に入りかどうか */
export function isFavorite(yataiId: string): boolean {
  return getFavorites().includes(yataiId);
}
