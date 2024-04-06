import { Store } from '@/types';

export const dataLanguages: Store.Language[] = [
  { name: 'arabic', code: 'ar' },
  { name: 'english', code: 'en' },
  { name: 'french', code: 'fr' },
  { name: 'german', code: 'de' },
  { name: 'japanese', code: 'ja' },
  { name: 'spanish', code: 'es' },
];

export const dataLookupLanguageByCode: Record<Store.LanguageCode, Store.Language> = {
  ar: { name: 'arabic', code: 'ar' },
  fr: { name: 'french', code: 'fr' },
  de: { name: 'german', code: 'de' },
  es: { name: 'spanish', code: 'es' },
  en: { name: 'english', code: 'en' },
  ja: { name: 'japanese', code: 'ja' },
};

export const dataLookupLanguageByName: Record<Store.LanguageName, Store.Language> = {
  arabic: { name: 'arabic', code: 'ar' },
  french: { name: 'french', code: 'fr' },
  german: { name: 'german', code: 'de' },
  spanish: { name: 'spanish', code: 'es' },
  english: { name: 'english', code: 'en' },
  japanese: { name: 'japanese', code: 'ja' },
};
