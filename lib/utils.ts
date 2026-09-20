import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Strips the Convex error wrapper boilerplate and surfaces user-facing messages.
// Handles both ConvexError (data field) and regular Error thrown from actions.
export function cleanConvexError(err: unknown, fallback = "Something went wrong. Please try again."): string {
  if (!err || typeof err !== "object") return fallback;
  // ConvexError propagates user-facing data directly
  const data = (err as Record<string, unknown>).data;
  if (typeof data === "string" && data.length > 0) return data;
  if (!(err instanceof Error)) return fallback;
  // Strip "[CONVEX ...] Server Error Uncaught Error: <msg> at handler..."
  const m = err.message.match(/Uncaught (?:Convex)?Error:\s*([\s\S]+?)(?:\s+at\s+(?:handler|async)\b|\s*$)/);
  if (m) return m[1].trim();
  // Mask raw Convex boilerplate that has no user-facing content
  if (err.message.includes("[CONVEX") || err.message.toLowerCase().includes("called by client")) return fallback;
  return err.message || fallback;
}
