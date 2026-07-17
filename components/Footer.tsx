import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
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

  <div className="mt-5 flex items-center gap-4">
    <SocialLink
      href="https://www.facebook.com/YOUR_PAGE"
      label="Facebook"
      icon={<FaFacebookF />}
    />

    <SocialLink
      href="https://www.youtube.com/@ApeIthihasaya"
      label="YouTube"
      icon={<FaYoutube />}
    />

    <SocialLink
      href="https://www.tiktok.com/@apeithihasaya"
      label="TikTok"
      icon={<FaTiktok />}
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
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-700 bg-stone-900 text-xl text-amber-400 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
    >
      {icon}
    </a>
  );
}
