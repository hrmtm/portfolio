"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#060610]">

      {/* Deep space base gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(99,60,255,0.18) 0%, rgba(20,10,60,0.35) 50%, transparent 80%)",
        }}
      />

      {/* Bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to top, #060610, transparent)",
        }}
      />

      {/* Meteors */}
      <div className="absolute inset-0">
        <Meteors number={40} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">

        {/* Status badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-white/50 uppercase">
            available · germany
          </span>
        </div>

        {/* Gooey morphing name */}
        <div className="mb-6 h-[clamp(70px,16vw,155px)] flex items-center justify-center" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          <GooeyText
            texts={["harimtim", "hrmtm", "hxrmtm"]}
            morphTime={1}
            cooldownTime={1.5}
            className="w-[600px] max-w-[90vw]"
            textClassName="text-[clamp(64px,15vw,140px)] font-normal leading-[0.9] tracking-[-0.04em] text-white"
          />
        </div>

        {/* Tagline */}
        <p className="text-white/40 text-[15px] max-w-xs leading-relaxed mb-14 font-light">
          Auszubildender Anwendungsentwickler.<br />
          Noch am Lernen.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hrmtm"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-mono text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://discord.com/users/811988073700130887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-[13px] font-mono text-[#060610] font-medium transition-all duration-300 hover:bg-white/90 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Kontakt
          </a>
        </div>
      </div>

      {/* Corner label */}
      <div className="absolute bottom-8 left-8 font-mono text-[11px] text-white/15 tracking-widest uppercase">
        &copy; 2026
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[11px] text-white/15 tracking-widest uppercase">
        Portfolio
      </div>

    </main>
  );
}
