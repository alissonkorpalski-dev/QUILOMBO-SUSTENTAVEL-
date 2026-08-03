'use client'

import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#quilombolas', label: 'Quilombolas' },
  { href: '#energia', label: 'Energia Solar' },
  { href: '#agua', label: 'Água' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#ajudar', label: 'Como Ajudar' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/85 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className={cn(
            'flex items-center gap-2 font-display text-lg font-bold tracking-tight transition-colors',
            scrolled ? 'text-primary' : 'text-white',
          )}
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <Leaf className="size-5" />
          </span>
          Quilombo Sustentável
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:bg-secondary hover:text-primary'
                  : 'text-white/85 hover:bg-white/15 hover:text-white',
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#ajudar"
            className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:-translate-y-0.5"
          >
            Como Ajudar
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'grid size-10 place-items-center rounded-xl transition-colors lg:hidden',
            scrolled ? 'text-primary hover:bg-secondary' : 'text-white hover:bg-white/15',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
