import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const services = [
  {
    title: "Web Development",
    points: ["Next.js, React", "APIs & Integrations", "Performance & SEO"],
  },
  {
    title: "Mobile Development",
    points: ["React Native", "iOS & Android", "CI/CD & Distribution"],
  },
  {
    title: "Cloud & DevOps",
    points: ["AWS, Vercel, GCP", "CI/CD pipelines", "Observability & SRE"],
  },
  {
    title: "UI/UX Design",
    points: ["Wireframes to Handoff", "Design Systems", "Accessibility (WCAG)"],
  },
  {
    title: "QA & Automation",
    points: ["E2E & Unit Tests", "CI Test Suites", "Security & Compliance"],
  },
  {
    title: "IT Consulting",
    points: ["Architecture Reviews", "Cost Optimization", "Roadmaps & Audits"],
  },
]

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary text-primary-foreground">Services</Badge>
          <h2 className="mt-3 text-balance font-sans text-3xl font-semibold md:text-4xl">
            Full-stack IT services tailored to your goals
          </h2>
          <p className="mt-3 text-muted-foreground">
            We align technology to your business outcomes—delivering secure, maintainable software that scales.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="h-full border-border/50 bg-card/60 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
