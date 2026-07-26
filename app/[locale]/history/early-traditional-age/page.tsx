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

interface EarlyTraditionalAgePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  si: {
    eyebrow: "ශ්‍රී ලංකාවේ මුල් ජනප්‍රවාද සහ වංශ සම්ප්‍රදායන්",
    title: "👑 පූර්ව සම්ප්‍රදායික යුගය",
    subtitle:
      "ලිඛිත වංශකතා යුගයට පෙර පැවති මහා සම්මත මනු, යක්ෂ, රක්ෂ, රාවණ සහ විභීෂණ ඇතුළු ජනප්‍රවාදගත පාලකයන් සහ සම්ප්‍රදායන් පිළිබඳ අධ්‍යයනයකි.",
    badge: "ජනප්‍රවාද හා සාහිත්‍යයික සම්ප්‍රදායන් මත පදනම් වූ අවධිය",

    introductionTitle: "පූර්ව සම්ප්‍රදායික යුගය යනු කුමක්ද?",
    introductionParagraphs: [
      "ප්‍රාග් ඓතිහාසික මානව ජනාවාසවල සිට මහාවංශය වැනි ලිඛිත වංශකතා ආරම්භ වන යුගය දක්වා අතරමැදි කාලය තුළ පැවති ජනප්‍රවාද, පුරාවෘත්ත සහ සාහිත්‍යයික සම්ප්‍රදායන් පූර්ව සම්ප්‍රදායික යුගය ලෙස හඳුන්වයි.",
      "මෙම යුගයේ තොරතුරු සෘජු සමකාලීන පුරාවිද්‍යාත්මක ලේඛනවලින් තහවුරු නොවූවත්, බෞද්ධ සාහිත්‍යය, රාමායණ සම්ප්‍රදාය, රාජාවලිය වැනි පසුකාලීන කෘති සහ ජනප්‍රවාද මඟින් මෙම අතීත සිදුවීම් පරම්පරාවෙන් පරම්පරාවට රැගෙනවිත් ඇත.",
    ],

    traditionsTitle: "ප්‍රධාන ජනප්‍රවාදගත සම්ප්‍රදායන්",
    traditionsDescription:
      "පූර්ව සම්ප්‍රදායික යුගය තුළ හඳුනාගත හැකි ප්‍රධාන පාලන හා සංස්කෘතික සම්ප්‍රදායන් කිහිපයකි.",

    traditions: [
      {
        icon: "⚖️",
        title: "මහා සම්මත මනු සම්ප්‍රදාය",
        description:
          "බෞද්ධ සාහිත්‍යයේ එන මිනිස් සමාජයේ ප්‍රථමයෙන් ජනතා එකඟතාවයෙන් තෝරාගත් ආදිකාලීන පාලකයා පිළිබඳ සම්ප්‍රදායික සංකල්පයයි.",
      },
      {
        icon: "🏹",
        title: "යක්ෂ හා රක්ෂ වංශ සම්ප්‍රදාය",
        description:
          "මුල් යුගයේ ශ්‍රී ලංකාවේ සහ දකුණු ආසියානු ජනප්‍රවාදවල සඳහන් හේති, විද්‍යුත්කේෂ, සුකේශ, මාලි, මාල්‍යවාන් සහ සුමාලි වැනි පූර්වජ පරම්පරාවන්ය.",
      },
      {
        icon: "🏰",
        title: "රාවණ හා විභීෂණ රාජ සම්ප්‍රදාය",
        description:
          "ලංකාව පාලනය කළ බවට සාහිත්‍යමය හා ජනප්‍රවාදගත සාක්ෂිවල සඳහන් රාවණ රජු සහ පසුව පාලනය භාරගත් විභීෂණ රජුගේ යුගයයි.",
      },
    ],

