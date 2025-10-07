import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section aria-label="Hero" className="border-b bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-sans text-4xl font-semibold leading-tight md:text-5xl">
            Building reliable, scalable software for modern businesses
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Rose Enterprise provides end-to-end IT services: web and mobile development, cloud & DevOps, UI/UX, QA
            automation, and consulting. Partner with a team that ships securely and on time.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="#contact">Get a free consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#services">Explore services</Link>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-border/50 bg-card/60 p-4 backdrop-blur-md">
              <dt className="text-xs text-muted-foreground">Projects Delivered</dt>
              <dd className="mt-1 text-2xl font-semibold">120+</dd>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/60 p-4 backdrop-blur-md">
              <dt className="text-xs text-muted-foreground">Avg. Engagement</dt>
              <dd className="mt-1 text-2xl font-semibold">6–18 mo</dd>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/60 p-4 backdrop-blur-md">
              <dt className="text-xs text-muted-foreground">Client Retention</dt>
              <dd className="mt-1 text-2xl font-semibold">92%</dd>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/60 p-4 backdrop-blur-md">
              <dt className="text-xs text-muted-foreground">On-time Delivery</dt>
              <dd className="mt-1 text-2xl font-semibold">98%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
