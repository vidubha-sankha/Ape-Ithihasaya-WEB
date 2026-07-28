export type Locale = "si" | "en";

export type EvidenceType =
  | "archaeological"
  | "traditional"
  | "uncertain"
  | "chronicle"
  | "chronicle-and-archaeological"
  | "documented"
  | "colonial-records"
  | "modern-records";

export type TimelineIconName =
  | "bone"
  | "crown"
  | "circle-help"
  | "landmark"
  | "ship"
  | "building"
  | "book-open"
  | "castle"
  | "mountain"
  | "scroll"
  | "shield"
  | "swords"
  | "flag"
  | "globe"
  | "columns"
  | "anchor";

export interface LocalizedText {
  si: string;
  en: string;
}

export interface TimelineItem {
  id: string;
  order: number;
  type:
    | "period"
    | "kingdom"
    | "colonial-period"
    | "modern-period";
  iconName: TimelineIconName;
  name: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  evidenceType: EvidenceType;
  href: string;
  highlights: LocalizedText[];
  relatedPeopleIds?: string[];
  relatedRegionIds?: string[];
}

export interface ParallelRegion {
  id: string;
  name: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  href: string;
  relatedPeopleIds: string[];
}

export const evidenceLabels: Record<EvidenceType, LocalizedText> = {
  archaeological: {
    si: "පුරාවිද්යාත්මක සාක්ෂි",
    en: "Archaeological Evidence",
  },
  traditional: {
    si: "සාහිත්ය හා සම්ප්රදායික මූලාශ්ර",
    en: "Literary and Traditional Sources",
  },
  uncertain: {
    si: "සාක්ෂි සීමිතයි",
    en: "Limited Evidence",
  },
  chronicle: {
    si: "වංශකථා මූලාශ්ර",
    en: "Chronicle Sources",
  },
  "chronicle-and-archaeological": {
    si: "වංශකථා සහ පුරාවිද්යා සාක්ෂි",
    en: "Chronicle and Archaeological Evidence",
  },
  documented: {
    si: "ලේඛනගත ඓතිහාසික සාක්ෂි",
    en: "Documented Historical Evidence",
  },
  "colonial-records": {
    si: "යටත්විජිත ලේඛන",
    en: "Colonial Records",
  },
  "modern-records": {
    si: "නූතන ලේඛන සහ වාර්තා",
    en: "Modern Records",
  },
};

