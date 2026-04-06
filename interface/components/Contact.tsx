'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import { toast } from 'sonner'
import { SocialLink } from '@/types/sociaTypes'
import { z } from 'zod'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
  phone: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  phone?: string
}

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  subject: z.string(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  phone: z
    .string()
    .refine((v) => v === '' || v.replace(/\D/g, '').length >= 10, {
      message: 'Telefone inválido',
    })
    .optional()
    .default(''),
})

export default function Contact() {

  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: 'https://github.com/carlosresendeP', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/carlos-paula2001/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/dev_carlosresende/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/5532998283189', label: 'WhatsApp' },
  ]

  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: 'Landing Page', message: '', phone: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): FormErrors {
    const result = contactSchema.safeParse(form)
    if (result.success) return {}

    return result.error.issues.reduce<FormErrors>((acc, issue) => {
      const field = issue.path[0] as keyof FormErrors
      if (!acc[field]) acc[field] = issue.message
      return acc
    }, {})
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/solicitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem.')
      }

      setSuccessOpen(true)
      setForm({ name: '', email: '', subject: 'Landing Page', message: '', phone: '' })
      setErrors({})
    } catch {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs px-3">
            Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Vamos <span className="text-primary">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Estou pronto para transformar sua ideia em realidade. Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {[
              { icon: Mail, label: 'E-mail', value: 'contato@carlosresende.com.br', href: 'mailto:contato@carlosresende.com.br' },
              { icon: Phone, label: 'WhatsApp', value: '+55 (32) *****-****', href: 'https://wa.me/5532998283189' },
              { icon: MapPin, label: 'Localização', value: 'Juiz de Fora, MG — Brasil', href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-5 group">
                <div className="size-14 rounded-2xl bg-muted flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <Separator />

            <div>
              <p className="text-muted-foreground mb-4 text-sm">Redes sociais:</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }: SocialLink) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="size-12 rounded-xl bg-muted flex items-center justify-center border border-border hover:border-accent/50 hover:bg-accent/50 hover:text-foreground  transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário com Card shadcn */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border shadow-2xl shadow-primary/5 rounded-3xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} noValidate>
                  <FieldGroup className="gap-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field data-invalid={!!errors.name}>
                        <FieldLabel htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          Nome *
                        </FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          aria-invalid={!!errors.name}
                        />
                        <FieldError>{errors.name}</FieldError>
                      </Field>

                      <Field data-invalid={!!errors.email}>
                        <FieldLabel htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
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
                        />
                        <FieldError>{errors.email}</FieldError>
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="phone" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Telefone
                      </FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Seu telefone"
                        aria-invalid={!!errors.phone}
                      />
                      <FieldError>{errors.phone}</FieldError> 
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Assunto
                      </FieldLabel>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-foreground"
                      >
                        <option value="Landing Page">Landing page</option>
                        <option value="Business Pro">Site Institucional</option>
                        <option value="SaaS Customizado">Sistema com IA</option>
                        <option value="Automação com IA">SaaS Customizado</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </Field>

                    <Field data-invalid={!!errors.message}>
                      <FieldLabel htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
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
                      />
                      <FieldError>{errors.message}</FieldError>
                    </Field>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold gap-2 py-6"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Dialog de sucesso */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader className="items-center gap-4">
            <div className="size-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Mensagem enviada! 🎉
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Obrigado pelo contato! Responderei em até <strong className="text-foreground">24 horas</strong>. Fique de olho no seu e-mail.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-2">
            <Button asChild className="bg-green-500 hover:bg-green-400 text-white rounded-xl gap-2">
              <a href="https://wa.me/5532998283189" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={16} />
                Conversar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" onClick={() => setSuccessOpen(false)} className="rounded-xl">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
