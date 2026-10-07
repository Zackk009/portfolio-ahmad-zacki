import { PortfolioNav } from "@/components/portfolio/portfolio-nav"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactFooter } from "@/components/portfolio/contact-footer"

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main className="min-h-screen bg-background">
        <PortfolioHero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <ContactFooter />
    </>
  )
}
