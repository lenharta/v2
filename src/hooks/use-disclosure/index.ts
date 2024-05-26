import React from 'react';

type UseDisclosureActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type UseDisclosure = (
  initialState?: boolean,
  options?: Partial<{ onOpen: () => void; onClose: () => void }> | undefined
) => [boolean, UseDisclosureActions];

const useDisclosure: UseDisclosure = (initialState = false, options = {}) => {
  const { onClose, onOpen } = options || {};
  const [state, dispatch] = React.useState(initialState);

  const open = React.useCallback(() => {
    dispatch((current) => {
      if (!current) {
        onOpen?.();
        return true;
      }
      return current;
    });
  }, [onOpen]);

  const close = React.useCallback(() => {
    dispatch((current) => {
      if (current) {
        onClose?.();
        return false;
      }
      return current;
    });
  }, [onClose]);

  const toggle = React.useCallback(() => {
    state ? close() : open();
  }, [close, open, state]);

  return [state, { open, close, toggle }];
};

export { useDisclosure };
