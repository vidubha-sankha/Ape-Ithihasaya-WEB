import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Coins,
  FileText,
  GraduationCap,
  Landmark,
  LibraryBig,
  Lightbulb,
  Microscope,
  Search,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Locale = "si" | "en";

interface HistoryOverviewPageProps {
  params: Promise<{
    locale: string;
  }>;
}



const pageContent = {
  si: {
    eyebrow: "අපේ ඉතිහාසය",

    title: "ඉතිහාස හැඳින්වීම",

    subtitle: "ශ්‍රී ලංකාවේ ඉතිහාසය ගවේෂණය කිරීමේ පළමු පියවර",

    heroDescription:
      "අතීතයේ මිනිසුන්ගේ ජීවිතය, සමාජය, දේශපාලනය, ආර්ථිකය සහ සංස්කෘතිය පිළිබඳ තොරතුරු සාහිත්‍ය හා පුරාවිද්‍යාත්මක මූලාශ්‍ර ඔස්සේ අධ්‍යයනය කරන්න.",

    timelineButton: "සම්පූර්ණ කාලරේඛාව බලන්න",

    prehistoryButton: "ප්‍රාග් ඉතිහාසයෙන් ආරම්භ කරන්න",

    definitionTitle: "ඉතිහාසය යනු කුමක්ද?",

    definitionParagraphs: [
      "ඉතිහාසය යනු අතීතයේ මිනිසුන් සිදු කළ ක්‍රියාකාරකම්, ඔවුන්ගේ ජීවන රටාව, සමාජ සංවිධානය, දේශපාලනය, ආර්ථිකය සහ සංස්කෘතිය පිළිබඳ අධ්‍යයනයයි.",

      "අතීතයෙන් ඉතිරි වූ ලේඛන, නිර්මාණ, පුරාවස්තු සහ ස්මාරක මඟින් ඒ ඒ කාලවල මිනිස් ජීවිතය පිළිබඳ තොරතුරු ලබාගත හැක. ඉතිහාසඥයන් එම තොරතුරු විමර්ශනය කර අතීතය පිළිබඳ වඩාත් විශ්වසනීය විස්තරයක් ගොඩනඟයි.",

      "ඉතිහාසය පාලකයන්ගේ සහ යුද්ධවල කතාවක් පමණක් නොවේ. ගොවීන්, ශිල්පීන්, වෙළෙන්දන්, ආගමික නායකයන්, කාන්තාවන් සහ සාමාන්‍ය ජනතාවද ඉතිහාසය නිර්මාණය කිරීමට දායක වී ඇත.",
    ],

    constructionTitle: "ඉතිහාසය ගොඩනඟන්නේ කෙසේද?",

    constructionDescription:
      "ඉතිහාසඥයන් එක් මූලාශ්‍රයක් පමණක් විශ්වාස නොකරයි. විවිධ මූලාශ්‍රවලින් ලැබෙන තොරතුරු එකිනෙක සසඳා, ඒවායේ විශ්වසනීයත්වය පරීක්ෂා කර නිගමන ගොඩනඟයි.",

    constructionSteps: [
      {
        number: "01",
        title: "මූලාශ්‍ර හඳුනාගැනීම",
        description:
          "අදාළ කාලයට සම්බන්ධ ග්‍රන්ථ, ලේඛන, ශිලා ලේඛන, කාසි, නටබුන් සහ පුරාවස්තු හඳුනාගනී.",
      },
      {
        number: "02",
        title: "තොරතුරු රැස් කිරීම",
        description:
          "එක් එක් මූලාශ්‍රයෙන් අතීත සමාජය, පාලනය, ආර්ථිකය සහ සංස්කෘතිය පිළිබඳ තොරතුරු රැස් කරයි.",
      },
      {
        number: "03",
        title: "මූලාශ්‍ර සසඳා බැලීම",
        description:
          "එක් මූලාශ්‍රයක සඳහන් කරුණු වෙනත් සාහිත්‍ය හෝ පුරාවිද්‍යාත්මක සාක්ෂි සමඟ සසඳයි.",
      },
      {
        number: "04",
        title: "විවේචනාත්මක විමර්ශනය",
        description:
          "මූලාශ්‍රය නිර්මාණය වූ කාලය, කතුවරයා, අරමුණ සහ තොරතුරු ලබාගත් ආකාරය පරීක්ෂා කරයි.",
      },
      {
        number: "05",
        title: "ඉතිහාසය ගොඩනැගීම",
        description:
          "වඩාත් විශ්වසනීය තොරතුරු තෝරාගෙන අතීතය පිළිබඳ ක්‍රමානුකූල විස්තරයක් සකස් කරයි.",
      },
    ],

    sourcesTitle: "ඉතිහාස මූලාශ්‍ර",

    sourcesDescription:
      "ශ්‍රී ලංකාවේ ඉතිහාසය හැදෑරීම සඳහා භාවිත වන මූලාශ්‍ර ප්‍රධාන වශයෙන් සාහිත්‍ය මූලාශ්‍ර සහ පුරාවිද්‍යාත්මක මූලාශ්‍ර ලෙස වර්ග කළ හැක.",

    literaryTitle: "සාහිත්‍ය මූලාශ්‍ර",

    literaryDescription:
      "අතීතයේ ලියන ලද ග්‍රන්ථ, වංශකථා, කාව්‍ය, ලිපි ලේඛන සහ සංචාරක වාර්තා සාහිත්‍ය මූලාශ්‍ර ලෙස සැලකේ.",

    localLiteraryTitle: "දේශීය සාහිත්‍ය මූලාශ්‍ර",

    localLiterarySources: [
      "දීපවංශය",
      "මහාවංශය",
      "චූලවංශය",
      "බෝධිවංශය",
      "ථූපවංශය",
      "ධාතුවංශය",
      "පූජාවලිය",
      "රාජාවලිය",
      "සන්දේශ කාව්‍ය",
      "ප්‍රශස්ති කාව්‍ය",
      "හටන් කාව්‍ය",
    ],

    foreignLiteraryTitle: "විදේශීය සාහිත්‍ය මූලාශ්‍ර",

    foreignLiterarySources: [
      "ග්‍රීක හා රෝම ලේඛකයන්ගේ වාර්තා",
      "චීන භික්ෂූන්ගේ ගමන් වාර්තා",
      "අරාබි සංචාරකයන්ගේ සටහන්",
      "පෘතුගීසි ලේඛන",
      "ලන්දේසි ලේඛන",
      "ඉංග්‍රීසි ලේඛන",
    ],

    archaeologicalTitle: "පුරාවිද්‍යාත්මක මූලාශ්‍ර",

    archaeologicalDescription:
      "පුරාවිද්‍යා කැණීම්, පර්යේෂණ සහ භෞතික අවශේෂ මඟින් හඳුනාගන්නා සාක්ෂි පුරාවිද්‍යාත්මක මූලාශ්‍ර ලෙස හැඳින්වේ.",

    archaeologicalSources: [
      {
        icon: FileText,
        title: "ශිලා ලේඛන",
        description:
          "පාලනය, ආගමික පරිත්‍යාග, බදු, වෙළඳාම, නීතිය සහ රාජ්‍ය නිලධාරීන් පිළිබඳ තොරතුරු ලබාදේ.",
      },
      {
        icon: Coins,
        title: "කාසි",
        description:
          "ආර්ථිකය, වෙළඳාම, මුදල් භාවිතය, ලෝහ තාක්ෂණය සහ විදේශ සබඳතා පිළිබඳ සාක්ෂි සපයයි.",
      },
      {
        icon: Building2,
        title: "නටබුන් සහ ගොඩනැගිලි",
        description:
          "වාස්තු විද්‍යාව, ඉංජිනේරු දැනුම, නගර සැලසුම සහ ජනාවාස ව්‍යාප්තිය පිළිබඳ තොරතුරු ලබාදේ.",
      },
      {
        icon: Landmark,
        title: "වැව්, අමුණු සහ පොකුණු",
        description:
          "ජල කළමනාකරණය, කෘෂිකර්මය සහ පුරාණ තාක්ෂණික දක්ෂතාව පෙන්වයි.",
      },
      {
        icon: Sparkles,
        title: "චිත්‍ර, මූර්ති සහ කැටයම්",
        description:
          "ඇඳුම්, ආභරණ, කලා කුසලතා, ආගමික විශ්වාස සහ සංස්කෘතික ජීවිතය පිළිබඳ තොරතුරු ලබාදේ.",
      },
      {
        icon: Microscope,
        title: "පුරාවස්තු සහ කැණීම්",
        description:
          "මැටි භාණ්ඩ, ලෝහ උපකරණ, ආභරණ, අස්ථි සහ සුසාන හරහා දෛනික ජීවිතය අධ්‍යයනය කළ හැක.",
      },
    ],

    inscriptionsTitle: "ශිලා ලේඛනවල වැදගත්කම",

    inscriptionsDescription:
      "ශිලා ලේඛන ගල්, බිත්ති, තඹ තහඩු, රන් තහඩු, ලී සහ මැටි භාණ්ඩ මත ලියා ඇති පැරණි ලේඛන වේ. ඒවා සාමාන්‍යයෙන් අදාළ ඓතිහාසික අවධියට සමකාලීන හෝ ආසන්න කාලීන සාක්ෂි සපයයි.",

    inscriptionTypes: [
      {
        title: "ලෙන් ලිපි",
        description: "ගල් ලෙන්වල කටාරම් අසල ලියා ඇති ලේඛන.",
      },
      {
        title: "ගිරි ලිපි",
        description: "ගල් තලාවල හෝ පර්වත මත ලියා ඇති ලේඛන.",
      },
      {
        title: "ටැම් ලිපි",
        description: "සකස් කළ ගල් කණු මත ලියා ඇති ලේඛන.",
      },
      {
        title: "පුවරු ලිපි",
        description: "සකස් කළ ගල් පුවරු මත ලියා ඇති ලේඛන.",
      },
      {
        title: "ආසන ලිපි",
        description: "ආසන හැඩැති ගල් පුවරු මත ලියා ඇති ලේඛන.",
      },
    ],

    evaluationTitle: "මූලාශ්‍ර විවේචනාත්මකව භාවිත කිරීම",

    evaluationDescription:
      "සාහිත්‍ය මූලාශ්‍ර බොහෝවිට සිදුවීම්වලට පසුව ලියන ලද ඒවා විය හැකි අතර, කතුවරයාගේ ආගමික, දේශපාලන හෝ පෞද්ගලික අරමුණු එයට බලපාන්න පුළුවන්. එබැවින් මූලාශ්‍රයක් සෘජුවම පිළිගැනීම වෙනුවට පහත කරුණු පරීක්ෂා කළ යුතුය.",

    evaluationItems: [
      "මූලාශ්‍රය නිර්මාණය වූ කාලය කුමක්ද?",
      "මූලාශ්‍රයේ කතුවරයා කවුද?",
      "කතුවරයාගේ අරමුණ කුමක්ද?",
      "තොරතුරු ලබාගත්තේ කෙසේද?",
      "එය සමකාලීන වාර්තාවක්ද?",
      "වෙනත් මූලාශ්‍රවලින් තහවුරු කළ හැකිද?",
      "පුරාවිද්‍යාත්මක සාක්ෂි සමඟ ගැළපේද?",
      "මූලාශ්‍රයේ පක්ෂපාතීත්වයක් තිබේද?",
    ],

    importanceTitle: "ඉතිහාසය හැදෑරීමේ වැදගත්කම",

    importanceDescription:
      "ඉතිහාසය හැදෑරීම අතීත සිදුවීම් මතක තබාගැනීමට පමණක් සීමා නොවේ. එය පුද්ගලයාගේ චින්තනය, අනන්‍යතාවය සහ සමාජ වගකීම වර්ධනය කරයි.",

    importanceItems: [
      {
        icon: Search,
        title: "සමාජය හා ලෝකය අවබෝධ කරගැනීම",
        description:
          "තමන් ජීවත්වන සමාජය සහ එය ගොඩනැගුණු ආකාරය තේරුම් ගැනීමට හැකි වේ.",
      },
      {
        icon: Lightbulb,
        title: "අතීතයෙන් පාඩම් ඉගෙනීම",
        description:
          "අතීත අත්දැකීම් මඟින් වර්තමාන ගැටලු තේරුම් ගෙන අනාගතය සැලසුම් කළ හැක.",
      },
      {
        icon: Landmark,
        title: "ජාතික අනන්‍යතාවය හඳුනාගැනීම",
        description:
          "රටේ උරුමය, සංස්කෘතිය සහ ජාතික අනන්‍යතාවය පිළිබඳ අවබෝධයක් ලැබේ.",
      },
      {
        icon: ShieldCheck,
        title: "ජාතික සමගිය වර්ධනය කිරීම",
        description:
          "විවිධ ජන කණ්ඩායම් සහ සංස්කෘතීන්ගේ දායකත්වය අවබෝධ කර ගැනීමට හැකි වේ.",
      },
      {
        icon: LibraryBig,
        title: "වෙනත් සංස්කෘතීන්ට ගරු කිරීම",
        description:
          "විවිධ ආගම්, භාෂා, සම්ප්‍රදායන් සහ අදහස් පිළිගැනීමට හුරු වේ.",
      },
      {
        icon: GraduationCap,
        title: "විවේචනාත්මක චින්තනය",
        description:
          "තොරතුරු සසඳා බැලීම, ප්‍රශ්න කිරීම සහ තර්කානුකූල නිගමන ගොඩනැගීමේ හැකියාව වර්ධනය වේ.",
      },
    ],

    protectionTitle: "පුරාවිද්‍යාත්මක උරුමය ආරක්ෂා කිරීම",

    protectionDescription:
      "ශිලා ලේඛන, නටබුන්, ස්මාරක සහ පුරාවස්තු අනාගත පරම්පරාවට රැක දීම සියලු පුරවැසියන්ගේ වගකීමකි.",

    threatsTitle: "උරුමයට ඇති ප්‍රධාන තර්ජන",

    threats: [
      "අනවසර කැණීම්",
      "පුරාවස්තු සොරකම් කිරීම",
      "ගොඩනැගිලි හා මාර්ග ඉදිකිරීම",
      "පුරාවස්තු මත අකුරු ලිවීම",
      "චිත්‍ර හා රූප ඇඳීම",
      "පුරාවිද්‍යා ස්ථාන විනාශ කිරීම",
      "නොදැනුවත්කම",
      "පරිසර හා ස්වාභාවික හානි",
    ],

    protectionActionsTitle: "අප කළ යුතු දේ",

    protectionActions: [
      "පුරාවිද්‍යා ස්ථානවලට හානි නොකිරීම",
      "පුරාවස්තු ස්ථානයෙන් ඉවත් නොකිරීම",
      "අනවසර කැණීම් වාර්තා කිරීම",
      "ඓතිහාසික ස්ථාන පිරිසිදුව තබාගැනීම",
      "උරුමයේ වටිනාකම පිළිබඳ ජනතාව දැනුවත් කිරීම",
      "නීති සහ සංරක්ෂණ උපදෙස් පිළිපැදීම",
    ],

    missionTitle: "Ape Ithihasaya හි අරමුණ",

    missionParagraphs: [
      "Ape Ithihasaya හි අරමුණ වන්නේ ශ්‍රී ලංකාවේ ඉතිහාසය පිළිබඳ විශ්වාසදායක, ක්‍රමානුකූල සහ පර්යේෂණාත්මක දැනුම් සම්භාරයක් එකම වේදිකාවකින් ලබාදීමයි.",

      "සම්ප්‍රදායික කතා, වංශකථා, පුරාවිද්‍යාත්මක සාක්ෂි සහ නූතන පර්යේෂණ එකම සාක්ෂි මට්ටමකින් නොපෙන්වා, ඒවා පැහැදිලිව වර්ග කර ඉදිරිපත් කිරීම අපගේ ප්‍රධාන අරමුණකි.",
    ],

    exploreTitle: "Ape Ithihasaya තුළ ගවේෂණය කරන්න",

    exploreItems: [
      {
        title: "සම්පූර්ණ කාලරේඛාව",
        description:
          "ප්‍රාග් ඉතිහාසයේ සිට නූතන ශ්‍රී ලංකාව දක්වා සම්පූර්ණ ඓතිහාසික ගමන්මඟ.",
        href: "/history/timeline",
      },
      {
        title: "ප්‍රාග් ඉතිහාසය",
        description:
          "මුල් ජනාවාස, බලංගොඩ මානවයා, ගල් මෙවලම් සහ පුරාවිද්‍යාත්මක සාක්ෂි.",
        href: "/history/prehistory",
      },
      {
        title: "පූර්ව සම්ප්‍රදායික යුගය",
        description:
          "මහා සම්මත මනු, යක්ෂ වංශ, කුවේර, රාවණ සහ විභීෂණ සම්ප්‍රදායන්.",
        href: "/history/early-traditional-age",
      },
      {
        title: "මුල් ඓතිහාසික යුගය",
        description:
          "විජය සම්ප්‍රදාය, මුල් ජනාවාස, ගම්වැව්, ලිවීම සහ අනුරාධපුරයේ උදාව.",
        href: "/history/early-historical-period",
      },
      {
        title: "ශ්‍රී ලංකාවේ රාජධානි",
        description:
          "අනුරාධපුරයේ සිට මහනුවර දක්වා රාජධානි සහ දේශපාලන මධ්‍යස්ථාන.",
        href: "/kingdoms",
      },
      {
        title: "රජවරු සහ රැජිනන්",
        description:
          "පාලන කාල, රාජවංශ, ජීවන තොරතුරු සහ පවුල් සම්බන්ධතා.",
        href: "/kings",
      },
    ],

    exploreButton: "ගවේෂණය කරන්න",

    finalTitle: "ශ්‍රී ලංකාවේ අතීත ගමන්මඟ ආරම්භ කරන්න",

    finalDescription:
      "ඉතිහාසයේ සෑම තොරතුරක්ම සාක්ෂි සමඟ සසඳා, සම්ප්‍රදාය සහ තහවුරු කළ ඉතිහාසය පැහැදිලිව වෙන්කර ගවේෂණය කරන්න.",

    finalTimelineButton: "කාලරේඛාව බලන්න",

    finalPrehistoryButton: "ප්‍රාග් ඉතිහාසයට යන්න",

    evidenceNote:
      "මෙම පිටුව ශ්‍රී ලංකාවේ 10 ශ්‍රේණිය ඉතිහාස පෙළපොතේ ඉතිහාස මූලාශ්‍ර, මූලාශ්‍ර විවේචනය, ඉතිහාසය හැදෑරීමේ වැදගත්කම සහ පුරාවිද්‍යාත්මක උරුමය ආරක්ෂා කිරීම පිළිබඳ මූලික අධ්‍යාපනික සංකල්ප මත සංවිධානය කර ඇත.",
  },

  en: {
    eyebrow: "APE ITHIHASAYA",

    title: "Introduction to History",

    subtitle: "The first step in exploring the history of Sri Lanka",

    heroDescription:
      "Study the lives, society, politics, economy and culture of people in the past through literary and archaeological sources.",

    timelineButton: "Explore the Complete Timeline",

    prehistoryButton: "Begin with Prehistory",

    definitionTitle: "What Is History?",

    definitionParagraphs: [
      "History is the study of the activities, lifestyles, social organisation, politics, economies and cultures of people in the past.",

      "Documents, creations, artifacts and monuments surviving from the past provide information about human life in different periods. Historians examine this evidence to construct reliable accounts of the past.",

      "History is not limited to rulers and wars. Farmers, craftspeople, merchants, religious leaders, women and ordinary communities also contributed to the making of history.",
    ],

    constructionTitle: "How Is History Constructed?",

    constructionDescription:
      "Historians do not rely on a single source. They compare information from different sources, evaluate reliability and build evidence-based interpretations.",

    constructionSteps: [
      {
        number: "01",
        title: "Identify Sources",
        description:
          "Locate books, documents, inscriptions, coins, ruins and artifacts connected with the period.",
      },
      {
        number: "02",
        title: "Collect Information",
        description:
          "Gather information about society, government, economy and culture.",
      },
      {
        number: "03",
        title: "Compare Sources",
        description:
          "Compare information from one source with literary or archaeological evidence from another.",
      },
      {
        number: "04",
        title: "Critically Evaluate",
        description:
          "Examine when the source was created, who created it, its purpose and how its information was obtained.",
      },
      {
        number: "05",
        title: "Construct History",
        description:
          "Select the most reliable evidence and organise it into a systematic account of the past.",
      },
    ],

    sourcesTitle: "Sources of History",

    sourcesDescription:
      "Sources used to study Sri Lankan history can primarily be classified as literary sources and archaeological sources.",

    literaryTitle: "Literary Sources",

    literaryDescription:
      "Books, chronicles, poems, documents and travel records written in the past are classified as literary sources.",

    localLiteraryTitle: "Local Literary Sources",

    localLiterarySources: [
      "Dipavamsa",
      "Mahavamsa",
      "Culavamsa",
      "Bodhivamsa",
      "Thupavamsa",
      "Dhatuvamsa",
      "Pujavaliya",
      "Rajavaliya",
      "Sandesha poetry",
      "Prashasti poetry",
      "Hatana poetry",
    ],

    foreignLiteraryTitle: "Foreign Literary Sources",

    foreignLiterarySources: [
      "Greek and Roman records",
      "Chinese pilgrim accounts",
      "Arab travel records",
      "Portuguese records",
      "Dutch records",
      "British records",
    ],

    archaeologicalTitle: "Archaeological Sources",

    archaeologicalDescription:
      "Material evidence identified through archaeological excavation, research and surviving physical remains is classified as archaeological evidence.",

    archaeologicalSources: [
      {
        icon: FileText,
        title: "Inscriptions",
        description:
          "Provide information about government, religious donations, taxation, trade, law and public offices.",
      },
      {
        icon: Coins,
        title: "Coins",
        description:
          "Provide evidence about the economy, trade, currencies, metal technology and foreign relations.",
      },
      {
        icon: Building2,
        title: "Ruins and Buildings",
        description:
          "Reveal architecture, engineering, urban planning and settlement patterns.",
      },
      {
        icon: Landmark,
        title: "Reservoirs and Dams",
        description:
          "Demonstrate water management, agriculture and ancient technological knowledge.",
      },
      {
        icon: Sparkles,
        title: "Paintings and Sculpture",
        description:
          "Reveal clothing, jewellery, artistic ability, beliefs and cultural life.",
      },
      {
        icon: Microscope,
        title: "Artifacts and Excavations",
        description:
          "Pottery, tools, ornaments, bones and burials provide information about everyday life.",
      },
    ],

    inscriptionsTitle: "The Importance of Inscriptions",

    inscriptionsDescription:
      "Inscriptions are ancient records written on rock, walls, copper plates, gold plates, wood and pottery. They often provide contemporary or near-contemporary evidence.",

    inscriptionTypes: [
      {
        title: "Cave Inscriptions",
        description: "Records written near the drip ledges of caves.",
      },
      {
        title: "Rock Inscriptions",
        description: "Records written on natural rocks and rock surfaces.",
      },
      {
        title: "Pillar Inscriptions",
        description: "Records written on prepared stone pillars.",
      },
      {
        title: "Slab Inscriptions",
        description: "Records written on prepared stone slabs.",
      },
      {
        title: "Seat Inscriptions",
        description: "Records written on stone slabs shaped like seats.",
      },
    ],

    evaluationTitle: "Using Sources Critically",

    evaluationDescription:
      "Literary sources may have been written long after the events they describe, and the writer's religious, political or personal aims may influence the account. Therefore, sources must be critically evaluated.",

    evaluationItems: [
      "When was the source created?",
      "Who created the source?",
      "What was the author's purpose?",
      "How was the information obtained?",
      "Is it a contemporary record?",
      "Can other sources confirm it?",
      "Does it agree with archaeological evidence?",
      "Does the source contain bias?",
    ],

    importanceTitle: "Why Is the Study of History Important?",

    importanceDescription:
      "Studying history is not limited to memorising events. It develops thinking, identity and social responsibility.",

    importanceItems: [
      {
        icon: Search,
        title: "Understanding Society",
        description:
          "It helps us understand the society in which we live and how it developed.",
      },
      {
        icon: Lightbulb,
        title: "Learning from the Past",
        description:
          "Past experience helps us understand current problems and plan for the future.",
      },
      {
        icon: Landmark,
        title: "Recognising National Identity",
        description:
          "It develops an understanding of national heritage, culture and identity.",
      },
      {
        icon: ShieldCheck,
        title: "Building National Unity",
        description:
          "It helps us recognise the contributions of different communities and cultures.",
      },
      {
        icon: LibraryBig,
        title: "Respecting Other Cultures",
        description:
          "It encourages respect for different religions, languages, traditions and opinions.",
      },
      {
        icon: GraduationCap,
        title: "Critical Thinking",
        description:
          "It develops the ability to compare information, ask questions and form logical conclusions.",
      },
    ],

    protectionTitle: "Protecting Archaeological Heritage",

    protectionDescription:
      "Protecting inscriptions, ruins, monuments and artifacts for future generations is the responsibility of every citizen.",

    threatsTitle: "Major Threats to Heritage",

    threats: [
      "Illegal excavations",
      "Theft of artifacts",
      "Road and building construction",
      "Writing on monuments",
      "Drawing on historical objects",
      "Destruction of archaeological sites",
      "Lack of public awareness",
      "Environmental damage",
    ],

    protectionActionsTitle: "What We Should Do",

    protectionActions: [
      "Avoid damaging archaeological sites",
      "Do not remove artifacts",
      "Report illegal excavations",
      "Keep historical sites clean",
      "Educate the public about heritage",
      "Follow conservation laws and instructions",
    ],

    missionTitle: "The Purpose of Ape Ithihasaya",

    missionParagraphs: [
      "Ape Ithihasaya aims to provide a trustworthy, systematic and research-oriented platform dedicated to the complete history of Sri Lanka.",

      "Our main purpose is to distinguish clearly between traditional narratives, chronicles, archaeological evidence and modern research rather than presenting every claim at the same evidential level.",
    ],

    exploreTitle: "Explore Ape Ithihasaya",

    exploreItems: [
      {
        title: "Complete Timeline",
        description:
          "The complete historical journey from prehistory to modern Sri Lanka.",
        href: "/history/timeline",
      },
      {
        title: "Prehistory",
        description:
          "Early settlements, Balangoda Man, stone tools and archaeological evidence.",
        href: "/history/prehistory",
      },
      {
        title: "Early Traditional Age",
        description:
          "Maha Sammata Manu, Yaksha genealogies, Kubera, Ravana and Vibhishana traditions.",
        href: "/history/early-traditional-age",
      },
      {
        title: "Early Historical Period",
        description:
          "The Vijaya tradition, early settlements, village tanks, writing and the rise of Anuradhapura.",
        href: "/history/early-historical-period",
      },
      {
        title: "Kingdoms of Sri Lanka",
        description:
          "Kingdoms and political centres from Anuradhapura to Kandy.",
        href: "/kingdoms",
      },
      {
        title: "Kings and Queens",
        description:
          "Reigns, dynasties, biographies and royal family relationships.",
        href: "/kings",
      },
    ],

    exploreButton: "Explore",

    finalTitle: "Begin Your Journey Through Sri Lankan History",

    finalDescription:
      "Explore each historical claim by comparing evidence and clearly distinguishing tradition from verified history.",

    finalTimelineButton: "Explore the Timeline",

    finalPrehistoryButton: "Go to Prehistory",

    evidenceNote:
      "This page is organised around the basic educational concepts of historical sources, source criticism, the importance of studying history and the protection of archaeological heritage presented in the Grade 10 Sri Lankan history textbook.",
  },
} satisfies Record<Locale, unknown>;

