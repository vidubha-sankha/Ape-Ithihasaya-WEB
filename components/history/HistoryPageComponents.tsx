import Link from "next/link";

export type Locale = "si" | "en";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#3d2900] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,0,0.15),transparent_62%)]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ffad0a]">
          {eyebrow}
        </p>

        <h1 className="mt-7 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 inline-flex rounded-full border border-[#765000] bg-[#100b00] px-5 py-2 text-sm font-semibold text-[#ffad0a]">
          {badge}
        </div>
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  icon: string;
  title: string;
  description?: string;
  centered?: boolean;
}

import { DynamicIcon } from "@/components/DynamicIcon";

export function SectionHeading({
  icon,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }
    >
      <div className={centered ? "flex justify-center" : ""}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#704900] bg-[#130d00] text-[#ffad0a]">
          <DynamicIcon name={icon} className="h-7 w-7 text-[#ffad0a]" />
        </div>
      </div>

      <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

interface InformationCardProps {
  icon: string;
  title: string;
  description: string;
}

export function InformationCard({
  icon,
  title,
  description,
}: InformationCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-900 bg-[#080808] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8b5c00]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#704900] bg-[#130d00] text-2xl transition group-hover:bg-[#ff9d00]">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>

      <p className="mt-4 leading-8 text-zinc-400">{description}</p>
    </article>
  );
}

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 rounded-2xl border border-zinc-900 bg-[#080808] p-5 text-zinc-300"
        >
          <span className="mt-1 text-[#ff9d00]">◆</span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface EvidenceNoticeProps {
  title: string;
  description: string;
  status: "archaeological" | "traditional" | "uncertain";
}

export function EvidenceNotice({
  title,
  description,
  status,
}: EvidenceNoticeProps) {
  const styles = {
    archaeological:
      "border-emerald-900/70 bg-emerald-950/20 text-emerald-300",
    traditional:
      "border-purple-900/70 bg-purple-950/20 text-purple-300",
    uncertain:
      "border-amber-900/70 bg-amber-950/20 text-amber-300",
  };

  return (
    <aside className={`rounded-3xl border p-7 sm:p-9 ${styles[status]}`}>
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-4 leading-8 text-zinc-300">{description}</p>
    </aside>
  );
}

interface NavigationButtonsProps {
  locale: Locale;
  previousHref?: string;
  previousLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export function NavigationButtons({
  locale,
  previousHref,
  previousLabel,
  nextHref,
  nextLabel,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col justify-between gap-4 border-t border-zinc-900 pt-10 sm:flex-row">
      {previousHref && previousLabel ? (
        <Link
          href={`/${locale}${previousHref}`}
          className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#7e5400] px-7 py-3 font-semibold text-[#ffad0a] transition hover:bg-[#ff9d00] hover:text-black"
        >
          ← {previousLabel}
        </Link>
      ) : (
        <div />
      )}

      {nextHref && nextLabel && (
        <Link
          href={`/${locale}${nextHref}`}
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff9d00] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffb42a]"
        >
          {nextLabel} →
        </Link>
      )}
    </div>
  );
}