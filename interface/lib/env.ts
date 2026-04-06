import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  WEBHOOK_RES_URL: z.string(),
  WEBHOOK_CHAT_URL: z.string(),
});

export const env = envSchema.parse(process.env);
