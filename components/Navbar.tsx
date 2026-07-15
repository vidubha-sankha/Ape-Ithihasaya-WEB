import Link from "next/link";

import LanguageSwitcher from "@/components/LanguageSwitcher";

type Locale = "si" | "en";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const isSinhala = locale === "si";

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/30 bg-black/95 text-white shadow-xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href={`/${locale}`} className="group">
          <p className="text-xl font-bold tracking-wide text-amber-400">
            {isSinhala ? "අපේ ඉතිහාසය" : "Ape Ithihasaya"}
          </p>

          <p className="mt-1 hidden text-xs text-stone-400 sm:block">
            {isSinhala
              ? "ශ්‍රී ලංකාවේ ඩිජිටල් ඉතිහාස වේදිකාව"
              : "Sri Lanka’s Digital History Platform"}
          </p>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-2 lg:flex">
            <NavLink href={`/${locale}`} label={isSinhala ? "මුල් පිටුව" : "Home"} />

            <MegaMenu
              label={isSinhala ? "ඉතිහාසය" : "History"}
              items={[
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
              ]}
            />

            <MegaMenu
              label={isSinhala ? "රජවරු" : "Kings"}
              items={[
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
              ]}
            />

            <MegaMenu
              label={isSinhala ? "රාජධානි" : "Kingdoms"}
              items={[
                "Anuradhapura",
                "Polonnaruwa",
                "Dambadeniya",
                "Yapahuwa",
                "Kurunegala",
                "Gampola",
                "Kotte",
                "Sitawaka",
                "Kandy",
              ].map((kingdom) => ({
                label: kingdom,
                href: `/${locale}/kingdoms/${kingdom.toLowerCase()}`,
              }))}
            />

            <MegaMenu
              label={isSinhala ? "උරුමය" : "Heritage"}
              items={[
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
                  label: "UNESCO Sites",
                  href: `/${locale}/heritage/unesco`,
                },
              ]}
            />

            <MegaMenu
              label={isSinhala ? "ඉගෙනගන්න" : "Learn"}
              items={[
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
              ]}
            />

            <NavLink
              href={`/${locale}/search`}
              label={isSinhala ? "සෙවීම" : "Search"}
            />
          </nav>

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
      className="rounded-full px-4 py-2 text-sm font-semibold text-stone-200 transition hover:bg-amber-500 hover:text-black"
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
  items: Array<{
    label: string;
    href: string;
  }>;
}) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-sm font-semibold text-stone-200 transition hover:bg-amber-500 hover:text-black">
        {label}
        <span className="ml-2 inline-block transition group-open:rotate-180">
          ▾
        </span>
      </summary>

      <div className="absolute left-0 top-full z-50 mt-3 grid min-w-72 gap-1 rounded-2xl border border-amber-500/25 bg-stone-950 p-3 shadow-2xl">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="rounded-xl px-4 py-3 text-sm text-stone-300 transition hover:bg-amber-500 hover:text-black"
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

  return (
    <details className="border-t border-stone-800 px-6 py-3 lg:hidden">
      <summary className="cursor-pointer list-none font-semibold text-amber-400">
        ☰ {isSinhala ? "ප්‍රධාන මෙනුව" : "Main Menu"}
      </summary>

      <div className="mt-4 grid gap-2 pb-3">
        <Link href={`/${locale}`} className="rounded-lg px-3 py-2 hover:bg-stone-800">
          {isSinhala ? "මුල් පිටුව" : "Home"}
        </Link>

        <Link
          href={`/${locale}/history`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "ඉතිහාසය" : "History"}
        </Link>

        <Link
          href={`/${locale}/kings`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "රජවරු" : "Kings"}
        </Link>

        <Link
          href={`/${locale}/kingdoms`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "රාජධානි" : "Kingdoms"}
        </Link>

        <Link
          href={`/${locale}/heritage`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "උරුමය" : "Heritage"}
        </Link>

        <Link
          href={`/${locale}/articles`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "ලිපි" : "Articles"}
        </Link>

        <Link
          href={`/${locale}/search`}
          className="rounded-lg px-3 py-2 hover:bg-stone-800"
        >
          {isSinhala ? "සෙවීම" : "Search"}
        </Link>
      </div>
    </details>
  );
}
