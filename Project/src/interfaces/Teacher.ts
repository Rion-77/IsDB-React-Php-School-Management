import z from "zod";

export const teacherSchema = z.object({
  name: z.string().trim().min(1, "Name is required").min(4, "Name must be at least 4 characters long"),
  designation:z.string().trim().min(1, "Designation is required"),
  address: z.string().trim().min(1, "Address is required"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^(?:\+[1-9]\d{1,14}|0[1-9]\d{7,14})$/, "Invalid phone number"),
  qualifications: z.string().trim().min(1, "Qualifications are required"),
  subject_id: z.coerce.number("Subject is not selected"),
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

export type TeacherSchema = z.infer<typeof teacherSchema>;
