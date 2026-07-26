import { notFound } from "next/navigation";
import {
  BulletList,
  EvidenceNotice,
  InformationCard,
  NavigationButtons,
  PageHero,
  SectionHeading,
  type Locale,
} from "@/components/history/HistoryPageComponents";

interface ChronologicalGapPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  si: {
    eyebrow: "ශ්‍රී ලංකා ඉතිහාසයේ සංක්‍රාන්තික අවධිය",
    title: "⏳ කාලානුක්‍රමික පරතරය",
    subtitle:
      "ප්‍රාග් ඓතිහාසික මානව ජනාවාස සහ ලිඛිත වංශකතා ආරම්භය අතර පැවති කාලසීමාව, පූර්ව යකඩ යුගය සහ මහාශිලා සුසාන සංස්කෘතිය පිළිබඳ පුරාවිද්‍යාත්මක විමර්ශනයකි.",
    badge: "අවිනිශ්චිත කාලසීමා සහ පූර්ව යකඩ යුගය",

    introductionTitle: "කාලානුක්‍රමික පරතරය යනු කුමක්ද?",
    introductionParagraphs: [
      "ශ්‍රී ලංකා ඉතිහාසය හැදෑරීමේදී ප්‍රාග් ඓතිහාසික ක්ෂුද්‍ර ශිලා මෙවලම් භාවිත කළ මානව ජනාවාස යුගයේ සිට මහාවංශය වැනි වංශකතා ආරම්භ වන මුල් ඓතිහාසික යුගය දක්වා කාලය තුළ එක්තරා කාලානුක්‍රමික පරතරයක් හෝ අවිනිශ්චිතතාවයක් පවතී.",
      "මෙම සංක්‍රාන්ති කාලය තුළ පූර්ව යකඩ යුගය, මහාශිලා සුසාන සංස්කෘතිය, තොග මැටි පාත්‍ර තාක්ෂණය (Black and Red Ware), කෘෂිකර්මය සහ සතුන් හීලෑ කිරීම වැනි ප්‍රධාන සංස්කෘතික වෙනස්කම් රැසක් සිදු වූ බව පුරාවිද්‍යාත්මක කැණීම්වලින් හෙළි වී ඇත.",
    ],

    featuresTitle: "සංක්‍රාන්ති අවධියේ ප්‍රධාන සංස්කෘතික ලක්ෂණ",
    featuresDescription:
      "මෙම අවධිය ශ්‍රී ලංකාව ගල් යුගයේ සිට ලෝහ භාවිතය සහ ස්ථිර කෘෂිකාර්මික ජනාවාස වෙත යොමු වූ වැදගත්ම කාල පරිච්ඡේදයයි.",

    features: [
      {
        icon: "🏺",
        title: "මහාශිලා සුසාන සංස්කෘතිය",
        description:
          "මියගිය පුද්ගලයන්ගේ අස්ථි මැටි බඳුන්වල තැන්පත් කර විශාල ගල් පුවරුවලින් ආවරණය කිරීමේ (Megalithic Burials) මහාශිලා සුසාන සම්ප්‍රදාය ආරම්භ විය.",
      },
      {
        icon: "⚒️",
        title: "යකඩ තාක්ෂණය සහ ලෝහ භාවිතය",
        description:
          "ගල් මෙවලම් වෙනුවට යකඩ හා තඹ මෙවලම් භාවිතය ආරම්භ වූ අතර, කෘෂිකර්මය සහ ආයුධ නිෂ්පාදනය වඩාත් දියුණු විය.",
      },
      {
        icon: "🌾",
        title: "ස්ථිර කෘෂිකාර්මික ජනාවාස",
        description:
          "සංචාරක ජීවන රටාවෙන් මිදී වී ගොවිතැන, ගව පාලනය සහ ස්ථිර මැටි ගෙවල් සහිත ගම්මාන බිහිවීම සිදු විය.",
      },
    ],

