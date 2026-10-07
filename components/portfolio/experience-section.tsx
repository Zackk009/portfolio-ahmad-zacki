"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { experiences } from "@/lib/portfolio-data"

export function ExperienceSection() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-20 md:py-28 bg-[#121212]">
      <div className="max-w-5xl mx-auto px-6">
        <div id="experience-heading">
          <SectionHeading
            eyebrow="04 — Experience"
            title="Work & leadership."
            description="Pengalaman kerja praktik, asisten lab, dan kepanitiaan organisasi."
            dark
          />
        </div>

        <ol ref={ref} className="relative flex flex-col gap-6 pl-8 md:pl-12">
          <div aria-hidden="true" className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-white/10" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-[#3A5BA0] origin-top"
            style={{ scaleY: line }}
          />
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.org + exp.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-8 md:-left-12 top-6 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-[#121212] ${
                  i === 0 ? "bg-[#3A5BA0]" : "bg-white/40"
                }`}
              />
              <article className="group bg-[#1a1a1a] border border-white/10 hover:border-[#AFFF00]/40 transition-colors rounded-3xl overflow-hidden flex flex-col md:flex-row">
                {exp.image ? (
                  <div className="relative md:w-2/5 aspect-video md:aspect-auto md:min-h-64 shrink-0 overflow-hidden bg-black">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.imageAlt ?? exp.org}
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">{exp.org}</h3>
                    <p className="text-[#A8C8E8] font-medium text-sm mt-1">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 border border-white/15 rounded-full px-2.5 py-1">
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-white bg-[#3A5BA0] rounded-full px-3 py-1 font-semibold">
                      {exp.dates}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A8C8E8] shrink-0" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
