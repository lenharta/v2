import React from 'react';
import { InteractionContextValue } from './interaction.types';

const InteractionContext = React.createContext({} as InteractionContextValue);
const useInteractionContext = () => React.useContext(InteractionContext);

export { InteractionContext, useInteractionContext };
