import z from "zod";

export const subjectSchema = z.object({
  subject_name: z.string().trim().min(1, "Section Name is required"),
  subject_code: z.string().trim().min(1, "Section Name is required"),
});

export type SubjectSchema = z.infer<typeof subjectSchema>;


