"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Locale = "si" | "en";

interface NavbarProps {
  locale: Locale;
}

interface MenuLink {
  id: string;
  label: {
    si: string;
    en: string;
  };
  href: string;
}

const historyMainLinks: MenuLink[] = [
  {
    id: "overview",
    label: {
      si: "ඉතිහාස හැඳින්වීම",
      en: "History Overview",
    },
    href: "/history",
  },
  {
    id: "timeline",
    label: {
      si: "සම්පූර්ණ කාලරේඛාව",
      en: "Complete Timeline",
    },
    href: "/history/timeline",
  },
  {
    id: "prehistory",
    label: {
      si: "ප්‍රාග් ඉතිහාසය",
      en: "Prehistory",
    },
    href: "/history/prehistory",
  },
  {
    id: "early-traditional-age",
    label: {
      si: "පූර්ව සම්ප්‍රදායික යුගය",
      en: "Early Traditional Age",
    },
    href: "/history/early-traditional-age",
  },
  {
    id: "chronological-gap",
    label: {
      si: "කාලානුක්‍රමික පරතරය",
      en: "Chronological Gap",
    },
    href: "/history/chronological-gap",
  },
  {
    id: "early-historical-period",
    label: {
      si: "මුල් ඓතිහාසික යුගය",
      en: "Early Historical Period",
    },
    href: "/history/early-historical-period",
  },
];

const kingdomLinks: MenuLink[] = [
  {
    id: "tambapanni",
    label: {
      si: "තම්බපණ්ණි රාජධානිය",
      en: "Tambapanni Kingdom",
    },
    href: "/kingdoms/tambapanni",
  },
  {
    id: "anuradhapura",
    label: {
      si: "අනුරාධපුර රාජධානිය",
      en: "Anuradhapura Kingdom",
    },
    href: "/kingdoms/anuradhapura",
  },
  {
    id: "polonnaruwa",
    label: {
      si: "පොළොන්නරුව රාජධානිය",
      en: "Polonnaruwa Kingdom",
    },
    href: "/kingdoms/polonnaruwa",
  },
  {
    id: "dambadeniya",
    label: {
      si: "දඹදෙණිය රාජධානිය",
      en: "Dambadeniya Kingdom",
    },
    href: "/kingdoms/dambadeniya",
  },
  {
    id: "yapahuwa",
    label: {
      si: "යාපහුව රාජධානිය",
      en: "Yapahuwa Kingdom",
    },
    href: "/kingdoms/yapahuwa",
  },
  {
    id: "kurunegala",
    label: {
      si: "කුරුණෑගල රාජධානිය",
      en: "Kurunegala Kingdom",
    },
    href: "/kingdoms/kurunegala",
  },
  {
    id: "gampola",
    label: {
      si: "ගම්පොළ රාජධානිය",
      en: "Gampola Kingdom",
    },
    href: "/kingdoms/gampola",
  },
  {
    id: "kotte",
    label: {
      si: "කෝට්ටේ රාජධානිය",
      en: "Kotte Kingdom",
    },
    href: "/kingdoms/kotte",
  },
  {
    id: "jaffna",
    label: {
      si: "යාපනය රාජධානිය",
      en: "Kingdom of Jaffna",
    },
    href: "/kingdoms/jaffna",
  },
  {
    id: "raigama",
    label: {
      si: "රයිගම රාජධානිය",
      en: "Kingdom of Raigama",
    },
    href: "/kingdoms/raigama",
  },
  {
    id: "sitawaka",
    label: {
      si: "සීතාවක රාජධානිය",
      en: "Kingdom of Sitawaka",
    },
    href: "/kingdoms/sitawaka",
  },
  {
    id: "kandy",
    label: {
      si: "මහනුවර රාජධානිය",
      en: "Kingdom of Kandy",
    },
    href: "/kingdoms/kandy",
  },
];

const regionLinks: MenuLink[] = [
  {
    id: "ruhuna",
    label: {
      si: "රුහුණ",
      en: "Ruhuna",
    },
    href: "/regions/ruhuna",
  },
  {
    id: "rajarata",
    label: {
      si: "රජරට",
      en: "Rajarata",
    },
    href: "/regions/rajarata",
  },
  {
    id: "maya-rata",
    label: {
      si: "මායා රට",
      en: "Maya Rata",
    },
    href: "/regions/maya-rata",
  },
  {
    id: "malaya-rata",
    label: {
      si: "මලය රට",
      en: "Malaya Rata",
    },
    href: "/regions/malaya-rata",
  },
];

