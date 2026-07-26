import Link from "next/link";
import { notFound } from "next/navigation";
import {
  evidenceLabels,
  historyTimeline,
  parallelHistoricalRegions,
  type EvidenceType,
  type Locale,
  type TimelineItem,
} from "@/data/history-timeline";

interface TimelinePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const pageText = {
  si: {
    eyebrow: "අපේ ඉතිහාසය",
    title: "ශ්‍රී ලංකාවේ සම්පූර්ණ ඉතිහාස කාලරේඛාව",
    description:
      "ප්‍රාග් ඉතිහාසයේ සිට නූතන ශ්‍රී ලංකාව දක්වා පුරාවිද්‍යාත්මක සාක්ෂි, සාහිත්‍ය සම්ප්‍රදායන්, වංශකථා, රාජධානි සහ යටත්විජිත වාර්තා වෙන වෙනම හඳුනාගෙන ගවේෂණය කරන්න.",
    timelineTitle: "ප්‍රධාන කාලානුක්‍රමික ගමන්මඟ",
    timelineDescription:
      "පහත අනුපිළිවෙළ ප්‍රධාන ඓතිහාසික අවධි සහ දේශපාලන මධ්‍යස්ථාන පෙන්වයි.",
    evidenceTitle: "සාක්ෂි වර්ග හඳුනාගන්න",
    evidenceDescription:
      "එක් එක් යුගය සඳහා භාවිත වන සාක්ෂි එකම මට්ටමේ නොවේ. Badge එකෙන් එම තොරතුරේ මූලාශ්‍ර ස්වභාවය පෙන්වයි.",
    highlightsTitle: "ප්‍රධාන කරුණු",
    exploreButton: "විස්තර බලන්න",
    parallelTitle: "සමාන්තර ඓතිහාසික ප්‍රදේශ",
    parallelDescription:
      "සියලුම ප්‍රදේශ ප්‍රධාන රාජධානි අනුපිළිවෙළේ successor kingdom එකක් නොවේ. ඒවා සමහරවිට ප්‍රධාන රාජධානියක් සමඟ සමාන්තරව පැවති ප්‍රාදේශීය බල මධ්‍යස්ථාන වේ.",
    peopleTitle: "සම්බන්ධ පුද්ගලයන්",
    overviewTitle: "කාලරේඛාවේ සාරාංශය",
    overviewItems: [
      {
        value: "20",
        label: "ප්‍රධාන යුග සහ රාජධානි",
      },
      {
        value: "4",
        label: "ප්‍රධාන සාක්ෂි කාණ්ඩ",
      },
      {
        value: "250+",
        label: "අනාගතයේ සම්බන්ධ කළ හැකි පාලකයන්",
      },
      {
        value: "2",
        label: "සිංහල සහ ඉංග්‍රීසි භාෂා",
      },
    ],
    noticeTitle: "වැදගත් කාලරේඛා සටහන",
    noticeDescription:
      "පූර්ව සම්ප්‍රදායික යුගය සහ කාලානුක්‍රමික පරතරය නිල වශයෙන් දින නියම කළ පුරාවිද්‍යාත්මක යුග නොවේ. ඒවා Ape Ithihasaya තුළ සාහිත්‍ය සම්ප්‍රදාය, අවිනිශ්චිතතාව සහ තහවුරු කළ ඉතිහාසය පැහැදිලිව වෙන් කර පෙන්වීම සඳහා භාවිත කරන සංස්කාරක වර්ගීකරණ වේ.",
    historyButton: "ඉතිහාස හැඳින්වීම",
    prehistoryButton: "ප්‍රාග් ඉතිහාසයෙන් ආරම්භ කරන්න",
  },

  en: {
    eyebrow: "APE ITHIHASAYA",
    title: "Complete Timeline of Sri Lankan History",
    description:
      "Explore Sri Lanka from prehistory to the modern period while distinguishing archaeological evidence, literary traditions, chronicles, kingdoms and colonial records.",
    timelineTitle: "Main Chronological Journey",
    timelineDescription:
      "The sequence below presents the principal historical phases and political centres.",
    evidenceTitle: "Understanding the Evidence",
    evidenceDescription:
      "The evidence used for each period is not identical. Each badge identifies the primary nature of its sources.",
    highlightsTitle: "Key Highlights",
    exploreButton: "Explore Details",
    parallelTitle: "Parallel Historical Regions",
    parallelDescription:
      "Not every region was a successor kingdom in the main capital sequence. Some existed as regional political centres alongside larger kingdoms.",
    peopleTitle: "Related People",
    overviewTitle: "Timeline Overview",
    overviewItems: [
      {
        value: "20",
        label: "Major periods and kingdoms",
      },
      {
        value: "4",
        label: "Major evidence categories",
      },
      {
        value: "250+",
        label: "Future connected rulers",
      },
      {
        value: "2",
        label: "Sinhala and English languages",
      },
    ],
    noticeTitle: "Important Timeline Notice",
    noticeDescription:
      "The Early Traditional Age and Chronological Gap are not formally dated archaeological periods. They are editorial categories used by Ape Ithihasaya to distinguish literary tradition, uncertainty and verified history.",
    historyButton: "History Introduction",
    prehistoryButton: "Begin with Prehistory",
  },
} satisfies Record<Locale, unknown>;

const evidenceTypesToShow: EvidenceType[] = [
  "archaeological",
  "traditional",
  "uncertain",
  "chronicle",
  "chronicle-and-archaeological",
  "documented",
  "colonial-records",
  "modern-records",
];

