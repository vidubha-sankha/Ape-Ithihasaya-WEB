import Link from "next/link";
import { getKingBySlug, type KingData, type Locale } from "@/lib/kings";

interface KingNavigationProps {
  king: KingData;
  locale: Locale;
}

export default function KingNavigation({ king, locale }: KingNavigationProps) {
  const isSi = locale === "si";

  const predecessor = king.predecessorId ? getKingBySlug(king.predecessorId) : null;
  const successor = king.successorId ? getKingBySlug(king.successorId) : null;

  const labels = {
    eyebrow: isSi ? "රාජ පෙළපත" : "ROYAL LINEAGE",
    title: isSi ? "රාජ අනුප්‍රාප්තිය" : "Royal Succession",
    prevTitle: isSi ? "පෙර රජු" : "Previous King",
    currTitle: isSi ? "වත්මන් රජු" : "Current King",
    nextTitle: isSi ? "ඊළඟ රජු" : "Next King",
    noInfo: isSi ? "තොරතුරු නොමැත" : "No information available",
  };

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#090909] p-7 shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffad0a]">
          {labels.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          {labels.title}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Previous King Card */}
          {predecessor ? (
            <Link
              href={`/${locale}/kings/${predecessor.slug}`}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#171412] p-6 text-center transition duration-300 hover:bg-[#1f1b18]"
            >
              <p className="text-xs font-bold text-zinc-400">{labels.prevTitle}</p>
              <span className="mt-4 text-xl font-bold text-[#ffad0a]">←</span>
              <p className="mt-4 font-bold text-white">{predecessor.name[locale]}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {predecessor.reign?.display ? predecessor.reign.display[locale] : ""}
              </p>
            </Link>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#171412] p-6 text-center opacity-70">
              <p className="text-xs font-bold text-zinc-400">{labels.prevTitle}</p>
              <p className="mt-6 text-sm text-zinc-600">{labels.noInfo}</p>
            </div>
          )}

          {/* Current King Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#ffad0a] bg-[#171412] p-6 text-center shadow-[0_0_20px_rgba(255,173,10,0.05)]">
            <p className="text-xs font-bold text-[#ffad0a]">{labels.currTitle}</p>
            <p className="mt-5 text-lg font-bold text-white">{king.name[locale]}</p>
            <p className="mt-2 text-sm text-zinc-400">
              {king.reign?.display ? king.reign.display[locale] : ""}
            </p>
          </div>

          {/* Next King Card */}
          {successor ? (
            <Link
              href={`/${locale}/kings/${successor.slug}`}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#171412] p-6 text-center transition duration-300 hover:bg-[#1f1b18]"
            >
              <p className="text-xs font-bold text-zinc-400">{labels.nextTitle}</p>
              <span className="mt-4 text-xl font-bold text-[#ffad0a]">→</span>
              <p className="mt-4 font-bold text-white">{successor.name[locale]}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {successor.reign?.display ? successor.reign.display[locale] : ""}
              </p>
            </Link>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#171412] p-6 text-center opacity-70">
              <p className="text-xs font-bold text-zinc-400">{labels.nextTitle}</p>
              <p className="mt-6 text-sm text-zinc-600">{labels.noInfo}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
