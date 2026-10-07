"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useLenis } from "lenis/react"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "@/lib/portfolio-data"

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = (href: string) => {
    const el = document.querySelector(href)
    if (el && lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 })
    else el?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  const dark = scrolled || open

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        dark ? "bg-[#121212]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3A5BA0] origin-left"
        style={{ scaleX: progress }}
      />
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo("#hero")}
          className="text-2xl font-black tracking-tighter"
          aria-label="Kembali ke atas"
        >
          <span className={dark ? "text-white" : "text-[#121212]"}>AZ</span>
          <span className="text-[#3A5BA0] [text-shadow:0_0_1px_#121212]">H</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <button
                type="button"
                onClick={() => goTo(item.href)}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  dark ? "text-white/80 hover:text-[#A8C8E8]" : "text-[#121212]/70 hover:text-[#121212]"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#3A5BA0] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.button
          type="button"
          onClick={() => goTo("#contact")}
          className="hidden md:block bg-[#3A5BA0] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="text-white" /> : <Menu className={dark ? "text-white" : "text-[#121212]"} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {[...navLinks, { label: "Contact", href: "#contact" }].map((item) => (
                <button
                  type="button"
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className="text-left text-white/80 hover:text-[#A8C8E8] text-lg font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <p className="font-mono text-xs text-white/40 pt-2">{profile.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