    sitesTitle: "වැදගත් පූර්ව යකඩ යුගයේ පුරාවිද්‍යා ස්ථාන",
    sites: [
      {
        icon: "🗿",
        title: "ඉබ්බන්කටුව",
        description:
          "දඹුල්ල ආසන්නයේ පිහිටි විශාල මහාශිලා සුසාන භූමියකි. ක්‍රි.පූ. 800-400 කාලයට අයත් මැටි බඳුන්, ආභරණ සහ පබළු රැසක් මෙහි හමු වී ඇත.",
      },
      {
        icon: "🌊",
        title: "පොම්පරිප්පුව",
        description:
          "පුත්තලම අසල පිහිටි විශාල මැටි බඳුන් සුසාන (Urn Burials) හමු වූ වෙරළාශ්‍රිත පූර්ව ඓතිහාසික ස්ථානයකි.",
      },
      {
        icon: "🏛️",
        title: "අනුරාධපුර ඇතුළුනුවර",
        description:
          "ඇතුළුනුවර කැණීම්වලින් ක්‍රි.පූ. 900-800 තරම් පැරණි පූර්ව ඓතිහාසික ජනාවාස ස්ථර සහ මුල් බ්‍රාහ්මී අක්ෂර සහිත මැටි පාත්‍ර හමු වී ඇත.",
      },
      {
        icon: "🏝️",
        title: "කන්දරෝඩෙයි",
        description:
          "යාපනය අර්ධද්වීපයේ පිහිටි පැරණි වෙළඳ සහ ජනාවාස මධ්‍යස්ථානයක් වන අතර, මහාශිලා සංස්කෘතියට අයත් සාක්ෂි පෙනී යයි.",
      },
      {
        icon: "⛰️",
        title: "හොරොව්පතාන සහ පින්වැව",
        description:
          "උතුරු මැද පළාතේ පිහිටි මහාශිලා සුසාන සහ පූර්ව ලෝහ යුගයේ ජනාවාස සාක්ෂි සහිත ප්‍රදේශ වේ.",
      },
      {
        icon: "🪨",
        title: "ගල්සොහොන්කනත්ත",
        description:
          "කැකිරාව ආසන්නයේ පිහිටි තවත් ප්‍රධාන මහාශිලා සුසාන භූමියකි.",
      },
    ],

    keyAspectsTitle: "තාක්ෂණික හා සමාජීය දියුණුව",
    keyAspectsItems: [
      "රතු සහ කළු පැහැති මැටි පාත්‍ර (Black and Red Ware - BRW) නිෂ්පාදන තාක්ෂණය පැතිර ගියේය.",
      "අශ්වයන් භාවිතය සහ විදේශීය වෙළඳ සම්බන්ධතා පැවති බවට පබළු හා ලෝහ සාක්ෂි හමු වේ.",
      "සුසාන සංස්කෘතිය මඟින් සමාජයේ ශ්‍රේණිගත වීම් සහ පවුල් සම්බන්ධතා පිළිබඳ අදහසක් ලබාදෙයි.",
      "ජල කළමනාකරණයේ මුල් අවධි ලෙස කුඩා වැව් සහ ඇල මාර්ග ඉදිකිරීම ආරම්භ විය.",
      "මුල් බ්‍රාහ්මී අක්ෂරවලට පෙර පැවති සංකේත සහ සලකුණු මැටි පාත්‍රවල සටහන් කර තිබිණි.",
    ],

    evidenceTitle: "සාක්ෂි හා කාලානුක්‍රමික අවිනිශ්චිතතාව",
    evidenceDescription:
      "මෙම යුගයේ කාලවකවානු ප්‍රධාන වශයෙන් රේඩියෝ කාබන් (C-14) දින නියම කිරීම් සහ මැටි පාත්‍ර කාලානුක්‍රමය මඟින් තීරණය වේ. වංශකථාවල සඳහන් සාම්ප්‍රදායික රජවරුන්ගේ කාලවකවානු සහ මෙම පුරාවිද්‍යාත්මක සාක්ෂි අතර කාලානුක්‍රමික ගැලපීම තවමත් පර්යේෂණ මට්ටමේ පවතී.",

