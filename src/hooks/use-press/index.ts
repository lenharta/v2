import * as React from 'react';

type UsePressProps<T extends HTMLElement> = {
  onMouseUp?: React.MouseEventHandler<T>;
  onMouseDown?: React.MouseEventHandler<T>;
  onTouchEnd?: React.TouchEventHandler<T>;
  onTouchStart?: React.TouchEventHandler<T>;
  onKeyDown?: React.KeyboardEventHandler<T>;
  onKeyUp?: React.KeyboardEventHandler<T>;
};

export function usePress<T extends HTMLElement = HTMLButtonElement>(props?: UsePressProps<T>) {
  const [pressed, setPressed] = React.useState(false);

  const onKeyDown: React.KeyboardEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onKeyDown?.(event);
    setPressed(true);
  };

  const onKeyUp: React.KeyboardEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onKeyUp?.(event);
    setPressed(false);
  };

  const onMouseDown: React.MouseEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onMouseDown?.(event);
    setPressed(true);
  };

  const onMouseUp: React.MouseEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onMouseUp?.(event);
    setPressed(false);
  };

  const onTouchStart: React.TouchEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onTouchStart?.(event);
    setPressed(true);
  };

  const onTouchEnd: React.TouchEventHandler<T> = (event) => {
    event.stopPropagation();
    props?.onTouchEnd?.(event);
    setPressed(true);
  };

  return { pressed, onMouseUp, onMouseDown, onTouchStart, onTouchEnd, onKeyDown, onKeyUp };
}
