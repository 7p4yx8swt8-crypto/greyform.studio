import de from "./de.json";
import en from "./en.json";

export const languages = {
  de: "DE",
  en: "EN",
} as const;

export const defaultLang = "de" as const;

export const ui = { de, en } as const;

export type Lang = keyof typeof languages;

/**
 * Get the translation function for a given language.
 * Usage in .astro files:
 *   const t = useTranslations("de");
 *   t("hero.headline1")  →  "Digitale Auftritte"
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = ui[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "string" ? value : key;
  };
}