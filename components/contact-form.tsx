"use client";

import { useActionState } from "react";

import { sendEmail, type EmailState } from "@/actions/email";
import { useTranslations } from "next-intl";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [sendEmailState, sendEmailAction, submitting] = useActionState<
    EmailState,
    FormData
  >(sendEmail, {
    success: false,
  });
  const t = useTranslations("ContactForm");

  return (
    <form action={sendEmailAction} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row text-lg gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Input
            type={"text"}
            id={"name"}
            name={"name"}
            disabled={submitting}
            placeholder={t("name")}
            className="w-full"
          />
          {sendEmailState.errors?.name && !submitting && (
            <small className="text-destructive">
              {sendEmailState.errors.name}
            </small>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Input
            type={"text"}
            id={"lastname"}
            name={"lastname"}
            disabled={submitting}
            placeholder={t("lastname")}
            className="w-full"
          />
          {sendEmailState.errors?.lastname && !submitting && (
            <small className="text-destructive">
              {sendEmailState.errors.lastname}
            </small>
          )}
        </div>
      </div>

      <div>
        <Input
          type={"email"}
          id={"email"}
          name={"email"}
          disabled={submitting}
          placeholder={t("email")}
        />
        {sendEmailState.errors?.email && !submitting && (
          <small className="text-destructive">
            {sendEmailState.errors.email}
          </small>
        )}
      </div>

      <div>
        <Textarea
          name={"message"}
          id={"message"}
          cols={30}
          rows={10}
          disabled={submitting}
          placeholder={t("message")}
        />
        {sendEmailState.errors?.message && !submitting && (
          <small className="text-destructive">
            {sendEmailState.errors.message}
          </small>
        )}
      </div>

      {!submitting && sendEmailState.success && (
        <div className="flex bg-green-200/50 rounded p-4">
          <p className="text-green-500">{t("success")}</p>
        </div>
      )}

      <Button
        type={"submit"}
        disabled={submitting}
        size={"lg"}
        className="cursor-pointer text-base hover:bg-primary/90 transition-all duration-300"
      >
        {submitting ? <Loader2 className="animate-spin" /> : t("submit")}
      </Button>
    </form>
  );
};
