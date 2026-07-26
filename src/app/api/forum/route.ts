import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  const search = request.nextUrl.searchParams.get("search");

  const posts = await prisma.forumPost.findMany({
    where: {
      hidden: false,
      removed: false,
      ...(category && category !== "all" ? { category } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { content: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    include: {
      author: { select: { name: true, email: true } },
      _count: { select: { comments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, category, authorName, authorEmail } = await request.json();

    if (!title || !content || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { email: authorEmail || "anonymous@hemobot.local" },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: authorEmail || `guest-${Date.now()}@hemobot.local`,
          name: authorName || "Community Member",
        },
      });
    }

    const post = await prisma.forumPost.create({
      data: {
        title,
        content,
        category,
        authorId: user.id,
      },
      include: {
        author: { select: { name: true } },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Forum post error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
