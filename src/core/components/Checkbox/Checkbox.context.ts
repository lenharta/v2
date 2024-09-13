import * as React from 'react';
import { Core } from '@/types';

export const CheckboxContext = React.createContext<Core.CheckboxContext | null>(null);

export const CheckboxProvider = CheckboxContext.Provider;

export const useCheckboxContext = () => React.useContext(CheckboxContext);
