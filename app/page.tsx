import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Zap,
  Thermometer,
  Cpu,
  Network,
  PanelTop,
  Lightbulb,
  Droplets,
  ArrowRight,
  CheckCircle,
  Building2,
  Tractor,
  Factory,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Blair Electric Services, Inc. | Electrical Contractor — Porterville, CA",
  description:
    "Agricultural, commercial, and industrial electrical contracting throughout California's Central Valley. Pump controls, PLC systems, thermographic imaging, and more. LIC# 778452. Call (559) 784-8658.",
}

const SERVICES = [
  { icon: Droplets,   title: "Pump & Well Controls",  img: "/PumpWell.png",    desc: "Level sensing, VFDs, motor starters, soft starts, relays, and PLCs for any pumping application.",          href: "/services#pump-controls" },
  { icon: Cpu,        title: "PLC Controls",           img: "/PLC.png",         desc: "All major brands of control equipment and PLC/HMI software — customized automation for your operation.",    href: "/services#plc" },
  { icon: Thermometer,title: "Thermographic Imaging",  img: "/thermopic2.jpg",  desc: "Non-invasive infrared inspection to find overloaded circuits and failing components before they cause downtime.", href: "/thermographic" },
  { icon: Network,    title: "Data Communications",    img: "/DataCabling.png", desc: "CAT5, CAT5e, CAT6, and fiber optic installation and testing.",                                               href: "/services#data-comms" },
  { icon: PanelTop,   title: "Panel Design & Build",   img: "/PanelDesign.png", desc: "Custom industrial instrumentation panels — designed, manufactured, installed, tested, and commissioned.",    href: "/services#panel" },
  { icon: Lightbulb,  title: "Lighting",               img: "/Lighting.png",    desc: "Full-range lighting solutions for warehouses, parking lots, commercial buildings, and ag facilities.",       href: "/services#lighting" },
]

const SECTORS = [
  { icon: Tractor,   title: "Agricultural", desc: "Irrigation & pump systems, processing facilities, packing houses, feed mills, hulling facilities." },
  { icon: Building2, title: "Commercial",   desc: "Retail buildings, office spaces, warehouses, and commercial facilities of all sizes." },
  { icon: Factory,   title: "Industrial",   desc: "Juice plants, creameries, cotton gins, food processing, cheese processing, and more." },
]

const WHY = [
  "Quick response to every inquiry",
  "Quality workmanship on every project",
  "Agricultural, commercial & industrial expertise",
  "LIC# 778452 — Licensed, Bonded & Insured",
  "Serving the Central Valley since 2000",
]

export default function HomePage() {
  return (
    <main>

      {/* ── Hero banner ── */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bescene8-highdef.png"
            alt="California's Central Valley"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-slate-900/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 border border-brand-500/30 px-4 py-1.5 mb-6">
              <Zap size={13} className="text-brand-400" />
              <span className="text-brand-300 text-xs font-semibold tracking-wider uppercase">
                Central Valley Electrical Contractor
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
              Serving California&rsquo;s<br />
              <span className="text-brand-400">Central Valley</span><br />
              <span className="text-3xl sm:text-4xl font-bold text-slate-300">with Integrity and Excellence</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
              Agricultural, commercial, and industrial electrical contracting.
              Top-notch customer service and quality work — from first contact through project completion.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15597848658"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Phone size={17} />
                (559) 784-8658
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 px-7 py-3.5 text-base font-semibold text-white transition-colors"
              >
                Request a Quote <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="py-16 px-4 sm:px-6 bg-brand-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SECTORS.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">{s.title}</p>
                  <p className="text-brand-100 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">Our Services</h2>
            <p className="text-muted mt-3 max-w-xl text-sm">
              Comprehensive electrical solutions for the full range of Central Valley industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-brand-500/90 flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Blair Electric ── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Photo of Bruce */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/brucedesk2.jpg"
              alt="Bruce Blair, Owner — Blair Electric Services, Inc."
              width={600}
              height={450}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent px-6 py-5">
              <p className="font-bold text-white">Bruce Blair</p>
              <p className="text-brand-400 text-sm">Owner — Blair Electric Services, Inc.</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">Why Blair Electric</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-5">
              Quality Work.<br />Quick Response.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Blair Electric was formed in 2000 and quickly established as one of the premier electrical
              contracting firms in the Central Valley. We welcome any and all inquiries and make it a priority
              to provide you with a quick response.
            </p>
            <ul className="space-y-3 mb-8">
              {WHY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm transition-colors"
            >
              Learn about our company <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA bar ── */}
      <section className="py-14 px-4 sm:px-6 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-black">Ready to get started?</p>
            <p className="text-brand-100 text-sm mt-1">We welcome any inquiry and respond quickly.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+15597848658"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-600 hover:bg-brand-50 px-6 py-3 text-sm font-semibold transition-colors"
            >
              <Phone size={15} /> (559) 784-8658
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 hover:border-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              Request a Quote <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
