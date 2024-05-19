import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useMergeRefs } from '@/hooks';
import { useFloatingContext } from '../context';
import { createEventCallback } from '@/utils';

interface FloatingTargetProps {
  children: React.ReactElement;
}

type FloatingTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: FloatingTargetProps;
}>;

const FloatingTarget = factory<FloatingTargetFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;

  const ctx = useFloatingContext();
  const refs = useMergeRefs(ref, ctx.refs.reference);

  const handleClick = createEventCallback(forwardedProps.onClick, () => {
    ctx.onChange(!ctx.isOpen);
  });

  const handleKeyDown = createEventCallback(forwardedProps.onKeyDown, () => {
    ctx.onChange(!ctx.isOpen);
  });

  return React.cloneElement(children, {
    ...forwardedProps,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    ref: refs,
  });
});

FloatingTarget.displayName = '@v2/Floating.Target';
export { FloatingTarget, type FloatingTargetProps };
