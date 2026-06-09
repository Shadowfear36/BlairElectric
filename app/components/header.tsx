"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Phone, Menu, X, Sun, Moon } from "lucide-react"

const NAV_LINKS = [
  { label: "Home",                 href: "/" },
  { label: "Company",              href: "/company" },
  { label: "Services",             href: "/services" },
  { label: "Thermographic Imaging",href: "/thermographic" },
  { label: "Quote",                href: "/quote" },
  { label: "Employment",           href: "/employment" },
  { label: "Contact",              href: "/contact" },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [dark,      setDark]      = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Sync dark state from DOM on mount (theme init script runs before React)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Close drawer on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-background border-b border-border transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" onClick={close}>
            <span className="block bg-white rounded px-2 py-1">
              <Image
                src="/blairelectric-logo.jpg"
                alt="Blair Electric Services, Inc."
                width={180}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-brand-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md text-muted hover:text-foreground transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="tel:+15597848658"
              className="flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors whitespace-nowrap"
            >
              <Phone size={14} />
              (559) 784-8658
            </a>
          </nav>

          {/* Mobile: phone + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+15597848658"
              className="flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-600 transition-colors"
              aria-label="Call us"
            >
              <Phone size={13} />
              Call
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-foreground hover:text-brand-600 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <>
          {/* Backdrop — tap outside to close */}
          <div
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            aria-hidden="true"
            onClick={close}
          />

          {/* Drawer panel */}
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-background flex flex-col shadow-2xl lg:hidden"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Image
                src="/blairelectric-logo.jpg"
                alt="Blair Electric Services, Inc."
                width={160}
                height={36}
                className="h-9 w-auto"
              />
              <button
                type="button"
                className="p-1.5 rounded-md text-muted hover:text-foreground transition-colors"
                onClick={close}
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center px-5 py-3.5 text-base font-medium text-foreground hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-500/10 dark:hover:text-brand-400 transition-colors border-b border-border/50 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Drawer footer */}
            <div className="px-5 py-5 border-t border-border space-y-4">
              <a
                href="tel:+15597848658"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-500 hover:bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors"
              >
                <Phone size={16} />
                (559) 784-8658
              </a>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{dark ? "Dark mode" : "Light mode"}</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  style={{ backgroundColor: dark ? "#f59e0b" : "#d1d5db" }}
                >
                  <span
                    className={`inline-flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      dark ? "translate-x-[22px]" : "translate-x-0.5"
                    }`}
                  >
                    {dark
                      ? <Moon size={10} className="text-brand-600" />
                      : <Sun  size={10} className="text-gray-400" />
                    }
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
