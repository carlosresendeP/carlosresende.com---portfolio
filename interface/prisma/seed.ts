import { PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient();

const projects = [
  // --- Projetos originais ---
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
  // --- Projetos adicionados ---
  {
    title: "Website Neuropsicóloga",
    description:
      "Website clínico para profissional de saúde mental com foco em apresentação de serviços, depoimentos e navegação clara.",
    tags: ["HTML", "Bootstrap", "Responsive", "UI"],
    category: "frontend",
    deploy: "https://projeto-rubialand-website.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/Projeto-landing-page-neuropsicologa",
    img: "/projects-images/mockup-RubiaWebsite.png",
  },
  {
    title: "Dev Burger (Fullstack)",
    description:
      "Projeto completo de hamburgueria com sistema de pedidos, pagamentos e gerenciamento — frontend separado do backend (fullstack).",
    tags: ["React", "Node.js", "MongoDB", "Postgres", "Stripe"],
    category: "fullstack",
    deploy: "#",
    githubUrl: "https://github.com/carlosresendeP/DevBurger-Interface",
    img: "/projects-images/mockup-DevBurger.png",
  },
  {
    title: "Tradição Vidros",
    description:
      "Website institucional para empresa de vidros e espelhos, com foco em apresentação de serviços e portfólio de projetos realizados.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Bootstrap"],
    category: "frontend",
    deploy: "https://carlosresendep.github.io/tradicao-vidros/",
    githubUrl: "https://github.com/carlosresendeP/tradicao-vidros",
    img: "/projects-images/mockup-tradicaoVidros.png",
  },
  {
    title: "Landing page - Ebook do zero a programação",
    description:
      "Landing page para venda de ebook sobre programação",
    tags: ["HTML", "CSS", "React", "TypeScript", "Responsive", "Tailwind", "shadcn/ui"],
    category: "frontend",
    deploy: "https://do-zero-ao-dinheiro.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/do-zero-ao-dinheiro---landing-page",
    img: "/projects-images/Mockup-landingpageEbook.png",
  },
  {
    title: "Dom Cortes Barberaria",
    description:
      "Website institucional para barbearia com foco em apresentação de serviços, depoimentos e contato.",
    tags: ["HTML", "CSS", "React", "TypeScript", "Responsive", "Tailwind", "shadcn/ui"],
    category: "frontend",
    deploy: "https://dom-cortes-barberaria.vercel.app/",
    githubUrl: "https://github.com/carlosresendeP/DomCortes-BarberShop",
    img: "/projects-images/Mockup-domCortes.jpeg",
  }
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
