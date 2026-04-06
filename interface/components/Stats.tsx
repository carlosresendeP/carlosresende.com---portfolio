'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Projetos Entregues', description: 'Do simples ao complexo' },
  { value: 1, suffix: '+', label: 'Anos de Experiência', description: 'Em constante evolução' },
  { value: 10, suffix: '+', label: 'Clientes Satisfeitos', description: 'Relacionamento duradouro' },
  { value: 100, suffix: '%', label: 'Dedicação', description: 'Em cada projeto' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="py-4 relative overflow-hidden border-y border-border">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-tertiary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center lg:px-10 gap-2 group"
            >
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
