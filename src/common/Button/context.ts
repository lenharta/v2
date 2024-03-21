import * as React from 'react';
import { Orientation } from '@/types/common';

export type ButtonContextValue = {
  orientation?: Orientation;
  readOnly?: boolean;
  disabled?: boolean;
};

export const ButtonContext = React.createContext({} as ButtonContextValue);
export const ButtonProvider = ButtonContext.Provider;
export const useButtonCTX = () => React.useContext(ButtonContext);
