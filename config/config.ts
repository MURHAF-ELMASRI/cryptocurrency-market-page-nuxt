import ar from '../locale/ar.json'
import en from '../locale/en.json'
import tr from '../locale/tr.json'


export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      dir:"ltr"
    },
    {
      code: 'ar',
      name: 'العربية',
      dir:"rtl"
    },
    {
      code: 'tr',
      name: 'Türkçe',
      dir:"ltr"
    }
  ],
  defaultLocale: 'en',
  routes: {
    home: {
      tr: '/ana-sayfa',
      en: '/home',
      ar:"/الصفحة الرئيسية"
    },
   
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ar, tr }
  }
}
