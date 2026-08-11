import z from "zod";


export const examSchema = z.object({
  exam_name: z.string().trim().min(1, "Name is required").min(4, "Name must be at least 4 characters long"),
  exam_type_id: z.coerce.number("Exam Type is not selected"),
  // exam_start_date: z.date("Exam Start Date is required").min(new date(), "Select a future date"),
  exam_start_date: z.coerce.date("Exam Start Date is required").min(new Date(), { error: "Cannot Select Past Date " }),
  // exam_start_date: z.coerce.date().safeParse(new Date()),
});

export type ExamSchema = z.infer<typeof examSchema>;

