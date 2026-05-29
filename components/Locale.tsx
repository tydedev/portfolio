"use client";

import LocaleSwitcher from "./LocaleSwitcher";

export const Locale = () => {
  return (
    <div className="md:ml-auto w-full flex items-center justify-end">
      <LocaleSwitcher />
    </div>
  );
};
