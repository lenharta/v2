import * as React from 'react';
import { RotaryDial } from './Dial';
import { RotaryMenu } from './Menu';
import { RotarySlice } from './Slice';
import type { Core } from '@/types/core';

export type RotaryProps = {};

export type RotaryFactory = Core.BaseFactory<{
  props: RotaryProps;
  component: 'div';
  components: {
    Dial: typeof RotaryDial;
    Menu: typeof RotaryMenu;
    Slice: typeof RotarySlice;
  };
}>;

const useRotary = () => {
  const [mounted, setMounted] = React.useState(false);

  const open = () => setMounted(true);
  const close = () => setMounted(false);
  const toggle = () => setMounted((current) => !current);

  const TRANSITION = {
    speed: 1,
    duration: 1500,
  };

  const getSliceDuration = (length: number) => {
    return TRANSITION.duration / length;
  };
  const getSliceDelay = (length: number, index: number) => {
    return getSliceDuration(length) * index;
  };
};

export const Rotary: RotaryFactory = (props) => {
  const { children, ...otherProps } = props;

  const [mounted, setMounted] = React.useState(false);

  return (
    <div
      {...otherProps}
      onClick={() => setMounted((c) => !c)}
      data-animation-enter={mounted === false ? undefined : true}
      className="Rotary"
    >
      <Rotary.Dial />
      <RotaryMenu>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
        <Rotary.Slice></Rotary.Slice>
      </RotaryMenu>
    </div>
  );
};

Rotary.displayName = '@v2/Rotary';
Rotary.Dial = RotaryDial;
Rotary.Menu = RotaryMenu;
Rotary.Slice = RotarySlice;
