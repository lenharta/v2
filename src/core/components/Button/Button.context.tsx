import React from 'react';
import { ButtonContext } from './types';

const ButtonGroupContext = React.createContext<ButtonContext | null>(null);
const ButtonProvider = ButtonGroupContext.Provider;
const useButtonContext = () => React.useContext(ButtonGroupContext);

export { ButtonProvider, useButtonContext };
