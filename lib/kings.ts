import fs from "fs";
import path from "path";

export type Locale = "si" | "en";

export interface LocalizedText {
  si: string;
  en: string;
}

export interface BiographySection {
  id?: string;
  heading: string;
  paragraphs: string[];
}

export interface KingData {
  id: string;
  slug: string;
  type?: string;
  roles?: string[];
  status?: string;

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
    isRegionalRuler?: boolean;
    isIslandwideRuler?: boolean;
    wasFormallyConsecrated?: boolean;
  };

  name: LocalizedText;
  shortName?: LocalizedText;
  alternativeNames?: {
    si: string[];
    en: string[];
  };
  birthName?: LocalizedText;

  gender?: string;
  kingdomId: string;
  dynastyId?: string;
  periodId?: string;
  regionIds?: string[];

  kingdomDisplay?: LocalizedText;
  dynastyDisplay?: LocalizedText;

  reign?: {
    startYear?: number | null;
    endYear?: number | null;
    calendar?: string;
    lengthYears?: number | null;
    display: LocalizedText;
    dateStatus?: string;
    dateNote?: LocalizedText;

    regionalReign?: {
      startYear?: number | null;
      endYear?: number | null;
      display: LocalizedText;
    };

    islandwideReign?: {
      startYear?: number | null;
      endYear?: number | null;
      display: LocalizedText;
    };

    rajarataReign?: {
      startYear?: number | null;
      endYear?: number | null;
      display: LocalizedText;
    };

    effectiveReign?: {
      startYear?: number | null;
      endYear?: number | null;
      display: LocalizedText;
    };

    laterStatus?: {
      display: LocalizedText;
    };
  };

  predecessorId?: string | null;
  successorId?: string | null;

  family?: {
    fatherId?: string | null;
    motherId?: string | null;

    paternalGrandfatherId?: string | null;
    maternalGrandfatherId?: string | null;

    paternalGrandmotherId?: string | null;
    maternalGrandmotherId?: string | null;

    paternalGreatGrandfatherId?: string | null;
    paternalGreatGrandmotherId?: string | null;

    paternalUncleIds?: string[];
    maternalUncleIds?: string[];

    paternalGreatUncleIds?: string[];
    paternalGreatAuntIds?: string[];

    paternalAuntIds?: string[];
    maternalAuntIds?: string[];

    siblingIds?: string[];
    halfSiblingIds?: string[];
    cousinIds?: string[];

    brotherInLawIds?: string[];
    sisterInLawIds?: string[];

    spouseIds?: string[];
    childIds?: string[];
    grandchildIds?: string[];

    fatherInLawIds?: string[];
    motherInLawIds?: string[];

    grandfatherInLawIds?: string[];
    grandmotherInLawIds?: string[];

    nephewIds?: string[];
    nieceIds?: string[];
  };

  familyDisplay?: {
    si: {
      father?: string;
      mother?: string;

      paternalGrandfather?: string;
      maternalGrandfather?: string;

      paternalGrandmother?: string;
      maternalGrandmother?: string;

      paternalGreatGrandfather?: string;
      paternalGreatGrandmother?: string;

      paternalUncles?: string[];
      maternalUncles?: string[];

      paternalGreatUncles?: string[];
      paternalGreatAunts?: string[];

      paternalAunts?: string[];
      maternalAunts?: string[];

      siblings?: string[];
      halfSiblings?: string[];
      cousins?: string[];

      brothersInLaw?: string[];
      sistersInLaw?: string[];

      spouse?: string;
      spouses?: string[];

      children?: string[];
      grandchildren?: string[];

      fatherInLaw?: string;
      motherInLaw?: string;

      grandfathersInLaw?: string[];
      grandmothersInLaw?: string[];

      nephews?: string[];
      nieces?: string[];
    };

    en: {
      father?: string;
      mother?: string;

      paternalGrandfather?: string;
      maternalGrandfather?: string;

      paternalGrandmother?: string;
      maternalGrandmother?: string;

      paternalGreatGrandfather?: string;
      paternalGreatGrandmother?: string;

      paternalUncles?: string[];
      maternalUncles?: string[];

      paternalGreatUncles?: string[];
      paternalGreatAunts?: string[];

      paternalAunts?: string[];
      maternalAunts?: string[];

      siblings?: string[];
      halfSiblings?: string[];
      cousins?: string[];

      brothersInLaw?: string[];
      sistersInLaw?: string[];

      spouse?: string;
      spouses?: string[];

      children?: string[];
      grandchildren?: string[];

      fatherInLaw?: string;
      motherInLaw?: string;

      grandfathersInLaw?: string[];
      grandmothersInLaw?: string[];

      nephews?: string[];
      nieces?: string[];
    };
  };

  inLawRelationships?: Array<{
    personId: string;
    relationshipType: string;
    throughPersonId?: string;

    display: {
      si: {
        person: string;
        relationship: string;
        connection?: string;
      };

      en: {
        person: string;
        relationship: string;
        connection?: string;
      };
    };

    isBloodRelation: boolean;
    sourceStatus?: string;
  }>;

  childrenBySpouse?: Array<{
    spouseId: string;
    spouseName: LocalizedText;
    childIds: string[];

    childrenDisplay: {
      si: string[];
      en: string[];
    };

    sourceStatus?: string;
  }>;

  familyNotes?: {
    si: string[];
    en: string[];
  };

  birth?: {
    year?: number | null;
    calendar?: string;
    placeId?: string;
    display?: LocalizedText;
    dateStatus?: string;
  };

  death?: {
    year?: number | null;
    calendar?: string;
    placeId?: string;
    display?: LocalizedText;
    dateStatus?: string;
  };

  capital?: {
    id: string;
    name: LocalizedText;
    role?: LocalizedText;
  };

  capitals?: Array<{
    id: string;
    name: LocalizedText;
    role?: LocalizedText;
  }>;

  relatedInscriptions?: Array<{
    id: string;
    name: LocalizedText;
    importance: LocalizedText;
    sourceStatus?: string;
  }>;

  image?: {
    main: string;
    thumbnail?: string;
    alt: LocalizedText;
    caption?: LocalizedText;
    isReconstruction?: boolean;
  };

  summary?: LocalizedText;

  biography?: {
    si: BiographySection[];
    en: BiographySection[];
  };

  majorEvents?: Array<{
    id: string;
    order?: number;
    year?: number | null;
    type?: string;
    name: LocalizedText;
    description?: LocalizedText;
    sourceStatus?: string;
  }>;

  achievements?: Array<{
    id: string;
    title: LocalizedText;
  }>;

  constructions?: Array<{
    id: string;
    type?: string;
    name: LocalizedText;
    location?: LocalizedText;
    description?: LocalizedText;
    sourceStatus?: string;
  }>;

  foreignRelations?: Array<{
    countryId: string;
    countryName: LocalizedText;
    relationshipTypes?: string[];
    description?: LocalizedText;
  }>;

  examNotes?: {
    si: string[];
    en: string[];
  };

  essaySummary?: LocalizedText;

  sourceIds?: string[];

  sourceStatus?: {
    overall?: string;
    notes?: LocalizedText;
  };

  seo?: {
    title?: LocalizedText;
    description?: LocalizedText;
    keywords?: {
      si: string[];
      en: string[];
    };
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
