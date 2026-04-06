'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Autoplay from 'embla-carousel-autoplay'

interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  rating: number
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ana Beatriz',
    role: 'Nutricionista',
    company: 'Clarisse Nutri',
    text: 'Carlos entregou exatamente o que eu precisava. O site ficou moderno, responsivo e muito profissional. Recebi vários elogios dos meus pacientes pela plataforma.',
    rating: 5,
    initials: 'AB',
    color: 'from-primary to-secondary',
  },
  {
    name: 'Rodrigo Mendes',
    role: 'Sócio',
    company: 'Net Gestão',
    text: 'A plataforma de networking que desenvolvemos com Carlos superou nossas expectativas. O sistema de indicações funcionou perfeitamente desde o primeiro dia.',
    rating: 5,
    initials: 'RM',
    color: 'from-secondary to-tertiary',
  },
  {
    name: 'Fernanda Lima',
    role: 'Proprietária',
    company: 'Performance Master',
    text: 'O chatbot integrado no nosso site reduziu drasticamente o tempo de atendimento. Carlos entendeu nosso negócio e entregou uma solução que realmente funciona.',
    rating: 5,
    initials: 'FL',
    color: 'from-tertiary to-primary',
  },
  {
    name: 'Gabriel Santos',
    role: 'CEO',
    company: 'Aparatus',
    text: 'Transformamos nossa barbearia com o sistema de agendamento da Aparatus. Carlos foi extremamente profissional do início ao fim. Recomendo sem qualquer ressalva.',
    rating: 5,
    initials: 'GS',
    color: 'from-primary to-tertiary',
  },
]

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-muted/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <Badge variant="outline" className="border-secondary/30 text-secondary font-mono text-xs px-3">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            O que os clientes <span className="text-secondary">dizem</span>.
          </h2>
        </div>

        {/* Carousel shadcn */}
        <div className="max-w-3xl mx-auto px-8">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: 'center' }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="border-border bg-card shadow-none ring-1 ring-foreground/5">
                    <CardContent className="p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
                      {/* Quote decorativo */}
                      <Quote
                        size={80}
                        className="absolute top-4 right-5 text-primary/5 rotate-180 pointer-events-none"
                      />

                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Texto */}
                      <blockquote className="text-lg text-foreground leading-relaxed relative z-10">
                        {t.text}
                      </blockquote>

                      <Separator />

                      {/* Autor */}
                      <div className="flex items-center gap-4">
                        <div className={`size-12 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{t.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.role} ·{' '}
                            <span className="text-primary">{t.company}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="border-border text-foreground hover:bg-muted -left-6 md:-left-13" />
            <CarouselNext className="border-border text-foreground hover:bg-muted -right-6 md:-right-13" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => api?.scrollTo(i)}
                animate={{ width: i === current ? 24 : 8 }}
                transition={{ duration: 0.3 }}
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  i === current ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
