type InteractionContextValue = {
  menuTargetRef: React.RefObject<HTMLButtonElement>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchClearRef: React.RefObject<HTMLButtonElement>;
  searchTargetRef: React.RefObject<HTMLButtonElement>;
  sidebarTargetRef: React.RefObject<HTMLButtonElement>;
  onFocusMenuTarget: () => void;
  onFocusSearchInput: () => void;
  onFocusSearchClear: () => void;
  onFocusSearchTarget: () => void;
  onFocusSidebarTarget: () => void;
};

export type { InteractionContextValue };
