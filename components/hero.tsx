'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, HeartHandshake, Sun } from 'lucide-react'

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 scale-110 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-quilombo.png)',
          transform: `translateY(${offset * 0.35}px) scale(1.15)`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/80"
        aria-hidden="true"
      />

      {/* Animated sun rays */}
      <div className="pointer-events-none absolute right-6 top-24 z-10 sm:right-16 lg:right-28" aria-hidden="true">
        <div className="animate-sun-glow relative grid size-40 place-items-center rounded-full bg-accent/70 blur-2xl sm:size-56" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-end pr-10 sm:pr-24" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-ray absolute top-32 h-[60vh] w-1 origin-top bg-gradient-to-b from-accent/60 to-transparent"
            style={{
              transform: `rotate(${18 + i * 10}deg)`,
              right: `${8 + i * 5}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Sun className="size-4 text-accent" />
            Tecnologia sustentável para comunidades quilombolas
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            Quilombo Sustentável
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/85 sm:text-xl">
            Ciência, tecnologia e sustentabilidade trabalhando juntas para fortalecer comunidades
            quilombolas, preservar o meio ambiente e construir um futuro mais sustentável.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#sobre"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-base font-semibold text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Conheça o Projeto
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ajudar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-display text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <HeartHandshake className="size-5" />
              Como Ajudar
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  )
}
