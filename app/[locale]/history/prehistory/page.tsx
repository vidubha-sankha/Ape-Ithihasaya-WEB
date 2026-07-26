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

interface PrehistoryPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  si: {
    eyebrow: "ශ්‍රී ලංකාවේ ජනාවාස වීම",
    title: "🦴 ප්‍රාග් ඉතිහාසය",
    subtitle:
      "ලිඛිත ඓතිහාසික වාර්තා ඇතිවීමට පෙර ශ්‍රී ලංකාවේ ජීවත් වූ මුල් මානවයන්ගේ ජනාවාස, ජීවන රටාව, ආහාර, තාක්ෂණය සහ සංස්කෘතික ක්‍රියාකාරකම් පිළිබඳ පුරාවිද්‍යාත්මක ගවේෂණයකි.",
    badge: "පුරාවිද්‍යාත්මක සාක්ෂි මත පදනම් වූ අංශය",

    introductionTitle: "ප්‍රාග් ඉතිහාසය යනු කුමක්ද?",
    introductionParagraphs: [
      "සාහිත්‍ය මූලාශ්‍රවලින් විස්තර කෙරෙන ඓතිහාසික කාලයට පෙර පැවති මානව අතීතය ප්‍රාග් ඉතිහාසය ලෙස හඳුන්වයි. මෙම කාලය පිළිබඳ අධ්‍යයනය ප්‍රධාන වශයෙන් සිදු කරන්නේ ගල් මෙවලම්, මිනිස් අස්ථි, සත්ව අවශේෂ, ගුහා ජනාවාස සහ වෙනත් පුරාවිද්‍යාත්මක සාක්ෂි මඟිනි.",
      "ශ්‍රී ලංකාවේ මුල් ජනාවාස නූතන මානවයා වන Homo sapiens විසින් ඇති කළ බව සැලකේ. මෙම මානව කණ්ඩායම් දිවයිනේ විවිධ පරිසර කලාපවලට පැතිර ගොස්, ඒ ඒ ප්‍රදේශවල සම්පත් හා දේශගුණයට ගැලපෙන ලෙස තම ජීවන රටාව හැඩගස්වා ගත්හ.",
    ],

    periodsTitle: "ප්‍රාග් හා පූර්ව ඓතිහාසික අවධි",
    periodsDescription:
      "ශ්‍රී ලංකාවේ මුල් මානව ඉතිහාසය සංස්කෘතික හා තාක්ෂණික වෙනස්කම් අනුව ප්‍රධාන අවධි කිහිපයකට බෙදිය හැක.",

    periods: [
      {
        icon: "🪨",
        title: "ගල් යුගය",
        description:
          "දිගු කාලයක් පුරා පැවති මෙම අවධියේ ජනතාව දඩයම් කිරීම, ස්වාභාවික ආහාර එකතු කිරීම සහ කුඩා ගල් මෙවලම් භාවිත කිරීම මත ජීවිතය පවත්වාගෙන ගියහ.",
      },
      {
        icon: "🌱",
        title: "පූර්ව ඓතිහාසික සංක්‍රාන්ති අවධිය",
        description:
          "ශාක ආහාර භාවිතය වැඩිවීම, ලෝහ භාවිතය, ස්ථිර ජනාවාස, කෘෂිකර්මය සහ නව සුසාන සම්ප්‍රදායන් ආරම්භ වූ සංක්‍රාන්තික කාලයකි.",
      },
      {
        icon: "📜",
        title: "මුල් ඓතිහාසික අවධිය",
        description:
          "ලිඛිත සාක්ෂි, බ්‍රාහ්මී ශිලා ලේඛන, නගර හා සංවිධානාත්මක රාජ්‍ය පද්ධති පෙනී යාම සමඟ ආරම්භ වූ අවධියයි.",
      },
    ],

    settlementTitle: "ජනාවාස ව්‍යාප්තිය",
    settlementDescription:
      "ප්‍රාග් ඓතිහාසික මානවයන් දිවයිනේ එක් ප්‍රදේශයකට පමණක් සීමා නොවී, විවිධ පරිසර කලාපවල ජීවත් වූහ.",

