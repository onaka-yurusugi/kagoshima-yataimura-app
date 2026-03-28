import Link from "next/link";
import { Yatai } from "@/types/yatai";

interface YataiCardProps {
  yatai: Yatai;
}

export function YataiCard({ yatai }: YataiCardProps) {
  const isOshi = yatai.isOshiYatai;

  return (
    <Link href={`/yatai/${yatai.id}`} className="block">
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isOshi
          ? "animate-pulse-glow border-sakurajima-400 bg-gradient-to-br from-sakurajima-50 via-card-bg to-chochin-50"
          : "border-card-border bg-card-bg hover:border-chochin-300 hover:shadow-chochin-200"
      }`}
    >
      {/* Oshi badge */}
      {isOshi && (
        <div className="absolute -top-0 left-0 z-10 rounded-br-xl bg-gradient-to-r from-sakurajima-600 to-chochin-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
          🔥 推し屋台
        </div>
      )}

      {/* Sparkle decorations for oshi */}
      {isOshi && (
        <>
          <div className="animate-sparkle absolute right-3 top-3 text-lg" style={{ animationDelay: "0s" }}>
            ✨
          </div>
          <div className="animate-sparkle absolute right-8 top-8 text-sm" style={{ animationDelay: "0.7s" }}>
            ✨
          </div>
          <div className="animate-sparkle absolute right-5 top-14 text-xs" style={{ animationDelay: "1.4s" }}>
            ✨
          </div>
        </>
      )}

      {/* Image placeholder with genre emoji */}
      <div
        className={`flex h-44 items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] sm:h-48 ${
          isOshi
            ? "bg-gradient-to-br from-sakurajima-500 via-chochin-500 to-sakurajima-400 animate-flame-flicker"
            : "bg-gradient-to-br from-chochin-100 via-sakurajima-50 to-chochin-50"
        }`}
      >
        <span className={`drop-shadow-lg ${isOshi ? "text-5xl" : "text-4xl"}`}>
          {genreEmoji(yatai.genre)}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5">
        {/* Genre tag */}
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-chochin-100 px-2.5 py-0.5 text-xs font-medium text-chochin-700">
            {yatai.genre}
          </span>
        </div>

        {/* Name */}
        <h3
          className={`mb-1 text-base font-bold sm:text-lg ${
            isOshi ? "text-sakurajima-700" : "text-foreground"
          }`}
        >
          {yatai.name}
        </h3>

        {/* Description */}
        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {yatai.description}
        </p>

        {/* Info */}
        <div className="mb-3 space-y-1 text-xs text-muted">
          <p>📍 {yatai.location}</p>
          <p>🕐 {yatai.businessHours}</p>
        </div>

        {/* Menu tags */}
        <div className="flex flex-wrap gap-1.5">
          {yatai.recommendedMenu.map((menu) => (
            <span
              key={menu}
              className="rounded-md bg-chochin-50 px-2 py-0.5 text-xs text-chochin-800 ring-1 ring-chochin-200"
            >
              {menu}
            </span>
          ))}
        </div>

        {/* Fukyo count */}
        <div className="mt-4 flex items-center gap-1.5 text-sm">
          <span className="text-sakurajima-500">🔥</span>
          <span className="font-bold text-sakurajima-600">
            {yatai.fukyoCount}
          </span>
          <span className="text-muted">布教</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

function genreEmoji(genre: string): string {
  const map: Record<string, string> = {
    ラーメン: "🍜",
    焼き鳥: "🍗",
    おでん: "🍢",
    海鮮: "🐟",
    鉄板焼き: "🥩",
    居酒屋: "🍶",
    餃子: "🥟",
    創作料理: "🍽️",
  };
  return map[genre] ?? "🏮";
}
