import fs from "fs";
import path from "path";

export type Locale = "si" | "en";

export interface LocalizedText {
  si: string;
  en: string;
}

export interface BiographySection {
  heading: string;
  paragraphs: string[];
}

export interface KingData {
  id: string;
  slug: string;
  status?: string;
  type?: string;
  roles?: string[];

  rulerNumber?: {
    royalChronologyOrder?: number | null;
    monarchOrder?: number | null;
    kingdomOrder?: number | null;
  };

  rulerClassification?: {
    type?: string;
    isMonarch?: boolean;
    isInterregnumRuler?: boolean;
    isForeignRuler?: boolean;
    isJointRuler?: boolean;
  };

  name: LocalizedText;
  shortName?: LocalizedText;
  alternativeNames?: {
    si: string[];
    en: string[];
  };

  kingdomId: string;
  dynastyId?: string;

  kingdomDisplay?: LocalizedText;
  dynastyDisplay?: LocalizedText;

  reign?: {
    display: LocalizedText;
    lengthYears?: number | null;
  };

  predecessorId?: string | null;
  successorId?: string | null;

  family?: {
    fatherId?: string | null;
    motherId?: string | null;
    spouseIds?: string[];
    childIds?: string[];
    fatherInLawIds?: string[];
  };

  familyDisplay?: {
    si: {
      father?: string;
      mother?: string;
      spouse?: string;
      spouses?: string[];
      fatherInLaw?: string;
      children?: string[];
    };
    en: {
      father?: string;
      mother?: string;
      spouse?: string;
      spouses?: string[];
      fatherInLaw?: string;
      children?: string[];
    };
  };

  image?: {
    main: string;
    alt: LocalizedText;
    isReconstruction?: boolean;
  };

  summary?: LocalizedText;

  biography?: {
    si: BiographySection[];
    en: BiographySection[];
  };

  constructions?: Array<{
    id: string;
    name: LocalizedText;
    location?: LocalizedText;
    description?: LocalizedText;
  }>;

  majorEvents?: Array<{
    id: string;
    name: LocalizedText;
    description?: LocalizedText;
  }>;

  sourceIds?: string[];

  seo?: {
    title?: LocalizedText;
    description?: LocalizedText;
  };

  sourceStatus?: {
    overall: string;
    notes?: LocalizedText;
  };
}

const kingsDirectory = path.join(process.cwd(), "data", "kings");

export function getKingBySlug(slug: string): KingData | null {
  try {
    const filePath = path.join(kingsDirectory, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(fileContent) as KingData;
  } catch (error) {
    console.error(`Failed to load king: ${slug}`, error);
    return null;
  }
}

export function getAllKingSlugs(): string[] {
  if (!fs.existsSync(kingsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(kingsDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => fileName.replace(".json", ""));
}

export function getAllKings(): KingData[] {
  return getAllKingSlugs()
    .map((slug) => getKingBySlug(slug))
    .filter((king): king is KingData => king !== null);
}
