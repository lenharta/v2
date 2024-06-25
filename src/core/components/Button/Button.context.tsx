import React from 'react';
import { ButtonContextValue } from './Button.types';

const ButtonContext = React.createContext({} as ButtonContextValue);
const ButtonProvider = ButtonContext.Provider;
const useButtonContext = () => React.useContext(ButtonContext);

export { ButtonContext, ButtonProvider, useButtonContext };
