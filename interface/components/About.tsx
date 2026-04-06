'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from './ui/button'


export default function About() {

  const skills: string[] = [
    'HTML', 'CSS', 'JavaScript','TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Vue.js', 'prisma ORM', 'Docker','Git', 'IA'
  ] 

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute -bottom-6 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-6 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-screen max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-border group">
              <Image
                src="/carlos.png"
                alt="Carlos Resende"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Badge flutuante */}
            <div className="absolute -bottom-4  px-4 py-3 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-sm">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Status</p>
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative flex size-2 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-foreground">Disponível</span>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-tertiary/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Texto à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Sobre mim</span>
            </div>



            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou Carlos Resende, desenvolvedor full-stack com experiência em construir aplicações web modernas — do banco de dados à interface. Trabalho com foco em performance, arquitetura limpa e entrega de valor real.
              </p>
              <p>
                Domino o ecossistema JavaScript/TypeScript de ponta a ponta, combinando React e Next.js no front-end com Node.js e bancos de dados relacionais e não-relacionais no back-end. Integro ferramentas de IA para entregar soluções mais inteligentes e eficientes.
              </p>
            </div>

            {/* Tags de skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-mono border border-border hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Button variant='default' className='inline-flex items-center gap-2 px-6 py-5 rounded-full bg-primary hover:bg-accent hover:shadow-sm hover:shadow-accent/20 text-white font-semibold text-sm transition-all'>
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 "
                >
                  Ver Projetos
                  <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button variant='outline' className='inline-flex items-center gap-2 px-6 py-5 rounded-full border border-border text-foreground hover:border-accent hover:text-accent font-semibold text-sm transition-all'>
                <a
                  href="/cv-carlos-resende.pdf"
                  download
                  className="flex items-center gap-2 "
                >
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
