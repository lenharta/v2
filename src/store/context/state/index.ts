import React from 'react';
import { App } from '@/types';
import { useStoreReducer } from '@/store/hooks';

const StoreStateContext = React.createContext(
  {} as ReturnType<typeof useStoreReducer<App.Store>>[0]
);

export { StoreStateContext };
