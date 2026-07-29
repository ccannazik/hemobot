export const INSTAGRAM = {
  profileUrl: "https://www.instagram.com/hemo.bot?igsh=NWtkdTNuYmhlNDls",
  handle: "@hemo.bot",
  description:
    "Follow @hemo.bot for hemophilia education, research updates, and community content.",
};

export interface InstagramPost {
  id: string;
  /** Replace with actual post image URL when available */
  imageUrl: string | null;
  caption: string;
  date?: string;
  /** Replace with direct post URL when available */
  postUrl: string;
  isPlaceholder: boolean;
}

/**
 * Placeholder post data — replace imageUrl and postUrl with real Instagram post assets.
 */
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    imageUrl: null,
    caption:
      "[Placeholder] Educational post about understanding hemophilia basics — replace with actual caption.",
    date: "Featured",
    postUrl: INSTAGRAM.profileUrl,
    isPlaceholder: true,
  },
  {
    id: "post-2",
    imageUrl: null,
    caption:
      "[Placeholder] Research update on hemophilia treatment developments — replace with actual caption.",
    date: "Featured",
    postUrl: INSTAGRAM.profileUrl,
    isPlaceholder: true,
  },
  {
    id: "post-3",
    imageUrl: null,
    caption:
      "[Placeholder] Community and awareness content — replace with actual caption.",
    date: "Featured",
    postUrl: INSTAGRAM.profileUrl,
    isPlaceholder: true,
  },
  {
    id: "post-4",
    imageUrl: null,
    caption:
      "[Placeholder] Link to HemoBot resources and educational materials — replace with actual caption.",
    date: "Featured",
    postUrl: INSTAGRAM.profileUrl,
    isPlaceholder: true,
  },
];
