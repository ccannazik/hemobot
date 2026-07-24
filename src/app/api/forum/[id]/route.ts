import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const post = await prisma.forumPost.update({
      where: { id },
      data: { likes: { increment: 1 } },
    });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { action } = await request.json();

  try {
    if (action === "hide") {
      await prisma.forumPost.update({ where: { id }, data: { hidden: true } });
    } else if (action === "remove") {
      await prisma.forumPost.update({ where: { id }, data: { removed: true } });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Action failed" }, { status: 404 });
  }
}
