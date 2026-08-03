import { Reveal } from '@/components/reveal'

const timeline = [
  {
    year: 'Séc. XVI–XIX',
    title: 'Formação dos quilombos',
    text: 'Comunidades formadas por africanos escravizados que resistiram e preservaram sua cultura, história e tradições.',
  },
  {
    year: '1988',
    title: 'Reconhecimento constitucional',
    text: 'A Constituição reconhece o direito das comunidades remanescentes de quilombos à titulação de suas terras.',
  },
  {
    year: 'Hoje',
    title: 'Agricultura sustentável',
    text: 'Muitas comunidades desenvolvem práticas agrícolas sustentáveis e mantêm forte relação com a terra.',
  },
  {
    year: 'Futuro',
    title: 'Energia e infraestrutura',
    text: 'A luta por melhores condições de infraestrutura, educação, acesso à água e energia limpa continua.',
  },
]

export function Quilombolas() {
  return (
    <section id="quilombolas" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="absolute inset-0 -z-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-20 top-10 size-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute -right-10 bottom-0 size-80 rounded-full bg-leaf blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Cultura e história
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            O que são comunidades quilombolas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-primary-foreground/80">
            São grupos formados por descendentes de africanos escravizados que preservam sua cultura,
            história, tradições e forte relação com a terra. Hoje muitas dessas comunidades
            desenvolvem práticas agrícolas sustentáveis e lutam por melhores condições de
            infraestrutura, educação, acesso à água e energia.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span className="font-display text-sm font-semibold text-accent">{item.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
