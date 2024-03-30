import * as React from 'react';
import { localMiddleware } from '../local';
import { initialThemeState } from '../config';
import { ThemeContextValue, ThemeStore } from '../types';

export const ThemeContext = React.createContext({} as ThemeContextValue);
export const useThemeContext = () => React.useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const reducer = (state: ThemeStore, update: Partial<ThemeStore>) => ({
    ...state,
    ...update,
  });

  const middleware = localMiddleware<ThemeStore>('localStorage');
  const initializer = () => middleware.fetch() ?? initialThemeState;
  const [theme, dispatch] = React.useReducer(reducer, initialThemeState, initializer);

  const setDir = (dir: ThemeStore['dir']) => dispatch({ dir });
  const setMode = (mode: ThemeStore['mode']) => dispatch({ mode });
  const setLang = (lang: ThemeStore['lang']) => dispatch({ lang });
  const setAccent = (accent: ThemeStore['accent']) => dispatch({ accent });
  const setAvatar = (avatar: ThemeStore['avatar']) => dispatch({ avatar });

  React.useEffect(() => {
    const root = document.getElementById('root')!;
    root.setAttribute('data-prefers-color-scheme', theme.mode);
    root.setAttribute('data-prefers-color-accent', theme.accent);
    middleware.write(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        setDir,
        setMode,
        setLang,
        setAccent,
        setAvatar,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
