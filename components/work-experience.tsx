import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const work = [
  {
    company: "Aurora Retail",
    project: "Headless commerce platform",
    result: "Reduced TTFB by 48% and increased conversion by 19%.",
  },
  {
    company: "Nimbus Health",
    project: "HIPAA-compliant patient portal",
    result: "Launched in 12 weeks with 99.95% uptime.",
  },
  {
    company: "FinEdge",
    project: "Real-time analytics dashboard",
    result: "Cut BI latency from minutes to seconds.",
  },
  {
    company: "SwiftLogistics",
    project: "Driver mobile app + backend",
    result: "Improved on-time delivery by 14%.",
  },
  {
    company: "EduNova",
    project: "Interactive learning platform",
    result: "Scaled to 1M MAU with stable costs.",
  },
  {
    company: "GreenGrid",
    project: "IoT fleet monitoring",
    result: "Reduced downtime by 22% with proactive alerts.",
  },
]

export default function WorkExperience() {
  return (
    <section id="work" aria-label="Work Experience" className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-sans text-3xl font-semibold md:text-4xl">Selected work and outcomes</h2>
          <p className="mt-3 text-muted-foreground">
            A snapshot of impactful projects across commerce, health, finance, logistics, education, and IoT.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {work.map((w) => (
            <Card key={w.project} className="border-border/50 bg-card/60 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">{w.company}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="font-medium">{w.project}</p>
                <p className="mt-1 text-muted-foreground">{w.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
