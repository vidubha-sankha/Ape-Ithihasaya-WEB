import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Anchor,
  Bone,
  BookOpen,
  Building2,
  Castle,
  CircleHelp,
  Clock3,
  Columns3,
  Crown,
  Globe2,
  Landmark,
  MapPinned,
  Mountain,
  ScrollText,
  Search,
  Shield,
  Ship,
  Swords,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

import {
  evidenceLabels,
  historyTimeline,
  parallelHistoricalRegions,
  type EvidenceType,
  type Locale,
  type TimelineIconName,
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
    title: "ශ්රී ලංකාවේ සම්පූර්ණ ඉතිහාස කාලරේඛාව",
    description:
      "ප්රාග් ඉතිහාසයේ සිට නූතන ශ්රී ලංකාව දක්වා සාහිත්ය සම්ප්රදායන්, පුරාවිද්යාත්මක සාක්ෂි, වංශකථා, රාජධානි සහ යටත්විජිත වාර්තා වෙන වෙනම හඳුනාගෙන ක්රමානුකූලව ගවේෂණය කරන්න.",
    backButton: "ඉතිහාස හැඳින්වීම",
    beginButton: "ප්රාග් ඉතිහාසයෙන් ආරම්භ කරන්න",
    overviewTitle: "කාලරේඛාවේ සාරාංශය",
    overviewItems: [
      {
        value: "20",
        label: "ප්රධාන යුග සහ රාජධානි",
      },
      {
        value: "8",
        label: "සාක්ෂි වර්ග",
      },
      {
        value: "250+",
        label: "සම්බන්ධ කළ හැකි පාලකයන්",
      },
      {
        value: "2",
        label: "සිංහල සහ ඉංග්රීසි භාෂා",
      },
    ],
    evidenceEyebrow: "සාක්ෂි පිළිබඳ අවබෝධය",
    evidenceTitle: "සාක්ෂි වර්ග හඳුනාගන්න",
    evidenceDescription:
      "Timeline එකේ සියලු තොරතුරු එකම සාක්ෂි මට්ටමකින් නොපවතී. Badge එක මඟින් එක් එක් යුගය සඳහා භාවිත වන ප්රධාන මූලාශ්ර වර්ගය පෙන්වයි.",
    timelineEyebrow: "ශ්රී ලංකාවේ අතීත ගමන්මඟ",
    timelineTitle: "ප්රධාන කාලානුක්රමික පෙළ",
    timelineDescription:
      "පහත අනුපිළිවෙළ මඟින් ශ්රී ලංකාවේ ප්රධාන ඓතිහාසික අවධි, රාජධානි, යටත්විජිත පාලන සහ නූතන යුගය පෙන්වයි.",
    keyFacts: "ප්රධාන කරුණු",
    readMore: "විස්තර බලන්න",
    parallelEyebrow: "ප්රධාන පෙළට සමාන්තරව",
    parallelTitle: "සමාන්තර ඓතිහාසික ප්රදේශ",
    parallelDescription:
      "සියලු ඓතිහාසික ප්රදේශ ප්රධාන රාජධානි අනුපිළිවෙළේ ඊළඟ රාජධානියක් නොවේ. සමහර ප්රදේශ ප්රධාන රාජධානියක් සමඟ සමාන්තරව වර්ධනය වූ ප්රාදේශීය බල මධ්යස්ථාන වේ.",
    relatedPeople: "සම්බන්ධ පුද්ගලයන්",
    noticeTitle: "වැදගත් කාලරේඛා සටහන",
    noticeDescription:
      "පූර්ව සම්ප්රදායික යුගය සහ කාලානුක්රමික පරතරය නිල වශයෙන් දින නියම කළ පුරාවිද්යාත්මක යුග නොවේ. ඒවා සම්ප්රදායික සාහිත්ය, අවිනිශ්චිතතාව සහ තහවුරු කළ ඉතිහාසය වෙන්කර පෙන්වීම සඳහා Ape Ithihasaya භාවිත කරන සංස්කාරක වර්ගීකරණ වේ.",
    previousButton: "ඉතිහාස හැඳින්වීම",
    nextButton: "ප්රාග් ඉතිහාසය",
  },

  en: {
    eyebrow: "APE ITHIHASAYA",
    title: "Complete Timeline of Sri Lankan History",
    description:
      "Explore Sri Lanka from prehistory to the modern age while distinguishing literary traditions, archaeology, chronicles, kingdoms and colonial records.",
    backButton: "History Introduction",
    beginButton: "Begin with Prehistory",
    overviewTitle: "Timeline Overview",
    overviewItems: [
      {
        value: "20",
        label: "Major periods and kingdoms",
      },
      {
        value: "8",
        label: "Evidence classifications",
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
    evidenceEyebrow: "UNDERSTANDING THE SOURCES",
    evidenceTitle: "Identify the Evidence Types",
    evidenceDescription:
      "Not every timeline entry has the same level of evidence. Each badge identifies the main source classification used for that period.",
    timelineEyebrow: "THE HISTORICAL JOURNEY",
    timelineTitle: "Main Chronological Sequence",
    timelineDescription:
      "The sequence below presents Sri Lanka's principal historical periods, kingdoms, colonial administrations and modern period.",
    keyFacts: "Key Highlights",
    readMore: "Explore Details",
    parallelEyebrow: "ALONGSIDE THE MAIN SEQUENCE",
    parallelTitle: "Parallel Historical Regions",
    parallelDescription:
      "Not every historical region was the next successor kingdom. Some developed as regional centres of power alongside major kingdoms.",
    relatedPeople: "Related People",
    noticeTitle: "Important Timeline Notice",
    noticeDescription:
      "The Early Traditional Age and Chronological Gap are not formally dated archaeological periods. They are editorial classifications used by Ape Ithihasaya to distinguish tradition, uncertainty and verified history.",
    previousButton: "History Introduction",
    nextButton: "Prehistory",
  },
} satisfies Record<Locale, unknown>;

const iconMap: Record<TimelineIconName, LucideIcon> = {
  bone: Bone,
  crown: Crown,
  "circle-help": CircleHelp,
  landmark: Landmark,
  ship: Ship,
  building: Building2,
  "book-open": BookOpen,
  castle: Castle,
  mountain: Mountain,
  scroll: ScrollText,
  shield: Shield,
  swords: Swords,
  flag: Globe2,
  globe: Globe2,
  columns: Columns3,
  anchor: Anchor,
};

const evidenceTypes: EvidenceType[] = [
  "archaeological",
  "traditional",
  "uncertain",
  "chronicle",
  "chronicle-and-archaeological",
  "documented",
  "colonial-records",
  "modern-records",
];

export default async function TimelinePage({
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
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative overflow-hidden border-b border-[#3f2a00] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.15),transparent_62%)]" />

        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9d00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ffad0a] sm:text-sm">
            {text.eyebrow}
          </p>

          <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8c5c00] bg-[#140e00] text-[#ffad0a]">
            <Clock3 className="h-8 w-8" strokeWidth={1.7} />
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl font-serif text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {text.title}
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
            {text.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}/history`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#9c6600] px-8 py-3 font-bold text-[#ffad0a] transition hover:-translate-y-1 hover:bg-[#ff9d00] hover:text-black"
            >
              ← {text.backButton}
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-8 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb531]"
            >
              {text.beginButton} →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#050505] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-bold sm:text-3xl">
            {text.overviewTitle}
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {text.overviewItems.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-zinc-900 bg-black px-5 py-7 text-center"
              >
                <p className="text-3xl font-black text-[#ffad0a]">
                  {item.value}
                </p>

                <p className="mt-3 text-xs leading-6 text-zinc-500 sm:text-sm">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ffad0a]">
            {text.evidenceEyebrow}
          </p>

          <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#795000] bg-[#120d00] text-[#ffad0a]">
            <Search className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold sm:text-5xl">
            {text.evidenceTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            {text.evidenceDescription}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {evidenceTypes.map((type) => (
              <EvidenceBadge
                key={type}
                type={type}
                locale={currentLocale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ffad0a]">
            {text.timelineEyebrow}
          </p>

          <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#795000] bg-black text-[#ffad0a]">
            <MapPinned className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold sm:text-5xl">
            {text.timelineTitle}
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            {text.timelineDescription}
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#050505] px-4 pb-24 pt-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-[#ff9d00] via-[#6d4800] to-transparent md:block" />

          <div className="space-y-6 md:space-y-8">
            {orderedTimeline.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                locale={currentLocale}
                keyFactsLabel={text.keyFacts}
                readMoreLabel={text.readMore}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ffad0a]">
            {text.parallelEyebrow}
          </p>

          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#795000] bg-[#120d00] text-[#ffad0a]">
            <MapPinned className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold sm:text-5xl">
            {text.parallelTitle}
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            {text.parallelDescription}
          </p>

          <div className="mt-12 space-y-7">
            {parallelHistoricalRegions.map((region) => (
              <article
                key={region.id}
                className="rounded-3xl border border-[#7c5200] bg-[#080808] p-6 transition hover:border-[#ff9d00] sm:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#8f5e00] bg-[#130d00] text-[#ffad0a]">
                        <MapPinned
                          className="h-7 w-7"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white sm:text-3xl">
                          {region.name[currentLocale]}
                        </h3>

                        <p className="mt-2 text-sm font-semibold text-[#ffad0a]">
                          {region.period[currentLocale]}
                        </p>
                      </div>
                    </div>

                    <p className="mt-7 max-w-4xl leading-8 text-zinc-300">
                      {region.description[currentLocale]}
                    </p>

                    <div className="mt-7">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                        {text.relatedPeople}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {region.relatedPeopleIds.map((personId) => (
                          <span
                            key={personId}
                            className="rounded-full border border-zinc-800 bg-black px-4 py-2 text-xs text-zinc-300"
                          >
                            {formatPersonId(personId)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${currentLocale}${region.href}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a36b00] px-6 py-3 text-sm font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
                  >
                    {text.readMore} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <aside className="rounded-3xl border border-amber-800/70 bg-amber-950/10 p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-700/60 bg-black text-amber-400">
                <TriangleAlert
                  className="h-7 w-7"
                  strokeWidth={1.7}
                />
              </div>

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
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#805500] px-7 py-3 font-semibold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              ← {text.previousButton}
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42b]"
            >
              {text.nextButton} →
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
  keyFactsLabel: string;
  readMoreLabel: string;
}

function TimelineCard({
  item,
  index,
  locale,
  keyFactsLabel,
  readMoreLabel,
}: TimelineCardProps) {
  const Icon = iconMap[item.iconName] ?? Landmark;

  return (
    <article className="group relative md:pl-20">
      <div className="absolute left-0 top-7 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-[#b87800] bg-black text-xs font-black text-[#ffad0a] transition group-hover:bg-[#ff9d00] group-hover:text-black md:flex">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-900 bg-black transition hover:-translate-y-1 hover:border-[#7f5500]">
        <div className="grid lg:grid-cols-[1fr_280px]">
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7c5200] bg-[#140e00] text-[#ffad0a] transition group-hover:bg-[#ff9d00] group-hover:text-black">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#755000] bg-[#100b00] px-3 py-1 text-[11px] font-black text-[#ffad0a] md:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <EvidenceBadge
                    type={item.evidenceType}
                    locale={locale}
                  />
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {item.name[locale]}
                </h3>

                <p className="mt-2 text-sm font-bold text-[#ffad0a]">
                  {item.period[locale]}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
              {item.description[locale]}
            </p>

            <Link
              href={`/${locale}${item.href}`}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[#a46c00] px-5 py-2 text-sm font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              {readMoreLabel}
              <span className="ml-2">→</span>
            </Link>
          </div>

          <aside className="border-t border-zinc-900 bg-[#080808] p-6 lg:border-l lg:border-t-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              {keyFactsLabel}
            </p>

            <ul className="mt-5 space-y-4">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight[locale]}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9d00]" />
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
      "border-emerald-700/70 bg-emerald-950/30 text-emerald-300",
    traditional:
      "border-purple-700/70 bg-purple-950/30 text-purple-300",
    uncertain:
      "border-amber-700/70 bg-amber-950/30 text-amber-300",
    chronicle:
      "border-blue-700/70 bg-blue-950/30 text-blue-300",
    "chronicle-and-archaeological":
      "border-cyan-700/70 bg-cyan-950/30 text-cyan-300",
    documented:
      "border-[#8b5b00] bg-[#181000] text-[#ffbd42]",
    "colonial-records":
      "border-red-800/70 bg-red-950/20 text-red-300",
    "modern-records":
      "border-zinc-700 bg-zinc-900 text-zinc-300",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold sm:text-xs ${styles[type]}`}
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
