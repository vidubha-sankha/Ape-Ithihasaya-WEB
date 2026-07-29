import type { KingData, Locale } from "@/lib/kings";

interface KingEventsProps {
  king: KingData;
  locale: Locale;
}

export default function KingEvents({
  king,
  locale,
}: KingEventsProps) {
  if (!king.majorEvents?.length) {
    return null;
  }

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-3xl font-bold">
          {locale === "si"
            ? "ප්රධාන සිදුවීම්"
            : "Major Events"}
        </h2>

        <div className="mt-8 space-y-4">
          {king.majorEvents.map((event) => (
            <article
              key={event.id}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <h3 className="font-bold">
                {event.name[locale]}
              </h3>

              {event.description && (
                <p className="mt-3 leading-7 text-zinc-600">
                  {event.description[locale]}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
