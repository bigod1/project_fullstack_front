import { z } from "zod"


export const schema = z.object({
    name: z.string(),
    email: z.string().max(0).or(z.string().email()),
    password: z.string().max(0).or(z.string().min(8)),
    telephone: z.string(),
})


export type ContactData = z.infer<typeof schema>