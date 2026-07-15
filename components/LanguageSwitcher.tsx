"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {
  locale: "si" | "en";
};

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(newLocale: "si" | "en") {
    const segments = pathname.split("/");

    if (segments[1] === "si" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    router.push(segments.join("/") || `/${newLocale}`);
  }

  return (
    <div className="flex items-center rounded-full border border-amber-500 bg-black/60 p-1 backdrop-blur">
      <button
        onClick={() => changeLanguage("si")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          locale === "si"
            ? "bg-amber-500 text-black"
            : "text-amber-400 hover:bg-white/10"
        }`}
      >
        සිංහල
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          locale === "en"
            ? "bg-amber-500 text-black"
            : "text-amber-400 hover:bg-white/10"
        }`}
      >
        English
      </button>
    </div>
  );
}