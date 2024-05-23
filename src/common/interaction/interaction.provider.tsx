import React from 'react';
import { InteractionContext } from './interaction.context';

const InteractionProvider = ({ children }: { children: React.ReactNode }) => {
  const menuTargetRef = React.useRef<HTMLButtonElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchClearRef = React.useRef<HTMLButtonElement>(null);
  const searchTargetRef = React.useRef<HTMLButtonElement>(null);
  const sidebarTargetRef = React.useRef<HTMLButtonElement>(null);

  const onFocusMenuTarget = () => menuTargetRef.current?.focus();
  const onFocusSearchInput = () => searchInputRef.current?.focus();
  const onFocusSearchClear = () => searchClearRef.current?.focus();
  const onFocusSearchTarget = () => searchTargetRef.current?.focus();
  const onFocusSidebarTarget = () => sidebarTargetRef.current?.focus();

  return (
    <InteractionContext.Provider
      value={{
        menuTargetRef,
        searchClearRef,
        searchInputRef,
        searchTargetRef,
        sidebarTargetRef,
        onFocusMenuTarget,
        onFocusSearchInput,
        onFocusSearchClear,
        onFocusSearchTarget,
        onFocusSidebarTarget,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </InteractionContext.Provider>
  );
};

export { InteractionProvider };
