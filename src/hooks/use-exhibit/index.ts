import * as React from 'react';

export const useExhibit = (
  initialState: boolean = false,
  options: { onRemove?: () => void; onShow?: () => void } = {}
): [boolean, { toggle(): void; remove(): void; show(): void }] => {
  const { onShow, onRemove } = options;
  const [state, dispatch] = React.useState(initialState);

  const show = React.useCallback(() => {
    dispatch((current) => {
      if (!current) {
        onShow?.();
        return true;
      }
      return false;
    });
  }, [onShow]);

  const remove = React.useCallback(() => {
    dispatch((current) => {
      if (!current) {
        onRemove?.();
        return true;
      }
      return false;
    });
  }, [onRemove]);

  const toggle = React.useCallback(() => {
    state ? remove() : show();
  }, [show, remove, state]);

  return [state, { show, remove, toggle }] as const;
};
