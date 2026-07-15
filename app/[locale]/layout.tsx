import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Locale = "si" | "en";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const supportedLocales: Locale[] = ["si", "en"];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as Locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;

  return (
    <>
      <Navbar locale={safeLocale} />

      {children}

      <Footer locale={safeLocale} />
    </>
  );
}
