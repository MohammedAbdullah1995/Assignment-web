/**
 * i18n Configuration
 * Configuration for internationalization using i18next library.
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from '../localization/en.json';
import French from '../localization/fr.json';
import German from '../localization/de.json';

/**
 * Language resources for different languages.
 */
const resources = {
    en: { translation: English },
    fr: { translation: French },
    de: { translation: German },
};

/**
 * Initialize i18n with configuration options.
 */
i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // Default language
        fallbackLng: "en", // Fallback language if translation key is not found
    });

export default i18n;
