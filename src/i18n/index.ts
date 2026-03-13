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
