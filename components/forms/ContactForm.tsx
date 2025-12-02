"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import LoadingState from "../ui/LoadingState";

export default function ContactForm() {
  const t = useTranslations("forms.contacts");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append("access_key", "2f35ffa4-b145-43c2-a1b9-c4b81d9d2437");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t("messageSent"));
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(t("error"));
      }
    } catch (error) {
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <Input type="text" name="name" placeholder={t("name")} required />
          <Input type="email" name="email" placeholder={t("email")} required />
          <Textarea
            name="message"
            placeholder={t("message")}
            rows={8}
            required
          />

          <Button
            variant={"gradient"}
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <LoadingState size="sm" loadingText={t("sendingMessage")} />
              </>
            ) : (
              t("sendMessage")
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
