import * as React from 'react';

interface SafeProviderProps<Value> {
  children: React.ReactNode;
  value: Value;
}

export function createSafeContext<T>(errorMessage: string) {
  const Context = React.createContext<T | null>(null);

  const useSafeContext = () => {
    const T = React.useContext(Context);
    if (T === null) throw new Error(errorMessage);
    return T;
  };

  const Provider = ({ children, value }: SafeProviderProps<T>) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useSafeContext] as const;
}
