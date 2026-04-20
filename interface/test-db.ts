import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  category: z.enum(['frontend', 'fullstack']),
  deploy: z.string().url(),
  githubUrl: z.string().url(),
  img: z.string().startsWith('/').optional(),
});

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.project.findMany();
  for (const item of data) {
    const result = ProjectSchema.safeParse(item);
    if (!result.success) {
      console.log(`Validation failed for id ${item.id}:`);
      console.log(JSON.stringify(result.error.format(), null, 2));
      console.log('Original item:', item);
    } else {
        console.log(`Item ${item.id} is OK`);
    }
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
