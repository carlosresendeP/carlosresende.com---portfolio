'use client'

import { motion } from 'motion/react'
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react'

interface Plan {
  name: string
  price: string
  desc: string
  features: string[]
  accent: string
  accentBg: string
  accentBorder: string
  btnClass: string
  popular?: boolean
  highlight?: boolean
  badge?: string
  badgeIcon?: React.ReactNode
  monthlyFee?: string
}

const plans: Plan[] = [
  {
    name: 'Landing Page',
    price: 'R$ 480',
    desc: 'Perfeito para profissionais liberais e pequenas empresas que precisam de presença digital.',
    features: [
      'Design Exclusivo',
      'Otimização de SEO',
      'Responsivo para Mobile',
      'Integração com WhatsApp',
      'Hospedagem Grátis (1 ano)',
    ],
    accent: 'text-primary',
    accentBg: 'bg-primary/8',
    accentBorder: 'border-primary/20 hover:border-primary/40',
    btnClass: 'bg-primary hover:bg-accent hover:shadow-accent/20',
  },
  {
    name: 'Site Institucional',
    price: 'R$ 980',
    desc: 'Ideal para empresas que buscam uma presença digital robusta com funcionalidades avançadas.',
    features: [
      'Tudo do plano anterior',
      'Blog Integrado',
      'Painel Administrativo',
      'Integração com CRM',
      'Suporte Prioritário',
    ],
    accent: 'text-secondary',
    accentBg: 'bg-secondary/8',
    accentBorder: 'border-secondary/30 hover:border-secondary/60',
    btnClass: 'bg-secondary hover:bg-accent hover:shadow-accent/20',
    popular: true,
    badge: 'Mais Popular',
    badgeIcon: <Sparkles size={11} />,
  },
  {
    name: 'Sistema com IA',
    price: 'R$ 2.480',
    desc: 'Automatize processos com inteligência artificial integrada e presença digital robusta.',
    features: [
      'Tudo do plano anterior',
      'Integração com IA',
      'Chatbot Personalizado',
      'Análise de Dados',
      'Suporte Prioritário',
    ],
    accent: 'text-tertiary',
    accentBg: 'bg-tertiary/8',
    accentBorder: 'border-tertiary/30 hover:border-tertiary/60',
    btnClass: 'bg-tertiary shadow-tertiary/25 hover:bg-accent hover:shadow-accent/20',
    highlight: true,
    badge: 'Com IA',
    badgeIcon: <Zap size={11} />,
    monthlyFee: '+ R$ 200/mês',
  },
  {
    name: 'SaaS Customizado',
    price: 'Consulta',
    desc: 'Soluções complexas e personalizadas para o seu negócio, com infraestrutura completa.',
    features: [
      'Arquitetura Escalável',
      'Autenticação de Usuários',
      'Pagamentos Recorrentes',
      'Infraestrutura na Nuvem',
      'Consultoria Técnica',
    ],
    accent: 'text-foreground',
    accentBg: 'bg-muted/50',
    accentBorder: 'border-border hover:border-foreground/30',
    btnClass: 'bg-muted-foreground hover:bg-accent hover:shadow-accent/20',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-tertiary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider">Preços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Investimento para o seu{' '}
            <span className="text-tertiary">sucesso</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Valores transparentes e planos adaptados à sua necessidade.{' '}
            <strong className="text-foreground">Orçamento gratuito.</strong>
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col h-full rounded-3xl bg-card border transition-all duration-300 overflow-hidden ${plan.accentBorder} ${
                plan.popular ? 'xl:-translate-y-1 shadow-2xl shadow-secondary/15' : 'shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Colored top bar */}
              <div
                className={`h-1 w-full ${
                  plan.popular
                    ? 'bg-secondary'
                    : plan.highlight
                    ? 'bg-tertiary'
                    : 'bg-transparent'
                }`}
              />

              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest ${
                    plan.popular
                      ? 'bg-secondary shadow-lg shadow-secondary/30'
                      : 'bg-tertiary shadow-lg shadow-tertiary/30'
                  }`}
                >
                  {plan.badgeIcon}
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-col h-full p-7">
                {/* Plan header */}
                <div className="mb-5">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${plan.accentBg} mb-4`}>
                    <div className={`w-3 h-3 rounded-full ${plan.accent.replace('text-', 'bg-')}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className={`mb-6 pb-6 border-b border-border`}>
                  <div className="flex items-end gap-1 flex-wrap">
                    <span className={`text-4xl font-extrabold tracking-tight ${plan.accent}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Consulta' && (
                      <span className="text-muted-foreground text-sm mb-1">/projeto</span>
                    )}
                  </div>
                  {plan.monthlyFee && (
                    <span className="text-muted-foreground text-xs mt-1 block">{plan.monthlyFee}</span>
                  )}
                  {plan.price === 'Consulta' && (
                    <span className="text-muted-foreground text-xs mt-1 block">Orçamento sob medida</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.accentBg}`}>
                        <Check size={9} className={plan.accent} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl text-white text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${plan.btnClass}`}
                >
                  {plan.price === 'Consulta' ? 'Solicitar Proposta' : 'Escolher Plano'}
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Não encontrou o que procura?{' '}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Fale comigo
          </a>{' '}
          e criamos um plano personalizado.
        </motion.p>
      </div>
    </section>
  )
}
