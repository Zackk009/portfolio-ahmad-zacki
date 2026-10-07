"use client"

import type React from "react"
import Image from "next/image"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { projects, type Project } from "@/lib/portfolio-data"

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(useSpring(y, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(useSpring(x, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["-5deg", "5deg"])

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`group relative flex flex-col bg-white rounded-3xl border border-[#121212]/10 overflow-hidden hover:shadow-[0_20px_60px_-20px_rgba(18,18,18,0.35)] transition-shadow ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${project.imageFit === "contain" ? "bg-white" : "bg-[#121212]"} ${
          featured ? "md:w-1/2 aspect-video md:aspect-auto md:min-h-80" : "aspect-video"
        }`}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className={`transition-transform duration-700 group-hover:scale-105 ${
            project.imageFit === "contain" ? "object-contain p-6" : "object-cover"
          }`}
        />
        <span className="absolute top-4 left-4 bg-[#121212] text-[#A8C8E8] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
          {project.tag}
        </span>
        {project.highlight ? (
          <span className="absolute bottom-4 right-4 bg-[#3A5BA0] text-white font-black text-xs px-3 py-1.5 rounded-full">
            {project.highlight}
          </span>
        ) : null}
      </div>
      <div className={`flex flex-col gap-3 p-6 ${featured ? "md:w-1/2 md:p-10 md:justify-center" : ""}`}>
        <span className="font-mono text-xs text-[#121212]/40">{String(index + 1).padStart(2, "0")}</span>
        <h3
          className={`font-black tracking-tight text-[#121212] leading-tight text-balance ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-[#121212]/65 leading-relaxed text-pretty">{project.description}</p>
        <ul className="flex flex-wrap gap-1.5 pt-2 mt-auto" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[11px] text-[#121212] bg-[#f3f3ee] rounded-full px-2.5 py-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-20 md:py-28 bg-white noise-overlay">
      <div className="relative max-w-7xl mx-auto px-6">
        <div id="projects-heading">
          <SectionHeading
            eyebrow="03 — Projects"
            title="Things I've built."
            description="Proyek engineering nyata selama kuliah dan Tugas Akhir."
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
