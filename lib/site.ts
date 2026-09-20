// Central site configuration. Every buyer-facing brand/domain value used in
// metadata, JSON-LD schema, and contact pages is sourced from here so the
// project can be rebranded by editing env vars instead of hunting through
// dozens of files. Defaults match the original demo deployment.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, "");
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "YourApp";
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@example.com";
export const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "@yourapp";
// Empty string disables GA — CookieConsent only loads the script if this is set.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
