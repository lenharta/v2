import React from 'react';
import { StoreStateContext } from '@/store/context/state';

const useStoreState = () => React.useContext(StoreStateContext);
export { useStoreState };