    previousLabel: "පූර්ව සම්ප්‍රදායික යුගය",
    nextLabel: "මුල් ඓතිහාසික යුගය",
  },

  en: {
    eyebrow: "TRANSITIONAL PERIOD OF SRI LANKAN HISTORY",
    title: "⏳ Chronological Gap",
    subtitle:
      "An archaeological investigation into the period between prehistoric settlements and recorded chronicle history, focusing on the Early Iron Age and Megalithic burial culture.",
    badge: "Uncertain Chronology & Proto-Historic Iron Age",

    introductionTitle: "What Is the Chronological Gap?",
    introductionParagraphs: [
      "In Sri Lankan historical studies, a chronological gap exists between the mesolithic hunter-gatherer era and the beginning of recorded chronicle history marked by early Brahmi inscriptions and royal genealogies.",
      "During this proto-historic transition, Sri Lanka experienced major cultural changes, including the Early Iron Age, Megalithic burial traditions, Black and Red Ware pottery technology, agriculture and animal domestication.",
    ],

    featuresTitle: "Key Cultural Features of the Transition",
    featuresDescription:
      "This period marks the critical transition from stone-tool dependency to metal use and permanent agricultural settlements.",

    features: [
      {
        icon: "🏺",
        title: "Megalithic Burial Culture",
        description:
          "Practices involved depositing human remains in clay urns or stone cists covered with large stone slabs (Megalithic Cist Burials).",
      },
      {
        icon: "⚒️",
        title: "Iron Technology and Metalwork",
        description:
          "Iron and copper replaced stone implements, significantly advancing agriculture, woodworking and tool production.",
      },
      {
        icon: "🌾",
        title: "Permanent Agricultural Villages",
        description:
          "Mobile hunting lifestyles gave way to paddy cultivation, cattle rearing and established village communities.",
      },
    ],

    sitesTitle: "Important Early Iron Age Archaeological Sites",
    sites: [
      {
        icon: "🗿",
        title: "Ibbankatuwa",
        description:
          "A major Megalithic cist burial site near Dambulla dated to c. 800–400 BCE, containing pottery, beads and funerary goods.",
      },
      {
        icon: "🌊",
        title: "Pomparippu",
        description:
          "A coastal proto-historic site near Puttalam known for extensive urn burial fields.",
      },
      {
        icon: "🏛️",
        title: "Anuradhapura Citadel",
        description:
          "Deep excavations revealed proto-historic settlement layers dating back to 900–800 BCE with early pottery marks.",
      },
      {
        icon: "🏝️",
        title: "Kandarodai",
        description:
          "An ancient settlement and trade site in the Jaffna Peninsula containing Megalithic cultural evidence.",
      },
      {
        icon: "⛰️",
        title: "Horowpathana and Pinwewa",
        description:
          "Sites in the North Central Province exhibiting Megalithic burial complexes and metal-age settlement evidence.",
      },
      {
        icon: "🪨",
        title: "Galsohonkanatta",
        description:
          "Another prominent Megalithic burial field located near Kekirawa.",
      },
    ],

    keyAspectsTitle: "Technological & Social Advancements",
    keyAspectsItems: [
      "Widespread manufacture of Black and Red Ware (BRW) pottery using wheel technology.",
      "Evidence of horses and long-distance trade networks indicated by imported beads and metals.",
      "Burial organization suggests early social stratification and clan structures.",
      "Initial steps toward water management, including small village tanks and channels.",
      "Pre-script symbols and potters' marks scratched onto ceramic vessels before the formal Brahmi script.",
    ],

    evidenceTitle: "Chronological Uncertainty & Evidence",
    evidenceDescription:
      "Dates for this period rely on radiocarbon (C-14) testing and ceramic typology. Correlating traditional chronicle genealogies with these physical archaeological discoveries remains an active area of historical research.",

    previousLabel: "Early Traditional Age",
    nextLabel: "Early Historical Period",
  },
};

export default async function ChronologicalGapPage({
  params,
}: ChronologicalGapPageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const text = content[locale as keyof typeof content];

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow={text.eyebrow}
        title={text.title}
        subtitle={text.subtitle}
        badge={text.badge}
      />

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon="⏳" title={text.introductionTitle} />

          <div className="mt-8 space-y-6 text-base leading-9 text-zinc-300 sm:text-lg">
            {text.introductionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="🏺"
            title={text.featuresTitle}
            description={text.featuresDescription}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {text.features.map((item) => (
              <InformationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading icon="📍" title={text.sitesTitle} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.sites.map((site) => (
              <InformationCard key={site.title} {...site} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon="⚒️" title={text.keyAspectsTitle} />

          <div className="mt-10">
            <BulletList items={text.keyAspectsItems} />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <EvidenceNotice
            status="uncertain"
            title={text.evidenceTitle}
            description={text.evidenceDescription}
          />

          <div className="mt-12">
            <NavigationButtons
              locale={locale as Locale}
              previousHref="/history/early-traditional-age"
              previousLabel={text.previousLabel}
              nextHref="/history/early-historical-period"
              nextLabel={text.nextLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
