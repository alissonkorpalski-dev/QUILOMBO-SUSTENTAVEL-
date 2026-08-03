import { ChevronRight, CloudRain, Filter, Sprout, Warehouse, Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const flow = [
  { icon: CloudRain, title: 'Chuva', desc: 'A água da chuva é a fonte natural do ciclo.' },
  { icon: Waves, title: 'Captação', desc: 'Calhas e superfícies direcionam a água para o sistema.' },
  { icon: Filter, title: 'Filtro', desc: 'Remove impurezas e folhas antes do armazenamento.' },
  { icon: Warehouse, title: 'Reservatório', desc: 'Armazena a água tratada para uso posterior.' },
  { icon: Sprout, title: 'Irrigação', desc: 'A água é reaproveitada nas plantações.' },
]

export function WaterReuse() {
  return (
    <section id="agua" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
              Reutilização da água
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Cada gota conta
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              Reutilizar a água reduz desperdícios, garante o abastecimento em períodos de seca e
              melhora a produção agrícola. Um sistema simples de captação e filtragem transforma a
              chuva em um recurso valioso para toda a comunidade.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="font-display text-3xl font-extrabold text-leaf">-40%</p>
                <p className="text-sm text-muted-foreground">de desperdício de água</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="font-display text-3xl font-extrabold text-primary">+30%</p>
                <p className="text-sm text-muted-foreground">de produção agrícola</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="relative space-y-3">
              {flow.map((item, i) => (
                <li
                  key={item.title}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-primary text-primary-foreground">
                    <item.icon className="size-6" />
                    <span
                      className="animate-flow-down absolute inset-x-0 top-0 h-2 bg-accent/70"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {i < flow.length - 1 && (
                    <ChevronRight className="size-5 shrink-0 rotate-90 text-accent" />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
