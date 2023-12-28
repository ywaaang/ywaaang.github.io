import Vue from 'vue'
import { createI18n } from 'vue-i18n'
import enLocale from './en'
import cnLocale from './cn'

const messages = {
  en: enLocale,
  cn: cnLocale
}
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.getItem('lang') || 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n
