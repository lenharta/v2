import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/utils';
import { useFloatingContext } from '../Floating.context';
import { FloatingTargetProps } from '../Floating.types';

type FloatingTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: FloatingTargetProps;
}>;

const FloatingTarget = factory<FloatingTargetFactory>((props, ref) => {
  const { children, ...otherProps } = props;

  const forwardedProps: any = otherProps;
  const ctx = useFloatingContext();
  const refs = useMergeRefs(ctx.reference, (children as any).ref, ref);

  if (!React.isValidElement(children)) {
    throw new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (event.code === 'Enter') {
      ctx.onChange(ctx.isOpen ? true : false);
    }
  });
  const handleClick = createEventCallback(otherProps.onClick, () => {
    ctx.onChange(ctx.isOpen ? true : false);
  });

  return React.cloneElement(children, {
    ...forwardedProps,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: refs,
  });
});

FloatingTarget.displayName = '@v2/Floating.Target';
export { FloatingTarget, type FloatingTargetProps };
