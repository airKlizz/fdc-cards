// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import App from "./App.vue";
import {createApp} from "vue";
import {createI18n} from "vue-i18n";
import de from "@/locales/de";
import en from "@/locales/en";
import fr from "@/locales/fr";

const messages = {
  en: en,
  fr: fr,
  de: de,
};

const i18n = createI18n({
  locale: "en", // Set the initial locale, e.g., 'en'
  fallbackLocale: "en",
  messages,
});

createApp(App).use(i18n).mount("#app");
