'use client'

import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-tertiary/20" />

      {/* Círculos decorativos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-tertiary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grade decorativa */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-mono text-foreground/80 uppercase tracking-wider">
              Disponível para novos projetos
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-tertiary">
              transformar
            </span>
            {' '}sua ideia?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Vamos conversar sobre o seu projeto. Em menos de 24 horas você recebe um retorno com as melhores opções para o seu caso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Iniciar um Projeto
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/5532998283189?text=Ol%C3%A1! Quero saber mais sobre seus servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
