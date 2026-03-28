"use client";

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string | null;
  onSelect: (genre: string | null) => void;
}

export function GenreFilter({
  genres,
  selectedGenre,
  onSelect,
}: GenreFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          selectedGenre === null
            ? "bg-sakurajima-500 text-white shadow-md shadow-sakurajima-200"
            : "bg-chochin-50 text-chochin-700 ring-1 ring-chochin-200 hover:bg-chochin-100 hover:ring-chochin-300"
        }`}
      >
        すべて
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
            selectedGenre === genre
              ? "bg-sakurajima-500 text-white shadow-md shadow-sakurajima-200"
              : "bg-chochin-50 text-chochin-700 ring-1 ring-chochin-200 hover:bg-chochin-100 hover:ring-chochin-300"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
