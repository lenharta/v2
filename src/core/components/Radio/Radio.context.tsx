import React from 'react';
import { RadioContext } from './Radio.types';

const RadioGroupContext = React.createContext({} as RadioContext);
const RadioGroupProvider = RadioGroupContext.Provider;
const useRadioContext = () => React.useContext(RadioGroupContext);

export { RadioGroupProvider, useRadioContext };