export const historyTimeline: TimelineItem[] = [
  {
    id: "prehistory",
    order: 1,
    type: "period",
    iconName: "bone",
    name: {
      si: "ප්රාග් ඉතිහාසය",
      en: "Prehistory",
    },
    period: {
      si: "ලිඛිත ඉතිහාසයට පෙර කාලය",
      en: "Before written historical records",
    },
    description: {
      si: "ශ්රී ලංකාවේ මුල් මානව ජනාවාස, ගල් මෙවලම්, ගුහා වාසස්ථාන, දඩයම් හා ආහාර එකතු කිරීමේ ජීවන රටාව සහ බලංගොඩ මානවයා පිළිබඳ අධ්යයනයයි.",
      en: "The study of Sri Lanka's earliest human settlements, stone tools, cave habitation, hunting and gathering communities, and the people commonly described as Balangoda Man.",
    },
    evidenceType: "archaeological",
    href: "/history/prehistory",
    highlights: [
      {
        si: "පාහියන්ගල, බටදොඹලෙන සහ බෙලිලෙන",
        en: "Fa-Hien Cave, Batadomba-lena and Beli-lena",
      },
      {
        si: "ක්ෂුද්ර ශිලා මෙවලම්",
        en: "Microlithic stone tools",
      },
      {
        si: "දඩයම් හා ආහාර එකතු කිරීම",
        en: "Hunting and gathering",
      },
      {
        si: "පුරාණ සුසාන චාරිත්ර",
        en: "Early burial practices",
      },
    ],
  },
  {
    id: "early-traditional-age",
    order: 2,
    type: "period",
    iconName: "crown",
    name: {
      si: "පූර්ව සම්ප්රදායික යුගය",
      en: "Early Traditional Age",
    },
    period: {
      si: "නිශ්චිත කාල නිර්ණයක් නොමැත",
      en: "No securely established chronology",
    },
    description: {
      si: "මහා සම්මත මනු, බ්රහ්ම, හෙති වංශය, යක්ෂ හා රක්ෂ සම්ප්රදායන්, කුවේර, රාවණ සහ විභීෂණ සම්බන්ධ ආගමික, සාහිත්යමය සහ ජන සම්ප්රදායික විස්තර ඇතුළත් අංශයකි.",
      en: "A thematic category containing religious, literary and oral traditions concerning Maha Sammata Manu, Brahma, the Heti lineage, Yaksha and Rakshasa traditions, Kubera, Ravana and Vibhishana.",
    },
    evidenceType: "traditional",
    href: "/history/early-traditional-age",
    highlights: [
      {
        si: "මහා සම්මත මනු සම්ප්රදාය",
        en: "Maha Sammata Manu tradition",
      },
      {
        si: "හෙති සහ යක්ෂ වංශ සම්ප්රදාය",
        en: "Heti and Yaksha genealogies",
      },
      {
        si: "කුවේර සහ රාවණ සම්ප්රදාය",
        en: "Kubera and Ravana traditions",
      },
      {
        si: "විභීෂණ සම්ප්රදාය",
        en: "Vibhishana tradition",
      },
    ],
  },
  {
    id: "chronological-gap",
    order: 3,
    type: "period",
    iconName: "circle-help",
    name: {
      si: "කාලානුක්රමික පරතරය",
      en: "Chronological Gap",
    },
    period: {
      si: "සම්ප්රදායික කතා සහ වංශකථා ඉතිහාසය අතර",
      en: "Between traditional narratives and chronicle history",
    },
    description: {
      si: "පූර්ව සම්ප්රදායික විස්තර සහ විජය සම්බන්ධ වංශකථා අතර අඛණ්ඩව සනාථ කළ හැකි පාලක අනුපිළිවෙළක් හෝ නිශ්චිත කාලරේඛාවක් නොමැති බව පැහැදිලි කරන අංශයකි.",
      en: "A transitional section explaining that no continuous and securely verified ruler sequence currently connects early traditional narratives with the chronicle account of Vijaya.",
    },
    evidenceType: "uncertain",
    href: "/history/chronological-gap",
    highlights: [
      {
        si: "අඛණ්ඩ ලිඛිත වාර්තා නොමැත",
        en: "No continuous written record",
      },
      {
        si: "නිශ්චිත පාලන වසර නොමැත",
        en: "No securely established reign dates",
      },
      {
        si: "සෘජු පුරාවිද්යා සම්බන්ධතා සීමිතය",
        en: "Direct archaeological links are limited",
      },
      {
        si: "නොදන්නා පාලකයන් ගොතා නොදැක්විය යුතුය",
        en: "Unknown rulers should not be invented",
      },
    ],
  },
  {
    id: "early-historical-period",
    order: 4,
    type: "period",
    iconName: "landmark",
    name: {
      si: "මුල් ඓතිහාසික යුගය",
      en: "Early Historical Period",
    },
    period: {
      si: "මුල් රාජ්ය හා නගර සංවිධානය දක්වා",
      en: "Formation of early states and urban centres",
    },
    description: {
      si: "විජය සම්ප්රදාය, තම්බපණ්ණිය, මුල් පාලකයන්, ස්ථිර ගම්මාන, ගම්වැව්, කෘෂිකර්මය, යකඩ භාවිතය, බ්රාහ්මී ශිලා ලේඛන සහ අනුරාධපුරයේ උදාව ඇතුළත් යුගයකි.",
      en: "A period covering the Vijaya tradition, Tambapanni, early rulers, permanent villages, village tanks, agriculture, iron technology, Brahmi inscriptions and the rise of Anuradhapura.",
    },
    evidenceType: "chronicle-and-archaeological",
    href: "/history/early-historical-period",
    highlights: [
      {
        si: "විජය සහ කුවේණි සම්ප්රදාය",
        en: "Vijaya and Kuveni tradition",
      },
      {
        si: "ස්ථිර ජනාවාස සහ ගම්වැව්",
        en: "Permanent settlements and village tanks",
      },
      {
        si: "යකඩ තාක්ෂණය සහ මැටි භාණ්ඩ",
        en: "Iron technology and pottery",
      },
      {
        si: "අනුරාධපුර නගරයේ උදාව",
        en: "Rise of Anuradhapura",
      },
    ],
  },
  {
    id: "tambapanni-kingdom",
    order: 5,
    type: "kingdom",
    iconName: "ship",
    name: {
      si: "තම්බපණ්ණි රාජධානිය",
      en: "Tambapanni Kingdom",
    },
    period: {
      si: "විජය සම්ප්රදාය හා මුල් ජනාවාස අවධිය",
      en: "The Vijaya tradition and early settlement phase",
    },
    description: {
      si: "මහාවංශ සම්ප්රදායට අනුව විජය කුමරු සහ ඔහුගේ පිරිස ලංකාවට පැමිණීමෙන් පසු පිහිටුවන ලද මුල් දේශපාලන මධ්යස්ථානය ලෙස තම්බපණ්ණිය සඳහන් වේ.",
      en: "In the Mahavamsa tradition, Tambapanni is presented as an early political centre established after the arrival of Prince Vijaya and his followers.",
    },
    evidenceType: "chronicle",
    href: "/kingdoms/tambapanni",
    highlights: [
      {
        si: "විජය කුමරුගේ පැමිණීම",
        en: "Arrival of Prince Vijaya",
      },
      {
        si: "කුවේණි සම්බන්ධ වංශකථා කතාව",
        en: "Chronicle narrative concerning Kuveni",
      },
      {
        si: "මුල් ජනාවාස පිහිටුවීම",
        en: "Establishment of early settlements",
      },
      {
        si: "උපතිස්සගාමය සමඟ සම්බන්ධය",
        en: "Connection with Upatissagama",
      },
    ],
  },
  {
    id: "anuradhapura-kingdom",
    order: 6,
    type: "kingdom",
    iconName: "columns",
    name: {
      si: "අනුරාධපුර රාජධානිය",
      en: "Anuradhapura Kingdom",
    },
    period: {
      si: "ක්රි.පූ. 4 වන සියවස පමණ – ක්රි.ව. 11 වන සියවස",
      en: "Approximately 4th century BCE – 11th century CE",
    },
    description: {
      si: "ශ්රී ලංකාවේ දීර්ඝතම සහ බලවත්ම පුරාණ රාජධානියකි. බුදු දහම, විහාර, ස්තූප, වැව්, ශිලා ලේඛන සහ පාලන පද්ධති මෙම යුගයේ වර්ධනය විය.",
      en: "One of Sri Lanka's longest and most influential ancient kingdoms, associated with Buddhism, monasteries, stupas, reservoirs, inscriptions and systems of government.",
    },
    evidenceType: "chronicle-and-archaeological",
    href: "/kingdoms/anuradhapura",
    highlights: [
      {
        si: "පණ්ඩුකාභය සහ නගර සංවිධානය",
        en: "Pandukabhaya and urban organisation",
      },
      {
        si: "දේවානම්පිය තිස්ස සහ බුදු දහම",
        en: "Devanampiya Tissa and Buddhism",
      },
      {
        si: "දුටුගැමුණු සහ රාජ්ය එක්සත් කිරීම",
        en: "Dutugemunu and political unification",
      },
      {
        si: "වසභ සහ වාරි සංවර්ධනය",
        en: "Vasabha and irrigation development",
      },
    ],
    relatedRegionIds: ["rajarata", "ruhuna"],
  },
  {
    id: "polonnaruwa-kingdom",
    order: 7,
    type: "kingdom",
    iconName: "landmark",
    name: {
      si: "පොළොන්නරුව රාජධානිය",
      en: "Polonnaruwa Kingdom",
    },
    period: {
      si: "ක්රි.ව. 11 වන සියවස – 13 වන සියවස",
      en: "11th century CE – 13th century CE",
    },
    description: {
      si: "විජයබාහු පළමුවන යටතේ ස්වාධීනත්වය නැවත ස්ථාපිත වූ අතර පරාක්රමබාහු පළමුවන සහ නිශ්ශංකමල්ල යටතේ වාරි තාක්ෂණය, ගෘහ නිර්මාණය සහ රාජ්ය බලය වර්ධනය විය.",
      en: "Independence was restored under Vijayabahu I, while irrigation, architecture and royal power developed further under Parakramabahu I and Nissanka Malla.",
    },
    evidenceType: "documented",
    href: "/kingdoms/polonnaruwa",
    highlights: [
      {
        si: "විජයබාහු පළමුවන",
        en: "Vijayabahu I",
      },
      {
        si: "පරාක්රම සමුද්රය",
        en: "Parakrama Samudra",
      },
      {
        si: "පරාක්රමබාහු පළමුවන",
        en: "Parakramabahu I",
      },
      {
        si: "ගල් විහාරය",
        en: "Gal Vihara",
      },
    ],
  },
  {
    id: "dambadeniya-kingdom",
    order: 8,
    type: "kingdom",
    iconName: "book-open",
    name: {
      si: "දඹදෙණිය රාජධානිය",
      en: "Dambadeniya Kingdom",
    },
    period: {
      si: "ක්රි.ව. 13 වන සියවස",
      en: "13th century CE",
    },
    description: {
      si: "කාලිංග මාඝගේ ආක්රමණයෙන් පසු සිංහල රාජ්ය බලය නැවත ගොඩනැගීම, දළදා වහන්සේගේ ආරක්ෂාව සහ බෞද්ධ සාහිත්යය සම්බන්ධයෙන් වැදගත් වූ රාජධානියකි.",
      en: "An important kingdom associated with the restoration of Sinhala royal authority, protection of the Tooth Relic and the development of Buddhist literature.",
    },
    evidenceType: "documented",
    href: "/kingdoms/dambadeniya",
    highlights: [
      {
        si: "තුන්වන විජයබාහු",
        en: "Vijayabahu III",
      },
      {
        si: "දෙවන පරාක්රමබාහු",
        en: "Parakramabahu II",
      },
      {
        si: "දළදා වහන්සේගේ ආරක්ෂාව",
        en: "Protection of the Tooth Relic",
      },
      {
        si: "සිංහල සාහිත්යයේ වර්ධනය",
        en: "Development of Sinhala literature",
      },
    ],
  },
  {
    id: "yapahuwa-kingdom",
    order: 9,
    type: "kingdom",
    iconName: "castle",
    name: {
      si: "යාපහුව රාජධානිය",
      en: "Yapahuwa Kingdom",
    },
    period: {
      si: "ක්රි.ව. 13 වන සියවසේ අගභාගය",
      en: "Late 13th century CE",
    },
    description: {
      si: "ස්වාභාවික ගල් පර්වතයක් වටා ගොඩනැගුණු බලකොටු රාජධානියකි. දළදා වහන්සේගේ ආරක්ෂාව සහ යාපහුව පියගැටපෙළ සඳහා ප්රසිද්ධය.",
      en: "A fortified kingdom built around a natural rock citadel, known for the protection of the Tooth Relic and the Yapahuwa stairway.",
    },
    evidenceType: "documented",
    href: "/kingdoms/yapahuwa",
    highlights: [
      {
        si: "පළමුවන බුවනෙකබාහු",
        en: "Bhuvanekabahu I",
      },
      {
        si: "යාපහුව ගල් බලකොටුව",
        en: "Yapahuwa rock fortress",
      },
      {
        si: "දළදා මාලිගාව",
        en: "Temple of the Tooth",
      },
      {
        si: "අලංකාර පියගැටපෙළ",
        en: "Monumental stairway",
      },
    ],
  },
  {
    id: "kurunegala-kingdom",
    order: 10,
    type: "kingdom",
    iconName: "building",
    name: {
      si: "කුරුණෑගල රාජධානිය",
      en: "Kurunegala Kingdom",
    },
    period: {
      si: "ක්රි.ව. 13 වන සියවසේ අගභාගය – 14 වන සියවස",
      en: "Late 13th century CE – 14th century CE",
    },
    description: {
      si: "දළදා වහන්සේ, වංශකථා රචනය සහ මධ්යම ප්රදේශයේ පාලන බලය සම්බන්ධයෙන් වැදගත් වූ රාජධානියකි.",
      en: "A kingdom important for the protection of the Tooth Relic, chronicle writing and political authority in the central regions.",
    },
    evidenceType: "documented",
    href: "/kingdoms/kurunegala",
    highlights: [
      {
        si: "දෙවන බුවනෙකබාහු",
        en: "Bhuvanekabahu II",
      },
      {
        si: "හතරවන පරාක්රමබාහු",
        en: "Parakramabahu IV",
      },
      {
        si: "දළදා සිරිත",
        en: "Dalada Sirita",
      },
      {
        si: "සාහිත්ය සහ වංශකථා",
        en: "Literature and chronicles",
      },
    ],
  },
  {
    id: "gampola-kingdom",
    order: 11,
    type: "kingdom",
    iconName: "mountain",
    name: {
      si: "ගම්පොළ රාජධානිය",
      en: "Gampola Kingdom",
    },
    period: {
      si: "ක්රි.ව. 14 වන සියවස",
      en: "14th century CE",
    },
    description: {
      si: "මධ්යම කඳුකරයේ දේශපාලන බලය වර්ධනය වූ අතර ලංකාතිලකය, ගඩලාදෙණිය සහ ඇම්බැක්කේ වැනි විශිෂ්ට ආගමික හා කලා නිර්මාණ බිහි වූ යුගයකි.",
      en: "A period of increasing political power in the central highlands and the construction of monuments such as Lankatilaka, Gadaladeniya and Embekke.",
    },
    evidenceType: "documented",
    href: "/kingdoms/gampola",
    highlights: [
      {
        si: "හතරවන බුවනෙකබාහු",
        en: "Bhuvanekabahu IV",
      },
      {
        si: "ලංකාතිලක විහාරය",
        en: "Lankatilaka Vihara",
      },
      {
        si: "ගඩලාදෙණිය",
        en: "Gadaladeniya",
      },
      {
        si: "ඇම්බැක්කේ දේවාලය",
        en: "Embekke Devalaya",
      },
    ],
  },
  {
    id: "kotte-kingdom",
    order: 12,
    type: "kingdom",
    iconName: "scroll",
    name: {
      si: "කෝට්ටේ රාජධානිය",
      en: "Kotte Kingdom",
    },
    period: {
      si: "ක්රි.ව. 15 වන සියවස – 16 වන සියවස",
      en: "15th century CE – 16th century CE",
    },
    description: {
      si: "හයවන පරාක්රමබාහු යටතේ දේශපාලන එක්සත්භාවය, සාහිත්යය, වෙළඳාම සහ අධ්යාපනය වර්ධනය වූ රාජධානියකි.",
      en: "A kingdom marked by political consolidation, literature, commerce and education under Parakramabahu VI.",
    },
    evidenceType: "documented",
    href: "/kingdoms/kotte",
    highlights: [
      {
        si: "හයවන පරාක්රමබාහු",
        en: "Parakramabahu VI",
      },
      {
        si: "තොටගමුවේ ශ්රී රාහුල හිමි",
        en: "Sri Rahula of Totagamuwa",
      },
      {
        si: "සාහිත්ය සහ අධ්යාපනය",
        en: "Literature and education",
      },
      {
        si: "පෘතුගීසීන්ගේ පැමිණීම",
        en: "Arrival of the Portuguese",
      },
    ],
  },
  {
    id: "jaffna-kingdom",
    order: 13,
    type: "kingdom",
    iconName: "landmark",
    name: {
      si: "යාපනය රාජධානිය",
      en: "Kingdom of Jaffna",
    },
    period: {
      si: "මධ්යකාලීන ශ්රී ලංකාව",
      en: "Medieval Sri Lanka",
    },
    description: {
      si: "ශ්රී ලංකාවේ උතුරු ප්රදේශයේ ආර්යචක්රවර්ති පාලකයන් යටතේ වර්ධනය වූ දකුණු ඉන්දියානු වෙළඳ හා දේශපාලන සම්බන්ධතා සහිත රාජධානියකි.",
      en: "A northern Sri Lankan kingdom ruled by the Aryacakravarti dynasty, with political and commercial connections to South India.",
    },
    evidenceType: "documented",
    href: "/kingdoms/jaffna",
    highlights: [
      {
        si: "ආර්යචක්රවර්ති රාජවංශය",
        en: "Aryacakravarti dynasty",
      },
      {
        si: "නල්ලූර් දේශපාලන මධ්යස්ථානය",
        en: "Nallur political centre",
      },
      {
        si: "ඉන්දියානු සාගර වෙළඳාම",
        en: "Indian Ocean trade",
      },
      {
        si: "පෘතුගීසි ආක්රමණය",
        en: "Portuguese conquest",
      },
    ],
  },
  {
    id: "raigama-kingdom",
    order: 14,
    type: "kingdom",
    iconName: "shield",
    name: {
      si: "රයිගම රාජධානිය",
      en: "Kingdom of Raigama",
    },
    period: {
      si: "කෝට්ටේ රාජධානියේ බෙදීම් සමය",
      en: "Period of political division within Kotte",
    },
    description: {
      si: "කෝට්ටේ රාජධානියේ දේශපාලන බෙදීම් සමයේ බිහි වූ ප්රාදේශීය පාලන මධ්යස්ථානයකි. රයිගම් බණ්ඩාර සහ බල අරගල සමඟ සම්බන්ධ වේ.",
      en: "A regional political centre that emerged during the division of the Kotte Kingdom and is associated with Raigam Bandara.",
    },
    evidenceType: "documented",
    href: "/kingdoms/raigama",
    highlights: [
      {
        si: "රයිගම් බණ්ඩාර",
        en: "Raigam Bandara",
      },
      {
        si: "විජයබා කොල්ලය",
        en: "Vijayaba Kollaya",
      },
      {
        si: "කෝට්ටේ දේශපාලන බෙදීම",
        en: "Political division of Kotte",
      },
      {
        si: "සීතාවක සමඟ සම්බන්ධය",
        en: "Relationship with Sitawaka",
      },
    ],
  },
  {
    id: "sitawaka-kingdom",
    order: 15,
    type: "kingdom",
    iconName: "swords",
    name: {
      si: "සීතාවක රාජධානිය",
      en: "Kingdom of Sitawaka",
    },
    period: {
      si: "ක්රි.ව. 16 වන සියවස",
      en: "16th century CE",
    },
    description: {
      si: "පෘතුගීසි බලයට එරෙහිව මායාදුන්නේ සහ පළමුවන රාජසිංහ යටතේ ප්රබල සටන්කාරී රාජධානියක් ලෙස වර්ධනය විය.",
      en: "A powerful military kingdom that developed under Mayadunne and Rajasinha I in opposition to Portuguese expansion.",
    },
    evidenceType: "documented",
    href: "/kingdoms/sitawaka",
    highlights: [
      {
        si: "මායාදුන්නේ රජු",
        en: "King Mayadunne",
      },
      {
        si: "පළමුවන රාජසිංහ",
        en: "Rajasinha I",
      },
      {
        si: "පෘතුගීසීන්ට එරෙහි සටන්",
        en: "Wars against the Portuguese",
      },
      {
        si: "මුල්ලේරියාව සටන",
        en: "Battle of Mulleriyawa",
      },
    ],
  },
  {
    id: "kandy-kingdom",
    order: 16,
    type: "kingdom",
    iconName: "crown",
    name: {
      si: "මහනුවර රාජධානිය",
      en: "Kingdom of Kandy",
    },
    period: {
      si: "ක්රි.ව. 15 වන සියවසේ අගභාගය – 1815",
      en: "Late 15th century CE – 1815",
    },
    description: {
      si: "පෘතුගීසි, ලන්දේසි සහ බ්රිතාන්ය බලයන්ට එරෙහිව දිගු කාලයක් ස්වාධීනත්වය ආරක්ෂා කළ අවසන් සිංහල රාජධානියයි.",
      en: "The final independent Sinhala kingdom, which resisted Portuguese, Dutch and British expansion.",
    },
    evidenceType: "documented",
    href: "/kingdoms/kandy",
    highlights: [
      {
        si: "පළමුවන විමලධර්මසූරිය",
        en: "Vimaladharmasuriya I",
      },
      {
        si: "දෙවන රාජසිංහ",
        en: "Rajasinha II",
      },
      {
        si: "දළදා මාලිගාව",
        en: "Temple of the Tooth",
      },
      {
        si: "1815 උඩරට ගිවිසුම",
        en: "Kandyan Convention of 1815",
      },
    ],
  },
  {
    id: "portuguese-period",
    order: 17,
    type: "colonial-period",
    iconName: "anchor",
    name: {
      si: "පෘතුගීසි යුගය",
      en: "Portuguese Period",
    },
    period: {
      si: "1505/1506 පමණ – 1658",
      en: "Approximately 1505/1506 – 1658",
    },
    description: {
      si: "ශ්රී ලංකාවේ මුහුදුබඩ ප්රදේශවල පෘතුගීසි දේශපාලන, හමුදා, වෙළඳ සහ ආගමික බලපෑම වර්ධනය වූ කාලයයි.",
      en: "The period of expanding Portuguese political, military, commercial and religious influence in Sri Lanka's coastal regions.",
    },
    evidenceType: "colonial-records",
    href: "/history/portuguese-period",
    highlights: [
      {
        si: "කෝට්ටේ සමඟ සම්බන්ධතා",
        en: "Relations with Kotte",
      },
      {
        si: "කුරුඳු වෙළඳාම",
        en: "Cinnamon trade",
      },
      {
        si: "කතෝලික ආගම ප්රචාරය",
        en: "Spread of Catholicism",
      },
      {
        si: "සීතාවක සහ මහනුවර ප්රතිරෝධය",
        en: "Resistance from Sitawaka and Kandy",
      },
    ],
  },
  {
    id: "dutch-period",
    order: 18,
    type: "colonial-period",
    iconName: "building",
    name: {
      si: "ලන්දේසි යුගය",
      en: "Dutch Period",
    },
    period: {
      si: "1658 – 1796",
      en: "1658 – 1796",
    },
    description: {
      si: "ලන්දේසි නැගෙනහිර ඉන්දියා වෙළඳ සමාගම මුහුදුබඩ ප්රදේශ පාලනය කළ අතර වෙළඳාම, නීතිය, ඉඩම් සහ පරිපාලනය වෙනස් කළ කාලයයි.",
      en: "The period during which the Dutch East India Company governed coastal regions and transformed commerce, law, land administration and government.",
    },
    evidenceType: "colonial-records",
    href: "/history/dutch-period",
    highlights: [
      {
        si: "ලන්දේසි නැගෙනහිර ඉන්දියා සමාගම",
        en: "Dutch East India Company",
      },
      {
        si: "රෝම-ලන්දේසි නීතිය",
        en: "Roman-Dutch law",
      },
      {
        si: "තෝම්බු ලේඛන",
        en: "Thombo records",
      },
      {
        si: "මහනුවර සමඟ සබඳතා",
        en: "Relations with Kandy",
      },
    ],
  },
  {
    id: "british-period",
    order: 19,
    type: "colonial-period",
    iconName: "columns",
    name: {
      si: "බ්රිතාන්ය යුගය",
      en: "British Period",
    },
    period: {
      si: "1796 – 1948",
      en: "1796 – 1948",
    },
    description: {
      si: "1815දී මුළු දිවයිනම බ්රිතාන්ය පාලනයට යටත් වූ අතර පරිපාලනය, ආර්ථිකය, අධ්යාපනය සහ ප්රවාහනය විශාල ලෙස වෙනස් විය.",
      en: "The British brought the entire island under their rule in 1815 and transformed administration, the economy, education and transport.",
    },
    evidenceType: "colonial-records",
    href: "/history/british-period",
    highlights: [
      {
        si: "1815 උඩරට ගිවිසුම",
        en: "Kandyan Convention of 1815",
      },
      {
        si: "1817–1818 ඌව-වෙල්ලස්ස අරගලය",
        en: "Uva-Wellassa uprising",
      },
      {
        si: "තේ සහ වතු ආර්ථිකය",
        en: "Tea and plantation economy",
      },
      {
        si: "නිදහස් ව්යාපාරය",
        en: "Independence movement",
      },
    ],
  },
  {
    id: "modern-sri-lanka",
    order: 20,
    type: "modern-period",
    iconName: "globe",
    name: {
      si: "නූතන ශ්රී ලංකාව",
      en: "Modern Sri Lanka",
    },
    period: {
      si: "1948 සිට වර්තමානය දක්වා",
      en: "1948 to the present",
    },
    description: {
      si: "1948 නිදහස, 1972 ජනරජය, දේශපාලන හා සමාජ වෙනස්කම්, සංවර්ධනය සහ නූතන ජාතික අනන්යතාව ගොඩනැගීම ඇතුළත් අවධියයි.",
      en: "The period covering independence in 1948, the establishment of the republic in 1972, political and social change, development and modern national identity.",
    },
    evidenceType: "modern-records",
    href: "/history/modern-sri-lanka",
    highlights: [
      {
        si: "1948 නිදහස",
        en: "Independence in 1948",
      },
      {
        si: "1972 ජනරජය",
        en: "Republic in 1972",
      },
      {
        si: "දේශපාලන හා සමාජ පරිවර්තන",
        en: "Political and social transformations",
      },
      {
        si: "උරුම සංරක්ෂණය",
        en: "Heritage conservation",
      },
    ],
  },
];

