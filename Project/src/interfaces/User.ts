import z from "zod";

export const userSchema = z.object({
  name: z.string().trim().min(1, "Name is required").min(4, "Name must be at least 4 characters long"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^(?:\+[1-9]\d{1,14}|0[1-9]\d{7,14})$/, "Invalid phone number"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
  password: z.string().trim().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
  role_id: z.coerce.number("Role is not selected").pipe(z.union([z.literal(1), z.literal(2), z.literal(3)])),
});

export type UserSchema = z.infer<typeof userSchema>;

