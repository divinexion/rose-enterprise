export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rose Enterprise. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex gap-4 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#work" className="hover:text-foreground">
              Work
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
