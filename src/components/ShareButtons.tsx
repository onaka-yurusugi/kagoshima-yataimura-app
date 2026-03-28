"use client";

import { useState, useCallback } from "react";

interface ShareButtonsProps {
  yataiName: string;
  yataiId: string;
}

function buildShareText(yataiName: string): string {
  return `🏮 ${yataiName} がアツい！かごっまふるさと屋台村で推し屋台を見つけたよ 🌋🔥`;
}

function buildShareUrl(yataiId: string): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/yatai/${yataiId}`;
}

export function ShareButtons({ yataiName, yataiId }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = buildShareText(yataiName);

  const handleTwitterShare = useCallback(() => {
    const url = buildShareUrl(yataiId);
    const params = new URLSearchParams({
      text: shareText,
      url,
      hashtags: "鹿児島屋台村,推し屋台",
    });
    window.open(
      `https://twitter.com/intent/tweet?${params.toString()}`,
      "_blank",
      "noopener,noreferrer,width=550,height=420",
    );
  }, [yataiId, shareText]);

  const handleLineShare = useCallback(() => {
    const url = buildShareUrl(yataiId);
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  }, [yataiId, shareText]);

  const handleCopyLink = useCallback(async () => {
    const url = buildShareUrl(yataiId);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: 古いブラウザ向け
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [yataiId]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-medium text-muted">シェア:</span>

      {/* Twitter / X */}
      <button
        onClick={handleTwitterShare}
        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-80 active:scale-95"
        aria-label="Xでシェア"
      >
        <XIcon />
        <span>ポスト</span>
      </button>

      {/* LINE */}
      <button
        onClick={handleLineShare}
        className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-80 active:scale-95"
        aria-label="LINEでシェア"
      >
        <LineIcon />
        <span>LINE</span>
      </button>

      {/* リンクコピー */}
      <button
        onClick={handleCopyLink}
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
          copied
            ? "bg-kinkowan-500 text-white"
            : "border border-card-border bg-card-bg text-foreground hover:bg-chochin-50"
        }`}
        aria-label="リンクをコピー"
      >
        {copied ? (
          <>
            <CheckIcon />
            <span>コピー済み！</span>
          </>
        ) : (
          <>
            <LinkIcon />
            <span>リンク</span>
          </>
        )}
      </button>
    </div>
  );
}

// ──────────────────────────────────────────
// SVG アイコン
// ──────────────────────────────────────────

function XIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .348-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .349-.281.63-.63.63h-2.386a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 .63-.63h2.386c.349 0 .63.282.63.63 0 .349-.281.631-.63.631H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.63.63.629.629 0 0 1-.51-.26l-2.443-3.317v2.947a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 .63-.63c.2 0 .385.096.51.26l2.443 3.317V8.108a.63.63 0 0 1 1.26 0v4.771zm-5.741 0a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 1.26 0v4.771zm-2.466.63H4.917a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 1.26 0v4.141h1.756c.348 0 .63.283.63.63 0 .349-.282.63-.63.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
