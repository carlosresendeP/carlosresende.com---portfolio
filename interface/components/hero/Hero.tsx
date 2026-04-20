'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import BlurText from '@/components/BlurText'
import Link from 'next/link'

const ROLES = [
  'Desenvolvedor Front-End',
  'Desenvolvedor Full Stack',
  'Desenvolvedor de Software',
  'Desenvolvedor web'
] as const

const ROLE_INTERVAL_MS = 2000

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, ROLE_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [])

  const currentRole = ROLES[roleIndex];
  const [firstName, ...rest] = currentRole.split(' ');
  const remainingText = rest.join(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">

      {/* Radial glow — bottom-left corner */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_55%_at_0%_100%,rgba(0,229,160,0.09)_0%,transparent_70%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-24">

        {/* Top bar: portfolio label + availability */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase">Portfolio</span>
            <span className="w-px h-3 bg-border" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em]">2026</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wide">
              Disponível para novos projetos
            </span>
          </div>
        </motion.div>

        {/* Name block: vertical accent + CARLOS / RESENDE */}
        <div className="flex items-start gap-5 lg:gap-8 mb-8">

          {/* Editorial line-number accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="flex flex-col items-center gap-2 pt-3 shrink-0"
          >
            <span className="font-mono text-[10px] text-primary tracking-widest">01</span>
            <div
              className="w-px bg-linear-to-b from-primary via-primary/25 to-transparent"
            />
          </motion.div>

          {/* Name lines */}
          <div className="overflow-hidden">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-black text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-foreground"
              >
                CARLOS
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-4 lg:gap-6"
              >
                <h1
                  className="font-black text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-primary"
                >
                  RESENDE
                </h1>
               
              </motion.div>
            </div>
          </div>
        </div>

        {/* Full-width separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-full h-px bg-linear-to-r from-primary/60 via-border/60 to-transparent mb-8 lg:mb-10"
        />

        {/* Lower row: role + description / CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">

          {/* Left: role rotator + description */}
          <div className="flex flex-col gap-5 lg:max-w-lg xl:max-w-xl">

            <div className="flex items-center gap-3 h-7 overflow-hidden" aria-live="polite">
              <span className="font-mono text-xs text-primary shrink-0 select-none">—</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="font-mono text-3xl font-semibold text-primary"
                >
                  {firstName}
                  <span className="text-foreground"> {remainingText}</span>
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.88 }}
            >
              <BlurText
                text="Desenvolvedor Full Stack com foco em soluções web modernas e eficientes. Especializado em criar experiências digitais completas, desde interfaces intuitivas até sistemas robustos e escaláveis."
                delay={55}
                animateBy="words"
                direction="bottom"
                stepDuration={0.3}
                className="text-sm md:text-base text-muted-foreground leading-relaxed"
              />
            </motion.div>
          </div>

          {/* Right: CTAs + mobile stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col gap-3 lg:min-w-[40%]"
          >
            <Link href="#contact">
            <Button
              size="lg"
              className="group gap-2 bg-primary text-primary-foreground
                         font-semibold px-8 rounded-none h-12 transition-all
                         hover:bg-success/90 hover:text-foreground
                         hover:shadow-md hover:shadow-success/20
                         "
            >
              Começar um projeto
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>

            <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border text-muted-foreground hover:text-foreground
                         hover:border-success/40 hover:bg-success/5 px-8 rounded-none h-12
                         bg-transparent transition-all"
            >
              <Mail className="size-4" />
              Entre em contato
            </Button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-[0.35em]">scroll</span>
        <ChevronDown className="size-3 text-muted-foreground animate-bounce" />
      </motion.div>

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  )
}
