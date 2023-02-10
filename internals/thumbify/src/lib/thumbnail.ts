import { z } from "zod";

const companies = ["digicode", "gotech", "techwizard", "vitorgouveia"] as const;

export type Company = typeof companies[number];

export const query = z.object({
  title: z.string(),
  description: z.string(),
  coverUrl: z.string().url(),
  company: z.enum(companies),
});

export type Keys = keyof typeof query._output;
