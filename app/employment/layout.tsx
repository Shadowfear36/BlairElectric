import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Apply to join the Blair Electric Services team. We're always looking for skilled, motivated electrical professionals in California's Central Valley. All information is strictly confidential.",
  robots: { index: false, follow: false },
}

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return children
}
