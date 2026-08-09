import z from "zod";

/*
 id integer [primary key, increment]
  exam_name varchar
  exam_type_id varchar
  exam_start_date date 
 */

export const examSchema = z.object({
  exam_name: z.string().trim().min(1, "Name is required").min(4, "Name must be at least 4 characters long"),
  exam_type_id: z.coerce.number("Exam Type is not selected"),
  exam_start_date: z.date("Exam Start Date is required"),
});

export type ExamSchema = z.infer<typeof examSchema>;

