"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormSchema } from "@/validations/ContactFormSchema";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const t = useTranslations("Contact");
  const formSchema = useFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    mode: "all",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        form.setError("root", {
          message: "Failed to send message. Please try again later.",
        });
        return;
      }
      form.reset();
      toast("Message sent successfully!");
    } catch (error) {
      console.error("Unexpected error:", error);
      form.setError("root", {
        message: "An unexpected error occurred. Please try again.",
      });
    }
  }

  return (
    <div className="m-4">
      <div className="flex flex-col items-center">
        <div className="my-5 flex flex-col items-center gap-2" data-aos="zoom-in">
          <h2 className="text-3xl lg:text-5xl font-bold">{t("title")}</h2>
          <p className="text-sm lg:text-xl px-10">
            {t("description1")} {t("email")} {t("description2")}
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 p-4 w-full md:w-180 xl:my-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("form.email")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("form.subject")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="h-50"
                      placeholder={t("form.message")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">
                {t("form.submit")}
                <Send />
              </Button>
            </div>
            {form.formState.errors.root && (
              <p className="text-sm text-red-500">
                {form.formState.errors.root.message}
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
