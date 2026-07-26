import Link from "next/link";
import { notFound } from "next/navigation";

type Locale = "si" | "en";

interface HistoryIntroductionPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const pageContent = {
  si: {
    eyebrow: "අපේ ඉතිහාසය",
    title: "ඉතිහාස හැඳින්වීම",
    subtitle: "ශ්‍රී ලංකාවේ ඉතිහාසය",

    introduction: [
      "ශ්‍රී ලංකාව වසර දහස් ගණනක් පුරා විහිදී ගිය අතිශය පොහොසත් ඉතිහාසයක් සහිත දූපතකි. ප්‍රාග් ඓතිහාසික මානව ජනාවාසවල සිට නූතන ශ්‍රී ලංකාව දක්වා පැමිණි ගමන්මඟ තුළ රාජධානි, ආගම්, සංස්කෘතික සම්ප්‍රදායන්, ජල කළමනාකරණය, වෙළඳාම, කලා හා තාක්ෂණය වැනි බොහෝ ක්ෂේත්‍රවල විශිෂ්ට දියුණුවක් දක්නට ලැබේ.",

      "ඉතිහාසය යනු අතීතයේ සිදු වූ සිදුවීම් පමණක් නොව, ඒවාට හේතු වූ සමාජ, දේශපාලන, ආර්ථික හා සංස්කෘතික වෙනස්කම් පිළිබඳ අධ්‍යයනයකි. අතීතය නිවැරදිව අවබෝධ කර ගැනීමෙන් වර්තමානය තේරුම් ගැනීමටත්, අනාගතය සඳහා වටිනා පාඩම් ලබා ගැනීමටත් හැකි වේ. මෙය ඉතිහාසය හැදෑරීමේ ප්‍රධාන අරමුණකි.",
    ],

    importanceTitle: "ඉතිහාසය හැදෑරීමේ වැදගත්කම",
    importanceDescription: "ඉතිහාසය හැදෑරීම මඟින්,",

    importanceItems: [
      "ශ්‍රී ලංකාවේ උරුමය හා අනන්‍යතාවය අවබෝධ කරගත හැක.",
      "අතීතයේ සිදුවීම් විවේචනාත්මකව විමසා බැලීමේ හැකියාව වර්ධනය වේ.",
      "විවිධ සංස්කෘතීන් සහ ජනතාව අතර ඇති සම්බන්ධතා තේරුම් ගත හැක.",
      "ජාතික උරුමය ආරක්ෂා කිරීමේ වැදගත්කම අවබෝධ වේ.",
      "අනාගත පරම්පරාව සඳහා ඉතිහාසය නිවැරදිව සංරක්ෂණය කිරීමේ අවශ්‍යතාව හඳුනාගත හැක.",
    ],

    sourcesTitle: "ඉතිහාසය සඳහා භාවිත වන ප්‍රධාන මූලාශ්‍ර",

    sourcesDescription:
      "ශ්‍රී ලංකාවේ ඉතිහාසය ගොඩනැගෙන්නේ විවිධ මූලාශ්‍ර එකට සසඳා විමර්ශනය කිරීමෙනි. ප්‍රධාන වශයෙන් සාහිත්‍ය මූලාශ්‍ර සහ පුරාවිද්‍යාත්මක මූලාශ්‍ර යන වර්ග දෙක භාවිතා වේ.",

    literaryTitle: "සාහිත්‍ය මූලාශ්‍ර",

    literarySources: [
      "මහාවංශය",
      "දීපවංශය",
      "චූලවංශය",
      "රාජාවලිය",
      "බෝධිවංශය",
      "ධාතුවංශය",
      "පූජාවලිය",
      "විදේශීය වාර්තා හා සංචාරක සටහන්",
    ],

    archaeologicalTitle: "පුරාවිද්‍යාත්මක මූලාශ්‍ර",

    archaeologicalSources: [
      "ශිලා ලේඛන",
      "පුරාවස්තු",
      "කාසි",
      "නටබුන්",
      "ප්‍රතිමා",
      "චිත්‍ර",
      "පුරාණ ගොඩනැගිලි",
      "පුරාවිද්‍යා කැණීම්",
    ],

    sourceConclusion:
      "ඉතිහාසඥයන් මෙම සියලු මූලාශ්‍ර එකිනෙක සසඳා, ඒවායේ විශ්වසනීයත්වය පරීක්ෂා කර ඉතිහාසය ගොඩනඟයි. එක් මූලාශ්‍රයක සඳහන් තොරතුරක් වෙනත් සාහිත්‍ය හෝ පුරාවිද්‍යාත්මක සාක්ෂියකින් තහවුරු වන විට එම තොරතුරේ විශ්වසනීයත්වය වැඩි වේ.",

    missionTitle: "Ape Ithihasaya හි අරමුණ",

    missionDescription:
      "Ape Ithihasaya හි අරමුණ වන්නේ ශ්‍රී ලංකාවේ ඉතිහාසය පිළිබඳ විශ්වාසදායක, ක්‍රමානුකූල සහ පර්යේෂණාත්මක දැනුම් සම්භාරයක් එකම වේදිකාවකින් ලබාදීමයි.",

    exploreTitle: "මෙම වෙබ් අඩවිය තුළ ගවේෂණය කළ හැකි දේ",

    exploreItems: [
      {
        icon: "🦴",
        title: "ප්‍රාග් ඉතිහාසය",
        description:
          "මුල් මානව ජනාවාස, බලංගොඩ මානවයා සහ පුරාවිද්‍යා සාක්ෂි.",
      },
      {
        icon: "👑",
        title: "පූර්ව සම්ප්‍රදායික යුගය",
        description:
          "මහා සම්මත මනු, යක්ෂ වංශ, රාවණ සහ විභීෂණ සම්ප්‍රදායන්.",
      },
      {
        icon: "🏛",
        title: "මුල් ඓතිහාසික යුගය",
        description:
          "විජය කුමරු, මුල් පාලකයන් සහ පුරාණ දේශපාලන මධ්‍යස්ථාන.",
      },
      {
        icon: "🏯",
        title: "ශ්‍රී ලංකාවේ රාජධානි",
        description:
          "අනුරාධපුරයේ සිට මහනුවර දක්වා ප්‍රධාන රාජධානි.",
      },
      {
        icon: "👑",
        title: "රජවරු සහ රැජිනන්",
        description:
          "පාලන කාල, රාජවංශ, පවුල් සම්බන්ධතා සහ ජීවන තොරතුරු.",
      },
      {
        icon: "🏺",
        title: "පුරාවිද්‍යා ස්ථාන",
        description:
          "පුරාණ නගර, විහාර, බලකොටු, නටබුන් සහ පුරාවස්තු.",
      },
      {
        icon: "📜",
        title: "ශිලා ලේඛන",
        description:
          "පුරාණ සෙල්ලිපි සහ ඒවායෙන් අනාවරණය වන ඓතිහාසික තොරතුරු.",
      },
      {
        icon: "🪙",
        title: "කාසි හා පුරාවස්තු",
        description:
          "පුරාණ ආර්ථිකය, වෙළඳාම, කලාව සහ තාක්ෂණය පිළිබඳ සාක්ෂි.",
      },
      {
        icon: "👨‍👩‍👦",
        title: "රාජවංශ පවුල් සම්බන්ධතා",
        description:
          "පියවරුන්, මව්වරුන්, සහෝදරයන්, විවාහ සහ පරම්පරා.",
      },
      {
        icon: "🗺️",
        title: "අන්තර්ක්‍රියාකාරී කාලරේඛාව",
        description:
          "ප්‍රාග් ඉතිහාසයේ සිට නූතන ශ්‍රී ලංකාව දක්වා සම්පූර්ණ ගමන්මඟ.",
      },
    ],

    timelineButton: "සම්පූර්ණ කාලරේඛාව බලන්න",
    kingsButton: "රජවරු ගවේෂණය කරන්න",
    homeButton: "මුල් පිටුවට යන්න",

    sourceNote:
      "මෙම හැඳින්වීම සකස් කිරීමේදී ශ්‍රී ලංකාවේ ඉතිහාසය හැදෑරීමේ සාහිත්‍ය හා පුරාවිද්‍යාත්මක මූලාශ්‍ර පිළිබඳ අධ්‍යාපනික කරුණු සැලකිල්ලට ගෙන ඇත.",
  },

