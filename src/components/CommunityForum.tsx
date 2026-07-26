"use client";

import Link from "next/link";
import { Loader2, Lock, ArrowUp, MessageCircle, Headphones } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { ForumDisclaimer } from "./Disclaimer";
import { useAuth } from "./AuthProvider";
import { COMMUNITY_CATEGORIES } from "@/data/site";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  createdAt: string;
  author: { name: string | null };
  _count: { comments: number };
}

interface Comment {
  id: string;
  content: string;
  author: { name: string | null };
  createdAt: string;
}

export function CommunityGate() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <Card className="text-center py-12">
        <Lock className="h-12 w-12 text-primary-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-slate-900">Sign in to join the conversation</h2>
        <p className="mt-3 text-slate-600 max-w-md mx-auto">
          Our community is a moderated space for families and individuals affected by hemophilia.
          Create a free account to read posts, upvote, and share your experience.
        </p>
        <Link href="/login?redirect=/community" className="inline-block mt-6">
          <Button size="lg">Create Free Account</Button>
        </Link>
      </Card>
    );
  }

  return <CommunityForum />;
}

function CommunityForum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: COMMUNITY_CATEGORIES[0],
  });
  const { user } = useAuth();

  async function loadPosts() {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (search) params.set("search", search);
    const res = await fetch(`/api/forum?${params}`);
    setPosts(await res.json());
  }

  useEffect(() => {
    loadPosts();
  }, [category, search]);

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/forum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowCreate(false);
    setForm({ title: "", content: "", category: COMMUNITY_CATEGORIES[0] });
    loadPosts();
  }

  async function upvotePost(id: string) {
    await fetch(`/api/forum/${id}`, { method: "POST" });
    loadPosts();
  }

  async function reportPost(id: string) {
    const reason = prompt("Why are you reporting this post?");
    if (reason) {
      await fetch("/api/forum/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: id, reason }),
      });
      alert("Report submitted. Our moderation team will review it.");
    }
  }

  async function openPost(post: Post) {
    setSelectedPost(post);
    const res = await fetch(`/api/forum/comments?postId=${post.id}`);
    setComments(await res.json());
  }

  async function submitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPost || !newComment.trim()) return;
    await fetch("/api/forum/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: selectedPost.id, content: newComment }),
    });
    setNewComment("");
    const res = await fetch(`/api/forum/comments?postId=${selectedPost.id}`);
    setComments(await res.json());
    loadPosts();
  }

  return (
    <div className="space-y-6">
      <ForumDisclaimer />

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-slate-600">
          Welcome back, <strong>{user?.name}</strong>
        </p>
        <div className="flex gap-2 text-sm">
          <Link href="/podcast" className="text-primary-600 hover:underline flex items-center gap-1">
            <Headphones className="h-4 w-4" /> Patient Stories Podcast
          </Link>
          <Link href="/assistant" className="text-primary-600 hover:underline flex items-center gap-1">
            <MessageCircle className="h-4 w-4" /> Ask HemoBot AI
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <input
          type="search"
          placeholder="Search discussions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md rounded-xl border border-slate-200 py-2.5 px-4 text-sm"
        />
        <Button onClick={() => setShowCreate(true)}>New Post</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {["all", ...COMMUNITY_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              category === cat ? "bg-primary-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-primary-300"
            }`}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>

      {showCreate && (
        <Card>
          <form onSubmit={createPost} className="space-y-4">
            <h3 className="font-semibold text-lg">Start a Discussion</h3>
            <input
              type="text"
              placeholder="Post title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              {COMMUNITY_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <textarea
              placeholder="Share your experience or question…"
              required
              rows={4}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
            <div className="flex gap-2">
              <Button type="submit">Post</Button>
              <Button type="button" variant="ghost" onClick={() => setShowCreate(false)}>Cancel</Button>
            </div>
          </form>
        </Card>
      )}

      {selectedPost ? (
        <Card>
          <button type="button" onClick={() => setSelectedPost(null)} className="text-sm text-slate-500 hover:text-slate-700 mb-4">
            ← Back to feed
          </button>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">{selectedPost.category}</span>
          <h2 className="text-xl font-bold mt-1">{selectedPost.title}</h2>
          <p className="text-sm text-slate-500 mt-1">
            u/{selectedPost.author.name || "member"} · {new Date(selectedPost.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedPost.content}</p>

          <div className="mt-4 flex gap-4 text-sm">
            <Link href="/treatments" className="text-primary-600 hover:underline">Related: Treatment Overview →</Link>
            <Link href="/podcast" className="text-primary-600 hover:underline">Listen: Patient Stories →</Link>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <h3 className="font-semibold mb-4">{comments.length} Comments</h3>
            <div className="space-y-3 mb-4">
              {comments.map((c) => (
                <div key={c.id} className="rounded-lg bg-slate-50 p-3 text-sm border-l-2 border-primary-200">
                  <p className="font-medium text-slate-700">{c.author.name || "Member"}</p>
                  <p className="text-slate-600 mt-1">{c.content}</p>
                </div>
              ))}
            </div>
            <form onSubmit={submitComment} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment…"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <Button type="submit">Reply</Button>
            </form>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} hover className="!p-0 overflow-hidden">
              <div className="flex">
                <div className="flex flex-col items-center gap-1 bg-slate-50 px-3 py-4 border-r border-slate-100 min-w-[52px]">
                  <button
                    type="button"
                    onClick={() => upvotePost(post.id)}
                    className="text-slate-400 hover:text-primary-600 transition-colors"
                    aria-label="Upvote"
                  >
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <span className="text-sm font-bold text-slate-700">{post.likes}</span>
                </div>
                <div className="flex-1 p-4">
                  <div
                    role="button"
                    tabIndex={0}
                    className="cursor-pointer text-left w-full"
                    onClick={() => openPost(post)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPost(post);
                      }
                    }}
                  >
                    <span className="text-xs font-semibold text-primary-600">{post.category}</span>
                    <h3 className="font-semibold text-slate-900 mt-0.5 hover:text-primary-700">{post.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{post.content}</p>
                    <p className="text-xs text-slate-400 mt-2">
                      Posted by {post.author.name || "Community Member"} · {new Date(post.createdAt).toLocaleDateString()} · {post._count.comments} comments
                    </p>
                  </div>
                  <div className="flex gap-3 mt-3 pt-2 border-t border-slate-100">
                    <button type="button" onClick={() => openPost(post)} className="text-xs text-slate-500 hover:text-primary-600 flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" /> Comment
                    </button>
                    <button type="button" onClick={() => reportPost(post.id)} className="text-xs text-slate-400 hover:text-amber-600 ml-auto">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
