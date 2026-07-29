import { InstagramPostCard } from "@/components/InstagramPostCard";
import { INSTAGRAM, INSTAGRAM_POSTS } from "@/data/instagram";

export function InstagramPostsSection() {
  return (
    <section className="mt-16" aria-labelledby="instagram-posts-heading">
      <h2 id="instagram-posts-heading" className="text-2xl font-bold text-slate-900">
        Follow HemoBot on Instagram
      </h2>
      <p className="mt-2 text-sm text-slate-600">{INSTAGRAM.description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INSTAGRAM_POSTS.map((post) => (
          <InstagramPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
