import kingsData from "@/data/kings.json";
import enTranslations from "@/data/translations/kings.en.json";
import siTranslations from "@/data/translations/kings.si.json";
import sourcesData from "@/data/sources.json";

export type Locale = "si" | "en";

export type KingBaseRecord = {
  id: string;
  slug: string;
  kingdomId?: string;
  dynastyId?: string;
  reign?: {
    startYear: number;
    endYear: number;
    calendar: string;
  };
  predecessorId: string | null;
  successorId: string | null;
  fatherId: string | null;
  motherId: string | null;
  spouseIds: string[];
  childIds: string[];
  sourceIds: string[];
  image: string;
  evidenceLevel: string;
  status: string;
};

export type KingTranslationRecord = {
  name: string;
  kingdomName: string;
  dynastyName: string; // Added dynastyName field
  summary: string;
  reignDisplay: string;
};

export type KingSourceRecord = {
  id: string;
  title: {
    si: string;
    en: string;
  };
  type: string;
  description: {
    si: string;
    en: string;
  };
  evidenceCategory: string;
};

export type KingRecord = KingBaseRecord & {
  name: string;
  kingdomName: string;
  dynastyName: string;
  summary: string;
  reignDisplay: string;
  biography: string;
  importantEvents: string[];
  constructions: string[];
  relatedPlaces: string[];
  sources: KingSourceRecord[];
};

type TranslationMap = Record<string, KingTranslationRecord>;

// Updated translations to be maps of id => record
const translations: Record<Locale, TranslationMap> = {
  en: enTranslations as TranslationMap,
  si: siTranslations as TranslationMap,
};

const sources = sourcesData as KingSourceRecord[];

export function getAvailableLocales(): Locale[] {
  return ["si", "en"];
}

export function getKings(locale: Locale): KingRecord[] {
  return (kingsData as KingBaseRecord[])
    .filter((king) => king.status === "published")
    .map((king) => {
      const translation = translations[locale][king.id];
      return {
        ...king,
        name: translation?.name ?? king.slug,
        kingdomName: translation?.kingdomName ?? "",
        dynastyName: translation?.dynastyName ?? "",
        summary: translation?.summary ?? "",
        reignDisplay: translation?.reignDisplay ?? "",
        biography: (translation as any)?.biography ?? "",
        importantEvents: (translation as any)?.importantEvents ?? [],
        constructions: (translation as any)?.constructions ?? [],
        relatedPlaces: (translation as any)?.relatedPlaces ?? [],
        sources: sources.filter((source) => king.sourceIds.includes(source.id)),
      };
    });
}

export function getKingBySlug(slug: string, locale: Locale): KingRecord | null {
  return getKings(locale).find((king) => king.slug === slug) ?? null;
}
