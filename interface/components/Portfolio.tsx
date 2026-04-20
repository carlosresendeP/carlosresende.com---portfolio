import { FaGithub } from 'react-icons/fa'
import PortfolioGrid from './PortfolioGrid'
import { getPortfolioProjects } from '@/services/portifolio.service'

export default async function Portfolio() {
  const projects = await getPortfolioProjects()

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">

      {/* Grid texture — matches system */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header — 04 marker */}
        <div className="flex items-start gap-5 lg:gap-8 mb-14 lg:mb-16">
          <div className="flex flex-col items-center gap-2 pt-2 shrink-0">
            <span className="font-mono text-[10px] text-primary tracking-widest">04</span>
            <div className="w-px h-16 bg-linear-to-b from-primary via-primary/25 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
            <div>
              <p className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">
                Portfólio
              </p>
              <h2
                className="font-black uppercase leading-none tracking-tight text-foreground"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
              >
                Projetos que<br />
                <span className='text-primary'>entregam</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-mono lg:text-right">
              Soluções reais desenvolvidas para clientes e projetos pessoais —
              do banco de dados à interface.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-linear-to-r from-primary/50 via-border to-transparent mb-0" />

        <PortfolioGrid projects={projects} />

        {/* GitHub CTA bar — flush with grid, matches Services pattern */}
        <div className="relative border border-t-0 border-border bg-card overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-start gap-5">
              <span className="font-mono text-xs text-primary hidden sm:block pt-0.5">→</span>
              <div>
                <p className="text-base font-bold text-foreground">Quer ver mais projetos?</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Confira todos os repositórios públicos no GitHub.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/carlos-paula2001"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-border
                         text-muted-foreground hover:border-primary/40 hover:text-foreground
                         font-semibold text-sm transition-all shrink-0 bg-transparent"
            >
              <FaGithub size={14} />
              Ver todos no GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
