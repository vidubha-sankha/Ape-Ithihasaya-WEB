import type { Metadata } from "next";
import { notFound } from "next/navigation";

import KingBiography from "@/components/kings/KingBiography";
import KingConstructions from "@/components/kings/KingConstructions";
import KingEvents from "@/components/kings/KingEvents";
import KingFamily from "@/components/kings/KingFamily";
import KingHero from "@/components/kings/KingHero";
import KingNavigation from "@/components/kings/KingNavigation";
import KingSources from "@/components/kings/KingSources";

import {
  getAllKingSlugs,
  getKingBySlug,
  type Locale,
} from "@/lib/kings";

interface KingPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  const slugs = getAllKingSlugs();

  return slugs.flatMap((slug) => [
    {
      locale: "si",
      slug,
    },
    {
      locale: "en",
      slug,
    },
  ]);
}

export async function generateMetadata({
  params,
}: KingPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (locale !== "si" && locale !== "en") {
    return {};
  }

  const king = getKingBySlug(slug);

  if (!king) {
    return {};
  }

  const activeLocale = locale as Locale;

  return {
    title:
      king.seo?.title?.[activeLocale] ??
      `${king.name[activeLocale]} | Ape Ithihasaya`,

    description:
      king.seo?.description?.[activeLocale] ??
      king.summary?.[activeLocale],
  };
}

export default async function KingPage({ params }: KingPageProps) {
  const { locale, slug } = await params;

  if (locale !== "si" && locale !== "en") {
    notFound();
  }

  const king = getKingBySlug(slug);

  if (!king) {
    notFound();
  }

  const activeLocale = locale as Locale;

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-black">
      <KingHero king={king} locale={activeLocale} />

      {king.biography?.[activeLocale]?.length ? (
        <KingBiography king={king} locale={activeLocale} />
      ) : null}

      {king.family || king.familyDisplay ? (
        <KingFamily king={king} locale={activeLocale} />
      ) : null}

      {king.constructions?.length ? (
        <KingConstructions king={king} locale={activeLocale} />
      ) : null}

      {king.majorEvents?.length ? (
        <KingEvents king={king} locale={activeLocale} />
      ) : null}

      {king.sourceIds?.length ? (
        <KingSources king={king} locale={activeLocale} />
      ) : null}

      <KingNavigation king={king} locale={activeLocale} />
    </main>
  );
}
