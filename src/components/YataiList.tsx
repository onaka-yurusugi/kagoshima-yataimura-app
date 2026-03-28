"use client";

import { useState } from "react";
import { Yatai } from "@/types/yatai";
import { YataiCard } from "./YataiCard";
import { GenreFilter } from "./GenreFilter";

interface YataiListProps {
  yataiList: Yatai[];
  genres: string[];
}

export function YataiList({ yataiList, genres }: YataiListProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filtered = selectedGenre
    ? yataiList.filter((y) => y.genre === selectedGenre)
    : yataiList;

  return (
    <div>
      <div className="mb-8">
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
