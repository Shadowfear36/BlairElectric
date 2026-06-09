"use client"

import { useState, FormEvent, useRef } from "react"
import { Send, CheckCircle, Shield, Paperclip } from "lucide-react"

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
]

export default function EmploymentPage() {
  const [submitted, setSubmitted] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)

    const body = [
      "=== EMPLOYMENT APPLICATION — BLAIR ELECTRIC SERVICES ===",
      "",
      "POSITION: " + d.get("position"),
      "NAME: "     + d.get("name"),
      "PHONE: "    + d.get("phone"),
      "EMAIL: "    + d.get("email"),
      "ADDRESS: "  + d.get("address"),
      "CITY: "     + d.get("city") + ", " + d.get("state") + " " + d.get("zip"),
      "DATE AVAILABLE: " + d.get("availability"),
      "DESIRED SALARY: " + d.get("salary"),
      "",
      "--- EMPLOYMENT AUTHORIZATION ---",
      "US Citizen: "                    + d.get("citizen"),
      "Authorized to work in US: "      + d.get("authorized"),
      "Previously employed at Blair: "  + d.get("previous"),
      "Felony conviction: "             + d.get("felony"),
      "",
      "--- EDUCATION ---",
      "High School: " + d.get("highschool"),
      "HS Graduate: " + d.get("hsgrad"),
      "College: "     + d.get("college"),
      "Degree: "      + d.get("degree"),
      "Other education/certs: " + d.get("other_edu"),
      "",
      "--- SKILLS & QUALIFICATIONS ---",
      d.get("skills"),
      "",
      "--- RESUME ---",
      resumeFile
        ? `Resume file selected: ${resumeFile.name} — PLEASE ATTACH THIS FILE TO THE EMAIL BEFORE SENDING`
        : "No resume attached",
    ].join("\n")

    const subject = encodeURIComponent("Employment Application — Blair Electric Services")
    window.location.href = `mailto:Bruce@blair-electric.com?subject=${subject}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <main className="pt-16">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-3">Join Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Employment Application</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Blair Electric Services is always looking for skilled, motivated professionals to join our team.
            All information and interviews are strictly confidential.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-3xl mx-auto">

          {/* Privacy notice */}
          <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/30 rounded-xl px-5 py-4 mb-8">
            <Shield size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-brand-800 dark:text-brand-300">
              Your information will not be shared or sold. All information and interviews are strictly confidential.
            </p>
          </div>

          {submitted ? (
            <div className="bg-surface border border-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-brand-500" />
              </div>
              <h2 className="text-2xl font-black text-foreground mb-3">Your email client should open</h2>
              {resumeFile && (
                <div className="mb-5 bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/40 rounded-xl px-4 py-3 text-sm text-amber-800 dark:text-amber-300 text-left flex items-start gap-2">
                  <Paperclip size={15} className="mt-0.5 flex-shrink-0" />
                  <span>Don&rsquo;t forget to attach <strong>{resumeFile.name}</strong> to the email before sending.</span>
                </div>
              )}
              <p className="text-muted mb-6">
                If your email client didn&rsquo;t open automatically, send your application to{" "}
                <a href="mailto:Bruce@blair-electric.com" className="text-brand-600 font-semibold">
                  Bruce@blair-electric.com
                </a>{" "}
                or call{" "}
                <a href="tel:+15597848658" className="text-brand-600 font-semibold">
                  (559) 784-VOLT
                </a>.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-sm text-muted hover:text-foreground underline">
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-8 sm:p-10 space-y-10">

              {/* Applicant info */}
              <section className="space-y-5">
                <SectionHeading>Applicant Information</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="position"     label="Position Applying For" type="text"  required className="sm:col-span-2" />
                  <Field id="name"         label="Full Name"              type="text"  required />
                  <Field id="phone"        label="Phone Number"           type="tel"   required />
                  <Field id="email"        label="Email Address"          type="email" required />
                  <Field id="address"      label="Street Address"         type="text"  className="sm:col-span-2" />
                  <Field id="city"         label="City"                   type="text"  />
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 w-24">
                      <label htmlFor="state" className="text-sm font-semibold text-foreground">State</label>
                      <select
                        id="state" name="state"
                        className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label htmlFor="zip" className="text-sm font-semibold text-foreground">ZIP</label>
                      <input id="zip" name="zip" type="text" className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500" />
                    </div>
                  </div>
                  <Field id="availability" label="Date of Availability"   type="date"  />
                  <Field id="salary"       label="Desired Salary"         type="text"  placeholder="e.g. $25/hr or Open" />
                </div>
              </section>

              {/* Employment authorization */}
              <section className="space-y-4">
                <SectionHeading>Employment Authorization</SectionHeading>
                <YesNo id="citizen"    label="Are you a U.S. citizen?" />
                <YesNo id="authorized" label="If not a citizen, are you authorized to work in the U.S.?" />
                <YesNo id="previous"   label="Have you previously been employed by Blair Electric?" />
                <YesNo id="felony"     label="Have you ever been convicted of a felony?" />
                <p className="text-xs text-muted">A felony conviction will not necessarily disqualify you from employment.</p>
              </section>

              {/* Education */}
              <section className="space-y-5">
                <SectionHeading>Educational Background</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="highschool" label="High School Name"          type="text" className="sm:col-span-2" />
                  <YesNo id="hsgrad"     label="Did you graduate?"         />
                  <Field id="college"    label="College / University"      type="text" />
                  <Field id="degree"     label="Degree Earned (if any)"    type="text" />
                  <Field id="other_edu"  label="Other Education / Certifications" type="text" className="sm:col-span-2" />
                </div>
              </section>

              {/* Resume upload */}
              <section className="space-y-3">
                <SectionHeading>Resume</SectionHeading>
                <p className="text-sm text-muted">
                  Select your resume file below. Because this form uses your email client, you&rsquo;ll need to attach it to the email before sending.
                </p>
                <div
                  className="relative flex items-center gap-4 rounded-xl border-2 border-dashed border-border hover:border-brand-400 transition-colors px-5 py-4 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip size={20} className="text-brand-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    {resumeFile ? (
                      <p className="text-sm font-semibold text-foreground truncate">{resumeFile.name}</p>
                    ) : (
                      <p className="text-sm text-muted">Click to select resume (PDF, DOC, DOCX)</p>
                    )}
                  </div>
                  {resumeFile && (
                    <button
                      type="button"
                      onClick={(ev) => { ev.stopPropagation(); setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = "" }}
                      className="text-xs text-muted hover:text-foreground underline flex-shrink-0"
                    >
                      Remove
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(ev) => setResumeFile(ev.target.files?.[0] ?? null)}
                  />
                </div>
              </section>

              {/* Skills */}
              <section className="space-y-3">
                <SectionHeading>Skills &amp; Qualifications</SectionHeading>
                <p className="text-sm text-muted">
                  Please highlight any skills, certifications, or qualifications which you feel would especially
                  fit you for work with Blair Electric.
                </p>
                <textarea
                  id="skills" name="skills" rows={6}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                  placeholder="Describe your relevant skills, certifications, licenses, and experience..."
                />
              </section>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Send size={17} />
                Submit Application
              </button>
              <p className="text-center text-xs text-muted">
                Submitting will open your email client pre-filled. All information is strictly confidential.
              </p>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold tracking-widest text-brand-600 uppercase border-b border-border pb-2">
      {children}
    </h2>
  )
}

function Field({ id, label, type, required, className, placeholder }: {
  id: string; label: string; type: string; required?: boolean; className?: string; placeholder?: string
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      <input
        id={id} name={id} type={type} required={required} placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  )
}

function YesNo({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="text-sm text-foreground flex-1">{label}</label>
      <select
        id={id} name={id}
        className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <option value="">—</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  )
}
