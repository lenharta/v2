import React from 'react';
import { StoreDispatchContext } from '@/store/context/dispatch';

const useStoreDispatch = () => React.useContext(StoreDispatchContext);
export { useStoreDispatch };
