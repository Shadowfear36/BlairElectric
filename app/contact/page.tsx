import type { Metadata } from "next"
import { Phone, MapPin, Printer, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blair Electric Services, Inc. in Porterville, CA. Call (559) 784-8658, fax (559) 784-8657, or email Bruce@blair-electric.com. Located at 1829 Thunderbolt Dr., Porterville, CA 93257.",
}

const STAFF = [
  { name: "Bruce Blair",      role: "Owner",            note: "Project inquiries and estimates", email: "Bruce@blair-electric.com" },
  { name: "Misty Jones",      role: "Office Manager",   note: "Scheduling and billing" },
  { name: "Sarah Brown",      role: "Office Assistant", note: "General inquiries" },
  { name: "Greg Covarrubias", role: "Parts",            note: "Parts and materials" },
]

export default function ContactPage() {
  return (
    <main className="pt-16">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">Reach Us</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We welcome any and all inquiries and make it a priority to provide you with a quick response.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase">Contact Information</p>

            {[
              {
                icon: Phone,
                label: "Phone",
                content: <a href="tel:+15597848658" className="text-2xl font-black text-foreground hover:text-brand-600 transition-colors">(559) 784-8658</a>,
              },
              {
                icon: Printer,
                label: "Fax",
                content: <p className="text-lg font-semibold text-foreground">(559) 784-8657</p>,
              },
              {
                icon: Mail,
                label: "Email",
                content: <a href="mailto:Bruce@blair-electric.com" className="text-foreground hover:text-brand-600 font-semibold transition-colors">Bruce@blair-electric.com</a>,
              },
              {
                icon: MapPin,
                label: "Address",
                content: (
                  <div>
                    <p className="font-semibold text-foreground">1829 Thunderbolt Dr.</p>
                    <p className="text-muted text-sm">Porterville, CA 93257</p>
                  </div>
                ),
              },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted uppercase mb-1">{label}</p>
                  {content}
                </div>
              </div>
            ))}

            {/* Credentials */}
            <div className="mt-4 flex flex-wrap gap-3">
              {["LIC# 778452", "Licensed", "Bonded", "Insured"].map((badge) => (
                <span key={badge} className="rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/30 px-4 py-1.5 text-xs font-bold text-brand-700 dark:text-brand-400">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Staff directory */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-6">Staff Directory</p>
            <div className="divide-y divide-border">
              {STAFF.map((p) => (
                <div key={p.name} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {p.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground">{p.name}</p>
                    <p className="text-brand-600 text-xs font-semibold">{p.role}</p>
                    <p className="text-muted text-xs mt-0.5">{p.note}</p>
                    {p.email && (
                      <a href={`mailto:${p.email}`} className="text-xs text-brand-600 hover:text-brand-700 transition-colors mt-0.5 block">
                        {p.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
              <a
                href="tel:+15597848658"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Phone size={17} /> (559) 784-8658
              </a>
              <a
                href="mailto:Bruce@blair-electric.com"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-brand-500 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-500/10 px-6 py-3.5 text-base font-semibold transition-colors"
              >
                <Mail size={17} /> Email Us
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