    rulersTitle: "ප්‍රධාන ජනප්‍රවාදගත චරිත",
    rulers: [
      {
        icon: "👑",
        title: "මහා සම්මත මනු",
        description:
          "ජනතාවගේ සම්මතයෙන් තෝරාගත් ප්‍රථම රජු ලෙස බෞද්ධ හා වංශකතා සම්ප්‍රදායේ සැලකෙන ආදිකාලීන පාලකයා.",
      },
      {
        icon: "⚔️",
        title: "සුමාලි සහ මාල්‍යවාන්",
        description:
          "රක්ෂ හා යක්ෂ වංශ පරම්පරාවන්හි ජ්‍යෙෂ්ඨ පාලකයන් හා රාවණ රජුගේ පූර්වජයන් ලෙස සැලකෙන චරිත.",
      },
      {
        icon: "⚡",
        title: "රාවණ රජු",
        description:
          "රාමායණ සම්ප්‍රදායේ සහ දේශීය ජනප්‍රවාදයන්හි හෙළ රාජධානියේ බලවත්ම පාලකයෙකු ලෙස සඳහන් චරිතය.",
      },
      {
        icon: "🕊️",
        title: "විභීෂණ රජු",
        description:
          "රාවණ රජුගෙන් පසු ලංකාවේ පාලකයා ලෙස සඳහන්, පසුව කැලණිය ප්‍රදේශය ආශ්‍රිතව දෙවියෙකු ලෙස පූජෝපහාර ලබන චරිතය.",
      },
      {
        icon: "🪙",
        title: "කුවේර",
        description:
          "රාවණට පෙර ලංකාපුරය පාලනය කළ බවට සාහිත්‍ය සම්ප්‍රදායන්හි සඳහන් පාලකයා.",
      },
      {
        icon: "🌺",
        title: "කෛකේසි සහ මන්දෝදරී",
        description:
          "රාවණ රජුගේ මව සහ මෙහෙසිය ලෙස ජනප්‍රවාදයේ හා සාහිත්‍යයේ සඳහන් රාජකීය කාන්තාවන්.",
      },
    ],

    cultureTitle: "සංස්කෘතික හා දේශපාලන ලක්ෂණ",
    cultureItems: [
      "රාජ්‍ය බලය ජනතා එකඟතාව හා සදාචාර සම්පන්න බව මත පදනම් වූ බවට විශ්වාස පැවතිණි.",
      "ගෝත්‍රික හා වංශික සංවිධාන පදනම් කරගත් පාලන ක්‍රම පැවති බවට ජනප්‍රවාද සාක්ෂි දරයි.",
      "වෙදකම, ජ්‍යොතිෂය, වාස්තු විද්‍යාව සහ විමාන තාක්ෂණය පිළිබඳ ජනප්‍රවාදගත තොරතුරු හමුවේ.",
      "ස්වාභාවික බලවේග සහ පූර්වජයන් පිදීමේ මුල් සංකල්ප පැවතිණි.",
      "කැලණිය, ලංකාපුරය, මහියංගණය සහ ශ්‍රී පාද අඩවිය වැනි ස්ථාන මෙම සම්ප්‍රදායන් සමඟ සම්බන්ධ වේ.",
    ],

    evidenceTitle: "සාක්ෂි හා ඓතිහාසික විමර්ශනය",
    evidenceDescription:
      "මෙම අංශයේ ඇතුළත් තොරතුරු සාහිත්‍යයික කථා, ජනප්‍රවාද සහ පසුකාලීන වංශකතා මත පදනම් වේ. මේවා සෘජු පුරාවිද්‍යාත්මක සාක්ෂිවලින් තහවුරු නොවූ නිසා, ඓතිහාසික විද්‍යාවේදී මේවා සම්ප්‍රදායික හා ජනප්‍රවාදගත තොරතුරු ලෙස සලකනු ලැබේ.",

