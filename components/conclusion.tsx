import { Leaf, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Conclusion() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="absolute inset-0 -z-0 opacity-10" aria-hidden="true">
        <div className="animate-sun-glow absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <Sparkles className="size-4 text-accent" />
            Conclusão
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Um futuro mais justo e sustentável é possível
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-primary-foreground/85 sm:text-xl">
            A ciência e a tecnologia podem caminhar junto com a preservação da cultura quilombola.
            Projetos sustentáveis mostram que é possível produzir energia limpa, economizar água e
            cuidar do meio ambiente, promovendo qualidade de vida para as comunidades e construindo
            um futuro mais justo e sustentável.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 font-display text-lg font-semibold text-accent">
            <Leaf className="size-5" />
            Quilombo Sustentável
          </div>
        </Reveal>
      </div>
    </section>
  )
}
