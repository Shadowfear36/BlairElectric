import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Thermometer, ArrowRight, Phone, ShieldCheck, Zap, TrendingDown, Activity, Gauge } from "lucide-react"

export const metadata: Metadata = {
  title: "Thermographic Imaging",
  description:
    "Blair Electric Services offers professional thermographic imaging using infrared cameras to detect overloaded circuits, failing electrical components, and heat anomalies before they cause costly downtime or fires. Non-invasive — no shutdown required. Serving California's Central Valley.",
  alternates: { canonical: "https://www.blair-electric.com/thermographic" },
  openGraph: {
    title: "Thermographic Imaging Services | Blair Electric — Central Valley",
    description:
      "Infrared thermal inspections to catch failing electrical components before they cause downtime, fires, or costly repairs. Non-invasive, no shutdown required. Schedule an inspection today.",
    url: "https://www.blair-electric.com/thermographic",
  },
}

const BENEFITS = [
  {
    icon: TrendingDown,
    title: "Reduce Repair Costs",
    desc: "Inspections pinpoint faulty equipment before major damage occurs, often requiring only simple part replacement rather than full system repairs.",
  },
  {
    icon: ShieldCheck,
    title: "Avoid Catastrophic Failures",
    desc: "Reveals hidden problems in equipment that appears fully functional — particularly important for aging systems that may be near failure.",
  },
  {
    icon: Activity,
    title: "Prevent Production Downtime",
    desc: "Regular inspections identify issues before they shut down your operation, keeping you running and revenue flowing.",
  },
  {
    icon: Gauge,
    title: "Improve Risk Management",
    desc: "Reduce personal injury risk through a reliable safety program built around periodic thermographic testing.",
  },
  {
    icon: Zap,
    title: "Save Energy",
    desc: "Identifies structural areas experiencing heat and energy loss, enabling improvements to operational efficiency.",
  },
]

const DETECTS = [
  "Abnormally hot or overloaded electrical systems",
  "Blocked or restricted electrical components",
  "Overloaded circuits and connections",
  "Excessive friction in mechanical systems",
  "Unusual heat patterns indicating potential failures",
  "Energy loss through structural heat leaks",
]

export default function ThermographicPage() {
  return (
    <main className="pt-16">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 border border-brand-500/30 px-4 py-1.5 mb-6">
              <Thermometer size={13} className="text-brand-400" />
              <span className="text-brand-300 text-xs font-semibold tracking-wider uppercase">
                Non-Invasive Inspection
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">Thermographic<br />Imaging</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Specially designed infrared video and still cameras make images that expose surface heat
              variations — identifying problems in electrical and mechanical systems before they become
              expensive failures.
            </p>
          </div>

          {/* Thermal image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/thermopic2.jpg"
              alt="Infrared thermographic image of electrical panel showing heat anomalies"
              width={600}
              height={500}
              className="w-full object-cover"
            />
            <div className="bg-slate-800 px-5 py-3">
              <p className="text-slate-400 text-xs">
                Infrared thermal image revealing heat anomalies in an electrical panel — invisible to the naked eye.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it detects */}
      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">How It Works</p>
            <h2 className="text-3xl font-black text-foreground mb-5">What Thermographic Imaging Detects</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Thermographic imaging incorporates the use of specially designed infrared video or still cameras
              to make images that expose surface heat variations. These thermograms identify abnormally hot,
              blocked, or overloaded electrical systems — as well as unusual heat patterns in mechanical
              systems caused by excessive friction. Critically, it is a <strong className="text-foreground">non-invasive</strong> operation —
              no shutdown required.
            </p>
            <ul className="space-y-2.5">
              {DETECTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/thermopic2.jpg"
              alt="Thermographic scan of electrical equipment"
              width={600}
              height={480}
              className="w-full object-cover"
              style={{ filter: "hue-rotate(20deg) saturate(1.1)" }}
            />
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-3">Benefits</p>
          <h2 className="text-3xl font-black text-foreground mb-10">Why Schedule a Thermographic Inspection?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-surface border border-border rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-500" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-brand-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Schedule an Inspection</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Regular thermographic testing identifies issues before they cause production shutdowns.
            Contact us to schedule an inspection for your facility.
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
