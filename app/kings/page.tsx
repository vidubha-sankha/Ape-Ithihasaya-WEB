import Image from "next/image";
import Link from "next/link";
import kings from "@/data/kings.json";

export default function KingsPage() {
  const publishedKings = kings.filter(
    (king) => king.status === "published"
  );

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-8 inline-block font-medium text-amber-800 hover:underline"
        >
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
            රජුගේ විස්තර, රාජ්‍ය සමය සහ රාජ අනුප්‍රාප්තිය ගවේෂණය
            කරන්න.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publishedKings.map((king) => (
            <article
              key={king.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] bg-stone-200">
                <Image
                  src={king.image}
                  alt={king.nameEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-amber-700">
                  {king.kingdomNameSi ?? "Anuradhapura"}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-stone-900">
                  {king.nameSi}
                </h2>

                <p className="mt-1 text-stone-500">{king.nameEn}</p>

                <p className="mt-4 text-sm font-medium text-stone-700">
                  රාජ්‍ය සමය: {king.reign.displaySi}
                </p>

                <Link
                  href={`/kings/${king.slug}`}
                  className="mt-6 inline-flex rounded-lg bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-amber-700"
                >
                  විස්තර බලන්න
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}