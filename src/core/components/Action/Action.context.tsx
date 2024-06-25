import React from 'react';
import { ActionContextValue } from './Action.types';

const ActionContext = React.createContext({} as ActionContextValue);
const ActionProvider = ActionContext.Provider;
const useActionContext = () => React.useContext(ActionContext);

export { ActionContext, ActionProvider, useActionContext };
