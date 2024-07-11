import { HighlighterGeneric } from 'shikiji';

export type CodeLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

export type SnippetReturn = { code: string; highlighted: boolean };

export type SnippetCode = (code: string, language: CodeLanguage) => SnippetReturn;

export type SnippetState = HighlighterGeneric<any, any> | null;

export interface ShikiProviderProps {
  children: React.ReactNode;
  loadShiki: () => Promise<HighlighterGeneric<any, any>>;
}
