import * as React from 'react';
import { Orientation } from '@/types/common';

export type ButtonContextValue = {
  orientation?: Orientation;
};

export const ButtonContext = React.createContext({} as ButtonContextValue);
export const ButtonProvider = ButtonContext.Provider;
export const useButtonContext = () => React.useContext(ButtonContext);
