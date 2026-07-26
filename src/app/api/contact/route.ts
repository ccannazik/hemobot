import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, isMailConfigured } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    if (!isMailConfigured()) {
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Add GMAIL_USER and GMAIL_APP_PASSWORD to the server environment.",
        },
        { status: 503 }
      );
    }

    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
