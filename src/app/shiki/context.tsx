import * as React from 'react';
import { ShikiProviderProps, SnippetCode, SnippetState } from './types';
import { useStore } from '../store';
import { Theme } from '@/types';

export const ShikiContext = React.createContext<SnippetCode | null>(null);

export function ShikiProvider({ children, loadShiki }: ShikiProviderProps) {
  const [shiki, setShiki] = React.useState<SnippetState>(null);

  const store = useStore();

  const getCodeTheme = (mode: Theme.Mode): string =>
    ({
      light: `v2-code-theme-light`,
      dark: `v2-code-theme-dark`,
      dim: `v2-code-theme-dark`,
    })[mode];

  React.useEffect(() => {
    loadShiki().then((s) => setShiki(s));
  }, []);

  const highlight: SnippetCode = React.useCallback(
    (code, language = 'tsx') => {
      if (!shiki) {
        return { code, highlighted: false };
      }

      return {
        code: shiki.codeToHtml(code, {
          lang: language,
          theme: getCodeTheme(store.mode) || 'v2-code-theme-dark',
        }),
        highlighted: true,
      };
    },
    [shiki, store]
  );

  return <ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>;
}
