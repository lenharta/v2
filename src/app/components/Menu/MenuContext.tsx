import React from 'react';

export interface MenuContextValue {}

export const MenuContext = React.createContext({} as MenuContextValue);

export const MenuProvider = MenuContext.Provider;

export const useMenuContext = () => React.useContext(MenuContext);
