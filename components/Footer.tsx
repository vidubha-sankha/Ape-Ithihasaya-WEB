import Link from "next/link";
import Image from "next/image";

type Locale = "si" | "en";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const isSinhala = locale === "si";

  return (
    <footer className="border-t border-amber-500/25 bg-black px-6 py-16 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
        <Image
            src="/logo.png"
            alt="Ape Ithihasaya Logo"
            width={120}
            height={80}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold text-amber-400">
            {isSinhala ? "අපේ ඉතිහාසය" : "Ape Ithihasaya"}
          </h2>

          <p className="mt-5 max-w-sm leading-7 text-stone-400">
            {isSinhala
              ? "ශ්‍රී ලංකාවේ පොහොසත් ඉතිහාසය සහ උරුමය අනාගත පරම්පරාවන් සඳහා සුරැකීම."
              : "Preserving the rich history of Sri Lanka for future generations."}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">
            {isSinhala ? "ගවේෂණය කරන්න" : "Explore"}
          </h3>

          <div className="mt-5 grid gap-3 text-sm">
            <Link href={`/${locale}/kings`} className="hover:text-amber-400">
              {isSinhala ? "රජවරු" : "Kings"}
            </Link>

            <Link href={`/${locale}/kingdoms`} className="hover:text-amber-400">
              {isSinhala ? "රාජධානි" : "Kingdoms"}
            </Link>

            <Link href={`/${locale}/heritage`} className="hover:text-amber-400">
              {isSinhala ? "උරුමය" : "Heritage"}
            </Link>

            <Link href={`/${locale}/timeline`} className="hover:text-amber-400">
              {isSinhala ? "කාලරේඛාව" : "Timeline"}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">
            {isSinhala ? "දැනුම" : "Knowledge"}
          </h3>

          <div className="mt-5 grid gap-3 text-sm">
            <Link href={`/${locale}/articles`} className="hover:text-amber-400">
              {isSinhala ? "ලිපි" : "Articles"}
            </Link>

            <Link href={`/${locale}/sources`} className="hover:text-amber-400">
              {isSinhala ? "මූලාශ්‍ර" : "Sources"}
            </Link>

            <Link href={`/${locale}/research`} className="hover:text-amber-400">
              {isSinhala ? "පර්යේෂණ" : "Research"}
            </Link>

            <Link href={`/${locale}/about`} className="hover:text-amber-400">
              {isSinhala ? "අප ගැන" : "About"}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">
            {isSinhala ? "අප සමඟ සම්බන්ධ වන්න" : "Follow Us"}
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            <SocialLink
              href="facebook.com/share/18V4nETiSk"
              label="Facebook"
              icon="f"
            />

            <SocialLink
              href="https://www.youtube.com/@ApeIthihasaya"
              label="YouTube"
              icon="▶"
            />

            <SocialLink
              href="https://www.tiktok.com/@apeithihasaya?_r=1&_t=ZS-94LhwW95l3p"
              label="TikTok"
              icon="♪"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-center gap-3 border-t border-stone-800 pt-8 text-center text-sm text-stone-500 md:flex-row">
  <p>© 2026 Vidubha Sankha. All rights reserved.</p>

  

  <p>
    {isSinhala
      ? "ශ්‍රී ලංකාවේ පොහොසත් ඉතිහාසය සුරකිමින්"
      : "Preserving the rich history of Sri Lanka"}
  </p>
</div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-700 bg-stone-900 font-bold text-amber-400 transition duration-300 hover:scale-110 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
    >
      {icon}
    </a>
  );
}
