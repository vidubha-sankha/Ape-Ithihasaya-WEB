import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPeople } from "@/lib/people";

type PeoplePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PeoplePage({ params }: PeoplePageProps) {
  const { locale } = await params;
  if (locale !== "si" && locale !== "en") {
    notFound();
  }
  const safeLocale = locale as "si" | "en";
  const people = getPeople(safeLocale);
  const isSinhala = safeLocale === "si";

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
    <main className="min-h-screen bg-stone-100 px-6 py-12">
      <section className="mx-auto max-w-7xl">
        <Link href={`/${safeLocale}`} className="mb-8 inline-block font-medium text-amber-800 hover:underline">
          {isSinhala ? "← මුල් පිටුව" : "← Home"}
        </Link>

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            {isSinhala ? "ඓතිහාසික පුද්ගලයින්" : "Historical Figures"}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-stone-900">
            {isSinhala ? "ඓතිහාසික චරිත" : "Historical Characters"}
          </h1>

          <p className="mt-4 max-w-2xl text-stone-600">
            {isSinhala
              ? "පුරාවෘත්ත, සාහිත්‍යය සහ ඉතිහාසය ඔස්සේ අපගේ පූර්වජයන් සහ ඓතිහාසික චරිත ගවේෂණය කරන්න."
              : "Explore our ancestors and historical characters through myth, literature, and history."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <article key={person.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/5] bg-stone-200">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-1 mb-2">
                  {person.roles.map((role) => (
                    <span key={role} className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                      {getRoleLabel(role)}
                    </span>
                  ))}
                </div>
                <h2 className="mt-2 text-2xl font-bold text-stone-900">{person.name}</h2>
                {person.alternativeNames.length > 0 && (
                  <p className="mt-1 text-xs text-stone-500">
                    {isSinhala ? "වෙනත් නම්: " : "Alt: "}{person.alternativeNames.join(", ")}
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm text-stone-600 line-clamp-3">{person.summary}</p>
                <div className="mt-6">
                  <Link href={`/${safeLocale}/people/${person.slug}`} className="inline-flex rounded-lg bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-amber-700">
                    {isSinhala ? "විස්තර බලන්න" : "View Details"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
