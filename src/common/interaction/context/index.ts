import React from 'react';

type InteractionContextValue = {
  menuTargetRef: React.RefObject<HTMLButtonElement>;
  searchTargetRef: React.RefObject<HTMLButtonElement>;
  sidebarTargetRef: React.RefObject<HTMLButtonElement>;
  onMenuFocus: () => void;
  onSearchFocus: () => void;
  onSidebarFocus: () => void;
};

const InteractionContext = React.createContext({} as InteractionContextValue);

export { InteractionContext, type InteractionContextValue };
