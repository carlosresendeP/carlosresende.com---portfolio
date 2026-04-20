'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { useRef } from 'react'

const skills: string[] = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind', 'PostgreSQL', 'MongoDB', 'Prisma ORM',
  'Docker', 'Vue.js', 'IA', 'Git',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >

      {/* Glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto grid min-h-screen lg:grid-cols-[1fr_1.1fr] items-stretch">

        {/* ── COLUNA ESQUERDA — Imagem ── */}
        <div className="relative hidden lg:block">
          {/* Label lateral */}
          <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 -rotate-90 origin-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/20">
              Carlos Resende — Full Stack Dev
            </span>
          </div>

          {/* Foto com parallax */}
          <div className="relative h-full overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src="/carlos.png"
                alt="Carlos Resende"
                fill
                sizes="20vw"
                className="h-[70%] object-cover object-top"
                priority
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background" />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Badge de status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-10 left-10 z-20 flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-foreground/80">Disponível para projetos</span>
          </motion.div>

          {/* Localização */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-10 right-6 z-20 flex items-center gap-1.5"
          >
            <MapPin size={11} className="text-foreground/30" />
            <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">Juiz de Fora, BR</span>
          </motion.div>
        </div>

        {/* ── COLUNA DIREITA — Conteúdo ── */}
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Sobre mim
            </span>
          </motion.div>

          {/* Nome — tipografia forte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h2
              className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground lg:text-6xl"
            >
              Carlos<br />
              <span className="text-primary">Resende</span>
            </h2>
            <p className="mt-3 font-mono text-sm text-foreground/40">
              {'<'} Full Stack Developer {'>'}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              Desenvolvedor full-stack com transição intencional do setor técnico-elétrico para o desenvolvimento de software.
              Atuo do banco de dados à interface, com foco em arquitetura limpa e entrega de valor real.
            </p>
            <p>
              Domino o ecossistema JavaScript/TypeScript de ponta a ponta — React e Next.js no front, Node.js e ORMs no back.
              Tenho dois SaaS em produção e integro IA para entregar soluções mais inteligentes.
            </p>
          </motion.div>


          {/* Skill tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                whileHover={{ borderColor: 'rgba(0,229,160,0.5)', color: '#00E5A0' }}
                className="cursor-default rounded-md border border-border bg-card/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(0,229,160,0.35)]"
            >
              Ver Projetos
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="/cv-carlos-resende.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-tertiary hover:text-foreground"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Linha decorativa bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-primary/40 via-border to-transparent"
      />
    </section>
  )
}
