import nodemailer from "nodemailer";
import { SITE } from "@/data/site";

const CONTACT_TO = process.env.CONTACT_TO || SITE.email;

function getGmailTransporter() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

export function isGmailConfigured(): boolean {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

async function sendViaGmail(payload: ContactPayload) {
  const transporter = getGmailTransporter();
  if (!transporter) {
    throw new Error("Gmail is not configured");
  }

  const from = process.env.GMAIL_USER!.trim();

  await transporter.sendMail({
    from: `"HemoBot Contact" <${from}>`,
    to: CONTACT_TO,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `[HemoBot Contact] ${payload.subject}`,
    text: formatPlainText(payload),
    html: formatHtml(payload),
  });
}

async function sendViaFormSubmit(payload: ContactPayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _subject: `[HemoBot Contact] ${payload.subject}`,
      _replyto: payload.email,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = (await response.json().catch(() => ({}))) as { success?: string; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message || "FormSubmit delivery failed");
  }
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  if (isGmailConfigured()) {
    try {
      await sendViaGmail(payload);
      return { method: "gmail" as const };
    } catch (error) {
      console.error("Gmail send failed, trying FormSubmit:", error);
    }
  }

  await sendViaFormSubmit(payload);
  return { method: "formsubmit" as const };
}

function formatPlainText({ name, email, subject, message }: ContactPayload) {
  return [
    "New message from the HemoBot contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function formatHtml({ name, email, subject, message }: ContactPayload) {
  return `
    <h2>New HemoBot contact form message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
