import * as React from 'react';
import { ButtonContextValue } from './types';

export const ButtonContext = React.createContext({} as ButtonContextValue);

export const ButtonProvider = ButtonContext.Provider;

export const useButtonContext = () => React.useContext(ButtonContext);
