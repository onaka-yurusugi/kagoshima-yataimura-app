export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Hero skeleton */}
      <div className="mb-8 animate-pulse rounded-2xl bg-gradient-to-r from-chochin-100 to-sakurajima-100 p-6 sm:mb-10 sm:p-10">
        <div className="mx-auto h-8 w-64 rounded-lg bg-chochin-200 sm:h-10 sm:w-80" />
        <div className="mx-auto mt-3 h-4 w-48 rounded bg-chochin-200 sm:w-60" />
      </div>

      {/* Filter skeleton */}
      <div className="mb-8 flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 rounded-full bg-chochin-100 animate-skeleton-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, var(--chochin-200) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Card skeletons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-card-border bg-card-bg"
          >
            <div className="h-44 bg-gradient-to-br from-chochin-100 to-sakurajima-50 animate-skeleton-shimmer sm:h-48"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--chochin-100) 0%, var(--chochin-200) 50%, var(--chochin-100) 100%)",
                backgroundSize: "200% 100%",
                animationDelay: `${i * 0.1}s`,
              }}
            />
            <div className="space-y-3 p-4 sm:p-5">
              <div className="h-5 w-16 rounded-full bg-chochin-100" />
              <div className="h-5 w-3/4 rounded bg-chochin-100" />
              <div className="h-4 w-full rounded bg-chochin-50" />
              <div className="h-4 w-2/3 rounded bg-chochin-50" />
              <div className="flex gap-2">
                <div className="h-6 w-24 rounded-md bg-chochin-50" />
                <div className="h-6 w-20 rounded-md bg-chochin-50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
