import z from "zod";

export const sectionSchema = z.object({
  section_name: z.string().trim().min(1, "Section Name is required"),
  class_id: z.coerce.number("Class is required"),
});

export type SectionSchema = z.infer<typeof sectionSchema>;


