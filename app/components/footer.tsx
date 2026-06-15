import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Printer } from "lucide-react"

const SERVICE_LINKS = [
  { label: "Agricultural Electrical",   href: "/services#agricultural" },
  { label: "Commercial Electrical",     href: "/services#commercial" },
  { label: "Industrial Electrical",     href: "/services#industrial" },
  { label: "Pump & Well Controls",      href: "/services#pump-controls" },
  { label: "PLC Controls",              href: "/services#plc" },
  { label: "Panel Design & Build",      href: "/services#panel" },
  { label: "Data Communications",       href: "/services#data-comms" },
  { label: "Lighting",                  href: "/services#lighting" },
]

const COMPANY_LINKS = [
  { label: "Company",               href: "/company" },
  { label: "Thermographic Imaging", href: "/thermographic" },
  { label: "Request a Quote",       href: "/quote" },
  { label: "Employment",            href: "/employment" },
  { label: "Contact",               href: "/contact" },
]

export default function Footer() {
  return (
    <footer>
      {/* Credentials bar */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold tracking-wide">
          <span className="text-brand-400">LIC# 778452</span>
          <span className="text-slate-300">Licensed &middot; Bonded &middot; Insured</span>
          <a href="tel:+15597848658" className="text-white hover:text-brand-300 transition-colors">
            (559) 784-VOLT
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <span className="inline-block bg-white rounded px-2 py-1">
              <Image
                src="/blairelectric-logo.png"
                alt="Blair Electric Services, Inc."
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Delivering top-notch electrical contracting to agricultural, commercial, and industrial clients throughout California&rsquo;s Central Valley.
            </p>
            <p className="text-slate-500 text-xs">Founded 2000 &middot; Incorporated 2006</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-5">Services</h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-5">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span>1829 Thunderbolt Dr.<br />Porterville, CA 93257</span>
              </li>
              <li>
                <a
                  href="tel:+15597848658"
                  className="flex items-center gap-2.5 text-white font-bold text-lg hover:text-brand-300 transition-colors"
                >
                  <Phone size={16} className="text-brand-400 flex-shrink-0" />
                  (559) 784-8658
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Printer size={14} className="text-brand-400 flex-shrink-0" />
                Fax: (559) 784-8657
              </li>
              <li>
                <a
                  href="mailto:Bruce@blair-electric.com"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Bruce@blair-electric.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} Blair Electric Services, Inc. All Rights Reserved.
            </p>
            <a
              href="https://rhodai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              Designed &amp; Built by <span className="text-slate-400 font-semibold">Rhodai.AI</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
