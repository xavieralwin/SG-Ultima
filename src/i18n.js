import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
const publicUrl = process.env.PUBLIC_URL || '';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ["en"],
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: `${publicUrl}/locales/{{lng}}/{{ns}}.json`
    }
  });

export default i18n;