"use client";

import { create } from "zustand";
import { LocaleCode } from "@/lib/locales";

type Pathnames = Partial<Record<LocaleCode, string>>;

interface State {
  pathnames: Pathnames;
  setPathnames: (p: Pathnames) => void;
  clearPathnames: () => void;
}

export const useTranslatedPathnamesStore = create<State>((set) => ({
  pathnames: {},

  setPathnames: (pathnames) => set({ pathnames }),

  clearPathnames: () => set({ pathnames: {} }),
}));
