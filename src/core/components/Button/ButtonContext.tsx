import React from 'react';
import { Core } from '@/types';

export const ButtonContext = React.createContext({} as Core.ButtonContext);

export const ButtonProvider = ButtonContext.Provider;

export const useButtonContext = () => React.useContext(ButtonContext);
