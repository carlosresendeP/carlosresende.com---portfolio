'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Filter } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  deploy: string
  githubUrl: string
  img?: string | null
}

type FilterValue = 'all' | 'frontend' | 'fullstack'

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
]

const tagVariantMap: Record<string, string> = {
  'Next.js': 'bg-foreground/10 text-foreground',
  TypeScript: 'bg-primary/10 text-primary',
  React: 'bg-secondary/10 text-secondary',
  MongoDB: 'bg-green-500/10 text-green-400',
  Supabase: 'bg-emerald-500/10 text-emerald-400',
  IA: 'bg-purple-500/10 text-purple-400',
  SaaS: 'bg-yellow-500/10 text-yellow-400',
  'Node.js': 'bg-green-600/10 text-green-500',
  Tailwind: 'bg-sky-500/10 text-sky-400',
  n8n: 'bg-orange-500/10 text-orange-400',
  Chatbot: 'bg-pink-500/10 text-pink-400',
  API: 'bg-blue-500/10 text-blue-400',
  'Styled Components': 'bg-tertiary/10 text-tertiary',
  JavaScript: 'bg-yellow-400/10 text-yellow-400',
}

function getTagClass(tag: string): string {
  return tagVariantMap[tag] ?? 'bg-muted text-muted-foreground'
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Filtros */}
      <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
        <Filter size={14} className="text-muted-foreground" />
        {filterOptions.map((opt) => (
          <Button
            key={opt.value}
            size="sm"
            variant={activeFilter === opt.value ? 'default' : 'outline'}
            onClick={() => setActiveFilter(opt.value)}
            className={`rounded-full text-xs transition-all ${
              activeFilter === opt.value
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                : ''
            }`}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card className="h-full mt-0 pt-0 group flex justify-between hover:ring-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 border-border">
                {/* Imagem */}
                <div className="relative h-40 overflow-hidden rounded-t-xl bg-linear-to-br from-card to-muted">
                  {project.img ? (
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-tertiary/20" />
                  )}
                  {/* Overlay com links no hover */}
                  <div className="absolute inset-0 bg-background/85 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-1.5">
                      <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={13} />
                        Ver Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="rounded-xl gap-1.5">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={13} />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium ${getTagClass(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <Separator />

                <CardFooter className="pt-4 gap-2">
                  <Button size="sm" variant="ghost" asChild className="flex-1 gap-1.5 text-xs">
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={12} />
                      Deploy
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild className="flex-1 gap-1.5 text-xs">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={12} />
                      Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
