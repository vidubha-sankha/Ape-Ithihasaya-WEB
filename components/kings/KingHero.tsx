import Image from "next/image";
import type { KingData } from "@/lib/kings";

type Locale = "si" | "en";

type KingHeroProps = {
  king: KingData;
  locale: Locale;
};

export default function KingHero({ king, locale }: KingHeroProps) {
  const isSinhala = locale === "si";
  const evidenceLevel = king.sourceStatus?.overall ?? "chronicle-based";
  const imageSrc = king.image?.main ?? "/images/kings/placeholder.webp";
  const imageAlt = king.image?.alt?.[locale] ?? king.name[locale];
  const kingName = king.name[locale];
  const kingSummary = king.summary?.[locale];
  const reignDisplay = king.reign?.display ? king.reign.display[locale] : "";
  const kingdomName = king.kingdomId ? king.kingdomId.replace(/-/g, " ") : "";
  const dynastyName = king.dynastyId ? king.dynastyId.replace(/-/g, " ") : "";

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-300 shadow-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col justify-center">
        <EvidenceBadge evidenceLevel={evidenceLevel} locale={locale} />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
          {kingdomName}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          {kingName}
        </h1>
        <p className="mt-5 text-lg text-stone-500">{kingSummary}</p>
        <dl className="mt-10 grid gap-5 rounded-3xl bg-white p-7 shadow-sm sm:grid-cols-2">
          <QuickFact
            label={isSinhala ? "රාජ්‍ය සමය" : "Reign Period"}
            value={reignDisplay}
          />
          <QuickFact
            label={isSinhala ? "රාජධානිය" : "Kingdom"}
            value={kingdomName}
          />
          <QuickFact
            label={isSinhala ? "රාජ වංශය" : "Dynasty"}
            value={dynastyName}
          />
        </dl>
      </div>
    </section>
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

function EvidenceBadge({ evidenceLevel, locale }: { evidenceLevel: string; locale: Locale }) {
  const isSinhala = locale === "si";
  const labels: Record<string, string> = {
    "archaeologically-supported": isSinhala ? "පුරාවිද්‍යා සාක්ෂි සහිත" : "Archaeologically Supported",
    "inscription-supported": isSinhala ? "ශිලා ලේඛන සාක්ෂි සහිත" : "Inscription Supported",
    "chronicle-based": isSinhala ? "වංශකතා මත පදනම් වූ" : "Chronicle Based",
    "mixed-evidence": isSinhala ? "මිශ්‍ර සාක්ෂි" : "Mixed Evidence",
    disputed: isSinhala ? "විවාදයට ලක් වූ" : "Disputed",
    mythological: isSinhala ? "පුරාවෘත්ත සම්ප්‍රදාය" : "Mythological Tradition",
    "chronicle-and-archaeological": isSinhala ? "වංශකතා සහ පුරාවිද්‍යා සාක්ෂි" : "Chronicle and Archaeological",
    "chronicle-and-tradition": isSinhala ? "වංශකතා සහ ජනශ්‍රැති සාක්ෂි" : "Chronicle and Tradition",
  };
  return (
    <span className="inline-flex w-fit rounded-full border border-amber-500/50 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
      {labels[evidenceLevel] ?? evidenceLevel}
    </span>
  );
}
