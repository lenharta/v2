import React from 'react';

export interface ChipContextValue<T extends string = string> {
  onChange: (value: T) => void;
  value: T;
}

export const ChipContext = React.createContext({} as ChipContextValue);
export const ChipProvider = ChipContext.Provider;
export const useChipCTX = () => React.useContext(ChipContext);
