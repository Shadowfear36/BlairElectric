import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free quote from Blair Electric Services, Inc. for agricultural, commercial, or industrial electrical work in California's Central Valley. Call (559) 784-8658.",
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
