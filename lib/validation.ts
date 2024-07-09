import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Brukernavn må minst være 2 bokstaver.")
    .max(50, "Brukernavn må maks være 50 bokstaver."),
  email: z.string().email("Ikke valid email adresse"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Ikke valid telefonnummer"
    ),
});
