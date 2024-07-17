import * as React from 'react';
import { Store } from '@types';

const StoreContext = React.createContext({} as Store.Context['state']);
const DispatchContext = React.createContext({} as Store.Context['dispatch']);

const useStore = () => React.useContext(StoreContext);
const useDispatch = () => React.useContext(DispatchContext);

export { StoreContext, useStore, DispatchContext, useDispatch };
