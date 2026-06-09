import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Printer, Mail, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Company",
  description:
    "Blair Electric Services, Inc. was formed in 2000 and incorporated in 2006. Owner Bruce Blair brings over 20 years of electrical expertise serving agricultural, commercial, and industrial clients throughout California's Central Valley.",
}

const TEAM = [
  { name: "Bruce Blair",       role: "Owner",            note: "20+ years electrical expertise" },
  { name: "Misty Jones",       role: "Office Manager",   note: "Scheduling and billing" },
  { name: "Sarah Brown",       role: "Office Assistant", note: "General inquiries" },
  { name: "Greg Covarrubias",  role: "Parts",            note: "Parts and materials" },
]

export default function CompanyPage() {
  return (
    <main className="pt-16">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Our Company</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Established in 2000 as one of the premier electrical contracting firms in California&rsquo;s Central Valley.
          </p>
        </div>
      </section>

      {/* Story + photo */}
      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-4">Our History</p>
            <h2 className="text-3xl font-black text-foreground mb-6">Built on Integrity &amp; Excellence</h2>
            <div className="space-y-4 text-muted leading-relaxed text-sm">
              <p>
                Blair Electric was formed in 2000 and was quickly established as one of the premier electrical
                contracting firms locally and in surrounding areas. As the company grew, it was incorporated
                in 2006, becoming Blair Electric Services, Inc.
              </p>
              <p>
                Owner Bruce Blair brings over 20 years of industry expertise and continues expanding our
                service offerings to meet the evolving needs of agricultural, commercial, and industrial
                clients throughout the Central Valley.
              </p>
              <p>
                Our commitment is simple: deliver top-notch customer service and quality work from your first
                contact with us until the project is completed. We welcome any and all inquiries and make it
                a priority to provide you with a quick response — because your operation can&rsquo;t afford to wait.
              </p>
            </div>

            <ul className="mt-8 space-y-2.5">
              {[
                "Formed 2000 · Incorporated 2006",
                "LIC# 778452 — Licensed, Bonded & Insured",
                "Agricultural, commercial & industrial expertise",
                "Pump controls, PLC systems & thermographic imaging",
                "Serving the Central Valley with integrity and excellence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm transition-colors"
            >
              View our services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-5">
            {/* Bruce photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/brucedesk2.jpg"
                alt="Bruce Blair, Owner — Blair Electric Services, Inc."
                width={700}
                height={520}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent px-5 py-4">
                <p className="font-bold text-white">Bruce Blair</p>
                <p className="text-brand-400 text-sm">Owner · 20+ Years Experience</p>
              </div>
            </div>

            {/* Contact quick-card */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-4">Contact</p>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <MapPin size={15} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  1829 Thunderbolt Dr., Porterville, CA 93257
                </li>
                <li>
                  <a href="tel:+15597848658" className="flex items-center gap-3 font-semibold text-foreground hover:text-brand-600 transition-colors">
                    <Phone size={15} className="text-brand-500 flex-shrink-0" />
                    (559) 784-8658
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Printer size={14} className="text-brand-500 flex-shrink-0" />
                  Fax: (559) 784-8657
                </li>
                <li>
                  <a href="mailto:Bruce@blair-electric.com" className="flex items-center gap-3 text-sm text-foreground hover:text-brand-600 transition-colors">
                    <Mail size={14} className="text-brand-500 flex-shrink-0" />
                    Bruce@blair-electric.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">Our People</p>
          <h2 className="text-3xl font-black text-foreground mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-surface border border-border rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center mx-auto mb-4 text-white font-black text-xl">
                  {member.name.charAt(0)}
                </div>
                <p className="font-bold text-foreground">{member.name}</p>
                <p className="text-brand-600 text-xs font-semibold uppercase tracking-wide mt-1">{member.role}</p>
                <p className="text-muted text-xs mt-2">{member.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area banner */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bescene8-highdef.png"
            alt="California's Central Valley"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">Service Area</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Serving California&rsquo;s Central Valley</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10">
            From Porterville, we serve agricultural, commercial, and industrial clients throughout the heart of California.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Request a Quote <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 px-7 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
