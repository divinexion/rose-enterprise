"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    }
    try {
      setLoading(true)
      setStatus(null)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("Thanks! We will get back to you within 1 business day.")
      e.currentTarget.reset()
    } catch {
      setStatus("Something went wrong. Please email us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-sans text-3xl font-semibold md:text-4xl">Let’s talk about your project</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your goals and timeline. We’ll propose the most pragmatic approach.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Contact details</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <address id="about" className="not-italic">
                <p className="font-medium">Rose Enterprise</p>
                <p>123 Business Park, Suite 405</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </address>
              <ul className="mt-4 space-y-1">
                <li>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a
                    className="underline decoration-primary/30 underline-offset-4 hover:text-foreground"
                    href="mailto:hello@roseenterprise.com"
                  >
                    hello@roseenterprise.com
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  <a
                    className="underline decoration-primary/30 underline-offset-4 hover:text-foreground"
                    href="tel:+15551234567"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Hours:</span> Mon–Fri, 9am–6pm PT
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=123%20Business%20Park%2C%20San%20Francisco%2C%20CA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-muted-foreground underline decoration-primary/30 underline-offset-4 hover:text-foreground"
              >
                View on Google Maps
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" required aria-required="true" placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    placeholder="Tell us about your goals..."
                    rows={5}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Sending…" : "Send message"}
                  </Button>
                  <a
                    href="mailto:hello@roseenterprise.com"
                    className="text-sm text-muted-foreground underline decoration-primary/30 underline-offset-4 hover:text-foreground"
                  >
                    or email us directly
                  </a>
                </div>
                {status && (
                  <p role="status" className="text-sm text-muted-foreground">
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
