import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Sign in to comment" }, { status: 401 });
    }

    const { postId, content } = await request.json();

    if (!postId || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const comment = await prisma.forumComment.create({
      data: { postId, content, authorId: user.id },
      include: { author: { select: { name: true } } },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Comment error:", error);
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const postId = request.nextUrl.searchParams.get("postId");
  if (!postId) {
    return NextResponse.json({ error: "postId required" }, { status: 400 });
  }

  const comments = await prisma.forumComment.findMany({
    where: { postId, hidden: false, removed: false },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json(comments);
}
