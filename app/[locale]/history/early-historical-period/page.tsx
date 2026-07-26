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

interface EarlyHistoricalPeriodPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  si: {
    eyebrow: "ලිඛිත හා සෙල්ලිපි සාක්ෂි මත පදනම් වූ යුගය",
    title: "🏛️ මුල් ඓතිහාසික යුගය",
    subtitle:
      "විජය කුමරුගේ පැමිණීමේ සිට පඬුකාභය රජුගේ නගර නිර්මාණය සහ මිහිඳු හිමියන්ගේ ලංකාගමනය දක්වා වූ ලිඛිත වංශකතා සහ සෙල්ලිපි මඟින් තහවුරු වන ප්‍රථම රාජ්‍ය පාලන අවධිය.",
    badge: "සෙල්ලිපි හා වංශකතා සාක්ෂි සහිත යුගය",

    introductionTitle: "මුල් ඓතිහාසික යුගය යනු කුමක්ද?",
    introductionParagraphs: [
      "ශ්‍රී ලංකාවේ මුල් ඓතිහාසික යුගය ආරම්භ වන්නේ ලිඛිත වංශකතා වාර්තා සහ සෙල්ලිපි සාක්ෂි ලැබීමට පටන් ගන්නා කාලපරිච්ඡේදයෙනි. මහාවංශය සහ දීපවංශය වැනි වංශකතාවලට අනුව විජය කුමරුගේ ලංකාගමනයත් සමඟම මෙම යුගයේ මුල් අඩිතාලම වැටේ.",
      "පසුව පඬුකාභය රජු විසින් අනුරාධපුරය අගනුවර ලෙස සංවිධානය කිරීම, ග්‍රාම සීමා නියම කිරීම සහ මධ්‍යගත පාලන ක්‍රමයක් බිහිකිරීමත් සමඟ මෙම යුගය තවදුරටත් ස්ථාවර විය. දේවානම්පියතිස්ස රජුගේ දවස මහින්දාගමනය සිදු වීමත් සමඟ බුදුදහම රාජ්‍ය ආගම බවට පත්වී ලංකා සමාජයේ සියලු අංශයන්හි දැවැන්ත සංස්කෘතික හා අක්ෂරමය ප්‍රබෝධයක් ඇති විය.",
    ],

    epochsTitle: "යුගයේ ප්‍රධාන සන්ධිස්ථාන",
    epochsDescription:
      "ලංකාවේ දේශපාලන, සංස්කෘතික සහ ආගමික ඉතිහාසයේ පදනම දැමූ ප්‍රධාන සංඓතිහාසික අවස්ථා.",

    epochs: [
      {
        icon: "👑",
        title: "තම්බපණ්ණි හා උපතිස්සගම රාජධානි",
        description:
          "විජය කුමරු සහ පසුව පැමිණි පඬුවස්දෙව් ඇතුළු පාලකයන් ලංකාවේ ප්‍රථම සංවිධානාත්මක රාජ්‍ය නගර ඉදිකිරීම.",
      },
      {
        icon: "🏛️",
        title: "අනුරාධපුර අගනුවර පිහිටුවීම",
        description:
          "පඬුකාභය රජු විසින් අනුරාධපුරය සැලසුම්සහගත අගනගරයක් ලෙස ගොඩනගා, ග්‍රාම සීමා සහ පාලන ව්‍යූහයන් ස්ථාපිත කිරීම.",
      },
      {
        icon: "🪷",
        title: "මහින්දාගමනය සහ ආගමික ප්‍රබෝධය",
        description:
          "අරහත් මහින්ද තෙරණුවන්ගේ පැමිණීමත් සමඟ බුදුදහම, අක්ෂර කලාව, වාස්තු විද්‍යාව සහ බ්‍රාහ්මී සෙල්ලිපි ලියැවීම ආරම්භ වීම.",
      },
    ],

