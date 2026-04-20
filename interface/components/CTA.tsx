"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

const MARQUEE_ITEMS = [
  "PROJETO",
  "DISPONÍVEL",
  "DESIGN",
  "DESENVOLVIMENTO",
  "ENTREGA",
  "FULLSTACK",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
];

const phoneNumber = process.env.PHONE_NUMBER;

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-card/20">
      {/* Top accent line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      {/* Scrolling marquee belt — the memorable anchor */}
      <div className="border-b border-border overflow-hidden py-3">
        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex shrink-0"
          >
            {[0, 1].map((rep) => (
              <div key={rep} className="flex items-center">
                {MARQUEE_ITEMS.map((item, i) => (
                  <span key={i} className="flex items-center">
                    <span className="font-mono text-sm text-foreground/80 uppercase tracking-[0.3em] px-5">
                      {item}
                    </span>
                    <span className="text-primary/40 text-[6px]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Centered radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_65%_at_50%_50%,rgba(0,229,160,0.07)_0%,transparent_70%)]" />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* Main content — centered, deliberate break from left-aligned sections */}
      <div className="relative z-10 py-24 lg:py-36 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em]">
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Heading — three lines, center-aligned */}
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black text-4xl lg:text-6xl uppercase leading-none tracking-tight text-foreground"
              >
                PRONTO PARA
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black text-4xl md:text-6xl lg:text-7xl text-primary uppercase leading-none tracking-tight"
              >
                TRANSFORMAR
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.34,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black text-4xl md:text-6xl text-foreground uppercase leading-none tracking-tight"
              >
                SUA IDEIA?
              </motion.h2>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground leading-relaxed font-mono max-w-md"
          >
            Vamos conversar sobre o seu projeto. Em menos de 24 horas você
            recebe um retorno com as melhores opções para o seu caso.
          </motion.p>

          {/* CTAs */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4
                         bg-primary text-muted hover:bg-success/90 hover:text-foreground
                         hover:shadow-md hover:shadow-success/20
                         font-bold text-sm transition-all"
            >
              Iniciar um Projeto
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={`https://wa.me/5532${phoneNumber}?text=Ol%C3%A1! Quero saber mais sobre seus servi%C3%A7os.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4
                         border border-border text-muted-foreground hover:border-success/50
                         hover:text-success font-bold text-sm transition-all bg-transparent"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
