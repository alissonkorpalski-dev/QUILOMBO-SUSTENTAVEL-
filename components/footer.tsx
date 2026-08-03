import { Leaf } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 font-display text-xl font-bold text-primary">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            Quilombo Sustentável
          </div>
          <p className="max-w-2xl leading-relaxed text-pretty text-muted-foreground">
            Como a ciência e a tecnologia podem ajudar comunidades quilombolas a produzir energia
            limpa, reutilizar água e preservar o meio ambiente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              Projeto Escolar
            </span>
            <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              Turma 202
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quilombo Sustentável — Feito com respeito à cultura e ao meio
            ambiente.
          </p>
        </div>
      </div>
    </footer>
  )
}
