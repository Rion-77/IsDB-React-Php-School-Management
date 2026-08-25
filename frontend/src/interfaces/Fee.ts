import z from "zod";

export const feeSchema = z.object({
  id: z.coerce.number().optional(),
  student_id: z.coerce.number().int().positive("Student ID is required"),
  fee_type_id: z.string().uuid("Invalid fee type ID"),
  fee_collected_at: z.coerce.date("Invalid date format"),
});

export type FeeSchema = z.infer<typeof feeSchema>;

export const defaultFee: FeeSchema = {
  id: 0,
  student_id: 0,
  fee_type_id: "",
  fee_collected_at: new Date(),
};


