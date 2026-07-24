"use client";

import { useEffect, useState } from "react";
import { Heart, MessageCircle, Flag, Search, Plus, X } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { ForumDisclaimer } from "./Disclaimer";
import { forumCategories } from "@/data/knowledge";

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

export function CommunityForum() {
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
    category: forumCategories[0],
    authorName: "",
  });

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
    setForm({ title: "", content: "", category: forumCategories[0], authorName: "" });
    loadPosts();
  }

  async function likePost(id: string) {
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
  }

  return (
    <div className="space-y-6">
      <ForumDisclaimer />

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm"
          />
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            category === "all" ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600"
          }`}
        >
          All
        </button>
        {forumCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              category === cat ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {showCreate && (
        <Card>
          <form onSubmit={createPost} className="space-y-4">
            <h3 className="font-semibold text-lg">Create a Post</h3>
            <input
              type="text"
              placeholder="Your name (optional)"
              value={form.authorName}
              onChange={(e) => setForm({ ...form, authorName: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
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
              {forumCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
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
              <Button type="button" variant="ghost" onClick={() => setShowCreate(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {selectedPost ? (
        <Card>
          <button
            type="button"
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4"
          >
            <X className="h-4 w-4" /> Back to posts
          </button>
          <span className="text-xs font-medium text-primary-600">{selectedPost.category}</span>
          <h2 className="text-xl font-bold mt-1">{selectedPost.title}</h2>
          <p className="text-sm text-slate-500 mt-1">
            by {selectedPost.author.name || "Community Member"} ·{" "}
            {new Date(selectedPost.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-wrap">
            {selectedPost.content}
          </p>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <h3 className="font-semibold mb-4">Comments ({comments.length})</h3>
            <div className="space-y-3 mb-4">
              {comments.map((c) => (
                <div key={c.id} className="rounded-lg bg-slate-50 p-3 text-sm">
                  <p className="font-medium text-slate-700">{c.author.name || "Member"}</p>
                  <p className="text-slate-600 mt-1">{c.content}</p>
                </div>
              ))}
            </div>
            <form onSubmit={submitComment} className="flex gap-2">
              <input
                type="text"
                placeholder="Write a reply…"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <Button type="submit">Reply</Button>
            </form>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.length === 0 && (
            <p className="text-center text-slate-500 py-12">
              No posts yet. Be the first to share!
            </p>
          )}
          {posts.map((post) => (
            <Card key={post.id} hover>
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
                <span className="text-xs font-medium text-primary-600">{post.category}</span>
                <h3 className="font-semibold text-slate-900 mt-1">{post.title}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{post.content}</p>
                <p className="text-xs text-slate-400 mt-2">
                  {post.author.name || "Community Member"} ·{" "}
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => likePost(post.id)}
                  className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500"
                >
                  <Heart className="h-4 w-4" /> {post.likes}
                </button>
                <button
                  type="button"
                  onClick={() => openPost(post)}
                  className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary-600"
                >
                  <MessageCircle className="h-4 w-4" /> {post._count.comments}
                </button>
                <button
                  type="button"
                  onClick={() => reportPost(post.id)}
                  className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-600 ml-auto"
                >
                  <Flag className="h-4 w-4" /> Report
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