    figuresTitle: "ප්‍රධාන ඓතිහාසික චරිත",
    figures: [
      {
        icon: "🗡️",
        title: "විජය රජු",
        description:
          "ලංකාවට පැමිණ තම්බපණ්ණිය අගනුවර කරගනිමින් ප්‍රථම රාජවංශය ආරම්භ කළ බවට වංශකතාවල සඳහන් රජු.",
      },
      {
        icon: "👑",
        title: "පඬුවස්දෙව් රජු",
        description:
          "විජයගෙන් පසු උපතිස්සගම පාලනය භාරගත්, භද්දකච්චායනා දේවිය සමඟ රාජ්‍ය විචාල රජු.",
      },
      {
        icon: "🛡️",
        title: "පඬුකාභය රජු",
        description:
          "අනුරාධපුර රාජධානියේ සැබෑ නිර්මාතෘ ලෙස සැලකෙන, සියලු දේශීය ගෝත්‍ර එක්සත් කර රට පාලනය කළ මහා පාලකයා.",
      },
      {
        icon: "🌳",
        title: "මුටසීව රජු",
        description:
          "පඬුකාභය රජුගේ පුත් වූ අතර, අනුරාධපුරයේ සුප්‍රසිද්ධ මහමෙව්නා උයන නිර්මාණය කළ රජු.",
      },
      {
        icon: "🪷",
        title: "දේවානම්පියතිස්ස රජු",
        description:
          "ලංකාවට බුදුදහම නිල වශයෙන් පිළිගත්, අශෝක අධිරාජයා සමඟ රාජ්‍ය තාන්ත්‍රික සබඳතා පැවැත්වූ රජු.",
      },
      {
        icon: "🌱",
        title: "සංඝමිත්තා තෙරණිය",
        description:
          "ශ්‍රී මහා බෝධීන් වහන්සේගේ දක්සිණ ශාඛාව ලංකාවට වැඩම කරවූ සහ මෙහෙණි සස්න පිහිටුවූ අරහත් තෙරණිය.",
      },
    ],

    keyAspectsTitle: "ඓතිහාසික හා සංස්කෘතික සාක්ෂි",
    keyAspectsItems: [
      "මිහින්තලේ, වෙස්සගිරිය, රාජගල වැනි ස්ථානවල පිහිටි ලෙන්වල කොටා ඇති මුල් බ්‍රාහ්මී සෙල්ලිපි (Early Brahmi Inscriptions).",
      "ලංකාවේ අක්ෂර භාවිතය සහ භාෂා පරිණාමය පිළිබඳ ප්‍රථම තහවුරු වූ සාක්ෂි ලැබීම.",
      "මහාවංශය, දීපවංශය සහ සමන්තපාසාදිකාව වැනි ඓතිහාසික සාහිත්‍ය කෘතිවල එන නිවැරදි රාජාවලිය.",
      "මහමෙව්නා උයන, ලංකාරාමය, මහාථූපය සහ පූර්ව බෞද්ධ ස්තූපවල මුල් අඩිතාලම.",
      "කාසි (Kahapana / Punch-marked coins) සහ දේශීය හා විදේශීය වෙළඳ මධ්‍යස්ථාන දියුණු වීම.",
    ],

    evidenceTitle: "පුරාවිද්‍යාත්මක හා සෙල්ලිපි තහවුරුව",
    evidenceDescription:
      "මෙම යුගය ශ්‍රී ලංකා ඉතිහාසයේ ප්‍රථම වරට සෙල්ලිපි, පුරාවස්තු, කාසි සහ වංශකතා යන සියලු සාක්ෂි එකිනෙක සැසඳෙමින් සහතික වන යුගයයි. මිහින්තලේ සහ වෙස්සගිරිය ආශ්‍රිත මුල් බ්‍රාහ්මී සෙල්ලිපි දහස් ගණනක් මෙයට ජීවමාන සාක්ෂි සපයයි.",

