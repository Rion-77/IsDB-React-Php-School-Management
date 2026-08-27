import z from "zod";

export const feeSchema = z.object({
  id: z.coerce.number().optional(),
  student_id: z.coerce.number().int().positive("Student ID is required"),
  fee_type_id: z.coerce.number("Invalid fee type ID"),
  fee_collected_at: z.string("Invalid date format"),
  name: z.string().optional(),
  fee_type_name: z.string().optional(),
  fee_amount: z.string().optional(),
});

export type FeeSchema = z.infer<typeof feeSchema>;

export const defaultFee: FeeSchema = {
  id: 0,
  student_id: 0,
  fee_type_id: 0,
  fee_collected_at: new Date().toISOString().split("T")[0],
};
