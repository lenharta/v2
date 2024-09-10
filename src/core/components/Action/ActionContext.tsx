import React from 'react';
import { Core } from '@/types';

export const ActionContext = React.createContext({} as Core.ActionContext);

export const ActionProvider = ActionContext.Provider;

export const useActionContext = () => React.useContext(ActionContext);
