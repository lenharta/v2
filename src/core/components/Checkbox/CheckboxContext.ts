import React from 'react';
import { Core } from '@/types';

export const CheckboxContext = React.createContext({} as Core.CheckboxContext);

export const CheckboxProvider = CheckboxContext.Provider;

export const useCheckboxContext = () => React.useContext(CheckboxContext);
