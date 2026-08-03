'use client'

import { useState } from 'react'
import {
  ArrowDown,
  BatteryCharging,
  Cpu,
  Droplets,
  Gauge,
  Sun,
  SunMedium,
  Waves,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const steps = [
  { icon: Sun, title: 'Sol', desc: 'A luz do sol é a fonte de energia gratuita e renovável que alimenta todo o sistema.' },
  { icon: SunMedium, title: 'Painel Solar', desc: 'Converte a luz solar em energia elétrica por meio de células fotovoltaicas.' },
  { icon: Gauge, title: 'Controlador de Carga', desc: 'Regula a tensão e a corrente, protegendo a bateria contra sobrecarga.' },
  { icon: BatteryCharging, title: 'Bateria', desc: 'Armazena a energia gerada para uso quando não há sol, garantindo funcionamento contínuo.' },
  { icon: Cpu, title: 'Conversor LM2596', desc: 'Ajusta a tensão para o valor ideal exigido pela bomba de água.' },
  { icon: Waves, title: 'Bomba de Água', desc: 'Utiliza a energia para captar e mover a água até o sistema de irrigação.' },
  { icon: Droplets, title: 'Sistema de Irrigação', desc: 'Distribui a água de forma eficiente para as plantações, evitando desperdícios.' },
]

export function SolarEnergy() {
  const [active, setActive] = useState(0)

  return (
    <section id="energia" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Energia solar
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Do sol até a irrigação
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Passe o mouse (ou toque) em cada etapa para entender como a energia solar percorre o
            caminho até levar água para as plantações.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Flow chain */}
          <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {steps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  'group relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all duration-300',
                  active === i
                    ? 'border-accent bg-accent/15 shadow-lg -translate-y-1'
                    : 'border-border bg-card hover:-translate-y-1 hover:border-accent/60',
                )}
              >
                <span
                  className={cn(
                    'grid size-12 place-items-center rounded-xl transition-colors',
                    active === i ? 'bg-accent text-accent-foreground' : 'bg-secondary text-primary',
                  )}
                >
                  <step.icon className="size-6" />
                </span>
                <span className="font-display text-sm font-semibold text-foreground">{step.title}</span>
                {i < steps.length - 1 && (
                  <ArrowDown className="absolute -bottom-3 left-1/2 hidden size-4 -translate-x-1/2 text-accent lg:block" />
                )}
              </button>
            ))}
          </Reveal>

          {/* Detail card */}
          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-xl">
              <div className="flex items-center gap-4 border-b border-white/10 bg-white/5 p-6">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  {(() => {
                    const Icon = steps[active].icon
                    return <Icon className="size-7" />
                  })()}
                </span>
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                    Etapa {active + 1} de {steps.length}
                  </p>
                  <h3 className="font-display text-2xl font-bold">{steps[active].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-lg leading-relaxed text-primary-foreground/85">{steps[active].desc}</p>
                <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-500"
                    style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
