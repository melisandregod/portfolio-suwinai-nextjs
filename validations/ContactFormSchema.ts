import { useTranslations } from "next-intl";
import { z } from "zod";

export function useFormSchema() {
  const t = useTranslations(`Contact.form.validation`);
  return z.object({
    email: z
      .string()
      .nonempty({
        message: t("nonempty"),
      })
      .email({
        message: t("email"),
      }),
    subject: z.string().nonempty({ message: t("nonempty") }),
    message: z.string().nonempty({ message: t("nonempty") }),
  });
}

//base
export const ContactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});