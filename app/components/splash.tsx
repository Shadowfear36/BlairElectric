"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("splashShown")) {
      setVisible(false)
      return
    }
    sessionStorage.setItem("splashShown", "1")

    let fadeTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>

    const dismiss = () => {
      fadeTimer = setTimeout(() => setFading(true), 100)
      hideTimer = setTimeout(() => setVisible(false), 600)
    }

    // Wait for all assets to load, but show for at least 1s
    const minTimer = setTimeout(() => {
      if (document.readyState === "complete") {
        dismiss()
      } else {
        window.addEventListener("load", dismiss, { once: true })
      }
    }, 1000)

    return () => {
      clearTimeout(minTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
      window.removeEventListener("load", dismiss)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        transition: "opacity 500ms ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Background image */}
      <Image
        src="/bescene8-highdef.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Logo */}
      <div
        className="relative"
        style={{
          transition: "transform 600ms cubic-bezier(0.34,1.56,0.64,1), opacity 600ms ease",
          transform: fading ? "scale(0.9)" : "scale(1)",
          opacity: fading ? 0 : 1,
        }}
      >
        <span className="block bg-white rounded-xl px-6 py-4 shadow-2xl">
          <Image
            src="/blairelectric-logo.png"
            alt="Blair Electric Services, Inc."
            width={260}
            height={58}
            priority
            className="h-14 w-auto"
          />
        </span>
      </div>
      <p
        className="relative mt-5 text-white/60 text-xs font-semibold tracking-widest uppercase"
        style={{
          transition: "opacity 500ms ease",
          opacity: fading ? 0 : 1,
        }}
      >
        Porterville, CA · LIC# 778452
      </p>
    </div>
  )
}
