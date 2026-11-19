import { createContext, useContext } from "react";

export type Language = "ja" | "zh";

type LanguageSettings = {
  lang: Language;
  t: (ja: string, zh: string) => string;
  setLang: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageSettings>({
  lang: "ja",
  t: (ja) => ja,
  setLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}
