import type { KingData, Locale } from "@/lib/kings";

interface KingSourcesProps {
  king: KingData;
  locale: Locale;
}

export default function KingSources({
  king,
  locale,
}: KingSourcesProps) {
  if (!king.sourceIds?.length) {
    return null;
  }

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-3xl font-bold">
          {locale === "si"
            ? "ඓතිහාසික මූලාශ්ර"
            : "Historical Sources"}
        </h2>

        <div className="mt-6 space-y-3">
          {king.sourceIds.map((sourceId) => (
            <div
              key={sourceId}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-700"
            >
              {sourceId}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