    settlementItems: [
      "අර්ධ ශුෂ්ක කලාප",
      "පහතරට වියළි කලාප",
      "පහතරට අතරමැදි කලාප",
      "පහතරට තෙත් කලාප",
      "කඳුකර ප්‍රදේශ",
      "වෙරළ, කලපු සහ විල්ලු ආශ්‍රිත ප්‍රදේශ",
    ],

    placesTitle: "වැදගත් ප්‍රාග් ඓතිහාසික ස්ථාන",
    places: [
      {
        icon: "🕳️",
        title: "පාහියන්ගල",
        description:
          "බුලත්සිංහල ප්‍රදේශයේ පිහිටි විශාල ගල් ගුහාවකි. වසර දස දහස් ගණනකට පෙර මානව ජනාවාස පිළිබඳ වැදගත් සාක්ෂි මෙහි හමු වී ඇත.",
      },
      {
        icon: "⛰️",
        title: "බටදොඹලෙන",
        description:
          "කුරුවිට ආසන්නයේ පිහිටි මෙම ගුහාවෙන් මිනිස් අස්ථි, ගල් මෙවලම් සහ ආහාර අවශේෂ හමු වී ඇත.",
      },
      {
        icon: "🪨",
        title: "කිතුල්ගල බෙලිලෙන",
        description:
          "ප්‍රාග් ඓතිහාසික මානව ජීවිතය, ආහාර රටාව සහ සුසාන ක්‍රම පිළිබඳ සාක්ෂි හමු වූ වැදගත් ගුහා ජනාවාසයකි.",
      },
      {
        icon: "🌾",
        title: "බෙල්ලන්බැඳිපැලැස්ස",
        description:
          "විවෘත ජනාවාසයක් සහ සුසාන භූමියක් ලෙස භාවිත වූ ස්ථානයකි. මෙහි මිනිස් අස්ථි සැකිලි රැසක් හමු වී ඇත.",
      },
      {
        icon: "🏞️",
        title: "හෝර්ටන් තැන්න",
        description:
          "කඳුකර ප්‍රදේශවල පැවති විවෘත දඩයම් ජනාවාස සහ පැරණි පරිසර වෙනස්කම් පිළිබඳ සාක්ෂි සපයයි.",
      },
      {
        icon: "🌊",
        title: "බූන්දල සහ මිනිහාගල්කන්ද",
        description:
          "වෙරළාශ්‍රිත විවෘත ජනාවාස සහ ඉතා පැරණි ගල් මෙවලම් හමු වූ දකුණු ප්‍රදේශයේ ස්ථාන වේ.",
      },
    ],

    lifestyleTitle: "ජීවන රටාව",
    lifestyleItems: [
      "දඩයම් කිරීම සහ තැනින් තැන ගමන් කරමින් ආහාර එකතු කිරීම ප්‍රධාන ජීවනෝපාය විය.",
      "වැසි කාලවලදී ස්වාභාවික ගල් ගුහාවල ජීවත් වූ අතර වියළි කාලවල විවෘත ස්ථාන භාවිත කළහ.",
      "සාමාන්‍යයෙන් පුද්ගලයන් 15–25 අතර කුඩා කණ්ඩායම් ලෙස සංවිධානය වී ජීවත් වූ බව සැලකේ.",
      "ජලය පහසුවෙන් ලබාගත හැකි සහ ගල් මෙවලම් සඳහා සුදුසු පාෂාණ ඇති ස්ථාන තෝරාගත්හ.",
      "ආහාර සොයා දිනකට කිලෝමීටර් කිහිපයක් ගමන් කළ සංචාරක ජීවන රටාවක් පැවතිණි.",
      "කුඩා පවුල් ඒකක හා ඥාති කණ්ඩායම් ඔවුන්ගේ සමාජ සංවිධානයේ පදනම වූ බව සැලකේ.",
    ],

