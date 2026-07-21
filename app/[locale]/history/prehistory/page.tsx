interface PrehistoryPageProps {
  params: Promise<{
    locale: "si" | "en";
  }>;
}

export default async function PrehistoryPage({
  params,
}: PrehistoryPageProps) {
  const { locale } = await params;

  return (
    <section className="min-h-screen bg-[#080808] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffad0a]">
          Ape Ithihasaya
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          {locale === "si" ? "ප්‍රාග් ඉතිහාසය" : "Prehistory"}
        </h1>
      </div>
    </section>
  );
}
