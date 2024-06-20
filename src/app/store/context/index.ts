import React from 'react';
import { Store } from '@/types';

const StoreStateContext = React.createContext({} as Store.StateContextValue);
const StoreDispatchContext = React.createContext({} as Store.DispatchContextValue);

const useStateContext = () => React.useContext(StoreStateContext);
const useDispatchContext = () => React.useContext(StoreDispatchContext);

export { useStateContext, useDispatchContext, StoreStateContext, StoreDispatchContext };
