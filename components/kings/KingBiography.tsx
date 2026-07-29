import type { KingData, Locale } from "@/lib/kings";

interface KingBiographyProps {
  king: KingData;
  locale: Locale;
}

export default function KingBiography({
  king,
  locale,
}: KingBiographyProps) {
  const sections = king.biography?.[locale];

  if (!sections?.length) {
    return null;
  }

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-3xl font-bold">
          {locale === "si" ? "චරිතාපදානය" : "Biography"}
        </h2>

        <div className="mt-8 space-y-9">
          {sections.map((section) => (
            <article key={section.heading}>
              <h3 className="text-xl font-bold">
                {section.heading}
              </h3>

              <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
