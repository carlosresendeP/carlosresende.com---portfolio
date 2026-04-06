'use client'

import { motion } from 'motion/react'
import { Search, Palette, Code2, Rocket, ArrowDown, ArrowRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Step {
  number: string
  icon: React.ElementType
  title: string
  description: string
  colorClass: string          // ex: text-primary
  bgClass: string             // ex: bg-primary/10
  borderClass: string         // ex: border-primary/30
  glowVar: string             // CSS var para o glow inline
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Pesquisa',
    description:
      'Analiso seu negócio, concorrentes e público-alvo para identificar necessidades reais e traçar a estratégia ideal antes de qualquer linha de código.',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/30',
    glowVar: 'var(--color-primary)',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description:
      'Crio wireframes e protótipos com foco em clareza, usabilidade e identidade visual totalmente alinhada à sua marca.',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    borderClass: 'border-secondary/30',
    glowVar: 'var(--color-secondary)',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Transformo o design em interfaces reais com código limpo, performático e escalável usando as melhores tecnologias do mercado.',
    colorClass: 'text-tertiary',
    bgClass: 'bg-tertiary/10',
    borderClass: 'border-tertiary/30',
    glowVar: 'var(--color-tertiary)',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Entrega',
    description:
      'Entrego o projeto finalizado com documentação, suporte pós-lançamento e garantia de qualidade em cada detalhe.',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/30',
    glowVar: 'var(--color-primary)',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Cabeçalho ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <Badge
            variant="outline"
            className="font-mono text-xs uppercase tracking-widest text-tertiary border-tertiary/30 bg-tertiary/10 px-3 py-1"
          >
            Como Trabalho
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Meu processo de{' '}
            <span className="text-tertiary">trabalho</span>.
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Um fluxo estruturado que garante qualidade, alinhamento e resultados
            consistentes em cada projeto.
          </p>
        </div>

        {/* ── Roadmap ── */}
        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1
            const isEven = i % 2 === 0

            return (
              <div key={step.number} className="w-full flex flex-col items-center">

                {/* Row: card + linha lateral (desktop alterna lados) */}
                <div
                  className={`w-full max-w-4xl flex flex-col md:flex-row gap-6 items-center
                    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* ── Card ── */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    className="flex-1"
                  >
                    <Card
                      className={`group relative overflow-hidden border ${step.borderClass}
                        bg-card hover:shadow-2xl transition-all duration-500`}
                      style={{
                        ['--glow' as string]: step.glowVar,
                      }}
                    >
                      {/* Glow de fundo ao hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at ${isEven ? '0%' : '100%'} 50%, color-mix(in oklch, ${step.glowVar} 12%, transparent) 0%, transparent 70%)`,
                        }}
                      />

                      <CardContent className="p-7 flex gap-5 items-start relative z-10">
                        {/* Ícone */}
                        <div
                          className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center
                            border ${step.borderClass} ${step.bgClass} ${step.colorClass}
                            group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={26} strokeWidth={1.8} />
                        </div>

                        {/* Texto */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className={`font-mono text-[10px] uppercase tracking-widest
                                ${step.colorClass} ${step.borderClass} ${step.bgClass}`}
                            >
                              Etapa {step.number}
                            </Badge>
                          </div>

                          <h3 className={`text-xl font-bold text-foreground group-hover:${step.colorClass} transition-colors duration-300`}>
                            {step.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Número decorativo de fundo */}
                        <span
                          className={`absolute bottom-3 right-5 text-7xl font-black font-mono
                            opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300
                            select-none pointer-events-none ${step.colorClass}`}
                        >
                          {step.number}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* ── Número do step (lado contrário) ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                    className={`hidden md:flex shrink-0 w-20 h-20 rounded-full items-center justify-center
                      border-2 ${step.borderClass} ${step.bgClass} relative`}
                  >
                    <span className={`text-2xl font-black font-mono ${step.colorClass}`}>
                      {step.number}
                    </span>
                    {/* Pulse ring */}
                    <span
                      className={`absolute inset-0 rounded-full border-2 ${step.borderClass} animate-ping opacity-20`}
                    />
                  </motion.div>
                </div>

                {/* ── Conector entre steps ── */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                    className="origin-top"
                  >
                    {/* Mobile: seta vertical */}
                    <div className="flex md:hidden flex-col items-center py-2 gap-1">
                      <Separator orientation="vertical" className="h-8 w-px" />
                      <ArrowDown size={16} className="text-muted-foreground/40" />
                    </div>

                    {/* Desktop: linha + seta com desvio para o lado certo */}
                    <div
                      className={`hidden md:flex flex-col items-center py-2 gap-1
                        ${isEven ? 'ml-[calc(50%-2.5rem)]' : 'mr-[calc(50%-2.5rem)]'}`}
                    >
                      <Separator orientation="vertical" className="h-10 w-px opacity-40" />
                      <ArrowDown size={16} className="text-muted-foreground/40" />
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