    foodTitle: "ආහාර රටාව",
    foodItems: [
      "ගෝනා, මුවා, වල් ඌරා, වඳුරා, හාවා සහ වෙනත් වනාන්තර සතුන් දඩයම් කළහ.",
      "මිරිදිය මසුන්, කුඩා සතුන් සහ පක්ෂීන් ආහාරයට ගත්හ.",
      "වල් දෙල්, කැලෑ කෙසෙල් සහ පිෂ්ඨය බහුල ශාක ආහාර භාවිත කළහ.",
      "ගොළුබෙල්ලන් සහ කලපු ආශ්‍රිත බෙල්ලන් ආහාරයට ගැනීම පිළිබඳ සාක්ෂි හමු වී ඇත.",
      "ආහාර පිළිස්සීම සඳහා ගින්දර භාවිත කළ බව පුරාවිද්‍යා සාක්ෂි පෙන්වයි.",
      "මුහුදුබඩ ප්‍රදේශවලින් ලුණු රැගෙන දිවයිනේ අභ්‍යන්තරයට ගමන් කළ බවටද සාක්ෂි ඇත.",
    ],

    technologyTitle: "ගල් යුග තාක්ෂණය",
    technologyDescription:
      "ප්‍රාග් ඓතිහාසික තාක්ෂණය පිළිබඳ ප්‍රධාන සාක්ෂිය වන්නේ ඔවුන් නිෂ්පාදනය කළ ගල් මෙවලම්ය.",

    technologyItems: [
      "තිරිවානා සහ වෙනත් සුදුසු පාෂාණවලින් කුඩා ගල් මෙවලම් නිෂ්පාදනය කළහ.",
      "කැපීම, සීරීම, විදීම, තැලීම සහ දඩයම් කිරීම සඳහා වෙනස් හැඩවල මෙවලම් භාවිත කළහ.",
      "ගල් මෙවලම් ලී දඬුවලට හෝ සත්ව අස්ථිවලට සවි කර භාවිත කළ බව සැලකේ.",
      "අස්ථිවලින් සකස් කළ උල් මෙවලම් සහ ආභරණද හමු වී ඇත.",
      "මෙම කුඩා, ජ්‍යාමිතික හැඩැති මෙවලම් ක්ෂුද්‍ර ශිලා මෙවලම් ලෙස හඳුන්වයි.",
    ],

    burialTitle: "සුසාන හා චාරිත්‍ර",
    burialParagraph:
      "මියගිය පුද්ගලයන් ගුහා තුළ හෝ ජනාවාස ආසන්නයේ වළලා දැමීමේ සම්ප්‍රදායන් පැවති බවට සාක්ෂි ඇත. ඇතැම් අවස්ථාවල අස්ථි නැවත ගොඩගෙන රතු ගුරුගල් ආලේප කර තැන්පත් කර ඇත. මෙය මරණය, ඥාති සම්බන්ධතා සහ ආගමික විශ්වාස පිළිබඳ මුල් සංකල්ප පැවති බව පෙන්වයි.",

    humanTitle: "බලංගොඩ මානවයා",
    humanParagraph:
      "ශ්‍රී ලංකාවේ ප්‍රාග් ඓතිහාසික මානව අවශේෂ සාමාන්‍යයෙන් ‘බලංගොඩ මානවයා’ යන නාමයෙන් හඳුන්වයි. විශාල දත්, පළල් මුහුණ සහ ශක්තිමත් ශරීර ව්‍යුහය වැනි ලක්ෂණ ඔවුන්ට තිබූ බව අස්ථි සාක්ෂි මඟින් පෙන්වයි. මෙම නාමය විශේෂ එකම පුද්ගලයෙකු නොව, ශ්‍රී ලංකාවේ ප්‍රාග් ඓතිහාසික Homo sapiens ජන කණ්ඩායම් හැඳින්වීමට භාවිත වන සාමාන්‍ය යෙදුමකි.",

