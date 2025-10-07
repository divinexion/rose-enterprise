"use client"

import type React from "react"

export default function WaterBackground() {
  return (
    <div aria-hidden="true" className="water-bg pointer-events-none overflow-hidden">
      {/* Moving soft gradient */}
      <div className="water-noise absolute inset-0" />

      {/* Animated waves at the bottom */}
      <svg
        className="water-waves absolute bottom-0 left-0 h-40 w-[200%] sm:h-56 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,133.3C840,149,960,203,1080,197.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="currentColor"
          className="[color:var(--water-20)]"
        />
      </svg>
      <svg
        className="water-waves2 absolute bottom-0 left-0 h-48 w-[220%] sm:h-64 md:h-72"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          d="M0,224L60,224C120,224,240,224,360,208C480,192,600,160,720,149.3C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="currentColor"
          className="[color:var(--water-28)]"
        />
      </svg>

      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {[
          { x: "8%", d: "18s", delay: "0s", s: "8px" },
          { x: "22%", d: "22s", delay: "2s", s: "10px" },
          { x: "38%", d: "20s", delay: "4s", s: "6px" },
          { x: "57%", d: "24s", delay: "1s", s: "12px" },
          { x: "73%", d: "19s", delay: "3s", s: "7px" },
          { x: "88%", d: "23s", delay: "5s", s: "9px" },
        ].map((b, i) => (
          <span
            key={i}
            className="bubble block"
            style={
              {
                "--x": b.x,
                "--d": b.d,
                "--delay": b.delay,
                "--size": b.s,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
