'use client'

import { useEffect, useRef, useState } from 'react'
import { Cpu, Droplets, Sun, TreePine } from 'lucide-react'

const stats = [
  { icon: Sun, value: 100, suffix: '%', label: 'Energia Limpa' },
  { icon: TreePine, value: 100, suffix: '%', label: 'Preservação Ambiental' },
  { icon: Droplets, value: 40, suffix: '%', label: 'Uso Inteligente da Água' },
  { icon: Cpu, value: 6, suffix: '', label: 'Tecnologias Sustentáveis' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Impact() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Impacto social
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Resultados que fazem a diferença
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-transform hover:-translate-y-2"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-secondary text-primary">
                <s.icon className="size-8" />
              </span>
              <p className="font-display text-4xl font-extrabold text-primary lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
