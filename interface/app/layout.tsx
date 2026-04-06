import type { Metadata } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Carlos Resende — Desenvolvedor Full-Stack',
  description:
    'Desenvolvedor full-stack especializado em React, Next.js, Node.js e TypeScript. Criando interfaces modernas, performáticas e escaláveis.',
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'typescript', 'portfólio'],
  authors: [{ name: 'Carlos Resende' }],
  openGraph: {
    title: 'Carlos Resende — Desenvolvedor Full-Stack',
    description: 'Portfólio de Carlos Resende — soluções digitais modernas e de alta performance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn('h-full antialiased font-sans', poppins.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
