import z from "zod";

export const studentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").min(4, "Name must be at least 4 characters long"),
  father_name: z
    .string()
    .trim()
    .min(1, "Father's Name is required")
    .min(4, "Father's Name must be at least 4 characters long"),
  mother_name: z
    .string()
    .trim()
    .min(1, "Mother's Name is required")
    .min(4, "Mother's must be at least 4 characters long"),
  address: z.string().trim().min(1, "Address is required"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^(?:\+[1-9]\d{1,14}|0[1-9]\d{7,14})$/, "Invalid phone number"),
  class_id: z.coerce.number("Class is not selected"),
  section_id: z.coerce.number("Section is not selected"),
  group_id: z.coerce.number().optional(),
  photo: z.preprocess(
    (val) => (val instanceof FileList ? val[0] : val),
    z
      .file({ message: "Upload Image" })
      .min(1)
      .max(1024 * 1024)
      .mime([
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
        "image/svg+xml",
        "image/avif",
        "image/bmp",
        "image/tiff",
      ], "Invalid file type. Select an image").optional(),
  ),
});

export type StudentSchema = z.infer<typeof studentSchema>;
