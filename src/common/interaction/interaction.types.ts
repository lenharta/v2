type InteractionContextValue = {
  menuTargetRef: React.RefObject<HTMLButtonElement>;
  searchItemRef: React.RefObject<HTMLButtonElement>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchClearRef: React.RefObject<HTMLButtonElement>;
  searchTargetRef: React.RefObject<HTMLButtonElement>;
  searchResultRef: React.RefObject<HTMLDivElement>;
  sidebarTargetRef: React.RefObject<HTMLButtonElement>;
  onFocusMenuTarget: () => void;
  onFocusSearchItem: () => void;
  onFocusSearchInput: () => void;
  onFocusSearchClear: () => void;
  onFocusSearchTarget: () => void;
  onFocusSearchResult: () => void;
  onFocusSidebarTarget: () => void;
};

export type { InteractionContextValue };
