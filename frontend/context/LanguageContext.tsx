"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import translations from "@/messages/i18n.json";

export type Language = "uz" | "ru" | "en";

type TranslationData = typeof translations.uz;

type ContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
};

const LanguageContext = createContext<ContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "uz";
    }

    const savedLanguage = localStorage.getItem("lazzat-language");

    if (
      savedLanguage === "uz" ||
      savedLanguage === "ru" ||
      savedLanguage === "en"
    ) {
      return savedLanguage;
    }

    return "uz";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);

    if (typeof window !== "undefined") {
      localStorage.setItem("lazzat-language", newLanguage);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}