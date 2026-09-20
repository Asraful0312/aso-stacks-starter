import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL, SITE_NAME, SUPPORT_EMAIL, TWITTER_HANDLE } from "@/lib/site";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: `${SITE_NAME} | App Store Optimization Tool`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free ASO tool for iOS and Android. Keyword research, difficulty scoring, daily rank tracking, competitor spy, and review analysis — no API keys required.",
  keywords: [
    "ASO tool", "app store optimization", "keyword research app store",
    "google play keyword tool", "iOS keyword ranking", "android ASO",
    "app store keyword tracker", "ASO keyword difficulty", "rank tracker app store",
    "competitor keyword spy", "asomobile alternative", "apptweak alternative", "sensor tower alternative", "mobile action alternative", "appfigures alternative", "aso optimization", "app store seo tools", "app store seo keywords","google play store aso", "play store aso", "play store aso tool", "keyword difficulty checker", "free aso tool",
  ],
  authors: [{ name: SITE_NAME, url: BASE }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | App Store Optimization Tool`,
    description:
      "Keyword scoring, difficulty analysis, competitor intel, and daily rank tracking for the App Store and Google Play — free to start, no API keys.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} keyword research dashboard`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | App Store Optimization Tool`,
    description:
      "Keyword scoring, difficulty analysis, competitor intel, and daily rank tracking for the App Store and Google Play.",
    images: ["/og-image.png"],
    creator: TWITTER_HANDLE,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${BASE}/#organization`,
                  name: SITE_NAME,
                  url: BASE,
                  logo: { "@type": "ImageObject", url: `${BASE}/logo-generated.png` },
                  contactPoint: { "@type": "ContactPoint", email: SUPPORT_EMAIL, contactType: "customer support" },
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE}/#website`,
                  url: BASE,
                  name: SITE_NAME,
                  publisher: { "@id": `${BASE}/#organization` },
                  potentialAction: { "@type": "SearchAction", target: `${BASE}/dashboard/keywords?q={search_term_string}`, "query-input": "required name=search_term_string" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: SITE_NAME,
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  url: BASE,
                  description: "App Store Optimization tool for iOS and Android — keyword research, rank tracking, competitor spy, and review analysis.",
                  offers: [
                    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
                    { "@type": "Offer", price: "19", priceCurrency: "USD", name: "Pro", billingIncrement: "month" },
                    { "@type": "Offer", price: "49", priceCurrency: "USD", name: "Studio", billingIncrement: "month" },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
