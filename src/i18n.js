import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import translationJPN from "./locales/jp/translation.json"
import translationENG from "./locales/eng/translation.json"
import { I18N_LANGUAGE_STORAGE_KEY } from "./config"

// the translations
const resources = {
  jp: {
    translation: translationJPN,
  },
  en: {
    translation: translationENG,
  },
}

const DEFAULT_LANGUAGE = "jp"
const language = localStorage.getItem(I18N_LANGUAGE_STORAGE_KEY)

if (!language) {
  localStorage.setItem(I18N_LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE)
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(I18N_LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
