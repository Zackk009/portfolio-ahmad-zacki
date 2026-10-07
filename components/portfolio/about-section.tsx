"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Target } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { education, focusAreas, profile, statement } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 md:py-28 bg-[#f6f6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="01 — About Me"
          title="Bridging hardware & software."
          description="IoT, embedded engineering, dan system maintenance dalam satu paket."
        />

        <div className="grid lg:grid-cols-3 gap-4">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl border border-[#121212]/10 overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative md:w-2/5 aspect-square md:aspect-auto bg-[#e9e9e4] shrink-0">
              <Image
                src={profile.portrait || "/placeholder.svg"}
                alt={`${profile.name} berpose dengan jaket himpunan Teknik Elektro`}
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <span className="absolute bottom-4 left-4 bg-[#3A5BA0] text-white font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                Hi, I&apos;m Zacki
              </span>
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h3 id="about-heading" className="font-mono text-xs uppercase tracking-[0.2em] text-[#121212]/50 mb-5">
                Personal Statement
              </h3>
              <div className="flex flex-col gap-4">
                {statement.map((p) => (
                  <p key={p.slice(0, 20)} className="text-base md:text-lg text-[#121212] leading-relaxed text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col gap-4">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#121212] text-white rounded-3xl p-6 md:p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3A5BA0] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <p className="font-mono text-xs text-[#A8C8E8] mb-1">{education.years}</p>
              <h3 className="text-2xl font-black tracking-tight">{education.degree}</h3>
              <p className="text-white/60 text-sm mt-1">
                {education.institution} — {education.location}
              </p>
              <p className="text-sm text-white/80 mt-4 pt-4 border-t border-white/10 leading-relaxed">
                <span className="font-semibold text-white">Tugas Akhir: </span>
                {education.thesis}
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#3A5BA0] rounded-3xl p-6 md:p-8 flex-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-white" aria-hidden="true" />
                <h3 className="font-black text-lg tracking-tight text-white">Focus & Expertise</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {focusAreas.map((f) => (
                  <li key={f} className="flex gap-2 text-sm font-medium text-white/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A8C8E8] shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
