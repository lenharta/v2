import * as React from 'react';
import { Core } from '@/types';

const ChipGroupContext = React.createContext({} as Core.ChipContext);
const ChipGroupProvider = ChipGroupContext.Provider;
const useChipContext = () => React.useContext(ChipGroupContext);

export { ChipGroupContext, ChipGroupProvider, useChipContext };
