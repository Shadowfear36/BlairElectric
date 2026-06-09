import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SplashScreen from "./components/splash";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://www.blair-electric.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Blair Electric Services, Inc. | Electrical Contractor — Porterville, CA",
    template: "%s | Blair Electric Services",
  },
  description:
    "Agricultural, commercial, and industrial electrical contracting throughout California's Central Valley. Pump controls, PLC systems, thermographic imaging, panel design, and more. LIC# 778452. Call (559) 784-VOLT.",
  keywords: [
    "electrical contractor", "agricultural electrical", "commercial electrical", "industrial electrical",
    "pump controls", "PLC controls", "thermographic imaging", "panel design", "data communications",
    "Porterville CA", "Tulare County", "Central Valley", "California electrician",
    "variable frequency drives", "motor starters", "fiber optic cabling",
    "feed mill electrical", "food processing electrical", "LIC 778452",
  ],
  authors: [{ name: "Blair Electric Services, Inc." }],
  creator: "Blair Electric Services, Inc.",
  publisher: "Blair Electric Services, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Blair Electric Services, Inc.",
    title: "Blair Electric Services, Inc. | Electrical Contractor — Porterville, CA",
    description:
      "Agricultural, commercial, and industrial electrical contracting in California's Central Valley. LIC# 778452. Serving Porterville, Visalia, Tulare, and surrounding areas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blair Electric Services, Inc. — Central Valley Electrical Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blair Electric Services, Inc. | Electrical Contractor — Porterville, CA",
    description:
      "Agricultural, commercial, and industrial electrical contracting throughout California's Central Valley. LIC# 778452.",
    images: ["/og-image.jpg"],
  },
  category: "Electrical Contracting",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme init — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "@id": BASE_URL,
              name: "Blair Electric Services, Inc.",
              description:
                "Agricultural, commercial, and industrial electrical contracting in California's Central Valley since 2000.",
              url: BASE_URL,
              logo: `${BASE_URL}/blairelectric-logo.jpg`,
              image: `${BASE_URL}/og-image.jpg`,
              telephone: "+15597848658",
              faxNumber: "+15597848657",
              email: "Bruce@blair-electric.com",
              foundingDate: "2000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1829 Thunderbolt Dr.",
                addressLocality: "Porterville",
                addressRegion: "CA",
                postalCode: "93257",
                addressCountry: "US",
              },
              geo: { "@type": "GeoCoordinates", latitude: 36.065, longitude: -119.017 },
              areaServed: [
                { "@type": "City", name: "Porterville" },
                { "@type": "City", name: "Visalia" },
                { "@type": "City", name: "Tulare" },
                { "@type": "City", name: "Hanford" },
                { "@type": "City", name: "Fresno" },
                { "@type": "AdministrativeArea", name: "Tulare County" },
                { "@type": "AdministrativeArea", name: "Kings County" },
                { "@type": "AdministrativeArea", name: "Fresno County" },
              ],
              hasCredential: "California Electrical Contractor License #778452",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <SplashScreen />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