    evidenceTitle: "සාක්ෂි තත්ත්වය",
    evidenceDescription:
      "මෙම අංශයේ තොරතුරු ගල් මෙවලම්, මිනිස් හා සත්ව අස්ථි, ආහාර අවශේෂ, ගුහා ස්ථර, කාබන් දින නියම කිරීම් සහ පුරාවිද්‍යා කැණීම් මත පදනම් වේ. නව පර්යේෂණ අනුව දින සහ අර්ථකථන වෙනස් විය හැක.",

    previousLabel: "ඉතිහාස හැඳින්වීම",
    nextLabel: "පූර්ව සම්ප්‍රදායික යුගය",
  },

  en: {
    eyebrow: "THE SETTLEMENT OF SRI LANKA",
    title: "🦴 Prehistory",
    subtitle:
      "An archaeological exploration of the settlements, lifestyles, food, technology and cultural practices of the earliest humans who lived in Sri Lanka before written historical records.",
    badge: "Based primarily on archaeological evidence",

    introductionTitle: "What Is Prehistory?",
    introductionParagraphs: [
      "Prehistory refers to the period of the human past before the appearance of written historical records. It is studied primarily through stone tools, human bones, animal remains, cave settlements and other archaeological evidence.",
      "Sri Lanka's earliest known settlements were created by Homo sapiens. These communities spread across different environmental zones and adapted their lifestyles to the climate and natural resources of each region.",
    ],

    periodsTitle: "Prehistoric and Protohistoric Phases",
    periodsDescription:
      "Sri Lanka's early human past can be divided into major phases based on cultural and technological change.",

    periods: [
      {
        icon: "🪨",
        title: "Stone Age",
        description:
          "Communities survived through hunting, gathering natural foods and using small stone tools.",
      },
      {
        icon: "🌱",
        title: "Protohistoric Transition",
        description:
          "A transitional period associated with plant use, metals, permanent settlements, agriculture and new burial traditions.",
      },
      {
        icon: "📜",
        title: "Early Historical Period",
        description:
          "The phase associated with writing, Brahmi inscriptions, cities and organised systems of government.",
      },
    ],

    settlementTitle: "Distribution of Settlements",
    settlementDescription:
      "Prehistoric communities lived across several environmental regions of the island.",

    settlementItems: [
      "Semi-arid regions",
      "Low-country dry zone",
      "Low-country intermediate zone",
      "Low-country wet zone",
      "Central highlands",
      "Coastal lagoons and wetlands",
    ],

    placesTitle: "Important Prehistoric Sites",
    places: [
      {
        icon: "🕳️",
        title: "Fa-Hien Cave",
        description:
          "A major cave in the Bulathsinhala area containing evidence of human occupation extending tens of thousands of years into the past.",
      },
      {
        icon: "⛰️",
        title: "Batadomba-lena",
        description:
          "A cave near Kuruwita where human bones, stone tools and food remains have been discovered.",
      },
      {
        icon: "🪨",
        title: "Kitulgala Beli-lena",
        description:
          "An important cave settlement that provides evidence of prehistoric diet, habitation and burial customs.",
      },
      {
        icon: "🌾",
        title: "Bellana-bandi Palassa",
        description:
          "An open settlement and burial area where numerous prehistoric human skeletons were found.",
      },
      {
        icon: "🏞️",
        title: "Horton Plains",
        description:
          "Provides evidence of open-air highland settlements and ancient environmental changes.",
      },
      {
        icon: "🌊",
        title: "Bundala and Minihagalkanda",
        description:
          "Southern coastal sites associated with open settlements and very early stone tools.",
      },
    ],

    lifestyleTitle: "Lifestyle",
    lifestyleItems: [
      "Hunting and gathering were the principal means of subsistence.",
      "Natural caves were used during rainy seasons, while open sites were occupied in drier periods.",
      "People probably lived in small groups of approximately 15–25 individuals.",
      "Settlements were selected near water and suitable stone resources.",
      "A mobile lifestyle required travelling several kilometres in search of food.",
      "Small family and kinship groups formed the foundation of social organisation.",
    ],

    foodTitle: "Diet",
    foodItems: [
      "Deer, wild boar, monkeys, hares and other forest animals were hunted.",
      "Freshwater fish, small animals and birds were consumed.",
      "Wild breadfruit, forest bananas and starchy plants were used.",
      "Land snails and lagoon shellfish formed part of the diet.",
      "Archaeological evidence indicates the use of fire to roast food.",
      "Salt may have been transported from coastal areas into the interior.",
    ],

    technologyTitle: "Stone-Age Technology",
    technologyDescription:
      "Stone tools are the principal surviving evidence of prehistoric technology.",

    technologyItems: [
      "Small tools were produced from quartz and other suitable stones.",
      "Different shapes were prepared for cutting, scraping, piercing, pounding and hunting.",
      "Some tools were probably attached to wooden shafts or animal bones.",
      "Bone points and ornaments have also been discovered.",
      "Small geometrically shaped implements are described as microlithic tools.",
    ],

    burialTitle: "Burial Practices",
    burialParagraph:
      "Evidence indicates that the dead were buried inside caves or close to settlements. In some cases, bones were later collected, covered with red ochre and reburied. These practices suggest early ideas concerning death, kinship and ritual.",

    humanTitle: "Balangoda Man",
    humanParagraph:
      "The prehistoric human remains of Sri Lanka are commonly described as Balangoda Man. Skeletal evidence indicates features such as large teeth, broad facial structure and a strongly built body. The term refers broadly to prehistoric Homo sapiens populations rather than to one individual.",

    evidenceTitle: "Evidence Classification",
    evidenceDescription:
      "This section is based on stone tools, human and animal remains, food residues, archaeological layers, scientific dating and excavation evidence. Dates and interpretations may change as new research becomes available.",

    previousLabel: "History Introduction",
    nextLabel: "Early Traditional Age",
  },
};

