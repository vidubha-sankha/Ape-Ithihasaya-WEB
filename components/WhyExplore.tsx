import Link from "next/link";

type Locale = "si" | "en";

type WhyExploreProps = {
  locale: Locale;
};

type ExploreCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function WhyExplore({ locale }: WhyExploreProps) {
  const isSinhala = locale === "si";

  const cards: ExploreCard[] = [
    {
      icon: "👑",
      title: isSinhala ? "ශ්‍රේෂ්ඨ රජවරු" : "Great Kings",
      description: isSinhala
        ? "විජය, පණ්ඩුකාභය, දුටුගැමුණු, වසභ සහ මහා පරාක්‍රමබාහු ඇතුළු ශ්‍රී ලංකාව හැඩගැස්වූ පාලකයන් පිළිබඳ ගවේෂණය කරන්න."
        : "Learn about the rulers who shaped Sri Lanka, from King Vijaya and Pandukabhaya to Dutugemunu, Vasabha and Parakramabahu the Great.",
      href: `/${locale}/kings`,
    },
    {
      icon: "🏰",
      title: isSinhala ? "පැරණි රාජධානි" : "Ancient Kingdoms",
      description: isSinhala
        ? "අනුරාධපුර, පොළොන්නරුව, දඹදෙණිය, යාපහුව, කෝට්ටේ, සීතාවක සහ මහනුවර රාජධානි ගවේෂණය කරන්න."
        : "Explore the rise and fall of Anuradhapura, Polonnaruwa, Yapahuwa, Dambadeniya, Kotte, Sitawaka and Kandy.",
      href: `/${locale}/kingdoms`,
    },
    {
      icon: "🛕",
      title: isSinhala ? "පූජනීය උරුමය" : "Sacred Heritage",
      description: isSinhala
        ? "පන්සල්, දාගැබ්, ආරාම, ගුහා විහාර සහ ලෝක උරුම ස්ථාන තුළින් බෞද්ධ ශිෂ්ටාචාරය ගවේෂණය කරන්න."
        : "Discover temples, stupas, monasteries, cave temples and World Heritage Sites preserving centuries of Buddhist civilization.",
      href: `/${locale}/heritage`,
    },
    {
      icon: "💧",
      title: isSinhala ? "පැරණි ඉංජිනේරු තාක්ෂණය" : "Ancient Engineering",
      description: isSinhala
        ? "වැව්, ඇළ මාර්ග, වාරි ජාල, ගල් පාලම් සහ කාලයට වඩා ඉදිරියෙන් තිබූ පැරණි තාක්ෂණික නිර්මාණ බලන්න."
        : "Witness remarkable reservoirs, canals, irrigation networks, stone bridges and architectural achievements ahead of their time.",
      href: `/${locale}/heritage/reservoirs`,
    },
    {
      icon: "⚔️",
      title: isSinhala ? "ඓතිහාසික සටන්" : "Historic Battles",
      description: isSinhala
        ? "දිවයින ආරක්ෂා කළ සටන්, ශ්‍රේෂ්ඨ රජවරුන්ගේ යුද උපක්‍රම සහ ශ්‍රී ලංකාවේ ගමන්මග වෙනස් කළ සිදුවීම් හඳුනාගන්න."
        : "Experience the battles that protected the island, military strategies of great rulers and events that shaped Sri Lanka’s destiny.",
      href: `/${locale}/battles`,
    },
    {
      icon: "📜",
      title: isSinhala ? "විශ්වාසදායක දැනුම" : "Authentic Knowledge",
      description: isSinhala
        ? "වංශකතා, පුරාවිද්‍යා සොයාගැනීම්, ශිලා ලේඛන සහ විශ්වාසදායක ශාස්ත්‍රීය මූලාශ්‍ර මත පදනම් වූ ලිපි කියවන්න."
        : "Read carefully researched articles supported by chronicles, archaeological discoveries, inscriptions and trusted academic references.",
      href: `/${locale}/articles`,
    },
  ];

  return (
    <section
      id="why-explore"
      className="bg-[#f5f3ef] px-6 py-24 text-stone-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-700">
            {isSinhala ? "අපේ උරුමය ගවේෂණය කරන්න" : "Explore Our Heritage"}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {isSinhala
              ? "ශ්‍රී ලංකා ඉතිහාසය ගවේෂණය කළ යුත්තේ ඇයි?"
              : "Why Explore Lankan History?"}
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-stone-600">
            {isSinhala
              ? "ලෝකයේ පැරණිතම ශිෂ්ටාචාර අතරින් එකක අපූරු ගමන්මග සොයාගන්න. වසර 2,500කට වැඩි ශ්‍රී ලංකා ඉතිහාසය ශ්‍රේෂ්ඨ රජවරුන්, විශිෂ්ට රාජධානි, දියුණු වාරි පද්ධති, පැරණි විහාර සහ පරම්පරා ගණනාවක් ප්‍රබෝධමත් කළ සංස්කෘතික උරුමයකින් සමන්විතය."
              : "Discover the remarkable journey of one of the world’s oldest civilizations. Sri Lanka’s history spans over 2,500 years, filled with legendary kings, magnificent kingdoms, advanced irrigation systems, ancient temples and a rich cultural heritage that continues to inspire generations."}
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-amber-500 hover:shadow-[0_20px_55px_rgba(217,119,6,0.18)]"
            >
              <span
                aria-hidden="true"
                className="text-4xl transition duration-300 group-hover:scale-110"
              >
                {card.icon}
              </span>

              <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>

              <p className="mt-4 leading-8 text-stone-600">
                {card.description}
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-amber-700">
                {isSinhala ? "ගවේෂණය කරන්න" : "Explore"}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}