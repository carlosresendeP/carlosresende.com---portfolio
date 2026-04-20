'use client'

import { motion } from 'motion/react'
import {
  Layout, Server, Smartphone, Search, Code2, Cpu,
  ArrowRight, CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
  benefits: string[]
  featured?: boolean
}

const services: Service[] = [
  {
    icon: Layout,
    title: 'Desenvolvimento Front-end',
    desc: 'Interfaces modernas, rápidas e responsivas construídas com React e Next.js, com foco total em performance e experiência do usuário.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    benefits: ['Core Web Vitals otimizados', 'Animações fluidas', 'SSR & ISR'],
    featured: true,
  },
  {
    icon: Server,
    title: 'Desenvolvimento Back-end',
    desc: 'APIs robustas, seguras e escaláveis com Node.js e bancos de dados modernos, prontas para suportar alto volume de requisições.',
    tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'],
    benefits: ['Autenticação JWT segura', 'Validação de dados', 'Alta disponibilidade'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Layouts adaptativos que funcionam perfeitamente em qualquer dispositivo, garantindo consistência visual e máxima usabilidade.',
    tags: ['Responsive', 'PWA', 'Touch UX', 'Acessibilidade'],
    benefits: ['100% responsivo', 'PWA ready', 'WCAG 2.1 AA'],
  },
  {
    icon: Search,
    title: 'Otimização de SEO',
    desc: 'Estratégias técnicas e de conteúdo para aumentar sua visibilidade nos buscadores e atrair tráfego orgânico qualificado.',
    tags: ['SEO Técnico', 'Metadata', 'Sitemap', 'Schema.org'],
    benefits: ['Open Graph configurado', 'Performance score alto', 'Indexação garantida'],
  },
  {
    icon: Code2,
    title: 'Arquitetura de Software',
    desc: 'Planejamento e estruturação de sistemas complexos seguindo princípios SOLID, clean architecture e boas práticas de engenharia.',
    tags: ['Clean Architecture', 'SOLID', 'CI/CD', 'Docker'],
    benefits: ['Código limpo e documentado', 'Testes automatizados', 'Deploy contínuo'],
  },
  {
    icon: Cpu,
    title: 'Integrações & IA',
    desc: 'Conecte sua aplicação a serviços externos, APIs de pagamento e automações inteligentes com Inteligência Artificial.',
    tags: ['n8n', 'Gemini AI', 'Stripe', 'Webhooks'],
    benefits: ['Automação de processos', 'LLMs integrados', 'Pagamentos online'],
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">

      {/* Grid texture — matches Hero */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header — left-aligned, matches Hero editorial system */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 lg:gap-8 mb-14 lg:mb-16"
        >
          {/* 02 accent — mirrors Hero's 01 */}
          <div className="flex flex-col items-center gap-2 pt-2 shrink-0">
            <span className="font-mono text-[10px] text-primary tracking-widest">02</span>
            <div className="w-px h-16 bg-linear-to-b from-primary via-primary/25 to-transparent" />
          </div>

          {/* Heading + sub description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
            <div>
              <p className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">Serviços</p>
              <h2
                className="font-black uppercase leading-none tracking-tight text-foreground"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
              >
                Soluções completas<br />
                <span className='text-primary'>para crescer</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-mono lg:text-right">
              Do planejamento ao deploy, entrego projetos que combinam código limpo,
              design profissional e resultados mensuráveis.
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
          className="w-full h-px bg-linear-to-r from-primary/50 via-border to-transparent mb-0"
        />

        {/* Cards — gap-px trick creates shared single-pixel walls */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative bg-background hover:bg-card transition-colors duration-300 p-7 flex flex-col gap-5 overflow-hidden"
              >
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_0%_0%,rgba(0,229,160,0.07)_0%,transparent_70%)]" />

                {/* Featured: top mint hairline */}
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-primary" />
                )}

                {/* Icon + index */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                    <Icon size={18} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <span className="font-mono text-xs text-border group-hover:text-primary/20 transition-colors select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-1.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={11} className="shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex-1" />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/50 bg-muted/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA bar — flush with card grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative border border-t-0 border-border bg-card overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-start gap-5">
              <span className="font-mono text-xs text-primary hidden sm:block pt-0.5">→</span>
              <div>
                <p className="text-base font-bold text-foreground">
                  Pronto para tirar seu projeto do papel?
                </p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Entre em contato e receba um orçamento sem compromisso.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 bg-primary
                         text-primary-foreground font-semibold text-sm transition-all shrink-0
                         hover:bg-success/90 hover:text-foreground
                         hover:shadow-md hover:shadow-success/20
                         "
            >
              Falar com Carlos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
