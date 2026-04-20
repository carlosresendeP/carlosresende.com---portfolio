
import { Header } from '@/components/Header'
import Hero from '@/components/hero/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>

        <div className='bg-[url("/background.jpeg")] z-1 bg-fixed bg-cover bg-center h-full'>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Process />
          <Portfolio />
          <FAQ />
          <CTA />
          <Contact />
        </div>
        <Chatbot />
      </main>
      <Footer />
    </>
  )
}
