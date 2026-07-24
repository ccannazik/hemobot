import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const JOURNAL_USER_KEY = "hemobot_journal_user";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  const entries = await prisma.journalEntry.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      userEmail,
      userName,
      date,
      notes,
      questionsForDoctor,
      symptomsNotes,
      appointmentNotes,
      treatmentNotes,
      emotionalNotes,
    } = body;

    let uid = userId;

    if (!uid) {
      let user = await prisma.user.findUnique({
        where: { email: userEmail || JOURNAL_USER_KEY },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email: userEmail || `${JOURNAL_USER_KEY}-${Date.now()}@local.hemobot`,
            name: userName || "Journal User",
          },
        });
      }
      uid = user.id;
    }

    const entry = await prisma.journalEntry.create({
      data: {
        userId: uid,
        date: new Date(date),
        notes,
        questionsForDoctor,
        symptomsNotes,
        appointmentNotes,
        treatmentNotes,
        emotionalNotes,
      },
    });

    return NextResponse.json({ entry, userId: uid }, { status: 201 });
  } catch (error) {
    console.error("Journal error:", error);
    return NextResponse.json({ error: "Failed to save entry" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await prisma.journalEntry.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
