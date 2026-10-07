"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Award, BookOpen } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { certifications, education } from "@/lib/portfolio-data"

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="relative py-20 md:py-28 bg-[#f6f6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <div id="education-heading">
          <SectionHeading eyebrow="05 — Education & Certifications" title="Learning never stops." />
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#121212] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-10 text-[10rem] font-black leading-none text-white/[0.04] select-none"
            >
              TEL-U
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#AFFF00] flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5 text-[#121212]" aria-hidden="true" />
              </div>
              <p className="font-mono text-xs text-[#AFFF00]">{education.years}</p>
              <h3 className="text-3xl font-black tracking-tight mt-1">{education.degree}</h3>
              <p className="text-white/60 mt-1">
                {education.institution} — {education.location}
              </p>

              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-6 mb-2">Tugas Akhir</h4>
              <p className="font-semibold leading-snug">{education.thesis}</p>

              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-6 mb-3">
                Kompetensi Utama
              </h4>
              <ul className="flex flex-wrap gap-2">
                {education.competencies.map((c) => (
                  <li key={c} className="text-xs bg-white/10 rounded-full px-3 py-1.5">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-3xl p-6 border border-[#121212]/10 hover:border-[#121212] focus-visible:outline-2 focus-visible:outline-[#121212] transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f3ee] group-hover:bg-[#AFFF00] transition-colors flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#121212]" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] text-[#121212]/50">{cert.date}</span>
                </div>
                <h3 className="font-black text-lg tracking-tight text-[#121212] leading-snug text-balance">
                  {cert.name}
                </h3>
                <p className="text-sm text-[#121212]/60 mt-2 leading-relaxed">{cert.issuer}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#121212]">
                  Lihat Sertifikat
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(PDF, tab baru)</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
