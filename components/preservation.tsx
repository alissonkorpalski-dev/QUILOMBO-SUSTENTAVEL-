import { Bird, Droplets, Factory, Mountain, Sprout, SunMedium } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  { icon: Factory, title: 'Redução da poluição', text: 'Menos queima de combustíveis fósseis significa ar mais limpo para toda a comunidade.' },
  { icon: SunMedium, title: 'Energia renovável', text: 'O sol fornece energia inesgotável, gratuita e sem emissão de gases poluentes.' },
  { icon: Mountain, title: 'Conservação do solo', text: 'Práticas sustentáveis evitam a erosão e mantêm o solo fértil por mais tempo.' },
  { icon: Droplets, title: 'Economia de água', text: 'Captação e reúso garantem o uso inteligente de um recurso cada vez mais escasso.' },
  { icon: Sprout, title: 'Agricultura sustentável', text: 'Alimentos produzidos com respeito à terra e às futuras gerações.' },
  { icon: Bird, title: 'Proteção da biodiversidade', text: 'Ecossistemas preservados abrigam plantas e animais essenciais ao equilíbrio.' },
]

export function Preservation() {
  return (
    <section id="preservacao" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Preservação ambiental
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Cuidar do meio ambiente é cuidar de todos
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 120}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl">
                <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <card.icon className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
