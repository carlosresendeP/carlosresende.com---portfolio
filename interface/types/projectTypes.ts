import { z } from 'zod'

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  category: z.enum(['frontend', 'fullstack']),
  deploy: z.string().url(),
  githubUrl: z.string().url(),
  img: z.string().startsWith('/').optional(),
})

export type Project = z.infer<typeof ProjectSchema>
