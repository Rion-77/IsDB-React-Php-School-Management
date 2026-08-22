import z from "zod";

export const roleSchema = z.object({
  name: z.string().trim().min(1, "Role Name is required"),
  description: z.string().trim().min(1, "Description is required"),
});

export type RoleSchema = z.infer<typeof roleSchema>;

