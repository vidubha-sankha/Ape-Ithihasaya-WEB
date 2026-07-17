import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import kings from "@/data/kings.json";
import type { KingBaseRecord } from "@/lib/kings";
import kingsSi from "@/data/translations/kings.si.json";
import kingsEn from "@/data/translations/kings.en.json";
import sources from "@/data/sources.json";

type Locale = "si" | "en";

type KingDetailPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type KingTranslation = {
  name: string;
  shortName: string;
  kingdomName: string;
  dynastyName: string;
  reignDisplay: string;
  summary: string;
  biography: string;
  importantEvents: string[];
  constructions: string[];
  relatedPlaces: string[];
};

type KingTranslationCollection = Record<string, KingTranslation>;

type KingRecord = (typeof kings)[number];
type SourceRecord = (typeof sources)[number];

export function generateStaticParams() {
  const locales: Locale[] = ["si", "en"];

  return locales.flatMap((locale) =>
    kings
      .filter((king) => king.status === "published")
      .map((king) => ({
        locale,
        slug: king.slug,
      }))
  );
}

export default async function KingDetailPage({
  params,
}: KingDetailPageProps) {
  const { locale, slug } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const safeLocale = locale as Locale;
  const isSinhala = safeLocale === "si";

  const kingsData = kings as KingBaseRecord[];
  const king = kingsData.find(
    (item) =>
      item.slug === slug &&
      item.status === "published"
  );

  if (!king) {
    notFound();
  }

  const translations = (
    isSinhala ? kingsSi : kingsEn
  ) as KingTranslationCollection;

  const translatedKing = translations[king.id];

  if (!translatedKing) {
    notFound();
  }

  const predecessor = king.predecessorId
    ? kings.find((item) => item.id === king.predecessorId)
    : null;

  const successor = king.successorId
    ? kings.find((item) => item.id === king.successorId)
    : null;

  const father = king.fatherId
    ? kings.find((item) => item.id === king.fatherId)
    : null;

  const mother = king.motherId
    ? kings.find((item) => item.id === king.motherId)
    : null;

  const children = kings.filter((item) =>
    king.childIds.includes(item.id)
  );

  const kingSources = sources.filter((source) =>
    king.sourceIds.includes(source.id)
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
            alt={translatedKing.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <EvidenceBadge
            evidenceLevel={king.evidenceLevel}
            locale={safeLocale}
          />

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
            {translatedKing.kingdomName}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {translatedKing.name}
          </h1>

          <p className="mt-5 text-lg text-stone-500">
            {translatedKing.summary}
          </p>

          <dl className="mt-10 grid gap-5 rounded-3xl bg-white p-7 shadow-sm sm:grid-cols-2">
            <QuickFact
              label={isSinhala ? "රාජ්‍ය සමය" : "Reign Period"}
              value={translatedKing.reignDisplay}
            />

            <QuickFact
              label={isSinhala ? "රාජධානිය" : "Kingdom"}
              value={translatedKing.kingdomName}
            />

            <QuickFact
              label={isSinhala ? "රාජ වංශය" : "Dynasty"}
              value={translatedKing.dynastyName}
            />

            <QuickFact
              label={isSinhala ? "පියා" : "Father"}
              value={
                father
                  ? translations[father.id]?.name
                  : isSinhala
                    ? "තොරතුරු නොමැත"
                    : "No information available"
              }
            />
          </dl>
        </div>
      </section>

      <ContentSection
        title={isSinhala ? "චරිතාපදානය" : "Biography"}
      >
        <p className="max-w-5xl text-lg leading-9 text-stone-700">
          {translatedKing.biography}
        </p>
      </ContentSection>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-stone-950 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            {isSinhala ? "රාජ පෙළපත" : "Royal Line"}
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {isSinhala
              ? "රාජ අනුප්‍රාප්තිය"
              : "Royal Succession"}
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <SuccessionCard
              locale={safeLocale}
              label={isSinhala ? "පෙර රජු" : "Previous King"}
              direction="←"
              king={predecessor}
              translations={translations}
              emptyText={
                isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"
              }
            />

            <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border-2 border-amber-500 bg-stone-900 p-6 text-center">
              <p className="text-sm font-semibold text-amber-400">
                {isSinhala ? "වත්මන් රජු" : "Current King"}
              </p>

              <p className="mt-4 text-xl font-bold">
                {translatedKing.name}
              </p>

              <p className="mt-2 text-sm text-stone-400">
                {translatedKing.reignDisplay}
              </p>
            </div>

            <SuccessionCard
              locale={safeLocale}
              label={isSinhala ? "ඊළඟ රජු" : "Next King"}
              direction="→"
              king={successor}
              translations={translations}
              emptyText={
                isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"
              }
            />
          </div>
        </div>
      </section>

      <ContentSection
        title={isSinhala ? "පවුල් තොරතුරු" : "Family"}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FamilyCard
            label={isSinhala ? "පියා" : "Father"}
            value={
              father
                ? translations[father.id]?.name
                : isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"
            }
          />

          <FamilyCard
            label={isSinhala ? "මව" : "Mother"}
            value={
              mother
                ? translations[mother.id]?.name
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
                    {translations[child.id]?.name}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-3 font-semibold text-stone-800">
                {isSinhala
                  ? "තොරතුරු නොමැත"
                  : "No information available"}
              </p>
            )}
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title={
          isSinhala
            ? "වැදගත් සිදුවීම්"
            : "Important Events"
        }
      >
        <ul className="space-y-4">
          {translatedKing.importantEvents.map((event) => (
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

      <ContentSection
        title={
          isSinhala
            ? "ඉදිකිරීම් සහ සේවාවන්"
            : "Constructions and Works"
        }
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {translatedKing.constructions.map((construction) => (
            <li
              key={construction}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-5 leading-8 text-stone-700"
            >
              {construction}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        title={
          isSinhala
            ? "සම්බන්ධ ඓතිහාසික ස්ථාන"
            : "Related Historical Places"
        }
      >
        <div className="flex flex-wrap gap-3">
          {translatedKing.relatedPlaces.map((place) => (
            <span
              key={place}
              className="rounded-full border border-amber-500/40 bg-amber-50 px-5 py-3 font-semibold text-amber-900"
            >
              {place}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title={
          isSinhala
            ? "ඓතිහාසික මූලාශ්‍ර"
            : "Historical Sources"
        }
      >
        {kingSources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {kingSources.map((source) => (
              <SourceCard
                key={source.id}
                source={source}
                locale={safeLocale}
              />
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

function QuickFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-sm font-medium text-stone-500">{label}</dt>
      <dd className="mt-2 font-bold text-stone-950">{value}</dd>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function FamilyCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
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
  king,
  translations,
  emptyText,
}: {
  locale: Locale;
  label: string;
  direction: string;
  king: KingRecord | null | undefined;
  translations: KingTranslationCollection;
  emptyText: string;
}) {
  if (!king) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl bg-stone-900 p-6 text-center">
        <p className="text-sm text-stone-400">{label}</p>
        <p className="mt-4 text-stone-500">{emptyText}</p>
      </div>
    );
  }

  const translatedKing = translations[king.id];

  return (
    <Link
      href={`/${locale}/kings/${king.slug}`}
      className="flex min-h-48 flex-col items-center justify-center rounded-2xl bg-stone-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
    >
      <p className="text-sm text-stone-400">{label}</p>

      <p className="mt-3 text-3xl text-amber-400">{direction}</p>

      <p className="mt-3 text-lg font-bold">
        {translatedKing?.name}
      </p>

      <p className="mt-2 text-sm text-stone-400">
        {translatedKing?.reignDisplay}
      </p>
    </Link>
  );
}

function EvidenceBadge({
  evidenceLevel,
  locale,
}: {
  evidenceLevel: string;
  locale: Locale;
}) {
  const isSinhala = locale === "si";

  const labels: Record<string, string> = {
    "archaeologically-supported": isSinhala
      ? "පුරාවිද්‍යා සාක්ෂි සහිත"
      : "Archaeologically Supported",

    "inscription-supported": isSinhala
      ? "ශිලා ලේඛන සාක්ෂි සහිත"
      : "Inscription Supported",

    "chronicle-based": isSinhala
      ? "වංශකතා මත පදනම් වූ"
      : "Chronicle Based",

    "mixed-evidence": isSinhala
      ? "මිශ්‍ර සාක්ෂි"
      : "Mixed Evidence",

    disputed: isSinhala
      ? "විවාදයට ලක් වූ"
      : "Disputed",

    mythological: isSinhala
      ? "පුරාවෘත්ත සම්ප්‍රදාය"
      : "Mythological Tradition",
  };

  return (
    <span className="inline-flex w-fit rounded-full border border-amber-500/50 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
      {labels[evidenceLevel] ?? evidenceLevel}
    </span>
  );
}

function SourceCard({
  source,
  locale,
}: {
  source: SourceRecord;
  locale: Locale;
}) {
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