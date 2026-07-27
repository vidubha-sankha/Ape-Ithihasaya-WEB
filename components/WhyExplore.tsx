import Link from "next/link";
import { DynamicIcon } from "@/components/DynamicIcon";

type Locale = "si" | "en";

type WhyExploreProps = {
  locale: Locale;
};

type ExploreCard = {
  iconName: string;
  title: string;
  description: string;
  href: string;
};

export default function WhyExplore({ locale }: WhyExploreProps) {
  const isSinhala = locale === "si";

  const cards: ExploreCard[] = [
    {
      iconName: "crown",
      title: isSinhala ? "ශ්‍රේෂ්ඨ රජවරු" : "Great Kings",
      description: isSinhala
        ? "විජය, පණ්ඩුකාභය, දුටුගැමුණු, වසභ සහ මහා පරාක්‍රමබාහු ඇතුළු ශ්‍රී ලංකාව හැඩගැස්වූ පාලකයන් පිළිබඳ ගවේෂණය කරන්න."
        : "Learn about the rulers who shaped Sri Lanka, from King Vijaya and Pandukabhaya to Dutugemunu, Vasabha and Parakramabahu the Great.",
      href: `/${locale}/kings`,
    },
    {
      iconName: "castle",
      title: isSinhala ? "පැරණි රාජධානි" : "Ancient Kingdoms",
      description: isSinhala
        ? "අනුරාධපුර, පොළොන්නරුව, දඹදෙණිය, යාපහුව, කෝට්ටේ, සීතාවක සහ මහනුවර රාජධානි ගවේෂණය කරන්න."
        : "Explore the rise and fall of Anuradhapura, Polonnaruwa, Yapahuwa, Dambadeniya, Kotte, Sitawaka and Kandy.",
      href: `/${locale}/kingdoms`,
    },
    {
      iconName: "landmark",
      title: isSinhala ? "පූජනීය උරුමය" : "Sacred Heritage",
      description: isSinhala
        ? "පන්සල්, දාගැබ්, ආරාම, ගුහා විහාර සහ ලෝක උරුම ස්ථාන තුළින් බෞද්ධ ශිෂ්ටාචාරය ගවේෂණය කරන්න."
        : "Discover temples, stupas, monasteries, cave temples and World Heritage Sites preserving centuries of Buddhist civilization.",
      href: `/${locale}/heritage`,
    },
    {
      iconName: "building",
      title: isSinhala ? "පැරණි ඉංජිනේරු තාක්ෂණය" : "Ancient Engineering",
      description: isSinhala
        ? "වැව්, ඇළ මාර්ග, වාරි ජාල, ගල් පාලම් සහ කාලයට වඩා ඉදිරියෙන් තිබූ පැරණි තාක්ෂණික නිර්මාණ බලන්න."
        : "Witness remarkable reservoirs, canals, irrigation networks, stone bridges and architectural achievements ahead of their time.",
      href: `/${locale}/heritage/reservoirs`,
    },
    {
      iconName: "swords",
      title: isSinhala ? "ඓතිහාසික සටන්" : "Historic Battles",
      description: isSinhala
        ? "දිවයින ආරක්ෂා කළ සටන්, ශ්‍රේෂ්ඨ රජවරුන්ගේ යුද උපක්‍රම සහ ශ්‍රී ලංකාවේ ගමන්මග වෙනස් කළ සිදුවීම් හඳුනාගන්න."
        : "Experience the battles that protected the island, military strategies of great rulers and events that shaped Sri Lanka’s destiny.",
      href: `/${locale}/battles`,
    },
    {
      iconName: "scroll-text",
      title: isSinhala ? "වංශකථා සහ ලේඛන" : "Chronicles & Records",
      description: isSinhala
        ? "මහාවංශය, දීපවංශය, චූලවංශය, ශිලා ලේඛන සහ යටත්විජිත වාර්තා මඟින් ඉතිහාසය අධ්‍යයනය කරන්න."
        : "Study primary historical documents including the Mahavamsa, Dipavamsa, Culavamsa, Brahmi inscriptions and colonial records.",
      href: `/${locale}/documents`,
    },
  ];

  return (
    <section className="bg-stone-50 py-24 text-stone-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            {isSinhala ? "ගවේෂණය කරන්න" : "Explore"}
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
            {isSinhala ? "අපේ ඉතිහාසයේ ප්‍රධාන අංශ" : "Core Historical Categories"}
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            {isSinhala
              ? "ශ්‍රී ලංකාවේ දීර්ඝ ඉතිහාසය, පාලකයන්, රාජධානි, ආගමික උරුමයන් සහ තාක්ෂණික දියුණුව වෙන වෙනම අධ්‍යයනය කරන්න."
              : "Discover Sri Lanka's rich history through dedicated categories covering rulers, kingdoms, sacred heritage and ancient technology."}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-amber-500 hover:shadow-[0_20px_55px_rgba(217,119,6,0.18)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-800 transition duration-300 group-hover:bg-amber-500 group-hover:text-white">
                <DynamicIcon name={card.iconName} className="h-7 w-7" />
              </div>

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