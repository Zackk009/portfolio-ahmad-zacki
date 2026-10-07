"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone / WhatsApp", value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="relative bg-[#121212] pt-20 md:pt-28 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block font-mono text-[#A8C8E8] text-xs tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            06 — Get In Touch
          </motion.span>
          <motion.h2
            className="mt-3 text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="block"
              variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {"LET'S BUILD"}
            </motion.span>
            <motion.span
              className="block text-[#3A5BA0]"
              variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              SOMETHING.
            </motion.span>
          </motion.h2>
          <p className="mt-5 font-mono text-sm text-white/60 max-w-md mx-auto">
            Hubungi saya untuk diskusi proyek, kolaborasi, atau peluang kerja.
          </p>
          <motion.a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-[#3A5BA0] text-white px-8 py-4 rounded-full font-bold tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Kirim Email
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {contacts.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 bg-white/5 hover:bg-[#3A5BA0] border border-white/10 hover:border-[#3A5BA0] rounded-2xl p-4 transition-colors"
              >
                <span className="w-10 h-10 shrink-0 rounded-xl bg-[#3A5BA0] group-hover:bg-white flex items-center justify-center transition-colors">
                  <c.icon className="w-5 h-5 text-white group-hover:text-[#3A5BA0] transition-colors" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover:text-[#121212]/60">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-white group-hover:text-[#121212]">
                    {c.value}
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/10">
          <span className="text-xl font-black">
            <span className="text-white">AZ</span>
            <span className="text-[#3A5BA0]">H</span>
          </span>
          <p className="flex items-center gap-1.5 text-white/40 font-mono text-xs">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="text-white/40 font-mono text-xs">© 2026 {profile.name}. All rights reserved.</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12rem] md:text-[26rem] font-black text-white/[0.02] pointer-events-none select-none leading-none"
      >
        AZH
      </div>
    </footer>
  )
}
