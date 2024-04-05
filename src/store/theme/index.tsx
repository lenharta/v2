import * as React from 'react';
import { Store } from '@/types';
import { localMiddleware } from '../local';
import { lookupRootAttribute } from '@/data';
import { initialThemeState, rootAttributes } from '../config';

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

    const root = document.getElementById('root')!;

    rootAttributes.forEach((key) => {
      root.setAttribute(lookupRootAttribute[key], theme[key]);
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
