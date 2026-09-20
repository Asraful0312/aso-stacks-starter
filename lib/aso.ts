export const COUNTRIES = [
  { code: "us", name: "United States", icon: "/us.png" },
  { code: "gb", name: "United Kingdom", icon: "/uk.png" },
  { code: "ca", name: "Canada", icon: "/canada.png" },
  { code: "au", name: "Australia", icon: "/australia.png" },
  { code: "de", name: "Germany", icon: "/germany.png" },
  { code: "fr", name: "France", icon: "/france.png" },
  { code: "jp", name: "Japan", icon: "/japan.png" },
  { code: "br", name: "Brazil", icon: "/brazil.png" },
  { code: "in", name: "India", icon: "/india.png" },
  { code: "mx", name: "Mexico", icon: "/mexico.png" },
] as const;

export type CountryCode = (typeof COUNTRIES)[number]["code"];

export const CLASSIFICATION_CONFIG: Record<
  string,
  { color: string; bg: string; label: string }
> = {
  "Sweet Spot": {
    color: "text-green-400",
    bg: "bg-green-900/30 border-green-500/30",
    label: "Sweet Spot",
  },
  "Good Target": {
    color: "text-green-300",
    bg: "bg-green-900/20 border-green-500/20",
    label: "Good Target",
  },
  "Hidden Gem": {
    color: "text-blue-300",
    bg: "bg-blue-900/20 border-blue-500/20",
    label: "Hidden Gem",
  },
  "High Competition": {
    color: "text-yellow-300",
    bg: "bg-yellow-900/20 border-yellow-500/20",
    label: "High Competition",
  },
  Moderate: {
    color: "text-slate-300",
    bg: "bg-slate-800 border-white/10",
    label: "Moderate",
  },
  "Low Volume": {
    color: "text-slate-400",
    bg: "bg-slate-800 border-white/10",
    label: "Low Volume",
  },
  Avoid: {
    color: "text-red-300",
    bg: "bg-red-900/20 border-red-500/20",
    label: "Avoid",
  },
};
