"use client"

import { motion } from "framer-motion"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, description, dark = false, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center"
  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center" : ""}`}>
      <motion.span
        className="inline-block font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#3A5BA0] data-[dark=true]:text-[#A8C8E8]"
        data-dark={dark}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {eyebrow}
      </motion.span>
      <motion.div className="overflow-hidden mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2
          className={`text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-balance ${
            dark ? "text-white" : "text-[#121212]"
          }`}
          variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
        >
          {title}
        </motion.h2>
      </motion.div>
      <motion.div
        className={`h-[3px] w-14 bg-[#3A5BA0] mt-4 rounded-full ${isCenter ? "mx-auto" : ""}`}
        initial={{ scaleX: 0, originX: isCenter ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      />
      {description ? (
        <motion.p
          className={`mt-4 font-mono text-sm max-w-xl text-pretty ${isCenter ? "mx-auto" : ""} ${
            dark ? "text-white/60" : "text-[#121212]/60"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
