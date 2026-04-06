import { PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    title: "Barber Shop",
    description:
      "Landing page moderna para barbearia premium com design responsivo e mobile-first.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "fullstack",
    deploy: "https://barber-shop-flame-seven.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/BarberShop",
    img: "/projects-images/mockup-BarberShop.png",
  },
  {
    title: "Vaga Certa",
    description:
      "Plataforma de otimização de currículos com IA (Gemini) para destacar candidatos.",
    tags: ["Next.js", "TypeScript", "Supabase", "IA"],
    category: "fullstack",
    deploy: "https://vaga-certa-ten.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/vaga-certa",
    img: "/projects-images/mockup-vagaCerta.jpeg",
  },
  {
    title: "DevBills — Finanças",
    description:
      "Aplicação completa de gestão financeira com API robusta e interface moderna.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    category: "fullstack",
    deploy: "https://devbills-financas.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/DevBills",
    img: "/projects-images/mockup-devbills.png",
  },
  {
    title: "Aparatus — SaaS Barbearias",
    description:
      "SaaS de agendamento para barbearias com controle de horários, filas e pagamentos.",
    tags: ["Next.js", "Supabase", "IA", "SaaS"],
    category: "fullstack",
    deploy: "https://aparatus-nu.vercel.app",
    githubUrl: "https://github.com/carlosresendeP/aparatus",
    img: "/projects-images/mockup-aparatus.png",
  },
  {
    title: "Dr. Ana Barbosa — Psicóloga",
    description:
      "Site institucional para psicóloga com foco em apresentação de serviços, depoimentos e contato.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "frontend",
    deploy: "https://psi-dr-ana.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/psi-dr-ana",
    img: "/projects-images/mockup-drana.png",
  },
  {
    title: "Clarisse Nutri",
    description:
      "Site institucional para nutricionista com foco em apresentação de serviços, depoimentos e contato.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "frontend",
    deploy: "https://clarisse-nutri.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/clarisse-nutri",
    img: "/projects-images/mockup-clarisse-nutri.png",
  },
  {
    title: "Net Gestão",
    description:
      "Plataforma para gestão de grupos de networking com sistema de convites e indicações.",
    tags: ["Next.js", "MongoDB", "TypeScript"],
    category: "fullstack",
    deploy: "https://net-gestao.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/net-gestao",
    img: "/projects-images/mockup-netGestao.png",
  },
  {
    title: "Barber Elite",
    description:
      "Site moderno e responsivo para barbearia premium com design elegante, animações sutis e interface intuitiva.",
    tags: ["React", "Styled Components", "JavaScript"],
    category: "frontend",
    deploy: "https://barber-plus-pied.vercel.app",
    githubUrl: "https://github.com/carlosresendeP/Barber-elite",
    img: "/projects-images/mokup-BarberElite.png",
  },
  {
    title: "Confeitaria Doce Encanto",
    description:
      "Landing page para confeitaria fictícia desenvolvida para praticar e aprimorar habilidades em front-end com React e Styled Components.",
    tags: ["React", "Styled Components", "JavaScript"],
    category: "frontend",
    deploy: "https://doce-encanto-doceria.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/Doce-Encanto-doceria",
    img: "/projects-images/mockup-doce-encanto.png",
  },
  {
    title: "Performance Master",
    description:
      "Landing page para academia integrada com chatbot inteligente via n8n.",
    tags: ["React", "Styled Components", "n8n"],
    category: "frontend",
    deploy: "https://performace-master-academia.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/performace-master-academia",
    img: "/projects-images/Mockup-Perf-Master.png",
  },
  {
    title: "Bohème Café",
    description:
      "Site para cafeteria com chatbot integrado via n8n para atendimento e pedidos.",
    tags: ["Next.js", "TypeScript", "Tailwind", "n8n", "Chatbot", "API"],
    category: "frontend",
    deploy: "https://boheme-cafe-jf.vercel.app",
    githubUrl: "https://github.com/carlosresendeP/boheme-cafe-jf",
    img: "/projects-images/mockup-bohemecafe.png",
  },
];

async function main() {
  console.log("Seeding projects...");

  await prisma.project.deleteMany();

  const result = await prisma.project.createMany({ data: projects });

  console.log(`✓ ${result.count} projects inserted.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
