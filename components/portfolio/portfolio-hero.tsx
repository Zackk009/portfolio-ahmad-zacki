"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLenis } from "lenis/react"
import { ArrowRight, MapPin, Cpu, Radio, Zap, Download } from "lucide-react"
import { profile, stats } from "@/lib/portfolio-data"

const spring = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const done = !deleting && text === current
    const cleared = deleting && text === ""
    const delay = done ? 1600 : deleting ? 35 : 70

    const t = setTimeout(() => {
      if (done) return setDeleting(true)
      if (cleared) {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
        return
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, phrases])

  return (
    <span aria-live="polite">
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[2px] h-[1em] bg-[#3A5BA0] align-middle ml-0.5 animate-pulse" />
      </span>
    </span>
  )
}

const chips = [
  { icon: Cpu, label: "ESP32", className: "top-6 -left-4 md:-left-10" },
  { icon: Radio, label: "MQTT", className: "top-1/2 -right-4 md:-right-10" },
  { icon: Zap, label: "IoT", className: "bottom-10 -left-2 md:-left-6" },
]

export function PortfolioHero() {
  const ref = useRef(null)
  const lenis = useLenis()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 160]), spring)
  const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), spring)
  const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), spring)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 0]), spring)

  const goTo = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null
    if (el && lenis) lenis.scrollTo(el, { offset: -80 })
    else el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Intro"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white noise-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#3A5BA0]/5 to-white" />
      <motion.div
        aria-hidden="true"
        className="absolute top-24 left-10 w-40 h-40 rounded-full bg-[#3A5BA0]/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-24 right-20 w-56 h-56 rounded-full bg-[#A8C8E8]/25 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <motion.div style={{ opacity }} className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex w-fit items-center gap-2 bg-[#121212] text-white px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase"
            >
              <motion.span
                className="w-2 h-2 bg-[#3A5BA0] rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              {profile.badge}
            </motion.div>

            <h1 className="sr-only">{profile.name}</h1>
            <div aria-hidden="true" className="overflow-hidden">
              <motion.div
                style={{ x: x1 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#121212] leading-[0.88]"
              >
                <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={1} className="inline-block">
                  {profile.firstName.toUpperCase()}
                </motion.span>
              </motion.div>
              <motion.div
                style={{ x: x2 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.88]"
              >
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block text-white bg-[#3A5BA0] px-3 -ml-1 rounded-xl mt-2"
                >
                  {profile.lastName.toUpperCase()}
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg md:text-2xl font-mono font-medium text-[#121212] tracking-tight min-h-[2em]"
            >
              <Typewriter phrases={profile.phrases} />
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-base text-[#121212]/65 max-w-xl leading-relaxed text-pretty"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="flex flex-wrap gap-3">
              <motion.button
                type="button"
                onClick={() => goTo("#projects")}
                className="group bg-[#3A5BA0] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => goTo("#contact")}
                className="border-2 border-[#121212] text-[#121212] px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#121212] hover:text-white transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
              <motion.a
                href={profile.resume}
                download
                className="flex items-center gap-2 text-[#121212] px-4 py-3 rounded-full font-bold text-sm tracking-wide underline-offset-4 hover:underline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-[#121212]/10 max-w-lg"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[11px] font-mono text-[#121212]/55 leading-tight">{s.label}</dt>
                  <dd className="text-3xl md:text-4xl font-black tracking-tight text-[#121212]">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div style={{ y }} className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[#3A5BA0]/40 blur-[80px] rounded-full"
                animate={{ scale: [0.8, 0.95, 0.8], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-[2rem] bg-[#121212] overflow-hidden shadow-2xl"
              >
                <Image
                  src={profile.photo || "/placeholder.svg"}
                  alt={`Foto profil ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover object-[50%_20%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className="bg-[#121212]/80 text-white px-2 py-1 rounded-full">Portfolio</span>
                    <span className="bg-[#3A5BA0] text-white px-2 py-1 rounded-full font-bold">2026</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-bold">{profile.name}</p>
                    <p className="flex items-center gap-1.5 font-mono text-xs text-white/60">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {profile.location}
                    </p>
                  </div>
                </div>
              </motion.div>

              {chips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  aria-hidden="true"
                  className={`absolute ${chip.className} flex items-center gap-2 bg-white border-2 border-[#3A5BA0]/20 shadow-xl rounded-full px-3 py-2 font-mono text-xs font-semibold text-[#121212]`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    opacity: { delay: 0.8 + i * 0.15 },
                    scale: { delay: 0.8 + i * 0.15, type: "spring" },
                    y: { duration: 3 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotate: { duration: 4 + i * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }}
                >
                  <span className="w-6 h-6 rounded-full bg-[#3A5BA0] flex items-center justify-center shadow-lg">
                    <chip.icon className="w-3.5 h-3.5 text-white" />
                  </span>
                  {chip.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
