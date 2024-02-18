import * as React from 'react';

export type UseExhibitOptions = { onRemove?: () => void; onShow?: () => void };

export type UseExhibitActions = { toggle(): void; remove(): void; show(): void };

export type UseExhibitReturn = [boolean, UseExhibitActions];

export type UseEhxhibit = (initialState: boolean, options?: UseExhibitOptions) => UseExhibitReturn;

export const useExhibit: UseEhxhibit = (initialState = false, options = {}) => {
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

  return [state, { show, remove, toggle }] as UseExhibitReturn;
};