  en: {
    eyebrow: "APE ITHIHASAYA",
    title: "Introduction to History",
    subtitle: "The History of Sri Lanka",

    introduction: [
      "Sri Lanka is an island with a rich history extending across thousands of years. From prehistoric human settlements to modern Sri Lanka, its historical journey includes remarkable achievements in kingdoms, religions, cultural traditions, water management, trade, art and technology.",

      "History is not limited to events that occurred in the past. It also examines the social, political, economic and cultural changes that influenced those events. Understanding the past helps us interpret the present and gain valuable lessons for the future.",
    ],

    importanceTitle: "Why Studying History Is Important",
    importanceDescription: "The study of history helps us to:",

    importanceItems: [
      "Understand Sri Lanka's heritage and national identity.",
      "Develop the ability to examine past events critically.",
      "Understand relationships between different cultures and communities.",
      "Recognise the importance of protecting national heritage.",
      "Preserve historical knowledge accurately for future generations.",
    ],

    sourcesTitle: "Major Sources Used to Study History",

    sourcesDescription:
      "The history of Sri Lanka is reconstructed by comparing and evaluating different forms of evidence. Historical sources can primarily be divided into literary sources and archaeological sources.",

    literaryTitle: "Literary Sources",

    literarySources: [
      "Mahavamsa",
      "Dipavamsa",
      "Culavamsa",
      "Rajavaliya",
      "Bodhivamsa",
      "Dhatuvamsa",
      "Pujavaliya",
      "Foreign records and travel accounts",
    ],

    archaeologicalTitle: "Archaeological Sources",

    archaeologicalSources: [
      "Inscriptions",
      "Artifacts",
      "Coins",
      "Ancient ruins",
      "Sculptures",
      "Paintings",
      "Ancient buildings",
      "Archaeological excavations",
    ],

    sourceConclusion:
      "Historians compare these sources and evaluate their reliability when reconstructing the past. Historical information becomes more reliable when a literary account is supported by inscriptions, artifacts or other archaeological evidence.",

    missionTitle: "The Purpose of Ape Ithihasaya",

    missionDescription:
      "The purpose of Ape Ithihasaya is to provide a trustworthy, systematic and research-oriented knowledge platform dedicated to the complete history of Sri Lanka.",

    exploreTitle: "What You Can Explore",

    exploreItems: [
      {
        icon: "🦴",
        title: "Prehistory",
        description:
          "Early human settlements, Balangoda Man and archaeological evidence.",
      },
      {
        icon: "👑",
        title: "Early Traditional Age",
        description:
          "Maha Sammata Manu, Yaksha lineages, Ravana and Vibhishana traditions.",
      },
      {
        icon: "🏛",
        title: "Early Historical Period",
        description:
          "Prince Vijaya, early rulers and ancient political centres.",
      },
      {
        icon: "🏯",
        title: "Kingdoms of Sri Lanka",
        description:
          "Major kingdoms from Anuradhapura to the Kingdom of Kandy.",
      },
      {
        icon: "👑",
        title: "Kings and Queens",
        description:
          "Reign periods, dynasties, family relationships and biographies.",
      },
      {
        icon: "🏺",
        title: "Archaeological Sites",
        description:
          "Ancient cities, temples, fortresses, monuments and artifacts.",
      },
      {
        icon: "📜",
        title: "Inscriptions",
        description:
          "Ancient inscriptions and the historical information they preserve.",
      },
      {
        icon: "🪙",
        title: "Coins and Artifacts",
        description:
          "Evidence about ancient economies, trade, art and technology.",
      },
      {
        icon: "👨‍👩‍👦",
        title: "Royal Family Trees",
        description:
          "Parents, siblings, marriages, descendants and royal lineages.",
      },
      {
        icon: "🗺️",
        title: "Interactive Timeline",
        description:
          "A complete journey from prehistory to modern Sri Lanka.",
      },
    ],

    timelineButton: "Explore the Complete Timeline",
    kingsButton: "Explore the Kings",
    homeButton: "Return Home",

    sourceNote:
      "This introduction was prepared using educational concepts concerning the literary and archaeological sources used to study Sri Lankan history.",
  },
} satisfies Record<Locale, unknown>;

