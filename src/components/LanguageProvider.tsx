import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "../i18n";

const storageKey = "kouu-language";

function getSavedLanguage(): Language {
  try {
    return window.localStorage.getItem(storageKey) === "zh" ? "zh" : "ja";
  } catch {
    return "ja";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState(getSavedLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "ja";
    try {
      window.localStorage.setItem(storageKey, lang);
    } catch {
      return;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (ja, zh) => lang === "zh" ? zh : ja }}>
      {children}
    </LanguageContext.Provider>
  );
}