const colonialLinks: MenuLink[] = [
  {
    id: "portuguese-period",
    label: {
      si: "පෘතුගීසි යුගය",
      en: "Portuguese Period",
    },
    href: "/history/portuguese-period",
  },
  {
    id: "dutch-period",
    label: {
      si: "ලන්දේසි යුගය",
      en: "Dutch Period",
    },
    href: "/history/dutch-period",
  },
  {
    id: "british-period",
    label: {
      si: "බ්‍රිතාන්‍ය යුගය",
      en: "British Period",
    },
    href: "/history/british-period",
  },
];

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();

  const [historyOpen, setHistoryOpen] = useState(false);
  const [kingdomsOpen, setKingdomsOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [colonialOpen, setColonialOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const text = {
    home: locale === "si" ? "මුල් පිටුව" : "Home",
    history: locale === "si" ? "ඉතිහාසය" : "History",
    kingdoms: locale === "si" ? "රාජධානි" : "Kingdoms",
    regions: locale === "si" ? "ඓතිහාසික ප්‍රදේශ" : "Historical Regions",
    colonial: locale === "si" ? "යටත්විජිත යුගය" : "Colonial Period",
    modern: locale === "si" ? "නූතන ශ්‍රී ලංකාව" : "Modern Sri Lanka",
    people: locale === "si" ? "පුද්ගලයන්" : "People",
    articles: locale === "si" ? "ලිපි" : "Articles",
    language: locale === "si" ? "English" : "සිංහල",
    historyOverview:
      locale === "si" ? "ඉතිහාස හැඳින්වීම" : "History Overview",
    brandTitle: locale === "si" ? "අපේ ඉතිහාසය" : "Ape Ithihasaya",
    brandSubtitle:
      locale === "si"
        ? "ශ්‍රී ලංකාවේ අභිමානය ගවේෂණය කරන්න"
        : "Discover the Glory of Sri Lanka",
  };

  const localizedHref = (href: string) => `/${locale}${href}`;

  const switchLocaleHref = () => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return locale === "si" ? "/en" : "/si";
    }

    segments[0] = locale === "si" ? "en" : "si";

    return `/${segments.join("/")}`;
  };

  const isActive = (href: string) => {
    const completeHref = localizedHref(href);

    if (href === "/history") {
      return pathname === completeHref;
    }

    return (
      pathname === completeHref ||
      pathname.startsWith(`${completeHref}/`)
    );
  };

  const isHistoryActive =
    pathname.startsWith(`/${locale}/history`) ||
    pathname.startsWith(`/${locale}/kingdoms`) ||
    pathname.startsWith(`/${locale}/regions`);

  const closeAllMenus = () => {
    setHistoryOpen(false);
    setKingdomsOpen(false);
    setRegionsOpen(false);
    setColonialOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setHistoryOpen(false);
        setKingdomsOpen(false);
        setRegionsOpen(false);
        setColonialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#4d3300] bg-black text-white">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
          onClick={closeAllMenus}
        >
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#d99700] bg-[#171100]">
            <Image
              src="/logo.png"
              alt={text.brandTitle}
              width={44}
              height={44}
              className="h-full w-full object-cover p-0.5"
              priority
            />
          </div>

          <div>
            <p className="font-serif text-lg font-bold text-[#ffad0a]">
              {text.brandTitle}
            </p>

            <p className="hidden text-xs text-zinc-400 sm:block">
              {text.brandSubtitle}
            </p>
          </div>
        </Link>

        <nav
          ref={dropdownRef}
          className="hidden items-center gap-2 lg:flex"
        >
          <Link
            href={`/${locale}`}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${pathname === `/${locale}`
                ? "bg-[#ff9d00] text-black"
                : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
              }`}
          >
            {text.home}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setHistoryOpen((previous) => !previous);
                setKingdomsOpen(false);
                setRegionsOpen(false);
                setColonialOpen(false);
              }}
              aria-expanded={historyOpen}
              aria-haspopup="true"
              className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${isHistoryActive
                  ? "bg-[#ff9d00] text-black"
                  : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                }`}
            >
              {text.history}

              <span
                className={`text-xs transition-transform ${historyOpen ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>

            {historyOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[360px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#6b4600] bg-[#090909] p-3 shadow-2xl shadow-black/70">
                {historyMainLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={localizedHref(item.href)}
                    onClick={closeAllMenus}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${isActive(item.href)
                        ? "bg-[#ff9d00] font-semibold text-black"
                        : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                      }`}
                  >
                    {item.label[locale]}
                  </Link>
                ))}

                <div className="my-2 border-t border-zinc-800" />

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setKingdomsOpen((previous) => !previous);
                      setRegionsOpen(false);
                      setColonialOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${pathname.startsWith(`/${locale}/kingdoms`)
                        ? "bg-[#ff9d00] font-semibold text-black"
                        : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                      }`}
                  >
                    <span>{text.kingdoms}</span>
                    <span>{kingdomsOpen ? "▲" : "▼"}</span>
                  </button>

                  {kingdomsOpen && (
                    <div className="mt-2 max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-black p-2">
                      <Link
                        href={localizedHref("/kingdoms")}
                        onClick={closeAllMenus}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#ffad0a] hover:bg-zinc-900"
                      >
                        {locale === "si"
                          ? "සියලුම රාජධානි"
                          : "All Kingdoms"}
                      </Link>

                      {kingdomLinks.map((item) => (
                        <Link
                          key={item.id}
                          href={localizedHref(item.href)}
                          onClick={closeAllMenus}
                          className={`block rounded-lg px-3 py-2 text-sm transition ${isActive(item.href)
                              ? "bg-[#ff9d00] font-semibold text-black"
                              : "text-zinc-300 hover:bg-zinc-900 hover:text-[#ffad0a]"
                            }`}
                        >
                          {item.label[locale]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setRegionsOpen((previous) => !previous);
                      setKingdomsOpen(false);
                      setColonialOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${pathname.startsWith(`/${locale}/regions`)
                        ? "bg-[#ff9d00] font-semibold text-black"
                        : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                      }`}
                  >
                    <span>{text.regions}</span>
                    <span>{regionsOpen ? "▲" : "▼"}</span>
                  </button>

                  {regionsOpen && (
                    <div className="mt-2 rounded-xl border border-zinc-800 bg-black p-2">
                      <Link
                        href={localizedHref("/regions")}
                        onClick={closeAllMenus}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#ffad0a] hover:bg-zinc-900"
                      >
                        {locale === "si"
                          ? "සියලුම ඓතිහාසික ප්‍රදේශ"
                          : "All Historical Regions"}
                      </Link>

                      {regionLinks.map((item) => (
                        <Link
                          key={item.id}
                          href={localizedHref(item.href)}
                          onClick={closeAllMenus}
                          className={`block rounded-lg px-3 py-2 text-sm transition ${isActive(item.href)
                              ? "bg-[#ff9d00] font-semibold text-black"
                              : "text-zinc-300 hover:bg-zinc-900 hover:text-[#ffad0a]"
                            }`}
                        >
                          {item.label[locale]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setColonialOpen((previous) => !previous);
                      setKingdomsOpen(false);
                      setRegionsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${colonialLinks.some((item) => isActive(item.href))
                        ? "bg-[#ff9d00] font-semibold text-black"
                        : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                      }`}
                  >
                    <span>{text.colonial}</span>
                    <span>{colonialOpen ? "▲" : "▼"}</span>
                  </button>

                  {colonialOpen && (
                    <div className="mt-2 rounded-xl border border-zinc-800 bg-black p-2">
                      {colonialLinks.map((item) => (
                        <Link
                          key={item.id}
                          href={localizedHref(item.href)}
                          onClick={closeAllMenus}
                          className={`block rounded-lg px-3 py-2 text-sm transition ${isActive(item.href)
                              ? "bg-[#ff9d00] font-semibold text-black"
                              : "text-zinc-300 hover:bg-zinc-900 hover:text-[#ffad0a]"
                            }`}
                        >
                          {item.label[locale]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={localizedHref("/history/modern-sri-lanka")}
                  onClick={closeAllMenus}
                  className={`mt-1 block rounded-xl px-4 py-3 text-sm transition ${isActive("/history/modern-sri-lanka")
                      ? "bg-[#ff9d00] font-semibold text-black"
                      : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
                    }`}
                >
                  {text.modern}
                </Link>
              </div>
            )}
          </div>

          <Link
            href={localizedHref("/people")}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${pathname.startsWith(`/${locale}/people`)
                ? "bg-[#ff9d00] text-black"
                : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
              }`}
          >
            {text.people}
          </Link>

          <Link
            href={localizedHref("/articles")}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${pathname.startsWith(`/${locale}/articles`)
                ? "bg-[#ff9d00] text-black"
                : "text-zinc-200 hover:bg-zinc-900 hover:text-[#ffad0a]"
              }`}
          >
            {text.articles}
          </Link>

          <Link
            href={switchLocaleHref()}
            className="ml-2 rounded-lg border border-[#ff9d00] px-4 py-2 text-sm font-semibold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
          >
            {text.language}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#6b4600] text-xl text-[#ffad0a] lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-[#4d3300] bg-black px-4 py-4 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            <Link
              href={`/${locale}`}
              onClick={closeAllMenus}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${pathname === `/${locale}`
                  ? "bg-[#ff9d00] text-black"
                  : "text-zinc-200 hover:bg-zinc-900"
                }`}
            >
              {text.home}
            </Link>

            <button
              type="button"
              onClick={() => setHistoryOpen((previous) => !previous)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold ${isHistoryActive
                  ? "bg-[#ff9d00] text-black"
                  : "text-zinc-200 hover:bg-zinc-900"
                }`}
            >
              <span>{text.history}</span>
              <span>{historyOpen ? "▲" : "▼"}</span>
            </button>

            {historyOpen && (
              <div className="space-y-1 rounded-xl border border-zinc-800 bg-[#090909] p-2">
                {historyMainLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={localizedHref(item.href)}
                    onClick={closeAllMenus}
                    className={`block rounded-lg px-4 py-3 text-sm ${isActive(item.href)
                        ? "bg-[#ff9d00] font-semibold text-black"
                        : "text-zinc-300 hover:bg-zinc-900"
                      }`}
                  >
                    {item.label[locale]}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setKingdomsOpen((previous) => !previous)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-zinc-200 hover:bg-zinc-900"
                >
                  <span>{text.kingdoms}</span>
                  <span>{kingdomsOpen ? "▲" : "▼"}</span>
                </button>

                {kingdomsOpen && (
                  <div className="ml-3 max-h-72 space-y-1 overflow-y-auto border-l border-[#6b4600] pl-3">
                    {kingdomLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={localizedHref(item.href)}
                        onClick={closeAllMenus}
                        className={`block rounded-lg px-3 py-2 text-sm ${isActive(item.href)
                            ? "bg-[#ff9d00] font-semibold text-black"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                          }`}
                      >
                        {item.label[locale]}
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setRegionsOpen((previous) => !previous)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-zinc-200 hover:bg-zinc-900"
                >
                  <span>{text.regions}</span>
                  <span>{regionsOpen ? "▲" : "▼"}</span>
                </button>

                {regionsOpen && (
                  <div className="ml-3 space-y-1 border-l border-[#6b4600] pl-3">
                    {regionLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={localizedHref(item.href)}
                        onClick={closeAllMenus}
                        className={`block rounded-lg px-3 py-2 text-sm ${isActive(item.href)
                            ? "bg-[#ff9d00] font-semibold text-black"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                          }`}
                      >
                        {item.label[locale]}
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setColonialOpen((previous) => !previous)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-zinc-200 hover:bg-zinc-900"
                >
                  <span>{text.colonial}</span>
                  <span>{colonialOpen ? "▲" : "▼"}</span>
                </button>

                {colonialOpen && (
                  <div className="ml-3 space-y-1 border-l border-[#6b4600] pl-3">
                    {colonialLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={localizedHref(item.href)}
                        onClick={closeAllMenus}
                        className={`block rounded-lg px-3 py-2 text-sm ${isActive(item.href)
                            ? "bg-[#ff9d00] font-semibold text-black"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                          }`}
                      >
                        {item.label[locale]}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href={localizedHref("/history/modern-sri-lanka")}
                  onClick={closeAllMenus}
                  className={`block rounded-lg px-4 py-3 text-sm ${isActive("/history/modern-sri-lanka")
                      ? "bg-[#ff9d00] font-semibold text-black"
                      : "text-zinc-300 hover:bg-zinc-900"
                    }`}
                >
                  {text.modern}
                </Link>
              </div>
            )}

            <Link
              href={localizedHref("/people")}
              onClick={closeAllMenus}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              {text.people}
            </Link>

            <Link
              href={localizedHref("/articles")}
              onClick={closeAllMenus}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              {text.articles}
            </Link>

            <Link
              href={switchLocaleHref()}
              onClick={closeAllMenus}
              className="block rounded-xl border border-[#ff9d00] px-4 py-3 text-center text-sm font-semibold text-[#ffad0a]"
            >
              {text.language}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

