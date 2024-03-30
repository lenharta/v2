import { Language } from "@/types";
import { CopyCardData, CopyData } from "./types";

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

export function extractCopyCardData(data: CopyCardData, lang: Language = 'english') {
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

export function parseExtractedCopyData<T extends CopyData>(data: T, lang: Language = 'english') {
  const { getId, getText, getTitle, getCards } = extractCopyData(data, lang);
  return { id: getId(), text: getText(), title: getTitle(), cards: getCards() };
}

export function parseExtractedCopyCardData<T extends CopyCardData>(data: T , lang: Language = 'english') {
  const { getIcon, getId, getText, getTitle } = extractCopyCardData(data, lang);
  return { id: getId(), icon: getIcon(), text: getText(), title: getTitle() }
}