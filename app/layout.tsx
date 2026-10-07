import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ahmad Zacki Habibi — Electrical Engineering Portfolio",
  description:
    "Final-year Electrical Engineering student at Telkom University specialising in IoT, Embedded Systems, and Automation. Explore projects, skills, and experience.",
  keywords: ["Ahmad Zacki Habibi", "Electrical Engineering", "IoT", "Embedded Systems", "ESP32", "Telkom University"],
  openGraph: {
    type: "website",
    title: "Ahmad Zacki Habibi — Electrical Engineering Portfolio",
    description: "Final-year Electrical Engineering student specialising in IoT, Embedded Systems, and Automation.",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1a2744",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      <body className={`font-sans antialiased`}>
        <ClickSpark
          sparkColor="#3A5BA0"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
