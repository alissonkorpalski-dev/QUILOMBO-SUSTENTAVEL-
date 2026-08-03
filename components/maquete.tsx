import { ArrowRight, BatteryCharging, Cpu, Droplets, Gauge, SunMedium, Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const components = [
  { icon: SunMedium, title: 'Painel Solar' },
  { icon: Gauge, title: 'Controlador de carga' },
  { icon: BatteryCharging, title: 'Bateria' },
  { icon: Cpu, title: 'Conversor LM2596' },
  { icon: Waves, title: "Bomba d'água" },
  { icon: Droplets, title: 'Sistema de irrigação' },
]

export function Maquete() {
  return (
    <section id="maquete" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Nossa maquete
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Da energia solar à irrigação
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Nosso protótipo demonstra, na prática, o fluxo completo da energia captada pelo sol até a
            água chegar às plantações.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
              {components.map((c, i) => (
                <div key={c.title} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-3">
                  <div className="flex w-full flex-1 flex-col items-center gap-3 rounded-2xl bg-secondary p-5 text-center transition-transform hover:-translate-y-1">
                    <span className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                      <c.icon className="size-7" />
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground">{c.title}</span>
                  </div>
                  {i < components.length - 1 && (
                    <ArrowRight className="size-6 shrink-0 rotate-90 text-accent lg:rotate-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
