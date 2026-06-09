import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free estimate from Blair Electric Services, Inc. for agricultural, commercial, or industrial electrical work in California's Central Valley. LIC# 778452. Call (559) 784-VOLT or fill out our online form.",
  alternates: { canonical: "https://www.blair-electric.com/quote" },
  openGraph: {
    title: "Request a Quote | Blair Electric Services",
    description:
      "Get a free estimate for your electrical project. Blair Electric serves agricultural, commercial, and industrial clients throughout Tulare County and the Central Valley.",
    url: "https://www.blair-electric.com/quote",
  },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
