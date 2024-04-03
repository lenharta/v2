import { IconName } from "@/common";
import { Language } from "@/types";

export type LangName = 'arabic' | 'english' | 'french' | 'german' | 'japanese' | 'spanish';
export type LangCode = 'ar' | 'en' | 'fr' | 'de' | 'ja' | 'es';
export type LangObj = { name: LangName; code: LangCode };

export interface CopyCardData {
  id: string;
  icon?: IconName | undefined;
  text?: Partial<Record<Language, string>> | undefined;
  title?: Partial<Record<Language, string>> | undefined;
}

export interface CopyData {
  id: string;
  text?: Partial<Record<Language, string>> | undefined;
  title?: Partial<Record<Language, string>> | undefined;
  cards?: CopyCardData[];
}

