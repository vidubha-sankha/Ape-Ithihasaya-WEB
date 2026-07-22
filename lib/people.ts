import peopleData from "@/data/people.json";
import sourcesData from "@/data/sources.json";
import dynastiesData from "@/data/dynasties.json";
import kingdomsData from "@/data/kingdoms.json";

export type Locale = "si" | "en";

export type PersonBaseRecord = {
  id: string;
  slug: string;
  name: {
    en: string;
    si: string;
  };
  alternativeNames: {
    en: string[];
    si: string[];
  };
  roles: string[];
  gender: string;
  periodId: string;
  dynastyIds: string[];
  regionIds: string[];
  kingdomIds: string[];
  parentIds: string[];
  spouseIds: string[];
  childIds: string[];
  relatedPeopleIds: string[];
  image: string;
  summary: {
    en: string;
    si: string;
  };
  evidenceLevel: string;
  sourceIds: string[];
};

export type PersonRecord = Omit<PersonBaseRecord, "name" | "alternativeNames" | "summary"> & {
  name: string;
  alternativeNames: string[];
  summary: string;
  dynastyNames: string[];
  kingdomNames: string[];
  sources: { id: string; title: string; type: string; description: string }[];
};

export function getPeople(locale: Locale): PersonRecord[] {
  const dynasties = dynastiesData as any[];
  const kingdoms = kingdomsData as any[];
  const sources = sourcesData as any[];

  return (peopleData as PersonBaseRecord[]).map((person) => {
    // Resolve dynasty names
    const personDynastyNames = person.dynastyIds.map((dynId) => {
      const dynasty = dynasties.find((d) => d.id === dynId);
      if (dynasty) {
        return dynasty.name[locale] || dynasty.name.en;
      }
      // Fallback: format id to readable string
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
      // Fallback details if source is not in sources.json
      const title = srcId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return {
        id: srcId,
        title,
        type: "literature",
        description: locale === "si" ? "ඓතිහාසික මූලාශ්‍ර සහ සාහිත්‍ය" : "Historical literature and sources.",
      };
    });

    return {
      ...person,
      name: person.name[locale] || person.name.en,
      alternativeNames: person.alternativeNames[locale] || person.alternativeNames.en || [],
      summary: person.summary[locale] || person.summary.en,
      dynastyNames: personDynastyNames,
      kingdomNames: personKingdomNames,
      sources: personSources,
    };
  });
}

export function getPersonBySlug(slug: string, locale: Locale): PersonRecord | null {
  return getPeople(locale).find((person) => person.slug === slug) ?? null;
}
