import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import kingsData from "@/data/kings.json";

type KingRecord = {
  id: string;
  slug: string;
  nameEn: string;
  nameSi: string;
  kingdomNameEn?: string;
  kingdomNameSi?: string;
  kingdomId?: string;
  dynastyId?: string;
  reign: {
    displayEn: string;
    displaySi: string;
  };
  predecessorId: string | null;
  successorId: string | null;
  fatherId: string | null;
  childIds: string[];
  image: string;
  evidenceLevel: string;
  status: string;
  summarySi?: string;
};

const kings: KingRecord[] = kingsData as unknown as KingRecord[];

type KingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return kings
    .filter((king) => king.status === "published")
    .map((king) => ({
      slug: king.slug,
    }));
}

export default async function KingDetailPage({
  params,
}: KingPageProps) {
  const { slug } = await params;

  const king = kings.find(
    (item) => item.slug === slug && item.status === "published"
  );

  if (!king) {
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

  const children = kings.filter((item) =>
    king.childIds.includes(item.id)
  );

  return (
    <main className="min-h-screen bg-stone-100">
      <section className="bg-stone-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/kings"
            className="inline-block text-amber-400 hover:underline"
          >
            ← සියලු රජවරු
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-300 shadow-xl">
          <Image
            src={king.image}
            alt={king.nameEn}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            {king.kingdomNameSi}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-stone-950 md:text-5xl">
            {king.nameSi}
          </h1>

          <p className="mt-3 text-xl text-stone-500">{king.nameEn}</p>

          <dl className="mt-8 grid gap-5 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2">
            <div>
              <dt className="text-sm text-stone-500">රාජ්‍ය සමය</dt>
              <dd className="mt-1 font-semibold text-stone-900">
                {king.reign.displaySi}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-stone-500">රාජධානිය</dt>
              <dd className="mt-1 font-semibold text-stone-900">
                {king.kingdomNameSi}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-stone-500">Evidence Level</dt>
              <dd className="mt-1 font-semibold capitalize text-stone-900">
                {king.evidenceLevel.replaceAll("-", " ")}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-stone-500">පියා</dt>
              <dd className="mt-1 font-semibold text-stone-900">
                {father ? father.nameSi : "තොරතුරු නොමැත"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-stone-900">චරිතාපදානය</h2>

          <p className="mt-5 max-w-4xl leading-8 text-stone-700">
            {(king as any).summarySi ?? ""}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl bg-stone-900 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Royal Succession
          </p>

          <h2 className="mt-2 text-3xl font-bold">රාජ අනුප්‍රාප්තිය</h2>

          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
            <SuccessionCard
              label="පෙර රජු"
              king={predecessor}
              direction="←"
            />

            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-amber-500 bg-stone-800 p-6 text-center">
              <p className="text-sm text-amber-400">වත්මන් රජු</p>
              <p className="mt-3 text-xl font-bold">{king.nameSi}</p>
              <p className="mt-1 text-sm text-stone-400">
                {king.reign.displaySi}
              </p>
            </div>

            <SuccessionCard
              label="ඊළඟ රජු"
              king={successor}
              direction="→"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-stone-900">පවුල</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-6">
              <p className="text-sm font-semibold text-stone-500">පියා</p>
              <p className="mt-2 text-lg font-bold text-stone-900">
                {father ? father.nameSi : "තොරතුරු නොමැත"}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-6">
              <p className="text-sm font-semibold text-stone-500">දරුවන්</p>

              {children.length > 0 ? (
                <div className="mt-2 space-y-2">
                  {children.map((child) => (
                    <Link
                      key={child.id}
                      href={`/kings/${child.slug}`}
                      className="block font-bold text-amber-800 hover:underline"
                    >
                      {child.nameSi}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-stone-700">තොරතුරු නොමැත</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SuccessionCard({
  label,
  king,
  direction,
}: {
  label: string;
  king: KingRecord | null | undefined;
  direction: string;
}) {
  if (!king) {
    return (
      <div className="flex flex-col justify-center rounded-2xl bg-stone-800 p-6 text-center">
        <p className="text-sm text-stone-400">{label}</p>
        <p className="mt-3 text-stone-500">තොරතුරු නොමැත</p>
      </div>
    );
  }

  return (
    <Link
      href={`/kings/${king.slug}`}
      className="flex flex-col justify-center rounded-2xl bg-stone-800 p-6 text-center transition hover:bg-stone-700"
    >
      <p className="text-sm text-stone-400">{label}</p>
      <p className="mt-3 text-2xl text-amber-400">{direction}</p>
      <p className="mt-2 text-lg font-bold">{king.nameSi}</p>
      <p className="mt-1 text-sm text-stone-400">
        {king.reign.displaySi}
      </p>
    </Link>
  );
}