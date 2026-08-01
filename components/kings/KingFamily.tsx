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
    eyebrow: locale === "si" ? "ලේ නෑකම් සහ විවාහ නෑකම්" : "GENEALOGY",

    title:
      locale === "si"
        ? "රාජකීය පවුල් තොරතුරු"
        : "Royal Family Information",

    bloodRelations:
      locale === "si" ? "ලේ නෑකම්" : "Blood Relations",

    marriageRelations:
      locale === "si"
        ? "විවාහයෙන් ඇති සම්බන්ධතා"
        : "Relations by Marriage",

    father: locale === "si" ? "පියා" : "Father",
    mother: locale === "si" ? "මව" : "Mother",

    paternalGrandfather:
      locale === "si"
        ? "පියාගේ පාර්ශ්වයේ සීයා"
        : "Paternal Grandfather",

    maternalGrandfather:
      locale === "si"
        ? "මවගේ පාර්ශ්වයේ සීයා"
        : "Maternal Grandfather",

    paternalUncles:
      locale === "si"
        ? "පියාගේ සහෝදරයන්"
        : "Paternal Uncles",

    siblings:
      locale === "si"
        ? "සහෝදර සහෝදරියන්"
        : "Siblings",

    spouses:
      locale === "si"
        ? "බිසෝවරු / සහකරුවන්"
        : "Queens / Spouses",

    children: locale === "si" ? "දරුවන්" : "Children",

    grandchildren:
      locale === "si"
        ? "මුණුපුරු සහ මිනිපිරියන්"
        : "Grandchildren",

    childrenBySpouse:
      locale === "si"
        ? "එක් එක් බිසවගෙන් ලැබුණු දරුවන්"
        : "Children by Spouse",

    familyNotes:
      locale === "si"
        ? "පවුල් තොරතුරු පිළිබඳ සටහන්"
        : "Genealogical Notes",

    unknown:
      locale === "si"
        ? "තොරතුරු සඳහන් නොවේ"
        : "Information not recorded",
  };

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#090909] p-7 text-white shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffad0a]">
          {labels.eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          {labels.title}
        </h2>

        {/* Blood relations */}
        <div className="mt-12">
          <h3 className="border-b border-zinc-800 pb-4 text-2xl font-bold">
            {labels.bloodRelations}
          </h3>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FamilyItem
              label={labels.father}
              name={display.father ?? labels.unknown}
              href={
                family.fatherId
                  ? `/${locale}/people/${family.fatherId}`
                  : undefined
              }
            />

            <FamilyItem
              label={labels.mother}
              name={display.mother ?? labels.unknown}
              href={
                family.motherId
                  ? `/${locale}/people/${family.motherId}`
                  : undefined
              }
            />

            <FamilyItem
              label={labels.paternalGrandfather}
              name={display.paternalGrandfather ?? labels.unknown}
              href={
                family.paternalGrandfatherId
                  ? `/${locale}/people/${family.paternalGrandfatherId}`
                  : undefined
              }
            />

            <FamilyItem
              label={labels.maternalGrandfather}
              name={display.maternalGrandfather ?? labels.unknown}
              href={
                family.maternalGrandfatherId
                  ? `/${locale}/people/${family.maternalGrandfatherId}`
                  : undefined
              }
            />

            {display.paternalGrandmother ? (
              <FamilyItem
                label={
                  locale === "si"
                    ? "පියාගේ පාර්ශ්වයේ ආච්චි"
                    : "Paternal Grandmother"
                }
                name={display.paternalGrandmother}
              />
            ) : null}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <FamilyListItem
              label={labels.paternalUncles}
              names={
                display.paternalUncles?.length
                  ? display.paternalUncles
                  : [labels.unknown]
              }
            />

            <FamilyListItem
              label={labels.siblings}
              names={
                display.siblings?.length
                  ? display.siblings
                  : [labels.unknown]
              }
            />

            <FamilyListItem
              label={labels.children}
              names={
                display.children?.length
                  ? display.children
                  : [labels.unknown]
              }
            />

            <FamilyListItem
              label={labels.grandchildren}
              names={
                display.grandchildren?.length
                  ? display.grandchildren
                  : [labels.unknown]
              }
            />

            {display.nephews?.length ? (
              <FamilyListItem
                label={locale === "si" ? "බෑණාවරු" : "Nephews"}
                names={display.nephews}
              />
            ) : null}

            {display.paternalAunts?.length ? (
              <FamilyListItem
                label={
                  locale === "si"
                    ? "පියාගේ සහෝදරියන්"
                    : "Paternal Aunts"
                }
                names={display.paternalAunts}
              />
            ) : null}

            {display.halfSiblings?.length ? (
              <FamilyListItem
                label={
                  locale === "si"
                    ? "අර්ධ සහෝදර සහෝදරියන්"
                    : "Half-siblings"
                }
                names={display.halfSiblings}
              />
            ) : null}

            {display.halfBrothers?.length ? (
              <FamilyListItem
                label={
                  locale === "si"
                    ? "මව එකම අර්ධ සහෝදරයන්"
                    : "Maternal Half-brothers"
                }
                names={display.halfBrothers}
              />
            ) : null}

            {display.cousins?.length ? (
              <FamilyListItem
                label={
                  locale === "si"
                    ? "ඥාති සහෝදරයන්"
                    : "Cousins"
                }
                names={display.cousins}
              />
            ) : null}

            {display.brothersInLaw?.length ? (
              <FamilyListItem
                label={
                  locale === "si"
                    ? "විවාහයෙන් ලැබුණු සහෝදරයන් / මස්සිනාලා"
                    : "Brothers-in-law"
                }
                names={display.brothersInLaw}
              />
            ) : null}
          </div>
        </div>

        {/* Spouses */}
        <div className="mt-12">
          <h3 className="border-b border-zinc-800 pb-4 text-2xl font-bold">
            {labels.spouses}
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {(display.spouses?.length
              ? display.spouses
              : [labels.unknown]
            ).map((spouseName, index) => {
              const spouseId = family.spouseIds?.[index];

              return (
                <FamilyItem
                  key={`${spouseName}-${index}`}
                  label={`${labels.spouses} ${index + 1}`}
                  name={spouseName}
                  href={
                    spouseId
                      ? `/${locale}/people/${spouseId}`
                      : undefined
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Children grouped by spouse */}
        {king.childrenBySpouse?.length ? (
          <div className="mt-12">
            <h3 className="border-b border-zinc-800 pb-4 text-2xl font-bold">
              {labels.childrenBySpouse}
            </h3>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {king.childrenBySpouse.map((group) => {
                const childNames =
                  group.childrenDisplay[locale];

                return (
                  <article
                    key={group.spouseId}
                    className="rounded-2xl border border-[#4c3500] bg-[#15120f] p-6"
                  >
                    <p className="text-sm font-semibold text-[#ffad0a]">
                      {locale === "si"
                        ? "මව / බිසව"
                        : "Mother / Queen"}
                    </p>

                    <h4 className="mt-2 text-xl font-bold">
                      {group.spouseName[locale]}
                    </h4>

                    <div className="mt-5 space-y-3">
                      {group.childIds.map((childId, index) => (
                        <Link
                          key={childId}
                          href={`/${locale}/people/${childId}`}
                          className="block rounded-xl border border-zinc-800 bg-black px-4 py-3 text-zinc-200 transition hover:border-[#ff9d00] hover:text-[#ffad0a]"
                        >
                          {childNames[index] ?? childId}
                        </Link>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Relations by marriage */}
        {king.inLawRelationships?.length ? (
          <div className="mt-12">
            <h3 className="border-b border-zinc-800 pb-4 text-2xl font-bold">
              {labels.marriageRelations}
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {king.inLawRelationships.map((relationship) => {
                const relationshipDisplay =
                  relationship.display[locale];

                return (
                  <article
                    key={`${relationship.personId}-${relationship.relationshipType}`}
                    className="rounded-2xl border border-[#765000] bg-[#17120a] p-6"
                  >
                    <p className="text-sm font-semibold text-[#ffad0a]">
                      {relationshipDisplay.relationship}
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-white">
                      {relationshipDisplay.person}
                    </h4>

                    {relationshipDisplay.connection && (
                      <p className="mt-4 leading-7 text-zinc-400">
                        {relationshipDisplay.connection}
                      </p>
                    )}

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {relationship.isBloodRelation
                        ? locale === "si"
                          ? "ලේ නෑකමකි"
                          : "Blood relation"
                        : locale === "si"
                          ? "විවාහ සම්බන්ධතාවකි"
                          : "Relation by marriage"}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Notes */}
        {king.familyNotes?.[locale]?.length ? (
          <div className="mt-12 rounded-2xl border border-zinc-800 bg-black p-6">
            <h3 className="text-xl font-bold">
              {labels.familyNotes}
            </h3>

            <ul className="mt-5 space-y-4">
              {king.familyNotes[locale].map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 leading-7 text-zinc-400"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9d00]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

interface FamilyItemProps {
  label: string;
  name: string;
  href?: string;
}

function FamilyItem({
  label,
  name,
  href,
}: FamilyItemProps) {
  const card = (
    <div className="h-full rounded-2xl border border-zinc-800 bg-[#171412] p-5 transition hover:border-[#ff9d00]">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#ffad0a]">
        {label}
      </p>

      <p className="mt-3 font-bold text-white">
        {name}
      </p>
    </div>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  );
}

interface FamilyListItemProps {
  label: string;
  names: string[];
}

function FamilyListItem({
  label,
  names,
}: FamilyListItemProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-[#171412] p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#ffad0a]">
        {label}
      </p>

      <div className="mt-4 space-y-3">
        {names.map((name) => (
          <p
            key={name}
            className="rounded-xl border border-zinc-800 bg-black px-4 py-3 font-semibold text-white"
          >
            {name}
          </p>
        ))}
      </div>
    </article>
  );
}
