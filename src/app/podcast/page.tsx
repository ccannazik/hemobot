import type { Metadata } from "next";
import { SitePathGuide } from "@/components/SitePathGuide";
import { PagePathNav } from "@/components/PagePathNav";
import { YOUTUBE_PODCAST_VIDEO_ID, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Podcast",
  description: "HemoBot video and podcast content.",
};

export default function PodcastPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{SITE.name} Podcast</h1>

      <SitePathGuide currentHref="/podcast" className="mt-6" />

      <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_PODCAST_VIDEO_ID}`}
          title="HemoBot Podcast Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>

      <PagePathNav currentHref="/podcast" />
    </div>
  );
}
