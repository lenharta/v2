import * as React from 'react';
import { Align, Justify, Orientation, Size } from '@/types/common';

export type ButtonContextValue = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  orientation?: Orientation;
};

export const ButtonContext = React.createContext({} as ButtonContextValue);
export const ButtonProvider = ButtonContext.Provider;
export const useButtonContext = () => React.useContext(ButtonContext);
