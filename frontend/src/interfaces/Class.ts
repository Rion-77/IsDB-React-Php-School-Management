import z from "zod";

export const classSchema = z.object({
  class_name: z.string().trim().min(1, "Class Name is required"),
});

export type ClassSchema = z.infer<typeof classSchema>;

