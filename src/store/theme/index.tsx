import * as React from 'react';
import { Store } from '@/types';
import { localMiddleware } from '@/store/local';
import { initialThemeState } from '@/store/config';
import { DATA_STORE_GLOBAL_ATTRIBUTES, LOOKUP_STORE_GLOBAL_ATTRIBUTES } from '@/data';

export const ThemeStateContext = React.createContext({} as Store.ThemeContextValue);
export const ThemeDispatchContext = React.createContext({} as Store.ThemeDispatchValue);

export const ThemeStateProvider = ThemeStateContext.Provider;
export const ThemeDispatchProvider = ThemeDispatchContext.Provider;

export const useThemeState = () => React.useContext(ThemeStateContext);
export const useThemeDispatch = () => React.useContext(ThemeDispatchContext);

export function ThemeProvider({ children }: Store.ProviderProps) {
  const reducer = (state: Store.ThemeState, update: Partial<Store.ThemeState>) => ({
    ...state,
    ...update,
  });

  const middleware = localMiddleware<Store.ThemeState>('local');

  const initializer = (current: Store.ThemeState) => middleware.fetch() ?? current;

  const [theme, dispatch] = React.useReducer(reducer, initialThemeState, initializer);

  React.useEffect(() => {
    middleware.write(theme);

    const root = document.getElementsByTagName('html')[0]!;

    // if (theme.mode === 'dark') {
    //   console.log();
    // }

    DATA_STORE_GLOBAL_ATTRIBUTES.forEach((key) => {
      root.setAttribute(LOOKUP_STORE_GLOBAL_ATTRIBUTES[key], theme[key]);
    });
  }, [theme]);

  return (
    <ThemeStateProvider value={theme}>
      <ThemeDispatchProvider
        value={{
          setDir: (dir) => dispatch({ dir }),
          setMode: (mode) => dispatch({ mode }),
          setLang: (lang) => dispatch({ lang }),
          setAccent: (accent) => dispatch({ accent }),
          setAvatar: (avatar) => dispatch({ avatar }),
        }}
      >
        {children}
      </ThemeDispatchProvider>
    </ThemeStateProvider>
  );
}
