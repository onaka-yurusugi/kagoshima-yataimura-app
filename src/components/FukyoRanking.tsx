"use client";

import Link from "next/link";
import { Yatai } from "@/types/yatai";

interface FukyoRankingProps {
  yataiList: Yatai[];
}

const RANK_STYLES: Record<number, string> = {
  0: "bg-gradient-to-r from-chochin-400 to-sakurajima-400 text-white shadow-md",
  1: "bg-gradient-to-r from-chochin-200 to-chochin-300 text-chochin-800",
  2: "bg-gradient-to-r from-sakurajima-100 to-chochin-100 text-chochin-700",
};

const RANK_EMOJI: Record<number, string> = {
  0: "🥇",
  1: "🥈",
  2: "🥉",
};

export function FukyoRanking({ yataiList }: FukyoRankingProps) {
  const ranked = [...yataiList]
    .sort((a, b) => b.fukyoCount - a.fukyoCount)
    .slice(0, 5);

  return (
    <section className="rounded-2xl border border-card-border bg-card-bg p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
        <span>🔥</span>
        <span>布教ランキング</span>
      </h3>

      <ol className="space-y-2">
        {ranked.map((yatai, index) => (
          <li key={yatai.id}>
            <Link
              href={`/yatai/${yatai.id}`}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:shadow-md ${
                RANK_STYLES[index] ?? "bg-chochin-50 text-foreground"
              }`}
            >
              <span className="text-lg">
                {RANK_EMOJI[index] ?? `${index + 1}`}
              </span>
              <span className="flex-1 truncate font-bold">{yatai.name}</span>
              <span className="flex items-center gap-1 text-sm">
                <span>🔥</span>
                <span>{yatai.fukyoCount}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
