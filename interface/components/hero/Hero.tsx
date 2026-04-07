'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import BlurText from '@/components/BlurText'
import PixelSnow from '@/components/PixelSnow'

const ROLES = [
  'Desenvolvedor Front-End',
  'Desenvolvedor Full Stack',
  'Desenvolvedor de Software',
  'Desenvolvedor web'
] as const

const ROLE_INTERVAL_MS = 4000

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, ROLE_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background ">

      {/* Background WebGL animado */}
      <div className="absolute inset-0 top-0">
        <PixelSnow
          color="#c8cecd"
          variant="snowflake"
          density={0.25}
          speed={1.25}
          brightness={1.2}
          flakeSize={0.015}
          pixelResolution={500}
        />
      </div>

      {/* Overlay para legibilidade do texto */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Badge disponível */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-border bg-card/60 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <span className="text-sm text-foreground/80 font-medium tracking-wide">
            Disponível para novos projetos
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="text-3xl max-w-5xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-3"
        >
          Olá, eu sou{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-tertiary">
            Carlos Resende
          </span>
        </motion.h1>

        {/* Role com AnimatePresence */}
        <div className="h-10 flex items-center justify-center mb-8" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-xl md:text-2xl font-medium text-foreground"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Descrição com BlurText */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mb-12 w-full"
        >
          <BlurText
            text="Transformo ideias em produtos digitais de alta qualidade interfaces modernas, APIs robustas e experiências que encantam."
            delay={55}
            animateBy="words"
            direction="bottom"
            stepDuration={0.3}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto justify-center"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 bg-primary hover:bg-accent/80 hover:shadow-md  text-primary-foreground font-semibold px-8 rounded-full transition-colors"
          >
            Começar um projeto
            <ArrowRight className="size-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto gap-2 border-border text-foreground hover:bg-muted px-8 rounded-full transition-colors"
          >
            <Mail className="size-4" />
            Entre em contato
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col mb-3 items-center gap-1.5"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">scroll</span>
        <ChevronDown className="size-4 text-muted-foreground animate-bounce" />
      </motion.div>

      <div className='bg-linear-to-b from-transparent to-background z-10  absolute bottom-0 h-14 w-full'>
        
      </div>


    </section>
  )
}
