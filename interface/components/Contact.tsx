"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { toast } from "sonner";
import { SocialLink } from "@/types/sociaTypes";
import { z } from "zod";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  subject: z.string(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  phone: z
    .string()
    .refine((v) => v === "" || v.replace(/\D/g, "").length >= 10, {
      message: "Telefone inválido",
    })
    .optional()
    .default(""),
});

const inputClass =
  "rounded-none border-border focus-visible:border-primary focus-visible:ring-0 bg-background font-mono text-sm placeholder:text-muted-foreground/40";

export default function Contact() {
  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      href: "https://github.com/carlosresendeP",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/carlos-paula2001/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/dev_carlosresende/",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: `https://wa.me/5532998630759`,
      label: "WhatsApp",
    },
  ];

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "Landing Page",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): FormErrors {
    const result = contactSchema.safeParse(form);
    if (result.success) return {};
    return result.error.issues.reduce<FormErrors>((acc, issue) => {
      const field = issue.path[0] as keyof FormErrors;
      if (!acc[field]) acc[field] = issue.message;
      return acc;
    }, {});
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/solicitation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Falha ao enviar mensagem.");
      setSuccessOpen(true);
      setForm({
        name: "",
        email: "",
        subject: "Landing Page",
        message: "",
        phone: "",
      });
      setErrors({});
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Grid texture — matches system */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1E1E1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1E1E_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header — 07 marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 lg:gap-8 mb-14 lg:mb-16"
        >
          <div className="flex flex-col items-center gap-2 pt-2 shrink-0">
            <span className="font-mono text-[10px] text-primary tracking-widest">
              07
            </span>
            <div className="w-px h-16 bg-linear-to-b from-primary via-primary/25 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
            <div>
              <p className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">
                Contato
              </p>
              <h2 className="font-black uppercase leading-none tracking-tight text-foreground text-5xl lg:text-6xl xl:text-7xl">
                Vamos
                <br />
                <span className="text-primary">conversar?</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-mono lg:text-right">
              Estou pronto para transformar sua ideia em realidade. Entre em
              contato!
            </p>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-linear-to-r from-primary/50 via-border to-transparent mb-0 origin-left"
        />

        {/* Two-column layout — gap-px wall grid */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-px bg-border border border-t-0 border-border">
          {/* Left: contact info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 lg:p-10 flex flex-col"
          >
            {/* Contact rows — spec-sheet style */}
            <div className="flex flex-col mb-8">
              {[
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "dev.carlosresende@hotmail.com",
                  href: "mailto:dev.carlosresende@hotmail.com",
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: `+55 (32) 99863-0759`,
                  href: `https://wa.me/5532${phoneNumber}`,
                },
                {
                  icon: MapPin,
                  label: "Localização",
                  value: "Juiz de Fora, MG — Brasil",
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 py-5 border-b border-border/40 last:border-0"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-border bg-background group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shrink-0 mt-0.5">
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-4">
                Redes sociais
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }: SocialLink) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} noValidate>
              <FieldGroup className="gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel
                      htmlFor="name"
                      className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                    >
                      Nome *
                    </FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      aria-invalid={!!errors.name}
                      className={inputClass}
                    />
                    <FieldError>{errors.name}</FieldError>
                  </Field>

                  <Field data-invalid={!!errors.email}>
                    <FieldLabel
                      htmlFor="email"
                      className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                    >
                      E-mail *
                    </FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      aria-invalid={!!errors.email}
                      className={inputClass}
                    />
                    <FieldError>{errors.email}</FieldError>
                  </Field>
                </div>

                <Field>
                  <FieldLabel
                    htmlFor="phone"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    Telefone
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Seu telefone"
                    aria-invalid={!!errors.phone}
                    className={inputClass}
                  />
                  <FieldError>{errors.phone}</FieldError>
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="subject"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    Assunto
                  </FieldLabel>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border hover:border-primary/40 focus:border-primary outline-none transition-colors font-mono text-sm text-foreground appearance-none cursor-pointer"
                  >
                    <option value="Landing Page">Landing page</option>
                    <option value="Business Pro">Site Institucional</option>
                    <option value="SaaS Customizado">Sistema com IA</option>
                    <option value="Automação com IA">SaaS Customizado</option>
                    <option value="Outro">Outro</option>
                  </select>
                </Field>

                <Field data-invalid={!!errors.message}>
                  <FieldLabel
                    htmlFor="message"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    Mensagem *
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto..."
                    rows={4}
                    aria-invalid={!!errors.message}
                    className={`${inputClass} resize-none`}
                  />
                  <FieldError>{errors.message}</FieldError>
                </Field>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-success text-primary-foreground 
                  hover:shadow-success hover:shadow-sm hover:text-foreground 
                  font-bold gap-2 py-6 rounded-none transition-all duration-300"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Dialog de sucesso */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader className="gap-4">
            <div className="w-12 h-12 border border-primary/30 bg-primary/10 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-primary" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              Mensagem enviada!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
              Obrigado pelo contato! Responderei em até{" "}
              <strong className="text-foreground">24 horas</strong>. Fique de
              olho no seu e-mail.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-2">
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-500 text-white rounded-none gap-2 font-bold"
            >
              <a
                href={`https://wa.me/5532${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={16} />
                Conversar no WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => setSuccessOpen(false)}
              className="rounded-none font-bold"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
