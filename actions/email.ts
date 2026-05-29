"use server";

import { render } from "@react-email/render";
import { Resend } from "resend";
import {
  object,
  string,
  email,
  pipe,
  trim,
  minLength,
  safeParse,
  type InferInput,
} from "valibot";

import { getTranslations } from "next-intl/server";

import { EmailBody } from "@/components/email";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export interface EmailState {
  success: boolean;
  errors?: {
    [key: string]: string | null | undefined;
  };
}

export const sendEmail = async (
  prevState: EmailState,
  formData: FormData,
): Promise<EmailState> => {
  const t = await getTranslations("ContactForm");

  // Schema creato QUI
  const EmailSchema = object({
    name: pipe(string(), trim(), minLength(1, t("nameRequired"))),

    lastname: pipe(string(), trim(), minLength(1, t("lastnameRequired"))),

    email: pipe(
      string(),
      trim(),
      minLength(1, t("emailRequired")),
      email(t("emailInvalid")),
    ),

    message: pipe(string(), trim(), minLength(30, t("messageRequired"))),
  });

  type EmailForm = InferInput<typeof EmailSchema>;

  const name = formData.get("name") as string;
  const lastname = formData.get("lastname") as string;
  const emailValue = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const validation = safeParse(EmailSchema, {
      name,
      lastname,
      email: emailValue,
      message,
    });

    if (!validation.success) {
      const errors: EmailState["errors"] = {};

      validation.issues.forEach(issue => {
        const key = issue.path?.[0]?.key as keyof EmailForm;
        errors[key] = issue.message;
      });

      return { success: false, errors };
    }

    const htmlBody = await render(
      EmailBody({
        name,
        lastname,
        email: emailValue,
        message,
      }),
    );

    const { data, error } = await resend.emails.send({
      from: `${name} ${lastname} via tydedev.it <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TARGET_EMAIL || "",
      subject: "New message from contact form on tydedev.it",
      replyTo: emailValue,
      html: htmlBody,
    });

    return {
      errors: {
        submission: error?.message,
      },
      success: Boolean(data?.id),
    };
  } catch (error) {
    return {
      errors: {
        submission: (error as Error).message || "Something went wrong",
      },
      success: false,
    };
  }
};
