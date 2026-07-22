import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPeople, getPersonBySlug } from "@/lib/people";

type Locale = "si" | "en";

type PersonDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales: Locale[] = ["si", "en"];
  const allPeople = getPeople("si");

  return locales.flatMap((locale) =>
    allPeople.map((person) => ({
      locale,
      slug: person.slug,
    }))
  );
}

export default async function PersonDetailPage({ params }: PersonDetailPageProps) {
  const { locale, slug } = await params;
  if (locale !== "si" && locale !== "en") {
    notFound();
  }
  const safeLocale = locale as Locale;
  const person = getPersonBySlug(slug, safeLocale);
  if (!person) {
    notFound();
  }

  const isSinhala = safeLocale === "si";

  // Predecessor/Successor/Family lookups
  const allPeopleInLocale = getPeople(safeLocale);

  const parents = allPeopleInLocale.filter((item) => person.parentIds.includes(item.id));
  const spouses = allPeopleInLocale.filter((item) => person.spouseIds.includes(item.id));
  const children = allPeopleInLocale.filter((item) => person.childIds.includes(item.id));
  const relatedPeople = allPeopleInLocale.filter((item) => person.relatedPeopleIds.includes(item.id));

  const getGenderLabel = (g: string) => {
    if (g === "male") return isSinhala ? "පුරුෂ" : "Male";
    if (g === "female") return isSinhala ? "ස්ත්‍රී" : "Female";
    return g;
  };

  const getEvidenceLabel = (e: string) => {
    const labels: Record<string, string> = {
      traditional: isSinhala ? "සම්ප්‍රදායික" : "Traditional",
      archaeological: isSinhala ? "පුරාවිද්‍යාත්මක" : "Archaeological",
      chronicle: isSinhala ? "වංශකතා මත පදනම් වූ" : "Chronicle Based",
      uncertain: isSinhala ? "නොපැහැදිලි" : "Uncertain",
      documented: isSinhala ? "ලේඛනගත කරන ලද" : "Documented",
    };
    return labels[e] || e.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const getRoleLabel = (role: string) => {
    const labels: Record<string, string> = {
      "traditional-ruler": isSinhala ? "සම්ප්‍රදායික පාලකයා" : "Traditional Ruler",
      "traditional-figure": isSinhala ? "සම්ප්‍රදායික චරිතය" : "Traditional Figure",
      "traditional-lineage-founder": isSinhala ? "පරපුරේ නිර්මාතෘ" : "Lineage Founder",
      "yaksha-figure": isSinhala ? "යක්ෂ චරිතය" : "Yaksha Figure",
      "advisor": isSinhala ? "උපදේශක" : "Advisor",
      "traditional-queen": isSinhala ? "සම්ප්‍රදායික රැජින" : "Traditional Queen",
      "deity": isSinhala ? "දෙවි කෙනෙක්" : "Deity",
      "traditional-warrior": isSinhala ? "සම්ප්‍රදායික රණශූරයා" : "Traditional Warrior",
      "warrior": isSinhala ? "රණශූරයා" : "Warrior",
    };
    return labels[role] || role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`/${safeLocale}/people`}
          className="font-semibold text-amber-800 transition hover:text-amber-600 hover:underline"
        >
          ← {isSinhala ? "සියලු ඓතිහාසික චරිත" : "All Historical Characters"}
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-300 shadow-xl">
          <Image
            src={person.image}
            alt={person.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex w-fit rounded-full border border-amber-500/50 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
              {getEvidenceLabel(person.evidenceLevel)}
            </span>
            {person.roles.map((role) => (
              <span key={role} className="inline-flex w-fit rounded-full border border-stone-300 bg-stone-200 px-4 py-2 text-sm font-bold text-stone-800">
                {getRoleLabel(role)}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            {person.name}
          </h1>

          <p className="mt-5 text-lg text-stone-600 leading-relaxed">{person.summary}</p>

          <dl className="mt-10 grid gap-5 rounded-3xl bg-white p-7 shadow-sm sm:grid-cols-2">
            <QuickFact
              label={isSinhala ? "ස්ත්‍රී/පුරුෂ භාවය" : "Gender"}
              value={getGenderLabel(person.gender)}
            />
            <QuickFact
              label={isSinhala ? "රාජ වංශ" : "Dynasties"}
              value={person.dynastyNames.length > 0 ? person.dynastyNames.join(", ") : (isSinhala ? "තොරතුරු නොමැත" : "None")}
            />
            <QuickFact
              label={isSinhala ? "රාජධානි" : "Kingdoms"}
              value={person.kingdomNames.length > 0 ? person.kingdomNames.join(", ") : (isSinhala ? "තොරතුරු නොමැත" : "None")}
            />
            <QuickFact
              label={isSinhala ? "සාක්ෂි මට්ටම" : "Evidence Level"}
              value={getEvidenceLabel(person.evidenceLevel)}
            />
          </dl>
        </div>
      </section>

      {/* Family and Relations Section */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">{isSinhala ? "පවුල් සබඳතා සහ සම්බන්ධතා" : "Family & Relationships"}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Parents */}
            <div className="rounded-2xl bg-stone-50 p-6 border border-stone-200">
              <p className="text-sm font-semibold text-stone-500">
                {isSinhala ? "දෙමාපියන්" : "Parents"}
              </p>
              {parents.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {parents.map((p) => (
                    <Link
                      key={p.id}
                      href={`/${safeLocale}/people/${p.slug}`}
                      className="block font-bold text-amber-800 transition hover:text-amber-600 hover:underline"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 font-semibold text-stone-400">
                  {isSinhala ? "තොරතුරු නොමැත" : "No information available"}
                </p>
              )}
            </div>

            {/* Spouses */}
            <div className="rounded-2xl bg-stone-50 p-6 border border-stone-200">
              <p className="text-sm font-semibold text-stone-500">
                {isSinhala ? "සහකරු / සහකාරිය" : "Spouse(s)"}
              </p>
              {spouses.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {spouses.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${safeLocale}/people/${s.slug}`}
                      className="block font-bold text-amber-800 transition hover:text-amber-600 hover:underline"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 font-semibold text-stone-400">
                  {isSinhala ? "තොරතුරු නොමැත" : "No information available"}
                </p>
              )}
            </div>

            {/* Children */}
            <div className="rounded-2xl bg-stone-50 p-6 border border-stone-200">
              <p className="text-sm font-semibold text-stone-500">
                {isSinhala ? "දරුවන්" : "Children"}
              </p>
              {children.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {children.map((c) => (
                    <Link
                      key={c.id}
                      href={`/${safeLocale}/people/${c.slug}`}
                      className="block font-bold text-amber-800 transition hover:text-amber-600 hover:underline"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 font-semibold text-stone-400">
                  {isSinhala ? "තොරතුරු නොමැත" : "No information available"}
                </p>
              )}
            </div>

            {/* Related People */}
            <div className="rounded-2xl bg-stone-50 p-6 border border-stone-200">
              <p className="text-sm font-semibold text-stone-500">
                {isSinhala ? "වෙනත් සබඳතා" : "Related Figures"}
              </p>
              {relatedPeople.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {relatedPeople.map((r) => (
                    <Link
                      key={r.id}
                      href={`/${safeLocale}/people/${r.slug}`}
                      className="block font-bold text-amber-800 transition hover:text-amber-600 hover:underline"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 font-semibold text-stone-400">
                  {isSinhala ? "තොරතුරු නොමැත" : "No information available"}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Sources section */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            {isSinhala ? "ඓතිහාසික මූලාශ්‍ර" : "Historical Sources"}
          </h2>
          <div className="mt-7">
            {person.sources.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {person.sources.map((source) => (
                  <article key={source.id} className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:border-amber-400 hover:shadow-md">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                      {source.type}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-stone-950">
                      {source.title}
                    </h3>
                    <p className="mt-4 leading-8 text-stone-600">
                      {source.description}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-stone-600">
                {isSinhala
                  ? "මූලාශ්‍ර තවම එක් කර නොමැත."
                  : "No sources have been added yet."}
              </p>
            )}
          </div>
        </div>
      </section>
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
