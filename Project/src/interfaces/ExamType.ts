import z from "zod";

export const examTypeSchema = z.object({
  exam_type_name: z.string().trim().min(1, "Exam Type Name is required"),
});

export type ExamTypeSchema = z.infer<typeof examTypeSchema>;

