"use client";

import { useState } from "react";
import { Yatai } from "@/types/yatai";
import { YataiCard } from "./YataiCard";
import { GenreFilter } from "./GenreFilter";

interface YataiListProps {
  yataiList: Yatai[];
  genres: string[];
}

type AreaFilter = "すべて" | "バスチカ" | "ライカ";

export function YataiList({ yataiList, genres }: YataiListProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<AreaFilter>("すべて");

  const areas: AreaFilter[] = ["すべて", "バスチカ", "ライカ"];

  const filtered = yataiList
    .filter((y) => (selectedArea === "すべて" ? true : y.area === selectedArea))
    .filter((y) => (selectedGenre ? y.genre === selectedGenre : true));

  return (
    <div>
      {/* エリアフィルター */}
      <div className="mb-4">
        <h3 className="mb-2 text-sm font-bold text-muted">エリア</h3>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                selectedArea === area
                  ? "bg-kinkowan-600 text-white shadow-md shadow-kinkowan-200"
                  : "bg-chochin-50 text-chochin-700 ring-1 ring-chochin-200 hover:bg-chochin-100 hover:ring-chochin-300"
              }`}
            >
              {area === "すべて" ? `すべて（${yataiList.length}店舗）` : `${area}エリア`}
            </button>
          ))}
        </div>
      </div>

      {/* ジャンルフィルター */}
      <div className="mb-8">
        <h3 className="mb-2 text-sm font-bold text-muted">ジャンル</h3>
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((yatai) => (
          <YataiCard key={yatai.id} yatai={yatai} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-gray-500">
          該当する屋台がありません
        </p>
      )}
    </div>
  );
}
