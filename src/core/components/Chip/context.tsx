import * as React from 'react';
import { ChipContext } from './types';

const ChipGroupContext = React.createContext({} as ChipContext);
const ChipGroupProvider = ChipGroupContext.Provider;
const useChipContext = () => React.useContext(ChipGroupContext);

export { ChipGroupContext, ChipGroupProvider, useChipContext };