export default async function HistoryOverviewPage({
  params,
}: HistoryOverviewPageProps) {
  const { locale } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const text = pageContent[currentLocale];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-[#3c2900] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.15),transparent_62%)]" />

        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9d00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#ffad0a] sm:text-sm">
            {text.eyebrow}
          </p>

          <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#845700] bg-[#140e00] text-[#ffad0a]">
            <BookOpen className="h-8 w-8" strokeWidth={1.7} />
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl font-serif text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {text.title}
          </h1>

          <p className="mt-6 text-xl font-semibold text-[#ffad0a] sm:text-2xl">
            {text.subtitle}
          </p>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
            {text.heroDescription}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}/history/timeline`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-8 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffb32b]"
            >
              {text.timelineButton}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#9e6800] px-8 py-3 font-bold text-[#ffad0a] transition duration-300 hover:-translate-y-1 hover:bg-[#ff9d00] hover:text-black"
            >
              {text.prehistoryButton}
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEFINITION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            icon={BookOpen}
            title={text.definitionTitle}
          />

          <div className="mt-9 space-y-7 text-base leading-9 text-zinc-300 sm:text-lg">
            {text.definitionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HISTORY CONSTRUCTION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={Search}
            title={text.constructionTitle}
            description={text.constructionDescription}
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {text.constructionSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-zinc-900 bg-[#080808] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#865900]"
              >
                <p className="text-3xl font-black text-[#ffad0a]">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOURCE INTRODUCTION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            icon={LibraryBig}
            title={text.sourcesTitle}
            description={text.sourcesDescription}
            centered
          />
        </div>
      </section>

      {/* =====================================================
          LITERARY SOURCES
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={BookOpen}
            title={text.literaryTitle}
            description={text.literaryDescription}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <SourceListCard
              icon={LibraryBig}
              title={text.localLiteraryTitle}
              items={text.localLiterarySources}
            />

            <SourceListCard
              icon={FileText}
              title={text.foreignLiteraryTitle}
              items={text.foreignLiterarySources}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHAEOLOGICAL SOURCES
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={Landmark}
            title={text.archaeologicalTitle}
            description={text.archaeologicalDescription}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.archaeologicalSources.map((source) => (
              <InformationCard
                key={source.title}
                icon={source.icon}
                title={source.title}
                description={source.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSCRIPTIONS
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={FileText}
            title={text.inscriptionsTitle}
            description={text.inscriptionsDescription}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {text.inscriptionTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-900 bg-[#080808] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#745000] bg-[#130d00] text-[#ffad0a]">
                  <FileText className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOURCE EVALUATION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Microscope}
            title={text.evaluationTitle}
            description={text.evaluationDescription}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {text.evaluationItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-zinc-900 bg-black p-5"
              >
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff9d00] text-black">
                  <Check className="h-4 w-4" strokeWidth={2.4} />
                </div>

                <p className="leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANCE
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={GraduationCap}
            title={text.importanceTitle}
            description={text.importanceDescription}
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.importanceItems.map((item) => (
              <InformationCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE PROTECTION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={ShieldCheck}
            title={text.protectionTitle}
            description={text.protectionDescription}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ChecklistCard
              title={text.threatsTitle}
              items={text.threats}
              type="warning"
            />

            <ChecklistCard
              title={text.protectionActionsTitle}
              items={text.protectionActions}
              type="success"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#654300] bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.1),transparent_70%)] p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#855800] bg-black text-[#ffad0a]">
            <Sparkles className="h-8 w-8" strokeWidth={1.7} />
          </div>

          <h2 className="mt-7 font-serif text-3xl font-bold sm:text-5xl">
            {text.missionTitle}
          </h2>

          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-base leading-9 text-zinc-300 sm:text-lg">
            {text.missionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE
      ====================================================== */}

      <section className="border-b border-zinc-900 bg-[#060606] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            icon={Landmark}
            title={text.exploreTitle}
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {text.exploreItems.map((item, index) => (
              <Link
                key={item.title}
                href={`/${currentLocale}${item.href}`}
                className="group rounded-3xl border border-zinc-900 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8a5b00]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#ffad0a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight className="h-5 w-5 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#ffad0a]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex font-semibold text-[#ffad0a]">
                  {text.exploreButton}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#6c4800] bg-[#070707] p-8 text-center sm:p-12">
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">
            {text.finalTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            {text.finalDescription}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}/history/timeline`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-8 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42a]"
            >
              {text.finalTimelineButton}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href={`/${currentLocale}/history/prehistory`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#996500] px-8 py-3 font-bold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
            >
              {text.finalPrehistoryButton}
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-6 text-zinc-600">
          {text.evidenceNote}
        </p>
      </section>
    </main>
  );
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  centered?: boolean;
}

