import z from "zod";

export const feeTypeSchema = z.object({
  id: z.coerce.number().optional(),
  fee_type_name: z.string().trim().min(1, "Fee type name is required"),
  fee_amount: z.coerce.number("Fee amount is required").min(1, "Fee amount is required"),
});

export type FeeTypeSchema = z.infer<typeof feeTypeSchema>;

export const defaultFeeType: FeeTypeSchema = {
  id: 0,
  fee_type_name: "",
  fee_amount: 0,
};


