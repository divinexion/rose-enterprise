import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import WaterBackground from "../components/water-background"

export const metadata: Metadata = {
  title: "Rose Enterprise — IT Services",
  description:
    "End-to-end IT services: web & mobile development, cloud & DevOps, UI/UX, QA automation, and consulting. Partner with Rose Enterprise to build secure, scalable software.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WaterBackground />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
