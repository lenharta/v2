import React from 'react';
import { ChipContext } from '../chip-types';

const ChipGroupContext = React.createContext({} as ChipContext);

const ChipProvider = ChipGroupContext.Provider;

const useChipContext = () => React.useContext(ChipGroupContext);

export { ChipProvider, useChipContext };
