import { redirect } from "next/navigation";

interface TimelineRedirectProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function TimelineRedirect({ params }: TimelineRedirectProps) {
  const { locale } = await params;
  redirect(`/${locale}/history/timeline`);
}
