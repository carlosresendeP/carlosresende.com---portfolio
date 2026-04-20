import { Terminal } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FooterLink, SocialLink } from '@/types/sociaTypes'

const footerLinks: FooterLink[] = [
  { name: 'Serviços', href: '#services' },
  { name: 'Projetos', href: '#portfolio' },
  { name: 'Preços', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
]

const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: 'https://github.com/carlosresendeP', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/carlos-paula2001/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/dev_carlosresende/', label: 'Instagram' },
  { icon: FaWhatsapp, href: `https://wa.me/5532${process.env.NEXT_PUBLIC_PHONE_NUMBER}`, label: 'WhatsApp' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <Terminal size={22} className="text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-xl tracking-tighter">
                CARLOS<span className="text-primary">.RESENDE</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Desenvolvedor full-stack criando soluções digitais modernas e de alta performance.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center border border-border hover:border-accent/50 hover:bg-accent/ hover:text-foreground transition-all duration-300 text-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">Navegação</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA rápido */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">Vamos conversar</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Tem um projeto em mente? Entre em contato e receba uma proposta personalizada.
            </p>
            <a
              href={`https://wa.me/5532${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Ol%C3%A1! Gostaria de um or%C3%A7amento gratuito.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-accent/20 hover:border-accent hover:text-foreground transition-colors text-sm font-medium"
            >
              <FaWhatsapp size={14} />
              Orçamento Gratuito
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Carlos Resende — Todos os direitos reservados.</p>
          <p>Desenvolvido por <span className="text-primary">Carlos Resende</span></p>
        </div>
      </div>
    </footer>
  )
}
