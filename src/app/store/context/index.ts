import * as React from 'react';
import { Store } from '@/types';

export const StoreContext = React.createContext({} as Store.Context['state']);
export const DispatchContext = React.createContext({} as Store.Context['dispatch']);

export const useStore = () => React.useContext(StoreContext);
export const useDispatch = () => React.useContext(DispatchContext);
