'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, MessageCircle } from 'lucide-react'

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

function FaqItemComponent({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted/30 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm md:text-base pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
        />
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
            <div className="px-5 pb-5 pt-1">
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-16 items-start">
          {/* Lado esquerdo: título + contato */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-start items-start lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
              <span className="text-xs font-mono text-tertiary uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Perguntas <span className="text-tertiary">frequentes</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              As principais dúvidas sobre meu trabalho, prazos e forma de atuação — respondidas antes mesmo de entrarmos em contato.
            </p>

            {/* Card de contato rápido */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="font-semibold text-foreground mb-1">Ainda com dúvidas?</p>
              <p className="text-sm text-muted-foreground mb-5">
                Não encontrou o que procurava? Fale diretamente comigo — fico feliz em ajudar!
              </p>
              <a
                href="https://wa.me/5532998283189?text=Ol%C3%A1! Gostaria de tirar algumas d%C3%BAvidas sobre seus servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={16} />
                Falar via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Lado direito: accordion */}
          <div className="space-y-3 min-w-0">
            {faqData.map((item, i) => (
              <FaqItemComponent key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
