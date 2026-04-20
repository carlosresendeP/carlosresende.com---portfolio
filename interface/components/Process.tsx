'use client'

import { motion } from 'motion/react'
import { Search, Palette, Code2, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Pesquisa',
    description:
      'Analiso seu negócio, concorrentes e público-alvo para identificar necessidades reais e traçar a estratégia ideal antes de qualquer linha de código.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description:
      'Crio wireframes e protótipos com foco em clareza, usabilidade e identidade visual totalmente alinhada à sua marca.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Transformo o design em interfaces reais com código limpo, performático e escalável usando as melhores tecnologias do mercado.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Entrega',
    description:
      'Entrego o projeto finalizado com documentação, suporte pós-lançamento e garantia de qualidade em cada detalhe.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-card/20 relative overflow-hidden">

      {/* Grid texture — matches system */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header — 03 marker, matches editorial system */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 lg:gap-8 mb-14 lg:mb-16"
        >
          <div className="flex flex-col items-center gap-2 pt-2 shrink-0">
            <span className="font-mono text-[10px] text-primary tracking-widest">03</span>
            <div className="w-px h-16 bg-linear-to-b from-primary via-primary/25 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
            <div>
              <p className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">
                Como Trabalho
              </p>
              <h2
                className="font-black uppercase leading-none tracking-tight text-foreground"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
              >
                Meu processo de<br />
                <span className='text-primary'>trabalho</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-mono lg:text-right">
              Um fluxo estruturado que garante qualidade, alinhamento e resultados
              consistentes em cada projeto.
            </p>
          </div>
        </motion.div>

        {/* Full-width separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-full h-px bg-linear-to-r from-primary/50 via-border to-transparent mb-16"
        />

        {/* Timeline steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-6 lg:gap-12"
              >
                {/* Left column: icon node + connecting line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-10 h-10 flex items-center justify-center border border-border
                                bg-background group-hover:border-primary/50 group-hover:bg-primary/5
                                transition-all duration-300 z-10"
                  >
                    <Icon size={16} strokeWidth={1.5} className="text-primary" />
                  </div>

                  {!isLast && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1 + 0.25, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'top' }}
                      className="w-px flex-1 min-h-[72px] bg-linear-to-b from-primary/50 to-primary/10"
                    />
                  )}
                </div>

                {/* Right column: content */}
                <div className={`flex-1 min-w-0 pt-1 ${!isLast ? 'pb-14' : ''}`}>

                  {/* Step label + rule */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase shrink-0">
                      Etapa {step.number}
                    </span>
                    <div className="flex-1 h-px bg-border/40 max-w-24" />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-black uppercase tracking-tight text-foreground group-hover:text-primary
                               transition-colors duration-200 leading-none mb-3"
                    style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description + ghost number */}
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>

                    {/* Ghost number — desktop only */}
                    <span
                      className="hidden xl:block shrink-0 font-black font-mono select-none
                                 text-foreground/4 group-hover:text-primary/[0.07]
                                 transition-colors duration-300 leading-none"
                      style={{ fontSize: 'clamp(56px, 5vw, 88px)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
