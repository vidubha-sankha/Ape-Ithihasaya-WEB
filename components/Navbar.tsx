import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "@/components/LanguageSwitcher";

type Locale = "si" | "en";

type NavbarProps = {
  locale: Locale;
};

type MenuItem = {
  label: string;
  href: string;
};

export default function Navbar({ locale }: NavbarProps) {
  const isSinhala = locale === "si";

  const historyItems: MenuItem[] = [
    {
      label: isSinhala ? "ප්‍රාග් ඉතිහාසය" : "Prehistoric Sri Lanka",
      href: `/${locale}/prehistory`,
    },
    {
      label: isSinhala ? "බලංගොඩ මානවයා" : "Balangoda Man",
      href: `/${locale}/prehistory/balangoda-man`,
    },
    {
      label: isSinhala ? "පුරාවෘත්ත" : "Mythology",
      href: `/${locale}/mythology`,
    },
    {
      label: isSinhala ? "පැරණි ශ්‍රී ලංකාව" : "Ancient Sri Lanka",
      href: `/${locale}/history/ancient-sri-lanka`,
    },
    {
      label: isSinhala ? "අනුරාධපුර යුගය" : "Anuradhapura Period",
      href: `/${locale}/history/anuradhapura`,
    },
    {
      label: isSinhala ? "පොළොන්නරු යුගය" : "Polonnaruwa Period",
      href: `/${locale}/history/polonnaruwa`,
    },
    {
      label: isSinhala ? "යටත් විජිත යුගය" : "Colonial Period",
      href: `/${locale}/history/colonial`,
    },
  ];

  const kingItems: MenuItem[] = [
    {
      label: isSinhala ? "සියලු රජවරු" : "All Kings",
      href: `/${locale}/kings`,
    },
    {
      label: isSinhala ? "රැජිනියන්" : "Queens",
      href: `/${locale}/queens`,
    },
    {
      label: isSinhala ? "රාජ වංශ" : "Dynasties",
      href: `/${locale}/dynasties`,
    },
    {
      label: isSinhala ? "රාජකීය පවුල් ගස්" : "Royal Family Trees",
      href: `/${locale}/family-trees`,
    },
    {
      label: isSinhala ? "රාජ කාලරේඛාව" : "King Timeline",
      href: `/${locale}/timeline/kings`,
    },
  ];

  const kingdomItems: MenuItem[] = [
    {
      label: isSinhala ? "අනුරාධපුරය" : "Anuradhapura",
      href: `/${locale}/kingdoms/anuradhapura`,
    },
    {
      label: isSinhala ? "පොළොන්නරුව" : "Polonnaruwa",
      href: `/${locale}/kingdoms/polonnaruwa`,
    },
    {
      label: isSinhala ? "දඹදෙණිය" : "Dambadeniya",
      href: `/${locale}/kingdoms/dambadeniya`,
    },
    {
      label: isSinhala ? "යාපහුව" : "Yapahuwa",
      href: `/${locale}/kingdoms/yapahuwa`,
    },
    {
      label: isSinhala ? "කුරුණෑගල" : "Kurunegala",
      href: `/${locale}/kingdoms/kurunegala`,
    },
    {
      label: isSinhala ? "ගම්පොළ" : "Gampola",
      href: `/${locale}/kingdoms/gampola`,
    },
    {
      label: isSinhala ? "කෝට්ටේ" : "Kotte",
      href: `/${locale}/kingdoms/kotte`,
    },
    {
      label: isSinhala ? "සීතාවක" : "Sitawaka",
      href: `/${locale}/kingdoms/sitawaka`,
    },
    {
      label: isSinhala ? "මහනුවර" : "Kandy",
      href: `/${locale}/kingdoms/kandy`,
    },
  ];

  const heritageItems: MenuItem[] = [
    {
      label: isSinhala ? "විහාරස්ථාන" : "Temples",
      href: `/${locale}/heritage/temples`,
    },
    {
      label: isSinhala ? "දාගැබ්" : "Stupas",
      href: `/${locale}/heritage/stupas`,
    },
    {
      label: isSinhala ? "පැරණි නගර" : "Ancient Cities",
      href: `/${locale}/heritage/ancient-cities`,
    },
    {
      label: isSinhala ? "වැව් සහ වාරිමාර්ග" : "Reservoirs",
      href: `/${locale}/heritage/reservoirs`,
    },
    {
      label: isSinhala ? "ශිලා ලේඛන" : "Inscriptions",
      href: `/${locale}/heritage/inscriptions`,
    },
    {
      label: isSinhala ? "පුරාවිද්‍යාව" : "Archaeology",
      href: `/${locale}/archaeology`,
    },
    {
      label: isSinhala ? "ලෝක උරුම ස්ථාන" : "UNESCO Sites",
      href: `/${locale}/heritage/unesco`,
    },
  ];

  const learnItems: MenuItem[] = [
    {
      label: isSinhala ? "කාලරේඛාව" : "Timeline",
      href: `/${locale}/timeline`,
    },
    {
      label: isSinhala ? "සටන්" : "Battles",
      href: `/${locale}/battles`,
    },
    {
      label: isSinhala ? "සිතියම්" : "Maps",
      href: `/${locale}/maps`,
    },
    {
      label: isSinhala ? "ලිපි" : "Articles",
      href: `/${locale}/articles`,
    },
    {
      label: isSinhala ? "පර්යේෂණ" : "Research",
      href: `/${locale}/research`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/30 bg-black/95 text-white shadow-xl backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4">
        {/* Left side */}
        <div className="flex justify-start">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Ape Ithihasaya Logo"
              width={40}
              height={40}
              priority
              className="rounded-md object-contain"
            />

            <span className="whitespace-nowrap text-lg font-bold tracking-wide text-amber-400 xl:text-xl">
              {isSinhala ? "අපේ ඉතිහාසය" : "Ape Ithihasaya"}
            </span>
          </Link>
        </div>

        {/* Center navigation */}
        <nav className="hidden items-center justify-center gap-0 lg:flex">
          <NavLink
            href={`/${locale}`}
            label={isSinhala ? "මුල් පිටුව" : "Home"}
          />

          <MegaMenu
            label={isSinhala ? "ඉතිහාසය" : "History"}
            items={historyItems}
          />

          <MegaMenu
            label={isSinhala ? "රජවරු" : "Kings"}
            items={kingItems}
          />

          <MegaMenu
            label={isSinhala ? "රාජධානි" : "Kingdoms"}
            items={kingdomItems}
          />

          <MegaMenu
            label={isSinhala ? "උරුමය" : "Heritage"}
            items={heritageItems}
          />

          <MegaMenu
            label={isSinhala ? "ඉගෙනගන්න" : "Learn"}
            items={learnItems}
          />

          <NavLink
            href={`/${locale}/about`}
            label={isSinhala ? "අප ගැන" : "About"}
          />
        </nav>

        {/* Right side */}
        <div className="flex justify-end">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>

      <MobileNavigation locale={locale} />
    </header>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-stone-200 transition duration-300 hover:bg-amber-500 hover:text-black"
    >
      {label}
    </Link>
  );
}

function MegaMenu({
  label,
  items,
}: {
  label: string;
  items: MenuItem[];
}) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-stone-200 transition duration-300 hover:bg-amber-500 hover:text-black">
        {label}

        <span className="ml-2 inline-block transition-transform duration-300 group-open:rotate-180">
          ▾
        </span>
      </summary>

      <div className="absolute left-1/2 top-full z-50 mt-3 grid min-w-72 -translate-x-1/2 gap-1 rounded-2xl border border-amber-500/25 bg-stone-950 p-3 shadow-2xl">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="rounded-xl px-4 py-3 text-sm text-stone-300 transition duration-300 hover:bg-amber-500 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function MobileNavigation({ locale }: { locale: Locale }) {
  const isSinhala = locale === "si";

  const mobileLinks: MenuItem[] = [
    {
      label: isSinhala ? "මුල් පිටුව" : "Home",
      href: `/${locale}`,
    },
    {
      label: isSinhala ? "ඉතිහාසය" : "History",
      href: `/${locale}/history`,
    },
    {
      label: isSinhala ? "රජවරු" : "Kings",
      href: `/${locale}/kings`,
    },
    {
      label: isSinhala ? "රාජධානි" : "Kingdoms",
      href: `/${locale}/kingdoms`,
    },
    {
      label: isSinhala ? "උරුමය" : "Heritage",
      href: `/${locale}/heritage`,
    },
    {
      label: isSinhala ? "කාලරේඛාව" : "Timeline",
      href: `/${locale}/timeline`,
    },
    {
      label: isSinhala ? "ලිපි" : "Articles",
      href: `/${locale}/articles`,
    },
    {
      label: isSinhala ? "අප ගැන" : "About",
      href: `/${locale}/about`,
    },
  ];

  return (
    <details className="border-t border-stone-800 px-6 py-3 lg:hidden">
      <summary className="cursor-pointer list-none font-semibold text-amber-400">
        ☰ {isSinhala ? "ප්‍රධාන මෙනුව" : "Main Menu"}
      </summary>

      <nav className="mt-4 grid gap-2 pb-3">
        {mobileLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-stone-200 transition hover:bg-stone-800 hover:text-amber-400"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}