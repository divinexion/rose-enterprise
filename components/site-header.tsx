import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#" className="font-sans text-lg font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          <span className="text-pretty">Rose Enterprise</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
            Services
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground">
            Work
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
