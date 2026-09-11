'use client'

import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-X1835Zsm479K2WhfCtN96cKfGPkJiA.jpeg',
    alt: 'Maquete escolar com painel solar, horta e casa sustentável',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CUgqWg90o399GcG2B042BZypJwGxhS.png',
    alt: 'Painel solar com bateria e controlador de carga em área externa',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-91IwbFZrW74vHQxNjid7r9TgbQsg2j.png',
    alt: 'Sistema solar com painel, bateria, controlador e bomba de água',
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="galeria" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            Galeria
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Registros do projeto
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Clique em uma imagem para vê-la em tela cheia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 100}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-border shadow-sm"
              >
                <img
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/50">
                  <ZoomIn className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Fechar"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X className="size-6" />
          </button>
          <img
            src={images[selected].src || '/placeholder.svg'}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
