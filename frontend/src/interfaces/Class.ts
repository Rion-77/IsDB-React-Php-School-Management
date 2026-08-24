import z from "zod";

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  class_name: z.string().trim().min(1, "Class Name is required"),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const defaultClass: ClassSchema = {
  id: 0,
  class_name: "",
};

