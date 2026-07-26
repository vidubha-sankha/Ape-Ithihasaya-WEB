import historyCategoriesData from "@/data/history-categories.json";

export type Locale = "si" | "en";

export type HistoryCategory = {
  id: string;
  order: number;
  slug: string;
  name: {
    en: string;
    si: string;
  };
  type: string;
  evidenceLevel: string;
};

export function getHistoryCategories(): HistoryCategory[] {
  return (historyCategoriesData as HistoryCategory[]).sort(
    (a, b) => a.order - b.order
  );
}

export function getHistoryCategoryBySlug(slug: string): HistoryCategory | undefined {
  return (historyCategoriesData as HistoryCategory[]).find(
    (category) => category.slug === slug
  );
}
