import type { OpportunityResult } from "../../convex/opportunity";

export const COUNTRY_NAMES: Record<string, string> = {
  us: "United States", gb: "United Kingdom", ca: "Canada", au: "Australia",
  de: "Germany", fr: "France", jp: "Japan", cn: "China", ru: "Russia",
  kr: "South Korea", in: "India", br: "Brazil", mx: "Mexico", it: "Italy",
  es: "Spain", nl: "Netherlands", tr: "Türkiye", se: "Sweden", no: "Norway",
  dk: "Denmark", fi: "Finland", sg: "Singapore", ae: "UAE", sa: "Saudi Arabia",
  th: "Thailand", id: "Indonesia", ph: "Philippines", vn: "Vietnam",
  tw: "Taiwan", pt: "Portugal", pl: "Poland",
};

export const OPPORTUNITY_COUNTRIES = [
  "ru","kr","jp","in","id","ph","nl","tr","vn","dk",
  "fi","th","tw","cn","se","pt","fr","br","ae","sg",
  "es","it","no","sa","de","mx","ca","au","gb","us",
];

export type TierData = { tier_score: number; label: string; highlights: string[] };


export type HistoryItem = {
  _id: string;
  keyword: string;
  platform: string;
  results: OpportunityResult[];
  createdAt: number;
};


export function flag(code: string) {
  return code.toUpperCase().split("").map((c) =>
    String.fromCodePoint(c.charCodeAt(0) - 65 + 0x1f1e6)
  ).join("");
}

export function fmt(n: number) {
  return n < 1 ? n.toFixed(1) : n < 1000 ? n.toFixed(0) : `${(n / 1000).toFixed(1)}k`;
}

export function fmtDate(ts: number) {
  return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

