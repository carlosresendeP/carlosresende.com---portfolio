'use client'

import { motion } from 'motion/react'
import {
  Layout, Server, Smartphone, Search, Code2, Cpu,
  ArrowRight, CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface Service {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
  benefits: string[]
  colorClass: string
  bgClass: string
  borderClass: string
  glowVar: string
  featured?: boolean
}

const services: Service[] = [
  {
    icon: Layout,
    title: 'Desenvolvimento Front-end',
    desc: 'Interfaces modernas, rápidas e responsivas construídas com React e Next.js, com foco total em performance e experiência do usuário.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    benefits: ['Core Web Vitals otimizados', 'Animações fluidas', 'SSR & ISR'],
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/30',
    glowVar: 'var(--color-primary)',
    featured: true,
  },
  {
    icon: Server,
    title: 'Desenvolvimento Back-end',
    desc: 'APIs robustas, seguras e escaláveis com Node.js e bancos de dados modernos, prontas para suportar alto volume de requisições.',
    tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'],
    benefits: ['Autenticação JWT segura', 'Validação de dados', 'Alta disponibilidade'],
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    borderClass: 'border-secondary/30',
    glowVar: 'var(--color-secondary)',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Layouts adaptativos que funcionam perfeitamente em qualquer dispositivo, garantindo consistência visual e máxima usabilidade.',
    tags: ['Responsive', 'PWA', 'Touch UX', 'Acessibilidade'],
    benefits: ['100% responsivo', 'PWA ready', 'WCAG 2.1 AA'],
    colorClass: 'text-tertiary',
    bgClass: 'bg-tertiary/10',
    borderClass: 'border-tertiary/30',
    glowVar: 'var(--color-tertiary)',
  },
  {
    icon: Search,
    title: 'Otimização de SEO',
    desc: 'Estratégias técnicas e de conteúdo para aumentar sua visibilidade nos buscadores e atrair tráfego orgânico qualificado.',
    tags: ['SEO Técnico', 'Metadata', 'Sitemap', 'Schema.org'],
    benefits: ['Open Graph configurado', 'Performance score alto', 'Indexação garantida'],
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/30',
    glowVar: 'var(--color-primary)',
  },
  {
    icon: Code2,
    title: 'Arquitetura de Software',
    desc: 'Planejamento e estruturação de sistemas complexos seguindo princípios SOLID, clean architecture e boas práticas de engenharia.',
    tags: ['Clean Architecture', 'SOLID', 'CI/CD', 'Docker'],
    benefits: ['Código limpo e documentado', 'Testes automatizados', 'Deploy contínuo'],
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    borderClass: 'border-secondary/30',
    glowVar: 'var(--color-secondary)',
  },
  {
    icon: Cpu,
    title: 'Integrações & IA',
    desc: 'Conecte sua aplicação a serviços externos, APIs de pagamento e automações inteligentes com Inteligência Artificial.',
    tags: ['n8n', 'Gemini AI', 'Stripe', 'Webhooks'],
    benefits: ['Automação de processos', 'LLMs integrados', 'Pagamentos online'],
    colorClass: 'text-tertiary',
    bgClass: 'bg-tertiary/10',
    borderClass: 'border-tertiary/30',
    glowVar: 'var(--color-tertiary)',
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Separadores */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Blobs decorativos */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Cabeçalho ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <Badge
            variant="outline"
            className="font-mono text-xs uppercase tracking-widest text-primary border-primary/30 bg-primary/10 px-3 py-1"
          >
            Serviços
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            Soluções completas para{' '}
            <span className="text-primary">seu negócio</span> crescer.
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Do planejamento ao deploy, entrego projetos que combinam código limpo,
            design profissional e resultados mensuráveis.
          </p>

        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-full"
              >
                <Card
                  className={`group relative h-full overflow-hidden border ${service.borderClass} bg-card
                    hover:shadow-2xl transition-all duration-500 cursor-default
                    ${service.featured ? 'ring-1 ring-primary/20' : ''}`}
                >
                  {/* Glow de fundo ao hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 0% 0%, color-mix(in oklch, ${service.glowVar} 10%, transparent) 0%, transparent 65%)`,
                    }}
                  />

                  {/* Badge destaque */}
                  {service.featured && (
                    <div
                      className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-mono
                        uppercase tracking-widest border ${service.bgClass} ${service.colorClass} ${service.borderClass}`}
                    >
                      Destaque
                    </div>
                  )}

                  <CardContent className="p-7 flex flex-col gap-5 relative z-10 h-full">
                    {/* Ícone */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border
                        ${service.borderClass} ${service.bgClass} ${service.colorClass}
                        group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    {/* Título e descrição */}
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`text-xl font-bold text-foreground group-hover:${service.colorClass}
                          transition-colors duration-300`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Benefícios */}
                    <ul className="flex flex-col gap-1.5">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={13} className={`shrink-0 ${service.colorClass}`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="flex-1" />

                    {/* Tags de tecnologia */}
                    <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-border/50`}>
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-mono border
                            ${service.bgClass} ${service.colorClass} ${service.borderClass} opacity-80`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Número decorativo de fundo */}
                  <span
                    className={`absolute bottom-3 right-4 text-8xl font-black font-mono
                      opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300
                      select-none pointer-events-none ${service.colorClass}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6
            p-8 rounded-2xl bg-card border border-border relative overflow-hidden"
        >
          {/* Glow sutil no banner */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-tertiary/5 pointer-events-none" />

          <div className="text-center sm:text-left relative z-10">
            <p className="text-lg font-semibold text-foreground">
              Pronto para tirar seu projeto do papel?
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Entre em contato e receba um orçamento sem compromisso.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-full
              bg-primary text-primary-foreground font-semibold text-sm
              transition-all hover:shadow-lg hover:shadow-primary/20 hover:bg-accent shrink-0"
          >
            Falar com Carlos
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
