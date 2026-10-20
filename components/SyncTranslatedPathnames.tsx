"use client";

import { useEffect } from "react";
import { useTranslatedPathnamesStore } from "@/lib/store/translated-pathnames";

interface Props {
  pathnames: Partial<Record<string, string>>;
}

export function SyncTranslatedPathnames({ pathnames }: Props) {
  const setPathnames = useTranslatedPathnamesStore(
    (state) => state.setPathnames,
  );

  const clearPathnames = useTranslatedPathnamesStore(
    (state) => state.clearPathnames,
  );

  useEffect(() => {
    setPathnames(pathnames);

    return () => {
      clearPathnames();
    };
  }, [pathnames, setPathnames, clearPathnames]);

  return null;
}