    previousLabel: "ප්‍රාග් ඉතිහාසය",
    nextLabel: "කාලානුක්‍රමික පරතරය",
  },

  en: {
    eyebrow: "EARLY TRADITIONS & LINEAGES OF SRI LANKA",
    title: "👑 Early Traditional Age",
    subtitle:
      "An examination of legendary rulers, lineages and traditions prior to the chronicle era, including Maha Sammata Manu, Yaksha, Rakshasa, Ravana and Vibhishana traditions.",
    badge: "Based on traditional literature & oral traditions",

    introductionTitle: "What Is the Early Traditional Age?",
    introductionParagraphs: [
      "The Early Traditional Age refers to the period preserved in oral traditions, mythology and literary sources between prehistoric archaeological cultures and the beginning of recorded chronicle history.",
      "Although events of this period are not directly verified by contemporary epigraphic evidence, traditions recorded in Buddhist literature, the Ramayana tradition, the Rajavaliya and local folklore have preserved these accounts across generations.",
    ],

    traditionsTitle: "Major Traditional Lineages",
    traditionsDescription:
      "Several major political and cultural traditions are identified within the Early Traditional Age.",

    traditions: [
      {
        icon: "⚖️",
        title: "Maha Sammata Manu Tradition",
        description:
          "The traditional concept of the primordial ruler elected by common consent, as preserved in Buddhist literature.",
      },
      {
        icon: "🏹",
        title: "Yaksha and Rakshasa Lineages",
        description:
          "Ancestral lineages mentioned in early South Asian traditions, including Heti, Vidyutkesha, Sukesha, Mali, Malyavan and Sumali.",
      },
      {
        icon: "🏰",
        title: "Ravana and Vibhishana Traditions",
        description:
          "Literary accounts associated with King Ravana and King Vibhishana who are described as rulers of Lanka.",
      },
    ],

    rulersTitle: "Prominent Traditional Figures",
    rulers: [
      {
        icon: "👑",
        title: "Maha Sammata Manu",
        description:
          "The primordial ruler recognized in Buddhist and chronicle traditions as the first king elected by consent.",
      },
      {
        icon: "⚔️",
        title: "Sumali and Malyavan",
        description:
          "Senior figures within traditional lineages described as ancestors of Ravana.",
      },
      {
        icon: "⚡",
        title: "King Ravana",
        description:
          "A major legendary ruler described in the Ramayana and local Sri Lankan folklore.",
      },
      {
        icon: "🕊️",
        title: "King Vibhishana",
        description:
          "Ruler associated with Lanka after Ravana, later revered as a protective deity at Kelaniya.",
      },
      {
        icon: "🪙",
        title: "Kubera",
        description:
          "A traditional ruler described in literary accounts as governing Lankapura prior to Ravana.",
      },
      {
        icon: "🌺",
        title: "Kaikesi and Mandodari",
        description:
          "Royal women described in literature and folklore as the mother and queen of Ravana.",
      },
    ],

    cultureTitle: "Cultural and Governance Concepts",
    cultureItems: [
      "Rulership was traditionally understood as being based on public consent and righteousness.",
      "Governance was organized around clan and tribal lineages.",
      "Traditional accounts attribute knowledge of medicine, astrology, architecture and technology to this era.",
      "Early veneration of nature and ancestral figures formed part of religious beliefs.",
      "Places like Kelaniya, Lankapura, Mahiyangana and Sri Pada are associated with these traditions.",
    ],

    evidenceTitle: "Evidence Assessment",
    evidenceDescription:
      "Information in this section is based on traditional literature, folklore and later chronicles. In historical research, these accounts are studied as cultural traditions rather than as archaeologically verified history.",

    previousLabel: "Prehistory",
    nextLabel: "Chronological Gap",
  },
};

export default async function EarlyTraditionalAgePage({
  params,
}: EarlyTraditionalAgePageProps) {
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
            icon="📜"
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
            icon="🏰"
            title={text.traditionsTitle}
            description={text.traditionsDescription}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {text.traditions.map((item) => (
              <InformationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-[#070707] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon="👑"
            title={text.rulersTitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.rulers.map((ruler) => (
              <InformationCard key={ruler.title} {...ruler} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon="🏛️"
            title={locale === "si" ? "සංස්කෘතික හා දේශපාලන ලක්ෂණ" : "Cultural and Governance Concepts"}
          />

          <div className="mt-10">
            <BulletList items={text.cultureItems} />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <EvidenceNotice
            status="traditional"
            title={text.evidenceTitle}
            description={text.evidenceDescription}
          />

          <div className="mt-12">
            <NavigationButtons
              locale={locale as Locale}
              previousHref="/history/prehistory"
              previousLabel={text.previousLabel}
              nextHref="/history/chronological-gap"
              nextLabel={text.nextLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
