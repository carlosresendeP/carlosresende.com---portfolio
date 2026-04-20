'use client'

import { motion } from 'motion/react'
import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase, FaHtml5, FaCss3Alt, FaVuejs,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiPostgresql, SiPrisma, SiN8N, SiDocker, SiJavascript, SiVite,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ElementType
  brandColor: string
}

interface Category {
  label: string
  tag: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    label: 'Frontend',
    tag: '01',
    skills: [
      { name: 'HTML5',      icon: FaHtml5,       brandColor: '#E34F26' },
      { name: 'CSS3',       icon: FaCss3Alt,     brandColor: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript,  brandColor: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript,  brandColor: '#3178C6' },
      { name: 'React',      icon: FaReact,       brandColor: '#61DAFB' },
      { name: 'Next.js',    icon: SiNextdotjs,   brandColor: '#FFFFFF' },
      { name: 'Vue.js',     icon: FaVuejs,       brandColor: '#42B883' },
      { name: 'Tailwind',   icon: SiTailwindcss, brandColor: '#06B6D4' },
      { name: 'Vite',       icon: SiVite,        brandColor: '#646CFF' },
      { name: 'Figma',      icon: FaFigma,       brandColor: '#F24E1E' },
    ],
  },
  {
    label: 'Backend & Data',
    tag: '02',
    skills: [
      { name: 'Node.js',    icon: FaNodeJs,      brandColor: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql,  brandColor: '#4169E1' },
      { name: 'MongoDB',    icon: SiMongodb,     brandColor: '#47A248' },
      { name: 'Prisma',     icon: SiPrisma,      brandColor: '#A0AEC0' },
      { name: 'SQL',        icon: FaDatabase,    brandColor: '#00758F' },
    ],
  },
  {
    label: 'Tooling & Infra',
    tag: '03',
    skills: [
      { name: 'Git',       icon: FaGitAlt, brandColor: '#F05032' },
      { name: 'Docker',    icon: SiDocker, brandColor: '#2496ED' },
      { name: 'n8n / IA', icon: SiN8N,    brandColor: '#EA4B71' },
    ],
  },
]

function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.045 }}
      whileHover={{ scale: 1.06 }}
      className="group relative flex flex-col items-center gap-2.5 cursor-default select-none"
      style={{ '--brand': skill.brandColor } as React.CSSProperties}
    >
      <div
        className="
          relative flex h-14 w-14 items-center justify-center
          rounded-2xl border border-border bg-card
          transition-all duration-300
          group-hover:border-[var(--brand)]/40
          group-hover:bg-[var(--brand)]/[0.06]
        "
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `0 0 20px 0 color-mix(in srgb, var(--brand) 25%, transparent)` }}
        />
        <Icon
          size={26}
          className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-[var(--brand)]"
          aria-label={skill.name}
        />
      </div>

      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 transition-colors duration-300 group-hover:text-muted-foreground">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-28">

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Stack Técnico
            </span>
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="text-4xl font-bold leading-tight text-foreground md:text-5xl"
            >
              Tecnologias que{' '}
              <span className="text-primary">domino</span>.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Do HTML ao Docker — ferramentas e linguagens que uso
              para construir produtos completos, do banco à interface.
            </p>
          </div>
        </motion.div>

        {/* Categorias */}
        <div className="flex flex-col gap-16">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-[10px] text-muted-foreground/30">{cat.tag}</span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/50">
                  {cat.label}
                </span>
                <div className="flex-1 border-t border-border" />
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-6">
                {cat.skills.map((skill, i) => (
                  <SkillPill key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex items-center justify-between border-t border-border pt-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/30">
            Em constante evolução
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] text-muted-foreground/30">aprendendo ativamente</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
    </section>
  )
}