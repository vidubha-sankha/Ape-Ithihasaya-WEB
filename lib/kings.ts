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
  id: string;
  name: string;
  kingdomName: string;
  summary: string;
  reignDisplay: string;
};

export type KingSourceRecord = {
  id: string;
  entityId: string;
  type: string;
  title: string;
  citation: string;
};

export type KingRecord = KingBaseRecord & {
  name: string;
  kingdomName: string;
  summary: string;
  reignDisplay: string;
  sources: KingSourceRecord[];
};

const translations: Record<Locale, KingTranslationRecord[]> = {
  en: enTranslations as KingTranslationRecord[],
  si: siTranslations as KingTranslationRecord[],
};

const sources = sourcesData as KingSourceRecord[];

export function getAvailableLocales(): Locale[] {
  return ["si", "en"];
}

export function getKings(locale: Locale): KingRecord[] {
  return (kingsData as KingBaseRecord[])
    .filter((king) => king.status === "published")
    .map((king) => {
      const translation = translations[locale].find(
        (item) => item.id === king.id
      );

      return {
        ...king,
        name: translation?.name ?? king.slug,
        kingdomName: translation?.kingdomName ?? "",
        summary: translation?.summary ?? "",
        reignDisplay: translation?.reignDisplay ?? "",
        sources: sources.filter(
          (source) => source.entityId === king.id && source.type === "king"
        ),
      };
    });
}

export function getKingBySlug(slug: string, locale: Locale): KingRecord | null {
  return getKings(locale).find((king) => king.slug === slug) ?? null;
}
