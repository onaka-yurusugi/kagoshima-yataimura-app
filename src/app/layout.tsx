import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "かごっまふるさと屋台村",
  description: "鹿児島の美味しい屋台を見つけて、推しを布教しよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-chochin-200 bg-gradient-to-r from-sakurajima-700 via-sakurajima-600 to-chochin-600 shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="提灯">
                🏮
              </span>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                  かごっまふるさと屋台村
                </h1>
                <p className="hidden text-xs text-sakurajima-100 sm:block">
                  鹿児島の美味しい屋台を見つけて、推しを布教しよう！
                </p>
              </div>
            </div>
            <nav className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                屋台一覧
              </Link>
              <Link
                href="/favorites"
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                ❤️ お気に入り
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-chochin-200 bg-gradient-to-r from-chochin-900 via-sakurajima-900 to-chochin-900">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <span className="text-xl" role="img" aria-label="桜島">
                  🌋
                </span>
                <span className="text-sm font-bold text-chochin-200">
                  かごっまふるさと屋台村
                </span>
                <span className="text-xl" role="img" aria-label="提灯">
                  🏮
                </span>
              </div>
              <p className="text-xs text-chochin-400">
                桜島を望む錦江湾のほとり、鹿児島の味と人情が集まる場所
              </p>
              <p className="text-xs text-chochin-500">
                &copy; 2026 かごっまふるさと屋台村 &mdash; SOS団制作
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