    previousLabel: "කාලානුක්‍රමික පරතරය",
    nextLabel: "තම්බපණ්ණි රාජධානිය",
  },

  en: {
    eyebrow: "CHRONICLE & EPIGRAPHIC HISTORICAL ERA",
    title: "🏛️ Early Historical Period",
    subtitle:
      "The foundational era confirmed by chronicles and inscriptions, spanning from King Vijaya's arrival and Pandukabhaya's urban planning to the introduction of Buddhism under Devanampiya Tissa.",
    badge: "Archaeological & Epigraphic Record",

    introductionTitle: "What Is the Early Historical Period?",
    introductionParagraphs: [
      "The Early Historical Period marks the era when Sri Lanka's past becomes illuminated by both recorded chronicle histories (such as the Mahavamsa and Dipavamsa) and contemporary epigraphic inscriptions.",
      "According to tradition, the period begins with the arrival of Prince Vijaya and the founding of Tambapanni. It reached administrative maturity under King Pandukabhaya, who designated Anuradhapura as the capital and defined village boundaries. The arrival of Arahat Mahinda during the reign of King Devanampiya Tissa led to the state adoption of Buddhism and a monumental surge in literacy, art, architecture and cave inscriptions.",
    ],

    epochsTitle: "Major Historical Epochs",
    epochsDescription:
      "Key political, cultural and religious milestones that established the foundation of Sri Lanka's civilization.",

    epochs: [
      {
        icon: "👑",
        title: "Tambapanni & Upatissagama Kingdoms",
        description:
          "The founding of organized royal settlements under Prince Vijaya and early rulers such as Panduwasdeva.",
      },
      {
        icon: "🏛️",
        title: "Establishment of Anuradhapura",
        description:
          "King Pandukabhaya's unification of local groups, formal urban planning of Anuradhapura and village demarcation.",
      },
      {
        icon: "🪷",
        title: "Introduction of Buddhism",
        description:
          "The arrival of Arahat Mahinda, establishing Buddhism as the state religion and launching widespread Brahmi epigraphy.",
      },
    ],

    figuresTitle: "Prominent Historical Figures",
    figures: [
      {
        icon: "🗡️",
        title: "King Vijaya",
        description:
          "The legendary first king recorded in chronicles as establishing the Tambapanni Kingdom.",
      },
      {
        icon: "👑",
        title: "King Panduwasdeva",
        description:
          "Successor to Vijaya who ruled from Upatissagama alongside Queen Baddhakaccayana.",
      },
      {
        icon: "🛡️",
        title: "King Pandukabhaya",
        description:
          "Considered the true founder of the Anuradhapura Kingdom, uniting local clans and establishing administrative structures.",
      },
      {
        icon: "🌳",
        title: "King Mutasiva",
        description:
          "Son of Pandukabhaya, renowned for creating the Mahamevnawa Royal Park in Anuradhapura.",
      },
      {
        icon: "🪷",
        title: "King Devanampiya Tissa",
        description:
          "Monarch who officially embraced Buddhism and maintained diplomatic relations with Emperor Ashoka of India.",
      },
      {
        icon: "🌱",
        title: "Arhat Sanghamitta",
        description:
          "Buddhist nun who brought the sacred southern branch of the Jaya Sri Maha Bodhi and established the Meheni Sasana.",
      },
    ],

    keyAspectsTitle: "Epigraphic & Cultural Evidence",
    keyAspectsItems: [
      "Thousands of Early Brahmi cave inscriptions found at Mihintale, Vessagiriya, Rajagala and across the island.",
      "First concrete evidence of script usage and the evolution of the Sinhala Prakrit language.",
      "Detailed royal chronologies recorded in the Mahavamsa, Dipavamsa and Samantapasadika.",
      "Foundations of Buddhist architecture including Mahamevnawa, stupas and monastery complexes.",
      "Early punch-marked coinage (Kahapana) and growing domestic and maritime trade connections.",
    ],

    evidenceTitle: "Archaeological & Epigraphic Verification",
    evidenceDescription:
      "This is the first era in Sri Lankan history where chronicles, rock inscriptions, coins and structural ruins mutually corroborate each other. Inscriptions from Mihintale and Vessagiriya offer indisputable physical proof of these historical events.",

    previousLabel: "Chronological Gap",
    nextLabel: "Tambapanni Kingdom",
  },
};

export default async function EarlyHistoricalPeriodPage({
  params,
}: EarlyHistoricalPeriodPageProps) {
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
          <SectionHeading icon="🏛️" title={text.introductionTitle} />

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
            icon="👑"
            title={text.epochsTitle}
            description={text.epochsDescription}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {text.epochs.map((item) => (
              <InformationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading icon="⚔️" title={text.figuresTitle} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.figures.map((figure) => (
              <InformationCard key={figure.title} {...figure} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon="📜" title={text.keyAspectsTitle} />

          <div className="mt-10">
            <BulletList items={text.keyAspectsItems} />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <EvidenceNotice
            status="archaeological"
            title={text.evidenceTitle}
            description={text.evidenceDescription}
          />

          <div className="mt-12">
            <NavigationButtons
              locale={locale as Locale}
              previousHref="/history/chronological-gap"
              previousLabel={text.previousLabel}
              nextHref="/kingdoms/tambapanni"
              nextLabel={text.nextLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
