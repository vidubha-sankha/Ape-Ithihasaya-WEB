import Link from "next/link";

import type { KingData, Locale } from "@/lib/kings";

interface KingFamilyProps {
  king: KingData;
  locale: Locale;
}

export default function KingFamily({
  king,
  locale,
}: KingFamilyProps) {
  if (!king.family || !king.familyDisplay) {
    return null;
  }

  const family = king.family;
  const display = king.familyDisplay[locale];

  const labels = {
    eyebrow: locale === "si" ? "ලේ නෑකම්" : "GENEALOGY",
    title:
      locale === "si"
        ? "රාජකීය පවුල් තොරතුරු"
        : "Royal Family Information",
    father: locale === "si" ? "පියා" : "Father",
    mother: locale === "si" ? "මව" : "Mother",
    spouse: locale === "si" ? "බිරිඳ / සහකරු" : "Spouse",
    fatherInLaw:
      locale === "si" ? "මාමණ්ඩිය" : "Father-in-law",
    children: locale === "si" ? "දරුවන්" : "Children",
    unknown:
      locale === "si"
        ? "තොරතුරු සඳහන් නොවේ"
        : "Information not recorded",
  };

  const spouseName = display.spouse ?? labels.unknown;

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#090909] p-7 text-white shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffad0a]">
          {labels.eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {labels.title}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FamilyItem
            icon="👑"
            label={labels.father}
            name={display.father ?? labels.unknown}
            href={
              family.fatherId
                ? `/${locale}/kings/${family.fatherId}`
                : undefined
            }
          />

          <FamilyItem
            icon="👸"
            label={labels.mother}
            name={display.mother ?? labels.unknown}
          />

          <FamilyItem
            icon="💍"
            label={labels.spouse}
            name={spouseName}
          />

          <FamilyItem
            icon="🏛"
            label={labels.fatherInLaw}
            name={display.fatherInLaw ?? labels.unknown}
            href={
              family.fatherInLawIds?.[0]
                ? `/${locale}/kings/${family.fatherInLawIds[0]}`
                : undefined
            }
          />
        </div>

        <div className="mt-5 rounded-2xl border border-[#493100] bg-[#15120f] p-6">
          <p className="text-sm font-semibold text-[#ffad0a]">
            {labels.children}
          </p>

          {family.childIds?.length ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {family.childIds.map((childId, index) => (
                <Link
                  key={childId}
                  href={`/${locale}/kings/${childId}`}
                  className="rounded-full border border-[#ff9d00] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#ff9d00] hover:text-black"
                >
                  {display.children?.[index] ?? childId}
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-zinc-400">
              {labels.unknown}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface FamilyItemProps {
  icon: string;
  label: string;
  name: string;
  href?: string;
}

function FamilyItem({
  icon,
  label,
  name,
  href,
}: FamilyItemProps) {
  const card = (
    <div className="h-full rounded-2xl border border-zinc-800 bg-[#171412] p-5 transition hover:border-[#ff9d00]">
      <span className="text-xl">{icon}</span>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#ffad0a]">
        {label}
      </p>

      <p className="mt-2 font-bold text-white">
        {name}
      </p>
    </div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}