export default async function HistoryIntroductionPage({
  params,
}: HistoryIntroductionPageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const text = pageContent[locale as Locale];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#3b2900] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.14),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ffad0a]">
            {text.eyebrow}
          </p>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            🌍 {text.title}
          </h1>

          <p className="mt-6 text-xl font-semibold text-[#ffad0a] sm:text-2xl">
            {text.subtitle}
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#ff9d00]" />
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-7 text-base leading-9 text-zinc-300 sm:text-lg">
            {text.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon="📚"
            title={text.importanceTitle}
            description={text.importanceDescription}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {text.importanceItems.map((item, index) => (
              <article
                key={item}
                className="flex gap-4 rounded-2xl border border-zinc-900 bg-[#080808] p-6 transition hover:border-[#805400]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff9d00] font-bold text-black">
                  {index + 1}
                </div>

                <p className="leading-8 text-zinc-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="🔎"
            title={text.sourcesTitle}
            description={text.sourcesDescription}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <SourceCard
              icon="📖"
              title={text.literaryTitle}
              items={text.literarySources}
            />

            <SourceCard
              icon="🏺"
              title={text.archaeologicalTitle}
              items={text.archaeologicalSources}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-[#4e3500] bg-black p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>

              <p className="leading-8 text-zinc-300">
                {text.sourceConclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff9d00]">
            Ape Ithihasaya
          </p>

          <h2 className="mt-5 font-serif text-3xl font-bold sm:text-5xl">
            {text.missionTitle}
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-9 text-zinc-300 sm:text-lg">
            {text.missionDescription}
          </p>
        </div>
      </section>

      {/* Explore Cards */}
      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="🧭"
            title={text.exploreTitle}
            description=""
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {text.exploreItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-zinc-900 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8a5900]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#704900] bg-[#120d00] text-2xl transition group-hover:bg-[#ff9d00]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#6f4900] bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.12),transparent_70%)] px-6 py-14 text-center sm:px-10">
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">
            {locale === "si"
              ? "ශ්‍රී ලංකාවේ ඉතිහාස ගමන්මඟ ආරම්භ කරන්න"
              : "Begin Your Journey Through Sri Lankan History"}
          </h2>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}/history/timeline`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-8 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42a]"
            >
              {text.timelineButton}
            </Link>

            <Link
              href={`/${locale}/kings`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#b97900] px-8 py-3 font-bold text-[#ffad0a] transition hover:-translate-y-1 hover:bg-[#ff9d00] hover:text-black"
            >
              {text.kingsButton}
            </Link>
          </div>

          <Link
            href={`/${locale}`}
            className="mt-7 inline-flex text-sm text-zinc-400 transition hover:text-[#ffad0a]"
          >
            ← {text.homeButton}
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-6 text-zinc-600">
          {text.sourceNote}
        </p>
      </section>
    </main>
  );
}

interface SectionHeadingProps {
  icon: string;
  title: string;
  description: string;
  centered?: boolean;
}

function SectionHeading({
  icon,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <p className="text-3xl">{icon}</p>

      <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

interface SourceCardProps {
  icon: string;
  title: string;
  items: string[];
}

function SourceCard({ icon, title, items }: SourceCardProps) {
  return (
    <article className="rounded-3xl border border-[#4d3400] bg-black p-7 sm:p-9">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff9d00] text-2xl">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-zinc-900 bg-[#080808] px-4 py-4 text-zinc-300"
          >
            <span className="mt-1 text-[#ff9d00]">◆</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}