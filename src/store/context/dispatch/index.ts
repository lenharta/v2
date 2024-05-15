import React from 'react';
import { App } from '@/types';
import { useStoreReducer } from '@/store/hooks';

const StoreDispatchContext = React.createContext(
  {} as ReturnType<typeof useStoreReducer<App.Store>>[1]
);

export { StoreDispatchContext };
