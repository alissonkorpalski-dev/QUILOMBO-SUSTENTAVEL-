import { Droplets, Leaf, Sun } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  { icon: Sun, label: 'Energia limpa', color: 'text-sun' },
  { icon: Droplets, label: 'Reúso de água', color: 'text-leaf' },
  { icon: Leaf, label: 'Preservação', color: 'text-primary' },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Sobre o projeto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Tecnologia a serviço da vida e da cultura
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Este projeto demonstra como tecnologias sustentáveis podem melhorar a qualidade de vida
            das comunidades quilombolas por meio da geração de energia limpa, reutilização da água e
            preservação ambiental, respeitando sua cultura e fortalecendo seu desenvolvimento.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm transition-transform hover:-translate-y-1"
              >
                <p.icon className={`size-5 ${p.color}`} />
                <span className="font-display text-sm font-semibold text-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden="true" />
            <img
              src="/images/about-solar.png"
              alt="Instalação de painel solar em uma horta comunitária sustentável"
              className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="animate-float-slow absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:-left-8">
              <p className="font-display text-3xl font-extrabold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">energia renovável</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
