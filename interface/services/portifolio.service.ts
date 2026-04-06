import { db } from "@/lib/prisma";
import { ProjectSchema, Project } from "@/types/projectTypes";

export async function getPortfolioProjects(): Promise<Project[]> {
  try {
    // 1. Fetch: Busca os dados crus do MongoDB via Prisma
    const rawData = await db.project.findMany({
      orderBy: {
        id: 'desc'
      }
    });

    const validatedProjects = rawData.map((item) => {
      const result = ProjectSchema.safeParse(item);
      
      if (!result.success) {
        console.error(`[ProjectService] Erro de validação no projeto ID: ${item.id}`, result.error.format());
        return null;
      }
      
      return result.data;
    });

    // 3. Filter: Removemos possíveis nulos (projetos que falharam na validação)
    return validatedProjects.filter((project): project is Project => project !== null);

  } catch (error) {
    // Erros de conexão (como o Timeout do IP que você teve) caem aqui
    console.error("[ProjectService] Falha crítica na comunicação com o banco:", error);
    
    // Retornamos um array vazio para que a UI possa renderizar um estado de "Empty" amigável
    return [];
  }
}