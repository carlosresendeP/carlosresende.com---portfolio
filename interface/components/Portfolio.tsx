import { FaGithub } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PortfolioGrid from './PortfolioGrid'
import { getPortfolioProjects } from '@/services/portifolio.service'


export default async function Portfolio() {
  const projects = await getPortfolioProjects()

  return (
    <section id="portfolio" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs px-3">
            Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Projetos que <span className="text-primary">entregam</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Soluções reais desenvolvidas para clientes e projetos pessoais.
          </p>
        </div>

        <PortfolioGrid projects={projects} />

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="rounded-full gap-2">
            <a href="https://github.com/carlosresendeP" target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} />
              Ver todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
