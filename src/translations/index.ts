import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ua from './ua';
import { NativeModules, Platform } from 'react-native';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

const resources = {
  ua_UA: {
    translation: {
      ...ua,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: 'ua_UA',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
