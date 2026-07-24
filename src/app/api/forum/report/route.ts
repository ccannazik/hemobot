import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { reason, postId, commentId, reporterEmail } = await request.json();

    if (!reason) {
      return NextResponse.json({ error: "Reason required" }, { status: 400 });
    }

    let reporter = await prisma.user.findUnique({
      where: { email: reporterEmail || "reporter@hemobot.local" },
    });

    if (!reporter) {
      reporter = await prisma.user.create({
        data: {
          email: reporterEmail || `reporter-${Date.now()}@hemobot.local`,
          name: "Reporter",
        },
      });
    }

    const report = await prisma.report.create({
      data: {
        reason,
        postId: postId || null,
        reporterId: reporter.id,
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
