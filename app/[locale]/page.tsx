import Link from "next/link";
import { notFound } from "next/navigation";

import WhyExplore from "@/components/WhyExplore";

type Locale = "si" | "en";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const safeLocale = locale as Locale;
  const isSinhala = safeLocale === "si";

  return (
    <main>
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#080706] px-6 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_70%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-amber-400">
            Ape Ithihasaya
          </p>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            {isSinhala
              ? "ශ්‍රී ලංකාවේ සම්පූර්ණ ඉතිහාසය ගවේෂණය කරන්න"
              : "Explore the Complete History of Sri Lanka"}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
            {isSinhala
              ? "රජවරු, රාජධානි, ප්‍රාග් ඉතිහාසය, පුරාවිද්‍යාව, පුරාවෘත්ත සහ ඓතිහාසික මූලාශ්‍ර එකිනෙකට සම්බන්ධ කර ගවේෂණය කරන්න."
              : "Explore kings, kingdoms, prehistory, archaeology, mythology and historical sources through one interconnected platform."}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${safeLocale}/kings`}
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-400"
            >
              {isSinhala ? "රජවරු බලන්න" : "Explore Kings"}
            </Link>

            <Link
              href={`/${safeLocale}/timeline`}
              className="rounded-full border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition duration-300 hover:scale-105 hover:bg-amber-500 hover:text-black"
            >
              {isSinhala ? "කාලරේඛාව බලන්න" : "Explore Timeline"}
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            <Stat value="250+" label={isSinhala ? "රජවරු" : "Kings"} />

            <Stat value="9" label={isSinhala ? "රාජධානි" : "Kingdoms"} />

            <Stat
              value="1000+"
              label={isSinhala ? "ඓතිහාසික ස්ථාන" : "Historical Places"}
            />

            <Stat
              value="2500+"
              label={isSinhala ? "වසරක ඉතිහාසය" : "Years of History"}
            />
          </div>
        </div>

        <a
          href="#why-explore"
          aria-label={isSinhala ? "පහළට යන්න" : "Scroll down"}
          className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <p className="text-xs tracking-widest text-stone-500">
            {isSinhala ? "පහළට යන්න" : "SCROLL TO EXPLORE"}
          </p>

          <span className="mt-2 block animate-bounce text-2xl text-amber-400">
            ↓
          </span>
        </a>
      </section>

      <WhyExplore locale={safeLocale} />
    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-3xl font-bold text-amber-400">{value}</p>
      <p className="mt-2 text-sm text-stone-400">{label}</p>
    </div>
  );
}
