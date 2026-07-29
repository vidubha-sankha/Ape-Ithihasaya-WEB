import Image from "next/image";
import Link from "next/link";

import { getAllKings } from "@/lib/kings";

type KingsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function KingsPage({ params }: KingsPageProps) {
  const { locale } = await params;
  const safeLocale = locale as "si" | "en";
  const publishedKings = getAllKings().filter(k => k.status === "published");

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12">
      <section className="mx-auto max-w-7xl">
        <Link href="/" className="mb-8 inline-block font-medium text-amber-800 hover:underline">
          ← මුල් පිටුව
        </Link>

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Anuradhapura Kingdom
          </p>

          <h1 className="mt-2 text-4xl font-bold text-stone-900">
            ශ්‍රී ලංකාවේ රජවරු
          </h1>

          <p className="mt-4 max-w-2xl text-stone-600">
            රජුගේ විස්තර, රාජ්‍ය සමය සහ රාජ අනුප්‍රාප්තිය ගවේෂණය කරන්න.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publishedKings.map((king) => {
            const imageSrc = king.image?.main ?? "/images/kings/placeholder.webp";
            const imageAlt = king.image?.alt?.[safeLocale] ?? king.name[safeLocale];
            const reignDisplay = king.reign?.display?.[safeLocale] ?? "";

            return (
              <article key={king.id} className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/5] bg-stone-200">
                  <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-amber-700 capitalize">
                    {king.kingdomId.replace(/-/g, " ")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900">{king.name[safeLocale]}</h2>
                  <p className="mt-1 text-stone-500">{king.name[safeLocale === 'si' ? 'en' : 'si']}</p>
                  {reignDisplay && (
                    <p className="mt-4 text-sm font-medium text-stone-700">රාජ්‍ය සමය: {reignDisplay}</p>
                  )}
                  <Link href={`/${safeLocale}/kings/${king.slug}`} className="mt-6 inline-flex rounded-lg bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-amber-700">
                    විස්තර බලන්න
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
