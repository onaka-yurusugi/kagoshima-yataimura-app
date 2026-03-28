import { FavoritesList } from "@/components/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
        <span>❤️</span>
        <span>お気に入り屋台</span>
      </h2>
      <FavoritesList />
    </div>
  );
}
