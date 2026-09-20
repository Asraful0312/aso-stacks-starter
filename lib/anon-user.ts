"use client";

// Anonymous user identity until Clerk auth is fully wired.
// Stored in localStorage; the Convex `users` row uses clerkId = `anon:<key>`.
const KEY = "asostack_anon_key";

export function getAnonKey(): string {
  try {
    let key = localStorage.getItem(KEY);
    if (!key) {
      key = crypto.randomUUID();
      localStorage.setItem(KEY, key);
    }
    return key;
  } catch {
    return "fallback";
  }
}
