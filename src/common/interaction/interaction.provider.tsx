import React from 'react';
import { InteractionContext } from './interaction.context';

const InteractionProvider = ({ children }: { children: React.ReactNode }) => {
  const menuTargetRef = React.useRef<HTMLButtonElement>(null);
  const searchItemRef = React.useRef<HTMLButtonElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchClearRef = React.useRef<HTMLButtonElement>(null);
  const searchTargetRef = React.useRef<HTMLButtonElement>(null);
  const searchResultRef = React.useRef<HTMLDivElement>(null);
  const sidebarTargetRef = React.useRef<HTMLButtonElement>(null);

  const onFocusMenuTarget = () => menuTargetRef.current?.focus();
  const onFocusSidebarTarget = () => sidebarTargetRef.current?.focus();
  const onFocusSearchItem = () => searchItemRef.current?.focus();
  const onFocusSearchInput = () => searchInputRef.current?.focus();
  const onFocusSearchClear = () => searchClearRef.current?.focus();
  const onFocusSearchTarget = () => searchTargetRef.current?.focus();
  const onFocusSearchResult = () => searchResultRef.current?.focus();

  return (
    <InteractionContext.Provider
      value={{
        menuTargetRef,
        searchItemRef,
        searchClearRef,
        searchInputRef,
        searchTargetRef,
        searchResultRef,
        sidebarTargetRef,
        onFocusMenuTarget,
        onFocusSearchItem,
        onFocusSearchInput,
        onFocusSearchClear,
        onFocusSearchTarget,
        onFocusSearchResult,
        onFocusSidebarTarget,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </InteractionContext.Provider>
  );
};

export { InteractionProvider };
