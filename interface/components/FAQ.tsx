'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, MessageCircle } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: 'Quais serviços você oferece?',
    answer: 'Desenvolvo sites institucionais, landing pages, sistemas web e plataformas personalizadas. Cuido desde a interface moderna e responsiva até a integração com bancos de dados e automações com IA.',
  },
  {
    question: 'Com quais tecnologias você trabalha?',
    answer: 'No front-end uso React, Next.js, TypeScript e TailwindCSS. No back-end tenho experiência com Node.js, Express, MongoDB, PostgreSQL e Prisma. Também trabalho com automações via n8n e IA (ChatGPT, Gemini).',
  },
  {
    question: 'Você já desenvolveu projetos completos (fullstack)?',
    answer: 'Sim! Entre eles estão o DevBills (gestão financeira), Vaga Certa (otimização de currículos com IA), Aparatus (SaaS para barbearias) e Net Gestão (plataforma de networking). Todos em produção.',
  },
  {
    question: 'Quanto tempo leva um projeto?',
    answer: 'Depende da complexidade. Uma landing page pode ser entregue em 1 a 2 semanas. Sistemas mais robustos levam de 1 a 3 meses. Sempre defino prazos claros no início do projeto.',
  },
  {
    question: 'Qual é o investimento para desenvolver um site ou sistema?',
    answer: 'O valor varia conforme escopo, funcionalidades e prazo. Faço orçamentos personalizados e transparentes. Entre em contato para conversarmos sobre o seu projeto — o orçamento é gratuito.',
  },
  {
    question: 'Como funciona seu processo de trabalho?',
    answer: 'Sigo 4 etapas: (1) Pesquisa e briefing para entender seu negócio, (2) Design e prototipagem, (3) Desenvolvimento com entregas parciais, e (4) Entrega final com suporte. Mantenho contato constante ao longo do processo.',
  },
  {
    question: 'Você oferece suporte após a entrega?',
    answer: 'Sim! Incluo suporte pós-entrega para ajustes e pequenas correções. Também ofereço planos de manutenção contínua para quem precisa evoluir o projeto com o tempo.',
  },
]

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-start gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-[10px] text-primary tracking-widest shrink-0 pt-[3px]">
          Q{String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200 pr-4 leading-snug">
          {item.question}
        </span>
        <div
          className={`shrink-0 w-5 h-5 border flex items-center justify-center transition-all duration-200 mt-0.5
            ${isOpen
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary/60'
            }`}
        >
          {isOpen
            ? <Minus size={10} strokeWidth={2.5} />
            : <Plus size={10} strokeWidth={2.5} />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pl-[3.25rem] pb-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-px w-full bg-border/40" />
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card/20 relative overflow-hidden">

      {/* Grid texture — matches system */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header — 05 marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 lg:gap-8 mb-14 lg:mb-16"
        >
          <div className="flex flex-col items-center gap-2 pt-2 shrink-0">
            <span className="font-mono text-[10px] text-primary tracking-widest">05</span>
            <div className="w-px h-16 bg-linear-to-b from-primary via-primary/25 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
            <div>
              <p className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">FAQ</p>
              <h2
                className="font-black uppercase leading-none tracking-tight text-foreground"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
              >
                Perguntas<br />
                <span style={{ color: 'var(--primary)' }}>frequentes.</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-mono lg:text-right">
              As principais dúvidas sobre meu trabalho, prazos e forma de atuação —
              respondidas antes mesmo de entrarmos em contato.
            </p>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-full h-px bg-linear-to-r from-primary/50 via-border to-transparent mb-0"
        />

        {/* Accordion — editorial numbered rows */}
        <div className="border border-t-0 border-border">
          <div className="h-px w-full bg-border/40" />
          {faqData.map((item, i) => (
            <div key={i} className="px-6 lg:px-8">
              <FaqRow item={item} index={i} />
            </div>
          ))}
        </div>

        {/* WhatsApp CTA bar — flush with accordion */}
        <div className="relative border border-t-0 border-border bg-card overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-start gap-5">
              <span className="font-mono text-xs text-primary hidden sm:block pt-0.5">→</span>
              <div>
                <p className="text-base font-bold text-foreground">Ainda com dúvidas?</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Não encontrou o que procurava? Fale diretamente comigo — fico feliz em ajudar!
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/5532${process.env.NEXT_PUBLIC_PHONE}?text=Ol%C3%A1! Gostaria de tirar algumas d%C3%BAvidas sobre seus servi%C3%A7os.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-primary
                         text-white font-semibold text-sm transition-all shrink-0
                         hover:bg-success/90 hover:text-foreground
                         hover:shadow-md hover:shadow-success/20
                         "
            >
              <MessageCircle size={14} />
              Falar via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
