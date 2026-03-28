"use client";

import { useState, useCallback } from "react";
import { useFukyo, useMounted } from "@/lib/use-storage";

interface FukyoButtonProps {
  yataiId: string;
  yataiName: string;
  initialCount: number;
}

export function FukyoButton({
  yataiId,
  yataiName,
  initialCount,
}: FukyoButtonProps) {
  const { pushed, count, doFukyo } = useFukyo(yataiId, initialCount);
  const mounted = useMounted();
  const [erupting, setErupting] = useState(false);

  const handleClick = useCallback(() => {
    if (pushed) return;
    doFukyo();
    setErupting(true);
    setTimeout(() => setErupting(false), 1200);
  }, [pushed, doFukyo]);

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {/* 噴火エフェクト — 桜島噴火をイメージ */}
      {erupting && (
        <div className="pointer-events-none absolute -inset-8 z-10">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 animate-[eruption-rise_1.2s_ease-out_forwards] text-3xl">
            🌋
          </span>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 animate-[eruption-particle_1s_ease-out_forwards] text-lg"
              style={{
                animationDelay: `${i * 80}ms`,
                ["--particle-angle" as string]: `${i * 60}deg`,
              }}
            >
              🔥
            </span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span
              key={`sakura-${i}`}
              className="absolute left-1/2 top-1/2 animate-[eruption-particle_1.2s_ease-out_forwards] text-sm opacity-80"
              style={{
                animationDelay: `${200 + i * 100}ms`,
                ["--particle-angle" as string]: `${45 + i * 90}deg`,
              }}
            >
              🌸
            </span>
          ))}
        </div>
      )}

      <button
        onClick={handleClick}
        disabled={pushed}
        className={`relative z-20 inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-bold shadow-lg transition-all ${
          pushed
            ? "cursor-default bg-card-border text-muted"
            : "bg-sakurajima-500 text-white hover:bg-sakurajima-600 hover:shadow-xl active:scale-95"
        } ${erupting ? "animate-[eruption-shake_0.4s_ease-in-out_3]" : ""}`}
        aria-label={`${yataiName}を布教する`}
      >
        <span className={erupting ? "animate-bounce" : ""}>🔥</span>
        <span>
          {!mounted
            ? "布教する！"
            : pushed
              ? "布教済み！"
              : "この屋台を布教する！"}
        </span>
        <span className="ml-1 rounded-full bg-white/20 px-2.5 py-0.5 text-sm">
          {count}
        </span>
      </button>

      {pushed && mounted && (
        <span className="text-xs text-sakurajima-500">
          布教ありがとう！🔥
        </span>
      )}
    </div>
  );
}
