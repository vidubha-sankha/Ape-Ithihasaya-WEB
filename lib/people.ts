import peopleData from "@/data/people.json";
import sourcesData from "@/data/sources.json";
import dynastiesData from "@/data/dynasties.json";
import kingdomsData from "@/data/kingdoms.json";

export type Locale = "si" | "en";

export type LocalizedText = {
  en: string;
  si: string;
};

export type LocalizedList = {
  en: string[];
  si: string[];
};

export type PersonBaseRecord = {
  id: string;
  slug: string;
  name: LocalizedText;
  alternativeNames: LocalizedList;
  titles?: LocalizedList;
  roles: string[];
  gender: string;
  periodId: string;
  timelineItemId?: string;
  dynastyIds: string[];
  regionIds: string[];
  kingdomIds: string[];
  parentIds: string[];
  spouseIds: string[];
  childIds: string[];
  relatedPeopleIds: string[];
  image: string;
  summary: LocalizedText;
  evidenceLevel: string;
  evidenceBadges?: string[];
  sourceIds: string[];
  etymology?: {
    term: string;
    language: string;
    meaning: LocalizedText;
  };
  selectionNarrative?: LocalizedList;
  traditionalTitlesExplanation?: {
    id: string;
    title: LocalizedText;
    meaning: LocalizedText;
  }[];
  politicalSignificance?: LocalizedText;
  buddhistLiteraryPosition?: LocalizedText;
  chronicleTradition?: LocalizedText;
  rajavaliyaTradition?: {
    description: LocalizedText;
    rulerCount: number;
    rulers: {
      order: number;
      id: string;
      name: LocalizedText;
    }[];
  };
  sriLankaConnection?: {
    status: string;
    classification: string;
    description: LocalizedText;
    associatedPlaces: {
      id: string;
      name: LocalizedText;
      relationship: string;
      evidenceStatus: string;
    }[];
  };
  historicalAssessment?: {
    classification: string;
    historicity: string;
    statement: LocalizedText;
  };
  sourceNote?: LocalizedText;
};

export type PersonRecord = Omit<
  PersonBaseRecord,
  "name" | "alternativeNames" | "titles" | "summary"
> & {
  name: string;
  alternativeNames: string[];
  titles: string[];
  summary: string;
  dynastyNames: string[];
  kingdomNames: string[];
  sources: { id: string; title: string; type: string; description: string }[];
};

export function getPeople(locale: Locale): PersonRecord[] {
  const dynasties = dynastiesData as { id: string; name: { si: string; en: string } }[];
  const kingdoms = kingdomsData as { id: string; nameSi: string; nameEn: string }[];
  const sources = sourcesData as { id: string; title: { si: string; en: string }; type: string; description: { si: string; en: string } }[];

  return (peopleData as PersonBaseRecord[]).map((person) => {
    // Resolve dynasty names
    const personDynastyNames = person.dynastyIds.map((dynId) => {
      const dynasty = dynasties.find((d) => d.id === dynId);
      if (dynasty) {
        return dynasty.name[locale] || dynasty.name.en;
      }
      return dynId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    });

    // Resolve kingdom names
    const personKingdomNames = person.kingdomIds.map((kingId) => {
      const kingdom = kingdoms.find((k) => k.id === kingId);
      if (kingdom) {
        return locale === "si" ? kingdom.nameSi : kingdom.nameEn;
      }
      return kingId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    });

    // Resolve sources
    const personSources = person.sourceIds.map((srcId) => {
      const source = sources.find((s) => s.id === srcId);
      if (source) {
        return {
          id: srcId,
          title: source.title[locale] || source.title.en,
          type: source.type,
          description: source.description[locale] || source.description.en,
        };
      }
      const title = srcId
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return {
        id: srcId,
        title,
        type: "literature",
        description:
          locale === "si"
            ? "ඓතිහාසික මූලාශ්‍ර සහ සාහිත්‍ය"
            : "Historical literature and sources.",
      };
    });

    const titlesResolved = person.titles
      ? person.titles[locale] || person.titles.en || []
      : [];

    return {
      ...person,
      name: person.name[locale] || person.name.en,
      alternativeNames:
        person.alternativeNames[locale] || person.alternativeNames.en || [],
      titles: titlesResolved,
      summary: person.summary[locale] || person.summary.en,
      dynastyNames: personDynastyNames,
      kingdomNames: personKingdomNames,
      sources: personSources,
    };
  });
}

export function getPersonBySlug(
  slug: string,
  locale: Locale
): PersonRecord | null {
  return getPeople(locale).find((person) => person.slug === slug) ?? null;
}
