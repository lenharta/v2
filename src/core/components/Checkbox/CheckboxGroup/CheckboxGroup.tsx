import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { CheckboxProvider } from '../Checkbox.context';
import { getNextIndex, getPrevIndex, mergeRefs } from '@/utils';

export type CheckboxGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.CheckoboxGroupProps;
  excluded: 'onChange';
  element: 'div';
}>;

const handleCheckboxFocus = <T extends HTMLDivElement = HTMLDivElement>(
  element: React.RefObject<T>,
  options: {
    loop?: boolean;
    onKeyDown?: (event: React.KeyboardEvent<T>) => void;
    orientation?: Core.Orientation;
  }
) => {
  const { onKeyDown, orientation = 'horizontal', loop = false } = options;
  return (event: React.KeyboardEvent<T>) => {
    if (element) {
      event.stopPropagation();
      onKeyDown?.(event);

      let nodes: T[] = [];
      const node = element.current!;
      node.childNodes?.forEach((n) => nodes.push(n.childNodes[0] as T));

      const currentIndex = nodes.findIndex((node) => node === window.document.activeElement);
      const nextIndex = getNextIndex(currentIndex, nodes, loop);
      const prevIndex = getPrevIndex(currentIndex, nodes, loop);

      const moveFocusToNextIndex = () => (nodes[nextIndex] as T)?.focus();
      const moveFocusToPrevIndex = () => (nodes[prevIndex] as T)?.focus();
      const moveFocusToLastIndex = () => nodes[nodes.length - 1]?.focus();
      const moveFocusToFirstIndex = () => nodes[0]?.focus();

      event.preventDefault();

      const horizontalActions = {
        End: () => moveFocusToLastIndex(),
        Home: () => moveFocusToFirstIndex(),
        ArrowUp: () => moveFocusToFirstIndex(),
        ArrowDown: () => moveFocusToLastIndex(),
        ArrowRight: () => moveFocusToNextIndex(),
        ArrowLeft: () => moveFocusToPrevIndex(),
      }[event.key];

      const verticalActions = {
        End: () => moveFocusToLastIndex(),
        Home: () => moveFocusToFirstIndex(),
        ArrowUp: () => moveFocusToPrevIndex(),
        ArrowDown: () => moveFocusToNextIndex(),
        ArrowRight: () => moveFocusToLastIndex(),
        ArrowLeft: () => moveFocusToFirstIndex(),
      }[event.key];

      if (orientation === 'horizontal') {
        horizontalActions?.();
      } else {
        verticalActions?.();
      }
    }
  };
};

export const CheckboxGroup = Component<CheckboxGroupFactory>(
  (
    {
      gap = 'xxs',
      size,
      shape,
      variant,
      value,
      onChange,
      isDisabled,
      isLoading,
      isReadonly,
      orientation = 'horizontal',
      component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const elementRef = React.useRef<HTMLDivElement>(null);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: itemValue } = event.currentTarget || {};
      return onChange?.(
        value.includes(itemValue)
          ? value.filter((stateItem) => stateItem !== itemValue)
          : [...value, itemValue]
      );
    };

    return (
      <div
        {...props}
        ref={mergeRefs(ref, elementRef)}
        className={clsx('v2-checkbox-group', `v2-checkbox-group--gap-${gap}`)}
        onKeyDownCapture={handleCheckboxFocus(elementRef, { orientation })}
        data-orientation={orientation}
        aria-orientation={orientation}
        data-checkbox-group
      >
        <CheckboxProvider
          value={{
            size,
            shape,
            value,
            variant,
            isLoading,
            isDisabled,
            isReadonly,
            orientation,
            onChange: onValueChange,
          }}
        >
          {children}
        </CheckboxProvider>
      </div>
    );
  }
);

CheckboxGroup.displayName = '@v2/Checkbox.Group';
