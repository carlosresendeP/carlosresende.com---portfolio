'use client'

import { useState, useEffect } from 'react'
import { Terminal, Menu } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Preços', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed w-[80%] top-3 left-1/2 -translate-x-1/2 z-50 py-3 px-2 rounded-full shadow-lg  transition-all duration-300',
        isScrolled
          ? 'bg-card/30 backdrop-blur-xl shadow-lg shadow-primary/20'
          : 'py-5 bg-card/60 backdrop-blur-sm shadow-background/50'
      )}
    >
      <div className="w-full max-w-3xl mx-auto flex items-center justify-center gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <Terminal size={22} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-lg tracking-tighter">
            CARLOS<span className="text-primary">.RESENDE</span>
          </span>
          <Badge variant="outline" className="hidden sm:flex text-[10px] font-mono text-primary border-primary/30 ml-1">
            dev
          </Badge>
        </a>

        {/* Desktop Nav — NavigationMenu shadcn */}
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `text-muted-foreground hover:text-foreground text-xs font-medium bg-transparent hover:bg-accent/20 h-8 px-3`,
                    isScrolled ? 'text-card-foreground' : 'text-foreground'
                  )}
                >
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary hover:bg-accent text-white rounded-full px-5 shadow-lg shadow-primary/20 font-semibold text-xs"
          >
            <a href="#contact">Iniciar Projeto</a>
          </Button>

          {/* Mobile: Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
                <Menu size={22} />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-border p-0">
              <SheetHeader className="border-b border-border p-6">
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Terminal size={18} className="text-primary" />
                  <span className="font-bold tracking-tighter">
                    CARLOS<span className="text-primary">.RESENDE</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link, i) => (
                  <SheetClose asChild key={link.name}>
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all font-medium text-sm"
                    >
                      <span className="text-xs font-mono text-primary/60">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      {link.name}
                    </motion.a>
                  </SheetClose>
                ))}

                <Separator className="my-4" />

                <SheetClose asChild>
                  <Button asChild className="w-full bg-primary text-white rounded-xl font-semibold hover:bg-success/90 hover:text-foreground hover:shadow-md hover:shadow-success/20">
                    <a href="#contact">Iniciar Projeto →</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
