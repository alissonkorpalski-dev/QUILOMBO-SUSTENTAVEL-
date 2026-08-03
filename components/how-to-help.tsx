import { ArrowUpRight, Sun, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const orgs = [
  {
    icon: Users,
    name: 'CONAQ',
    desc: 'Coordenação Nacional de Articulação das Comunidades Negras Rurais Quilombolas.',
    href: 'https://conaq.org.br',
  },
  {
    icon: Sun,
    name: 'Rede Energia e Comunidades',
    desc: 'Organização que promove acesso à energia limpa em comunidades tradicionais.',
    href: 'https://energiaecomunidades.com.br',
  },
]

export function HowToHelp() {
  return (
    <section id="ajudar" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Como você pode ajudar
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Apoie quem transforma comunidades
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Diversas organizações trabalham para fortalecer comunidades quilombolas por meio de
            projetos sociais, sustentabilidade e acesso à energia limpa.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {orgs.map((org, i) => (
            <Reveal key={org.name} delay={i * 140}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl">
                <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <org.icon className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{org.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{org.desc}</p>
                <a
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Conhecer Projeto
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
