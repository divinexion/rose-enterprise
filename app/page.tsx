import SiteHeader from "../components/site-header"
import Hero from "../components/hero"
import Services from "../components/services"
import WorkExperience from "../components/work-experience"
import ContactSection from "../components/contact-section"
import SiteFooter from "../components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100dvh-64px)]">
        <Hero />
        <Services />
        <WorkExperience />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
