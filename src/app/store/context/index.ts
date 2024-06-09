import React from 'react';
import { Store } from '@/types';

const StoreStateContext = React.createContext({} as Store.StateContext);
const StoreDispatchContext = React.createContext({} as Store.DispatchContext);

const useStateContext = () => React.useContext(StoreStateContext);
const useDispatchContext = () => React.useContext(StoreDispatchContext);

export { useStateContext, useDispatchContext, StoreStateContext, StoreDispatchContext };
