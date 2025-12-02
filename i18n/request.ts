import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "it";
  const messagesPromise = import(`../messages/${locale}.json`).catch(
    () => import(`../messages/en.json`)
  ) as Promise<{
    default: Record<string, string>;
  }>;

  return messagesPromise.then((messages) => ({
    locale,
    messages: messages.default,
  }));
});
