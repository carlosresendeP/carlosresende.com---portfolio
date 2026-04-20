'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  deploy?: string
  githubUrl: string
  img?: string | null
}

type FilterValue = 'all' | 'frontend' | 'fullstack'

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
]

const spring = { damping: 28, stiffness: 90, mass: 1.8 }

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const rX = useSpring(useMotionValue(0), spring)
  const rY = useSpring(useMotionValue(0), spring)
  const sc = useSpring(1, spring)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    rX.set(((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -5)
    rY.set(((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 5)
  }

  return (
    <div
      ref={ref}
      style={{ perspective: '1000px' }}
      onMouseMove={onMove}
      onMouseEnter={() => sc.set(1.018)}
      onMouseLeave={() => { sc.set(1); rX.set(0); rY.set(0) }}
    >
      <motion.div style={{ rotateX: rX, rotateY: rY, scale: sc, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </div>
  )
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs — editorial underline style */}
      <div className="flex items-end gap-0 border-b border-border mb-0">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setActive(opt.value)}
            className={`relative px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-200
              ${active === opt.value
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground/70'
              }`}
          >
            {opt.label}
            {active === opt.value && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-[-1px] left-0 right-0 h-px bg-primary"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
        <span className="ml-auto pb-3 font-mono text-[10px] text-muted-foreground/30 tabular-nums">
          {filtered.length} projeto{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid — gap-px wall technique, matches Services */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 gap-px bg-border border border-t-0 border-border"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <TiltCard>
                <div className="group relative flex flex-col overflow-hidden bg-background hover:bg-card transition-colors duration-300">

                  {/* Full-bleed image area */}
                  <div className="relative h-52 overflow-hidden bg-card">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-card to-background flex items-center justify-center">
                        <span
                          className="font-black font-mono text-foreground/4 select-none"
                          style={{ fontSize: '80px', lineHeight: 1 }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}

                    {/* Hover overlay: action links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      {project.deploy && (
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                        >
                          <ArrowUpRight size={13} />
                          Ver Live
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground/80 transition-all hover:border-primary/30 hover:text-foreground"
                      >
                        <FaGithub size={12} />
                        GitHub
                      </a>
                    </div>

                    {/* Project index */}
                    <span className="absolute left-3 top-3 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground/60 backdrop-blur-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content bar */}
                  <div className="flex flex-col gap-2 p-5 border-t border-border/40">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 font-mono text-[10px] border border-border/50 text-muted-foreground bg-muted/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