export default async function CompleteTimelinePage({
  params,
}: TimelinePageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const text = pageText[currentLocale];

  const orderedTimeline = [...historyTimeline].sort(
    (first, second) => first.order - second.order,
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#3d2900] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.16),transparent_62%)]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9d00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.42em] text-[#ffad0a]">
            {text.eyebrow}
          </p>

          <h1 className="mt-7 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            🕰️ {text.title}
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
            {text.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}/history`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#a66d00] px-8 py-3 font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              ← {text.historyButton}
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-8 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42a]"
            >
              {text.prehistoryButton} →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">
            {text.overviewTitle}
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {text.overviewItems.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-zinc-900 bg-black p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#ffad0a] sm:text-4xl">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence legend */}
      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-3xl">🔎</p>

            <h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">
              {text.evidenceTitle}
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              {text.evidenceDescription}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {evidenceTypesToShow.map((type) => (
              <EvidenceBadge
                key={type}
                type={type}
                locale={currentLocale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline heading */}
      <section className="bg-[#070707] px-5 pb-8 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-3xl">🌍</p>

          <h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">
            {text.timelineTitle}
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            {text.timelineDescription}
          </p>
        </div>
      </section>

      {/* Complete timeline */}
      <section className="border-b border-zinc-900 bg-[#070707] px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-[#ff9d00] via-[#6e4900] to-transparent md:block" />

          <div className="space-y-8">
            {orderedTimeline.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                locale={currentLocale}
                highlightsTitle={text.highlightsTitle}
                exploreButton={text.exploreButton}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallel regions */}
      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-3xl">🗺️</p>

            <h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">
              {text.parallelTitle}
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              {text.parallelDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-7">
            {parallelHistoricalRegions.map((region) => (
              <article
                key={region.id}
                className="rounded-3xl border border-[#5b3c00] bg-[#080808] p-7 sm:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff9d00] text-2xl">
                        {region.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {region.name[currentLocale]}
                        </h3>

                        <p className="mt-2 text-sm text-[#ffad0a]">
                          {region.period[currentLocale]}
                        </p>
                      </div>
                    </div>

                    <p className="mt-7 max-w-4xl leading-8 text-zinc-300">
                      {region.description[currentLocale]}
                    </p>

                    <div className="mt-7">
                      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                        {text.peopleTitle}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {region.relatedPeopleIds.map((personId) => (
                          <span
                            key={personId}
                            className="rounded-full border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-300"
                          >
                            {formatPersonId(personId)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${currentLocale}${region.href}`}
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#a66d00] px-7 py-3 font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
                  >
                    {text.exploreButton} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <aside className="rounded-3xl border border-amber-900/70 bg-amber-950/10 p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="text-4xl">⚠️</span>

              <div>
                <h2 className="text-2xl font-bold text-amber-300">
                  {text.noticeTitle}
                </h2>

                <p className="mt-4 leading-8 text-zinc-300">
                  {text.noticeDescription}
                </p>
              </div>
            </div>
          </aside>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-zinc-900 pt-10 sm:flex-row">
            <Link
              href={`/${currentLocale}/history`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#7e5400] px-7 py-3 font-semibold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              ← {text.historyButton}
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42a]"
            >
              {text.prehistoryButton} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  locale: Locale;
  highlightsTitle: string;
  exploreButton: string;
}

function TimelineCard({
  item,
  index,
  locale,
  highlightsTitle,
  exploreButton,
}: TimelineCardProps) {
  return (
    <article className="group relative md:pl-20">
      <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-[#b87800] bg-black text-sm font-bold text-[#ffad0a] transition group-hover:bg-[#ff9d00] group-hover:text-black md:flex">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="rounded-3xl border border-zinc-900 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-[#835700] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#6e4900] bg-[#120c00] text-3xl transition group-hover:bg-[#ff9d00]">
                {item.icon}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-zinc-800 bg-[#080808] px-3 py-1 text-xs font-bold text-zinc-500 md:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <EvidenceBadge
                    type={item.evidenceType}
                    locale={locale}
                  />
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-4xl">
                  {item.name[locale]}
                </h3>

                <p className="mt-3 font-semibold text-[#ffad0a]">
                  {item.period[locale]}
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-4xl text-base leading-8 text-zinc-300">
              {item.description[locale]}
            </p>

            <Link
              href={`/${locale}${item.href}`}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#906000] px-6 py-2 font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              {exploreButton}
              <span className="ml-3 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <aside className="rounded-2xl border border-zinc-900 bg-[#080808] p-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              {highlightsTitle}
            </h4>

            <ul className="mt-5 space-y-4">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight[locale]}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                >
                  <span className="mt-1 text-[#ff9d00]">◆</span>
                  <span>{highlight[locale]}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}

interface EvidenceBadgeProps {
  type: EvidenceType;
  locale: Locale;
}

function EvidenceBadge({ type, locale }: EvidenceBadgeProps) {
  const styles: Record<EvidenceType, string> = {
    archaeological:
      "border-emerald-800/70 bg-emerald-950/30 text-emerald-300",
    traditional:
      "border-purple-800/70 bg-purple-950/30 text-purple-300",
    uncertain:
      "border-amber-800/70 bg-amber-950/30 text-amber-300",
    chronicle:
      "border-blue-800/70 bg-blue-950/30 text-blue-300",
    "chronicle-and-archaeological":
      "border-cyan-800/70 bg-cyan-950/30 text-cyan-300",
    documented:
      "border-[#805400] bg-[#171000] text-[#ffbd42]",
    "colonial-records":
      "border-red-900/70 bg-red-950/20 text-red-300",
    "modern-records":
      "border-zinc-700 bg-zinc-900 text-zinc-300",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-4 py-2 text-xs font-bold ${styles[type]}`}
    >
      {evidenceLabels[type][locale]}
    </span>
  );
}

function formatPersonId(personId: string) {
  return personId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}