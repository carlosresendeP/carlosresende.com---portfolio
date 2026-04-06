'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Send, MessageCircle, Bot } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const INITIAL_MESSAGE: Message = {
  role: 'bot',
  text: 'Olá! Sou o assistente do Carlos Resende. Como posso te ajudar hoje? 👋',
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const sessionId = useRef<string>(crypto.randomUUID())

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  async function handleSend() {
    const text = input.trim()
    if (!text || isTyping) return

    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      })

      if (!response.ok) throw new Error('Webhook error')

      const data = await response.json()
      const botText =
        data?.text ||
        data?.message ||
        data?.output ||
        (typeof data === 'string' ? data : null) ||
        'Recebi sua mensagem!'

      setMessages((prev) => [...prev, { role: 'bot', text: botText }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Estou enfrentando problemas, tente pelo WhatsApp 👇',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[360px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Assistente</p>
                  <p className="text-white/70 text-xs mt-0.5">Carlos Resende</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10 size-8"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && (
                    <div className="size-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={13} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-sm'
                        : 'bg-muted text-foreground rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                    {msg.text.includes('WhatsApp') && msg.role === 'bot' && (
                      <a
                        href="https://wa.me/5532998283189"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-green-600 hover:text-green-500 transition-colors"
                      >
                        <FaWhatsapp size={13} />
                        Abrir WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="size-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Bot size={13} className="text-primary" />
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                    <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-background shrink-0">
              <div className="flex items-center justify-center gap-2 bg-muted rounded-xl px-3 py-1.5">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escreva uma mensagem..."
                  disabled={isTyping}
                  className="bg-transparent border-none shadow-none focus-visible:ring-0 px-2 h-8 text-sm placeholder:text-muted-foreground/60"
                />
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="size-7 shrink-0 bg-primary hover:bg-primary/90 rounded-lg"
                >
                  <Send size={13} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="size-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white relative"
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread dot */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 size-3 bg-green-500 rounded-full border-2 border-background" />
        )}
      </motion.button>
    </div>
  )
}
