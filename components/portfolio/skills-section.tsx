"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { softSkills, technicalSkills } from "@/lib/portfolio-data"

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-3 animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal", animationDuration: "40s" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap text-2xl md:text-4xl font-black tracking-tight text-white/90 px-5 py-2 rounded-full border border-white/15"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative py-20 md:py-28 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div id="skills-heading">
          <SectionHeading
            eyebrow="02 — Skills"
            title="Toolbox & competencies."
            description="Technical skills, software tools, dan soft skills dari pengalaman kuliah, lab, dan organisasi."
            dark
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-14">
        <Marquee items={technicalSkills.slice(0, 9)} />
        <Marquee items={technicalSkills.slice(9)} reverse />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h3 className="font-bold text-white mb-4">Technical Skills & Hardware</h3>
          <ul className="flex flex-wrap gap-2">
            {technicalSkills.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="font-mono text-xs text-[#A8C8E8] bg-[#3A5BA0]/20 border border-[#3A5BA0]/30 rounded-full px-3 py-1.5"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h3 className="font-bold text-white mb-4">Soft & Organizational Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="font-mono text-xs text-white bg-white/5 border border-white/15 rounded-full px-3 py-1.5"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
