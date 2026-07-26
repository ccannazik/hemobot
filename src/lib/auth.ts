import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "care_navigator_session";
const SESSION_DAYS = 30;

export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export function createSessionToken(): string {
  return randomBytes(32).toString("hex");
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value;
}

export { SESSION_COOKIE };
