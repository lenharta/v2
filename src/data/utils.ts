import { Language } from "@/types";
import { CopyData, CopyDataCard } from "./types";

export function extractCopyData(data: CopyData, lang: Language = 'english') {
  return {
    getId() {
      return data.id;
    },
    getTitle() {
      return data.title?.[lang];
    },
    getText() {
      return data.text?.[lang];
    },
    getCards() {
      return data.cards ? data.cards : [];
    },
  };
}

export function extractCopyCardData(data: CopyDataCard, lang: Language = 'english') {
  return {
    getId() {
      return data.id;
    },
    getIcon() {
      return data.icon;
    },
    getTitle() {
      return data.title?.[lang];
    },
    getText() {
      return data.text?.[lang];
    },
  };
}