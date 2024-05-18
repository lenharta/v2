import React from 'react';
import { InteractionContext } from '@/common/interaction';

const InteractionProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const menuTargetRef = React.useRef<HTMLButtonElement>(null);
  const searchTargetRef = React.useRef<HTMLButtonElement>(null);
  const sidebarTargetRef = React.useRef<HTMLButtonElement>(null);

  return (
    <InteractionContext.Provider
      value={{
        menuTargetRef,
        searchTargetRef,
        sidebarTargetRef,
        onMenuFocus: () => menuTargetRef.current?.focus(),
        onSearchFocus: () => searchTargetRef.current?.focus(),
        onSidebarFocus: () => sidebarTargetRef.current?.focus(),
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </InteractionContext.Provider>
  );
};

export { InteractionProvider };
