import z from "zod";

export const groupSchema = z.object({
  group_name: z.string().trim().min(1, "Section Name is required"),
});

export type GroupSchema = z.infer<typeof groupSchema>;


