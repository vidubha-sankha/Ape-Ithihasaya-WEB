import type { KingData, Locale } from "@/lib/kings";

interface KingConstructionsProps {
  king: KingData;
  locale: Locale;
}

export default function KingConstructions({
  king,
  locale,
}: KingConstructionsProps) {
  if (!king.constructions?.length) {
    return null;
  }

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-3xl font-bold">
          {locale === "si"
            ? "ඉදිකිරීම් සහ ආගමික සේවාවන්"
            : "Constructions and Religious Patronage"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {king.constructions.map((construction) => (
            <article
              key={construction.id}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <h3 className="text-xl font-bold">
                {construction.name[locale]}
              </h3>

              {construction.location && (
                <p className="mt-2 text-sm font-semibold text-[#a56300]">
                  {construction.location[locale]}
                </p>
              )}

              {construction.description && (
                <p className="mt-4 leading-7 text-zinc-600">
                  {construction.description[locale]}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
