import { de } from './de'
import { en } from './en'
import { fr } from './fr'
import { it } from './it'

export type Locale = 'de' | 'en' | 'fr' | 'it'

export type Translations = typeof de

export const locales: Locale[] = ['de', 'en', 'fr', 'it']

export const localeLabels: Record<Locale, string> = {
  de: '🇨🇭 DE',
  en: '🇬🇧 EN',
  fr: '🇫🇷 FR',
  it: '🇮🇹 IT',
}

export const hreflangMap: Record<Locale, string> = {
  de: 'de-CH',
  en: 'en',
  fr: 'fr-CH',
  it: 'it-CH',
}

export const SITE_URL = 'https://klikkr.ch'

export type PageKey =
  | 'home'
  | 'howItWorks'
  | 'reviews'
  | 'faq'
  | 'appPrivacy'
  | 'imprint'
  | 'thanks'

export const pageAvailableLocales: Record<PageKey, Locale[]> = {
  home: ['de', 'en', 'fr', 'it'],
  howItWorks: ['de', 'en', 'fr', 'it'],
  reviews: ['de', 'en', 'fr', 'it'],
  faq: ['de', 'en', 'fr', 'it'],
  appPrivacy: ['de', 'en', 'fr', 'it'],
  imprint: ['de'],
  thanks: ['de'],
}

const translations: Record<Locale, Translations> = { de, en, fr, it }

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.de
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  if (locales.includes(segment as Locale) && segment !== 'de') {
    return segment as Locale
  }
  return 'de'
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove existing locale prefix
  const cleanPath = path.replace(/^\/(en|fr|it)(\/|$)/, '/')
  if (locale === 'de') return cleanPath || '/'
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`
}

export function getCanonicalUrl(path: string, locale: Locale): string {
  return `${SITE_URL}${getLocalizedPath(path, locale)}`
}