export default async function PrehistoryPage({
  params,
}: PrehistoryPageProps) {
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
          <SectionHeading
            icon="🌍"
            title={text.introductionTitle}
          />

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
            icon="⏳"
            title={text.periodsTitle}
            description={text.periodsDescription}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {text.periods.map((item) => (
              <InformationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon="🗺️"
            title={text.settlementTitle}
            description={text.settlementDescription}
          />

          <div className="mt-10">
            <BulletList items={text.settlementItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="📍"
            title={text.placesTitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.places.map((place) => (
              <InformationCard key={place.title} {...place} />
            ))}
          </div>
        </div>
      </section>

      <InformationSection
        icon="🏕️"
        title={text.lifestyleTitle}
        items={text.lifestyleItems}
        dark={false}
      />

      <InformationSection
        icon="🍖"
        title={text.foodTitle}
        items={text.foodItems}
        dark
      />

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon="🪨"
            title={text.technologyTitle}
            description={text.technologyDescription}
          />

          <div className="mt-10">
            <BulletList items={text.technologyItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-zinc-900 bg-black p-7 sm:p-9">
            <p className="text-3xl">⚱️</p>

            <h2 className="mt-5 text-3xl font-bold">
              {text.burialTitle}
            </h2>

            <p className="mt-6 leading-9 text-zinc-300">
              {text.burialParagraph}
            </p>
          </article>

          <article className="rounded-3xl border border-[#583b00] bg-black p-7 sm:p-9">
            <p className="text-3xl">🧑🏽</p>

            <h2 className="mt-5 text-3xl font-bold">
              {text.humanTitle}
            </h2>

            <p className="mt-6 leading-9 text-zinc-300">
              {text.humanParagraph}
            </p>
          </article>
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
              previousHref="/history"
              previousLabel={text.previousLabel}
              nextHref="/history/early-traditional-age"
              nextLabel={text.nextLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface InformationSectionProps {
  icon: string;
  title: string;
  items: string[];
  dark: boolean;
}

function InformationSection({
  icon,
  title,
  items,
  dark,
}: InformationSectionProps) {
  return (
    <section
      className={`border-b border-zinc-900 px-5 py-20 sm:px-8 lg:px-12 ${dark ? "bg-[#070707]" : "bg-black"
        }`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={icon} title={title} />

        <div className="mt-10">
          <BulletList items={items} />
        </div>
      </div>
    </section>
  );
}
