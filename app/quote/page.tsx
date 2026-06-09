"use client"

import { useState, FormEvent } from "react"
import { Phone, Mail, Send, CheckCircle } from "lucide-react"

const TIMES = ["Morning (8am–12pm)", "Afternoon (12pm–5pm)", "Evening (after 5pm)", "Anytime"]

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const lines = [
      `Name: ${data.get("name")}`,
      `Address: ${data.get("address")}`,
      `City/Zip: ${data.get("cityzop")}`,
      `Day Phone: ${data.get("dayphone")}`,
      `Evening Phone: ${data.get("eveningphone")}`,
      `Mobile: ${data.get("mobile")}`,
      `Best Time to Call: ${data.get("besttime")}`,
      `Email: ${data.get("email")}`,
      `\nDescription of Work:\n${data.get("description")}`,
    ]

    const subject = encodeURIComponent("Quote Request — Blair Electric Services")
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href = `mailto:Bruce@blair-electric.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="pt-16">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">Free Estimates</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Request a Quote</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Fill out the form below and we&rsquo;ll get back to you promptly.
            Or call us directly at{" "}
            <a href="tel:+15597848658" className="text-brand-400 hover:text-brand-300 font-semibold">
              (559) 784-8658
            </a>.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="bg-surface border border-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-brand-500" />
              </div>
              <h2 className="text-2xl font-black text-foreground mb-3">Your email client should open</h2>
              <p className="text-muted mb-6">
                If it didn&rsquo;t open automatically, you can email us directly at{" "}
                <a href="mailto:Bruce@blair-electric.com" className="text-brand-600 font-semibold">
                  Bruce@blair-electric.com
                </a>{" "}
                or call{" "}
                <a href="tel:+15597848658" className="text-brand-600 font-semibold">
                  (559) 784-8658
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-muted hover:text-foreground underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-8 sm:p-10 space-y-6">
              <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase">Your Information</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field id="name"        label="Full Name"     type="text"  required />
                <Field id="email"       label="Email Address" type="email" required />
                <Field id="address"     label="Address"       type="text"  className="sm:col-span-2" />
                <Field id="cityzop"     label="City / ZIP"    type="text"  />
                <Field id="dayphone"    label="Day Phone"     type="tel"   />
                <Field id="eveningphone"label="Evening Phone" type="tel"   />
                <Field id="mobile"      label="Mobile Phone"  type="tel"   />

                {/* Best time to call */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="besttime" className="text-sm font-semibold text-foreground">
                    Best Time to Call
                  </label>
                  <select
                    id="besttime"
                    name="besttime"
                    className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">Select a time...</option>
                    {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="description" className="text-sm font-semibold text-foreground">
                  Description of Work <span className="text-brand-500">*</span>
                </label>
                <p className="text-xs text-muted">Please be as specific as possible.</p>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  required
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                  placeholder="Describe the work you need done, including location, type of project, and any relevant details..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Send size={17} />
                Send Quote Request
              </button>

              <p className="text-center text-xs text-muted">
                Submitting will open your email client pre-filled. Your information is strictly confidential.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Alternate contact */}
      <section className="py-14 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6">
          <a
            href="tel:+15597848658"
            className="flex-1 flex items-center gap-4 bg-surface border border-border rounded-2xl px-6 py-5 hover:border-brand-300 dark:hover:border-brand-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <Phone size={20} className="text-brand-500" />
            </div>
            <div>
              <p className="text-xs text-muted font-semibold uppercase tracking-wide">Call Us</p>
              <p className="font-bold text-foreground">(559) 784-8658</p>
            </div>
          </a>
          <a
            href="mailto:Bruce@blair-electric.com"
            className="flex-1 flex items-center gap-4 bg-surface border border-border rounded-2xl px-6 py-5 hover:border-brand-300 dark:hover:border-brand-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-brand-500" />
            </div>
            <div>
              <p className="text-xs text-muted font-semibold uppercase tracking-wide">Email Us</p>
              <p className="font-bold text-foreground">Bruce@blair-electric.com</p>
            </div>
          </a>
        </div>
      </section>

    </main>
  )
}

function Field({
  id, label, type, required, className,
}: {
  id: string; label: string; type: string; required?: boolean; className?: string
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  )
}
