import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Card } from "./Card";
import type { InstagramPost } from "@/data/instagram";

interface InstagramPostCardProps {
  post: InstagramPost;
}

export function InstagramPostCard({ post }: InstagramPostCardProps) {
  return (
    <Card hover className="flex flex-col h-full overflow-hidden !p-0">
      <div className="relative aspect-square bg-gradient-to-br from-primary-100 via-teal-50 to-primary-50">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.isPlaceholder ? "Placeholder Instagram post image" : post.caption.slice(0, 80)}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <Instagram className="h-10 w-10 text-primary-400" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-primary-600">
              Placeholder image
            </span>
            <span className="text-[10px] text-slate-500">Replace with post thumbnail URL</span>
          </div>
        )}
        {post.isPlaceholder && (
          <span className="absolute top-2 left-2 rounded-full bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-800">
            Placeholder
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {post.date && (
          <p className="text-xs text-slate-400 mb-1">{post.date}</p>
        )}
        <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">{post.caption}</p>
        <Link
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View Instagram post on ${post.isPlaceholder ? "HemoBot profile" : "Instagram"}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          View on Instagram
        </Link>
      </div>
    </Card>
  );
}
