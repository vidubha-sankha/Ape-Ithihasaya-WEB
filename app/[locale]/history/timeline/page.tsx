import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTimeline,
  evidenceLabels,
  parallelHistoricalRegions,
  type Locale,
  type TimelineItem,
} from "@/data/history-timeline";
import {
  PageHero,
  SectionHeading,
  EvidenceNotice,
  NavigationButtons,
} from "@/components/history/HistoryPageComponents";

interface TimelinePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  si: {
    eyebrow: "ශ්‍රී ලංකා ඉතිහාසයේ සම්පූර්ණ කාලානුක්‍රමය",
    title: "⏳ සම්පූර්ණ කාලරේඛාව",
    subtitle:
      "ප්‍රාග් ඉතිහාසයේ සිට පූර්ව සම්ප්‍රදායික, සංක්‍රාන්ති, රාජධානි, යටත්විජිත සහ නූතන යුගය දක්වා ශ්‍රී ලංකාවේ සමස්ත ඓතිහාසික කාලානුක්‍රමය එකම ස්ථානයකින් ගවේෂණය කරන්න.",
    badge: "පූර්ණ කාලානුක්‍රමික සටහන",

    overviewTitle: "කාලරේඛා පටුන",
    overviewDescription:
      "පහත දැක්වෙන්නේ ශ්‍රී ලංකාවේ ප්‍රධාන ඓතිහාසික අවධීන්, රාජධානි, යටත්විජිත යුගයන් සහ ඒ යටතේ එන විශේෂිත සිදුවීම් වේ.",

    regionsTitle: "සමාන්තර ඓතිහාසික ප්‍රදේශ",
    regionsDescription:
      "ප්‍රධාන අගනුවර කාලරේඛාවට සමාන්තරව දියුණු වූ වැදගත් ඓතිහාසික හා දේශපාලන ප්‍රදේශ.",

    evidenceTitle: "කාලානුක්‍රමික පදනම සහ සාක්ෂි ප්‍රභේද",
    evidenceDescription:
      "මෙම කාලරේඛාව සකස් කර ඇත්තේ පුරාවිද්‍යාත්මක කැණීම් (C-14 දින නියම කිරීම්), සෙල්ලිපි සාක්ෂි, බෞද්ධ සාහිත්‍යය, රාමායණ සම්ප්‍රදාය, මහාවංශය වැනි වංශකතා සහ යටත්විජිත/නූතන ලේඛන එකිනෙක සංසන්දනය කරමිනි.",

    previousLabel: "ඉතිහාස හැඳින්වීම",
    nextLabel: "ප්‍රාග් ඉතිහාසය",
  },

  en: {
    eyebrow: "COMPLETE CHRONOLOGY OF SRI LANKAN HISTORY",
    title: "⏳ Complete Timeline",
    subtitle:
      "Explore the comprehensive historical timeline of Sri Lanka from prehistory through early traditional, kingdoms, colonial, and modern eras in one unified catalog.",
    badge: "Full Chronological Index",

    overviewTitle: "Timeline Index",
    overviewDescription:
      "Below are the primary historical epochs, kingdoms, colonial periods, and major historical highlights of Sri Lanka.",

    regionsTitle: "Parallel Historical Regions",
    regionsDescription:
      "Key historical and political regions that developed alongside the main royal capital chronology.",

    evidenceTitle: "Chronological Foundation & Evidence Sources",
    evidenceDescription:
      "This timeline integrates radiocarbon-dated archaeological findings, Brahmi epigraphy, traditional Buddhist literature, the Ramayana tradition, chronicle records, and colonial/modern historical documents.",

    previousLabel: "History Overview",
    nextLabel: "Prehistory",
  },
};

export default async function TimelinePage({ params }: TimelinePageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const loc = locale as Locale;
  const text = content[loc];
  const items: TimelineItem[] = getTimeline();

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow={text.eyebrow}
        title={text.title}
        subtitle={text.subtitle}
        badge={text.badge}
      />

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="📅"
            title={text.overviewTitle}
            description={text.overviewDescription}
          />

          <div className="mt-14 space-y-12">
            {items.map((item) => {
              const evidence = evidenceLabels[item.evidenceType]?.[loc];

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-zinc-900 bg-black p-6 sm:p-10 transition duration-300 hover:border-[#7e5400]"
                >
                  <div className="flex flex-col justify-between gap-4 border-b border-zinc-900 pb-6 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#704900] bg-[#130d00] text-3xl">
                        {item.icon}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-block rounded-full border border-[#7a5100] bg-[#140e00] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffad0a]">
                            #{item.order} • {item.type}
                          </span>

                          {evidence && (
                            <span className="inline-block rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-1 text-xs font-medium text-zinc-400">
                              {evidence}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                          {item.name[loc]}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[#ffad0a]">
                          {item.period[loc]}
                        </p>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                          {item.description[loc]}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/${loc}${item.href}`}
                      className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff9d00] px-6 py-2.5 text-sm font-bold text-black transition hover:bg-[#ffb42a]"
                    >
                      {loc === "si" ? "විස්තර බලන්න →" : "View Details →"}
                    </Link>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        {loc === "si" ? "ප්‍රධාන විශේෂතා" : "Key Highlights"}
                      </p>

                      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {item.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2.5 rounded-xl border border-zinc-900 bg-[#080808] px-4 py-3 text-xs text-zinc-300"
                          >
                            <span className="text-[#ff9d00]">◆</span>
                            <span>{highlight[loc]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {parallelHistoricalRegions && parallelHistoricalRegions.length > 0 && (
        <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              icon="🌾"
              title={text.regionsTitle}
              description={text.regionsDescription}
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {parallelHistoricalRegions.map((region) => (
                <div
                  key={region.id}
                  className="flex flex-col justify-between rounded-3xl border border-zinc-900 bg-[#080808] p-7 transition duration-300 hover:border-[#8b5c00]"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#704900] bg-[#130d00] text-3xl">
                      {region.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {region.name[loc]}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#ffad0a]">
                      {region.period[loc]}
                    </p>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {region.description[loc]}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-900">
                    <Link
                      href={`/${loc}${region.href}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#ffad0a] transition hover:text-[#ff9d00]"
                    >
                      {loc === "si" ? "ප්‍රදේශය බලන්න →" : "Explore Region →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <EvidenceNotice
            status="traditional"
            title={text.evidenceTitle}
            description={text.evidenceDescription}
          />

          <div className="mt-12">
            <NavigationButtons
              locale={loc}
              previousHref="/history"
              previousLabel={text.previousLabel}
              nextHref="/history/prehistory"
              nextLabel={text.nextLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
