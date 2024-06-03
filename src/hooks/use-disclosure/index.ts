import React from 'react';

type DisclosureActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type DisclosureOptions = Partial<{
  onOpen: () => void;
  onClose: () => void;
}>;

type DisclosureReturn = [boolean, DisclosureActions];

function useDisclosure(
  initialState: boolean = false,
  options: DisclosureOptions = {}
): DisclosureReturn {
  const [state, dispatch] = React.useState(initialState);

  const open = React.useCallback(() => {
    dispatch((current) => {
      if (!current) {
        options.onOpen?.();
        return true;
      }
      return current;
    });
  }, [options.onOpen]);

  const close = React.useCallback(() => {
    dispatch((current) => {
      if (current) {
        options.onClose?.();
        return false;
      }
      return current;
    });
  }, [options.onClose]);

  const toggle = React.useCallback(() => {
    state ? close() : open();
  }, [close, open, state]);

  return [state, { open, close, toggle }];
}

export { useDisclosure, type DisclosureActions, type DisclosureOptions, type DisclosureReturn };
