import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Tractor, Building2, Factory, Thermometer, Droplets,
  Cpu, Network, PanelTop, Lightbulb, Phone, ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Blair Electric Services offers agricultural, commercial, and industrial electrical contracting — pump controls, PLC systems, thermographic imaging, panel design, data communications, and lighting throughout California's Central Valley. LIC# 778452.",
  alternates: { canonical: "https://www.blair-electric.com/services" },
  openGraph: {
    title: "Electrical Services | Blair Electric Services — Porterville, CA",
    description:
      "Comprehensive electrical contracting for agricultural, commercial, and industrial clients in the Central Valley. Pump controls, PLC systems, thermographic imaging, custom panel design, and more.",
    url: "https://www.blair-electric.com/services",
  },
}

const SECTORS = [
  {
    id: "agricultural",
    icon: Tractor,
    title: "Agricultural Electrical",
    desc: "Specialized electrical work for California's farming operations. We understand the unique timing and reliability demands of agricultural work.",
    examples: ["Irrigation & pump systems", "Processing facility power", "Feed mills & grain elevators", "Packing houses & hulling facilities", "Cheese processing & creameries"],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Electrical",
    desc: "Full-service commercial electrical contracting for retail buildings, offices, warehouses, and commercial facilities of all sizes.",
    examples: ["Retail buildings", "Office & warehouse lighting", "Service panel upgrades", "Code compliance work"],
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Electrical",
    desc: "Heavy-duty electrical solutions for the full range of Central Valley industrial operations.",
    examples: ["Juice plants & creameries", "Cotton gins", "Food processing facilities", "Hulling & packing facilities"],
  },
]

const SPECIALTY = [
  {
    id: "pump-controls",
    img: "/PumpWell.png",
    icon: Droplets,
    title: "Pump & Well Controls",
    desc: "Extensive experience with pumps and all associated control equipment. We design, install, and service complete pump control systems for any application.",
    details: ["Level sensing systems", "Variable frequency drives (VFDs)", "Conventional motor starters", "Soft starts", "Relays & contactors", "Programmable logic controllers"],
  },
  {
    id: "plc",
    img: "/PLC.png",
    icon: Cpu,
    title: "PLC Controls",
    desc: "Our team maintains expertise with all major brands of control equipment and PLC/HMI software, delivering customized automation systems tailored to your needs.",
    details: ["All major PLC brands", "HMI programming & installation", "Custom automation design", "System troubleshooting", "Upgrades & retrofits"],
  },
  {
    id: "thermographic",
    img: "/thermopic2.jpg",
    icon: Thermometer,
    title: "Thermographic Imaging",
    desc: "Non-invasive infrared inspection to identify overloaded circuits, failing components, and heat anomalies before they cause downtime or safety incidents.",
    details: ["Abnormally hot electrical components", "Overloaded circuits", "Mechanical friction detection", "Energy loss identification", "Safety program support"],
    link: "/thermographic",
  },
  {
    id: "data-comms",
    img: "/DataCabling.png",
    icon: Network,
    title: "Data Communications",
    desc: "Professional installation and testing of structured cabling for your facility's data and communication needs.",
    details: ["CAT5 / CAT5e / CAT6 cabling", "Fiber optic installation", "Cable testing & certification"],
  },
  {
    id: "panel",
    img: "/PanelDesign.png",
    icon: PanelTop,
    title: "Panel Design & Construction",
    desc: "We manufacture and install custom industrial instrumentation and electrical panels with full testing and commissioning.",
    details: ["Custom panel fabrication", "Industrial instrumentation", "Full testing & commissioning", "Control enclosures"],
  },
  {
    id: "lighting",
    img: "/Lighting.png",
    icon: Lightbulb,
    title: "Lighting",
    desc: "A full range of lighting options to meet any need — from warehouses and parking lots to commercial buildings and processing facilities.",
    details: ["Warehouse & industrial lighting", "Parking lot & exterior lighting", "Commercial building lighting", "LED upgrades & retrofits"],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">

      {/* Header */}
      <section className="relative bg-slate-900 text-white py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bescene8-highdef.png"
            alt="California's Central Valley"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">What We Do</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Comprehensive electrical contracting for agricultural, commercial, and industrial clients throughout California&rsquo;s Central Valley.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">Industries</p>
          <h2 className="text-3xl font-black text-foreground mb-10">Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECTORS.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.id} id={s.id} className="bg-surface border border-border rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-brand-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialty services */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">Specialty</p>
          <h2 className="text-3xl font-black text-foreground mb-10">Specialty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALTY.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.id} id={s.id} className="bg-surface border border-border rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-500/90 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg drop-shadow">{s.title}</h3>
                    </div>
                    {s.link && (
                      <Link href={s.link} className="absolute top-3 right-3 text-xs bg-white/20 hover:bg-white/30 text-white font-semibold flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors">
                        Learn more <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-brand-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-brand-100 mb-8">
            We welcome any inquiry and make it a priority to respond quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+15597848658"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-600 hover:bg-brand-50 px-7 py-3.5 text-base font-semibold transition-colors"
            >
              <Phone size={17} /> (559) 784-VOLT
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 hover:border-white px-7 py-3.5 text-base font-semibold transition-colors"
            >
              Request a Quote <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