export const parallelHistoricalRegions: ParallelRegion[] = [
  {
    id: "ruhuna",
    name: {
      si: "රුහුණ / රෝහණ",
      en: "Ruhuna / Rohana",
    },
    period: {
      si: "අනුරාධපුර යුගය සමඟ සමාන්තරව වර්ධනය වූ ඓතිහාසික ප්රදේශය",
      en: "A historical region that developed alongside the Anuradhapura period",
    },
    description: {
      si: "රුහුණ වෙනම අනුක්රමික අගනුවර රාජධානියක් ලෙස නොව, දකුණු සහ ගිනිකොණදිග ශ්රී ලංකාවේ වැදගත් ඓතිහාසික හා දේශපාලන ප්රදේශයක් ලෙස පෙන්විය යුතුය. මාගම, කතරගම සහ තිස්සමහාරාමය එහි වැදගත් මධ්යස්ථාන විය.",
      en: "Ruhuna should be presented not as a simple successor kingdom, but as an important historical and political region of southern and southeastern Sri Lanka, associated with Magama, Kataragama and Tissamaharama.",
    },
    href: "/regions/ruhuna",
    relatedPeopleIds: [
      "prince-mahanaga",
      "yatala-tissa",
      "gothabhaya",
      "kavantissa",
      "viharamahadevi",
      "dutugemunu",
      "saddhatissa",
    ],
  },
];