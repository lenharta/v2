import { IconName } from "@/common";
import { Language } from "@/types";

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

// english: ``,
// arabic: ``,
// french: ``,
// german: ``,
// japanese: ``,
// spanish: ``,