import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Sign in to report content" }, { status: 401 });
    }

    const { reason, postId } = await request.json();

    if (!reason) {
      return NextResponse.json({ error: "Reason required" }, { status: 400 });
    }

    const report = await prisma.report.create({
      data: {
        reason,
        postId: postId || null,
        reporterId: user.id,
      },
    });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error("Report error:", error);
    return NextResponse.json({ error: "Failed to submit report" }, { status: 500 });
  }
}

export async function GET() {
  const reports = await prisma.report.findMany({
    where: { status: "pending" },
    include: {
      reporter: { select: { name: true } },
      post: { select: { title: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(reports);
}
