import { CheckCircle2, HeartPulse, Leaf, PiggyBank, Sun, TreePine, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const benefits = [
  { icon: Sun, title: 'Energia Limpa' },
  { icon: PiggyBank, title: 'Economia Financeira' },
  { icon: Leaf, title: 'Sustentabilidade' },
  { icon: TreePine, title: 'Preservação Ambiental' },
  { icon: Users, title: 'Desenvolvimento das Comunidades' },
  { icon: HeartPulse, title: 'Melhor Qualidade de Vida' },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Benefícios
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Um ciclo que transforma realidades
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 120}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <b.icon className="size-7" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-accent" />
                    <span className="font-display text-lg font-semibold">{b.title}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
