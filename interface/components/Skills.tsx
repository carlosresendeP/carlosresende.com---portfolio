'use client'

import { motion } from 'motion/react'
import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase, FaHtml5, FaCss3Alt,FaVuejs 
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiPostgresql, SiPrisma, SiN8N, SiDocker, SiJavascript,
  SiVite,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ElementType
  pct: number
  /** Cor brand real da tecnologia (Tailwind inline style) */
  brandColor: string
}

const skills: Skill[] = [
  { name: 'HTML5',       icon: FaHtml5,       pct: 95, brandColor: '#E34F26' },
  { name: 'CSS3',        icon: FaCss3Alt,     pct: 90, brandColor: '#1572B6' },
  { name: 'React',       icon: FaReact,       pct: 90, brandColor: '#61DAFB' },
  { name: 'Next.js',     icon: SiNextdotjs,   pct: 85, brandColor: '#FFFFFF' },
  { name: 'TypeScript',  icon: SiTypescript,  pct: 70, brandColor: '#3178C6' },
  { name: 'JavaScript',  icon: SiJavascript,  pct: 90, brandColor: '#F7DF1E' },
  { name: 'Tailwind',    icon: SiTailwindcss, pct: 90, brandColor: '#06B6D4' },
  { name: 'Vue.js',      icon: FaVuejs,       pct: 85, brandColor: '#17e75c' },
  { name: 'Vite',        icon: SiVite,        pct: 85, brandColor: '#646CFF' },
  { name: 'Node.js',     icon: FaNodeJs,      pct: 70, brandColor: '#339933' },
  { name: 'MongoDB',     icon: SiMongodb,     pct: 65, brandColor: '#47A248' },
  { name: 'PostgreSQL',  icon: SiPostgresql,  pct: 45, brandColor: '#4169E1' },
  { name: 'Prisma',      icon: SiPrisma,      pct: 60, brandColor: '#2D3748' },
  { name: 'Docker',      icon: SiDocker,      pct: 35, brandColor: '#2496ED' },
  { name: 'Git',         icon: FaGitAlt,      pct: 75, brandColor: '#F05032' },
  { name: 'Figma',       icon: FaFigma,       pct: 40, brandColor: '#F24E1E' },
  { name: 'n8n / IA',   icon: SiN8N,         pct: 40, brandColor: '#EA4B71' },
  { name: 'SQL',         icon: FaDatabase,    pct: 60, brandColor: '#00758F' },
]

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl
                 bg-card border border-border
                 hover:border-[var(--brand)] hover:bg-card/80
                 transition-all duration-300 cursor-default"
      style={{ '--brand': skill.brandColor } as React.CSSProperties}
    >
      {/* Ícone */}
      <div
        className="text-4xl text-muted-foreground/50 transition-colors duration-300 group-hover:text-[var(--brand)]"
        style={{ filter: 'drop-shadow(0 0 0px transparent)' }}
      >
        <Icon
          className="transition-[color,filter] duration-300 group-hover:[filter:drop-shadow(0_0_8px_var(--brand))]"
          aria-label={skill.name}
        />
      </div>

      {/* Nome */}
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
        {skill.name}
      </span>

      {/* Percentagem */}
      <div className="w-full space-y-1">
        <div className="flex justify-center">
          <span className="text-[11px] font-mono text-muted-foreground/70 group-hover:text-[var(--brand)] transition-colors duration-300">
            {skill.pct}%
          </span>
        </div>
        {/* Barra de progresso */}
        <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.brandColor, opacity: 0.4 }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + index * 0.04 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
            <span className="text-xs font-mono text-secondary uppercase tracking-wider">Stack Técnico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Tecnologias que <span className="text-secondary">domino</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ferramentas e linguagens que uso no dia a dia para construir produtos completos.
          </p>
        </div>

        {/* Grid de cards centralizado */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <div key={skill.name} className="w-[calc(33%-0.5rem)] sm:w-28 md:w-28">
              <SkillCard skill={skill} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
