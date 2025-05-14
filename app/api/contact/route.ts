import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormSchema } from "@/validations/ContactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.json();
    const parsed = ContactFormSchema.safeParse(form);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }

    const { email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "suwinai.aiamsumaung@gmail.com",
      subject,
      replyTo: email,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
