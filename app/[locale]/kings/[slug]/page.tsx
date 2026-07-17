import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getKingBySlug, getKings } from "@/lib/kings";
import type { KingRecord, KingSourceRecord } from "@/lib/kings";

type Locale = "si" | "en";

type KingDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales: Locale[] = ["si", "en"];
  const allKings = getKings("si"); // dynamic fallback handles translations but static generation just needs the slug keys

  return locales.flatMap((locale) =>
    allKings.map((king) => ({
      locale,
      slug: king.slug,
    }))
  );
}

export default async function KingDetailPage({ params }: KingDetailPageProps) {
  const { locale, slug } = await params;
  if (locale !== "si" && locale !== "en") {
    notFound();
  }
  const safeLocale = locale as Locale;
  const king = getKingBySlug(slug, safeLocale);
  if (!king) {
    notFound();
  }

  const isSinhala = safeLocale === "si";

  // Predecessor/Successor/Family lookups
  const allKingsInLocale = getKings(safeLocale);
  const predecessor = king.predecessorId
    ? allKingsInLocale.find((item) => item.id === king.predecessorId)
    : null;

  const successor = king.successorId
    ? allKingsInLocale.find((item) => item.id === king.successorId)
    : null;

  const father = king.fatherId
    ? allKingsInLocale.find((item) => item.id === king.fatherId)
    : null;

  const mother = king.motherId
    ? allKingsInLocale.find((item) => item.id === king.motherId)
    : null;

  const children = allKingsInLocale.filter((item) =>
    king.childIds.includes(item.id)
  );

  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`/${safeLocale}/kings`}
          className="font-semibold text-amber-800 transition hover:text-amber-600 hover:underline"
        >
          ← {isSinhala ? "සියලු රජවරු" : "All Kings"}
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-300 shadow-xl">
          <Image
            src={king.image}
            alt={king.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <EvidenceBadge evidenceLevel={king.evidenceLevel} locale={safeLocale} />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
            {king.kingdomName}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {king.name}
          </h1>
          <p className="mt-5 text-lg text-stone-500">{king.summary}</p>
          <dl className="mt-10 grid gap-5 rounded-3xl bg-white p-7 shadow-sm sm:grid-cols-2">
            <QuickFact
              label={isSinhala ? "රාජ්‍ය සමය" : "Reign Period"}
              value={king.reignDisplay}
            />
            <QuickFact
              label={isSinhala ? "රාජධානිය" : "Kingdom"}
              value={king.kingdomName}
            />
            <QuickFact
              label={isSinhala ? "රාජ වංශය" : "Dynasty"}
              value={king.dynastyName ?? ""}
            />
            <QuickFact
              label={isSinhala ? "පියා" : "Father"}
              value={
                father
                  ? father.name
                  : isSinhala
                    ? "තොරතුරු නොමැත"
                    : "No information available"
              }
            />
          </dl>
        </div>
      </section>

      {king.biography && (
        <ContentSection title={isSinhala ? "චරිතාපදානය" : "Biography"}>
          <p className="max-w-5xl text-lg leading-9 text-stone-700 whitespace-pre-line">
            {king.biography}
          </p>
        </ContentSection>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-stone-950 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            {isSinhala ? "රාජ පෙළපත" : "Royal Line"}
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {isSinhala ? "රාජ අනුප්‍රාප්තිය" : "Royal Succession"}
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <SuccessionCard
              locale={safeLocale}
              label={isSinhala ? "පෙර රජු" : "Previous King"}
              direction="←"
              targetKing={predecessor}
              emptyText={isSinhala ? "තොරතුරු නොමැත" : "No information available"}
            />

            <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border-2 border-amber-500 bg-stone-900 p-6 text-center">
              <p className="text-sm font-semibold text-amber-400">
                {isSinhala ? "වත්මන් රජු" : "Current King"}
              </p>

              <p className="mt-4 text-xl font-bold">{king.name}</p>

              <p className="mt-2 text-sm text-stone-400">{king.reignDisplay}</p>
            </div>

            <SuccessionCard
              locale={safeLocale}
              label={isSinhala ? "ඊළඟ රජු" : "Next King"}
              direction="→"
              targetKing={successor}
              emptyText={isSinhala ? "තොරතුරු නොමැත" : "No information available"}
            />
          </div>
        </div>
      </section>

      <ContentSection title={isSinhala ? "පවුල් තොරතුරු" : "Family"}>
        <div className="grid gap-6 md:grid-cols-3">
          <FamilyCard
            label={isSinhala ? "පියා" : "Father"}
            value={
              father
                ? father.name
                : isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"
            }
          />

          <FamilyCard
            label={isSinhala ? "මව" : "Mother"}
            value={
              mother
                ? mother.name
                : isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"
            }
          />

          <div className="rounded-2xl bg-stone-100 p-6">
            <p className="text-sm font-semibold text-stone-500">
              {isSinhala ? "දරුවන්" : "Children"}
            </p>

            {children.length > 0 ? (
              <div className="mt-3 space-y-2">
                {children.map((child) => (
                  <Link
                    key={child.id}
                    href={`/${safeLocale}/kings/${child.slug}`}
                    className="block font-bold text-amber-800 transition hover:text-amber-600 hover:underline"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-3 font-semibold text-stone-800">
                {isSinhala ? "තොරතුරු නොමැත" : "No information available"}
              </p>
            )}
          </div>
        </div>
      </ContentSection>

      {king.importantEvents && king.importantEvents.length > 0 && (
        <ContentSection title={isSinhala ? "වැදගත් සිදුවීම්" : "Important Events"}>
          <ul className="space-y-4">
            {king.importantEvents.map((event) => (
              <li
                key={event}
                className="flex items-start gap-4 rounded-2xl bg-stone-100 p-5 text-stone-700"
              >
                <span className="mt-1 text-lg text-amber-600">●</span>
                <span className="leading-8">{event}</span>
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      {king.constructions && king.constructions.length > 0 && (
        <ContentSection title={isSinhala ? "ඉදිකිරීම් සහ සේවාවන්" : "Constructions and Works"}>
          <ul className="grid gap-4 md:grid-cols-2">
            {king.constructions.map((construction) => (
              <li
                key={construction}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5 leading-8 text-stone-700"
              >
                {construction}
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      {king.relatedPlaces && king.relatedPlaces.length > 0 && (
        <ContentSection title={isSinhala ? "සම්බන්ධ ඓතිහාසික ස්ථාන" : "Related Historical Places"}>
          <div className="flex flex-wrap gap-3">
            {king.relatedPlaces.map((place) => (
              <span
                key={place}
                className="rounded-full border border-amber-500/40 bg-amber-50 px-5 py-3 font-semibold text-amber-900"
              >
                {place}
              </span>
            ))}
          </div>
        </ContentSection>
      )}

      <ContentSection title={isSinhala ? "ඓතිහාසික මූලාශ්‍ර" : "Historical Sources"}>
        {king.sources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {king.sources.map((source) => (
              <SourceCard key={source.id} source={source} locale={safeLocale} />
            ))}
          </div>
        ) : (
          <p className="text-stone-600">
            {isSinhala
              ? "මෙම රජු සඳහා මූලාශ්‍ර තවම එක් කර නොමැත."
              : "No sources have been added for this king yet."}
          </p>
        )}
      </ContentSection>
    </main>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-stone-500">{label}</dt>
      <dd className="mt-2 font-bold text-stone-950">{value}</dd>
    </div>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function FamilyCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-stone-100 p-6">
      <p className="text-sm font-semibold text-stone-500">{label}</p>
      <p className="mt-3 font-bold text-stone-900">{value}</p>
    </div>
  );
}

function SuccessionCard({
  locale,
  label,
  direction,
  targetKing,
  emptyText,
}: {
  locale: Locale;
  label: string;
  direction: string;
  targetKing: KingRecord | null | undefined;
  emptyText: string;
}) {
  if (!targetKing) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl bg-stone-900 p-6 text-center">
        <p className="text-sm text-stone-400">{label}</p>
        <p className="mt-4 text-stone-500">{emptyText}</p>
      </div>
    );
  }

  return (
    <Link
      href={`/${locale}/kings/${targetKing.slug}`}
      className="flex min-h-48 flex-col items-center justify-center rounded-2xl bg-stone-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
    >
      <p className="text-sm text-stone-400">{label}</p>

      <p className="mt-3 text-3xl text-amber-400">{direction}</p>

      <p className="mt-3 text-lg font-bold">{targetKing.name}</p>

      <p className="mt-2 text-sm text-stone-400">{targetKing.reignDisplay}</p>
    </Link>
  );
}

function EvidenceBadge({ evidenceLevel, locale }: { evidenceLevel: string; locale: Locale }) {
  const isSinhala = locale === "si";
  const labels: Record<string, string> = {
    "archaeologically-supported": isSinhala ? "පුරාවිද්‍යා සාක්ෂි සහිත" : "Archaeologically Supported",
    "inscription-supported": isSinhala ? "ශිලා ලේඛන සාක්ෂි සහිත" : "Inscription Supported",
    "chronicle-based": isSinhala ? "වංශකතා මත පදනම් වූ" : "Chronicle Based",
    "mixed-evidence": isSinhala ? "මිශ්‍ර සාක්ෂි" : "Mixed Evidence",
    disputed: isSinhala ? "විවාදයට ලක් වූ" : "Disputed",
    mythological: isSinhala ? "පුරාවෘත්ත සම්ප්‍රදාය" : "Mythological Tradition",
  };
  return (
    <span className="inline-flex w-fit rounded-full border border-amber-500/50 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
      {labels[evidenceLevel] ?? evidenceLevel}
    </span>
  );
}

function SourceCard({ source, locale }: { source: KingSourceRecord; locale: Locale }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:border-amber-400 hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
        {source.type}
      </p>

      <h3 className="mt-3 text-xl font-bold text-stone-950">
        {source.title[locale]}
      </h3>

      <p className="mt-4 leading-8 text-stone-600">
        {source.description[locale]}
      </p>
    </article>
  );
}