function SectionHeading({
  icon: Icon,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-4xl text-center"
          : "max-w-5xl"
      }
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-[#765000] bg-[#130d00] text-[#ffad0a] ${centered ? "mx-auto" : ""
          }`}
      >
        <Icon className="h-7 w-7" strokeWidth={1.7} />
      </div>

      <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">
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

interface InformationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function InformationCard({
  icon: Icon,
  title,
  description,
}: InformationCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-900 bg-[#080808] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#875900]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#704900] bg-[#130d00] text-[#ffad0a] transition group-hover:bg-[#ff9d00] group-hover:text-black">
        <Icon className="h-7 w-7" strokeWidth={1.7} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>

      <p className="mt-4 leading-8 text-zinc-400">{description}</p>
    </article>
  );
}

interface SourceListCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

function SourceListCard({
  icon: Icon,
  title,
  items,
}: SourceListCardProps) {
  return (
    <article className="rounded-3xl border border-[#4f3500] bg-[#080808] p-7 sm:p-9">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff9d00] text-black">
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-zinc-900 bg-black px-4 py-4 text-zinc-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff9d00]" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ChecklistCardProps {
  title: string;
  items: string[];
  type: "warning" | "success";
}

function ChecklistCard({
  title,
  items,
  type,
}: ChecklistCardProps) {
  const warning = type === "warning";

  return (
    <article
      className={`rounded-3xl border p-7 sm:p-9 ${warning
          ? "border-red-900/60 bg-red-950/10"
          : "border-emerald-900/60 bg-emerald-950/10"
        }`}
    >
      <h3
        className={`text-2xl font-bold ${warning ? "text-red-300" : "text-emerald-300"
          }`}
      >
        {title}
      </h3>

      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <div
              className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${warning
                  ? "bg-red-950 text-red-300"
                  : "bg-emerald-950 text-emerald-300"
                }`}
            >
              <Check className="h-4 w-4" strokeWidth={2.2} />
            </div>

            <span className="leading-7 text-zinc-300">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}