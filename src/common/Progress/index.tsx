import { Core } from '@/types/core';
import React from 'react';

export type ProgressProps = {
  max?: number;
  min?: number;
  initialStep: number;
  interval?: number;
};

export type ProgressFactory = Core.BaseFactory<{
  component: 'div';
  props: ProgressProps;
}>;

export type ProgressValue = {
  step: number;
  next(): void;
  prev(): void;
  assign(step: number): void;
};

export type ProgressOptions = {
  interval?: number;
  maxThreshold?: number;
  minThreshold?: number;
};

export type ProgressState = { step: number; isMax?: boolean; isMin?: boolean };

export function useProgressStore(props: ProgressProps) {
  const { initialStep, interval, min, max } = props;

  const INTERVAL = interval || 1;

  const MIN_THRESHOLD = min || 0;
  const MAX_THRESHOLD = max || 10;

  const [store, dispatch] = React.useState<ProgressState>({
    step: initialStep || MIN_THRESHOLD,
    isMin: true,
  });

  const next = () => {
    dispatch((current) => {
      const nextInterval = current.step + INTERVAL;
      if (nextInterval > MAX_THRESHOLD) {
        return { ...current, step: MAX_THRESHOLD, isMax: true };
      } else {
        return { ...current, step: nextInterval, isMax: false };
      }
    });
  };

  const prev = () => {
    dispatch((current) => {
      const nextInterval = current.step - INTERVAL;
      if (nextInterval < MIN_THRESHOLD) {
        return { ...current, step: MIN_THRESHOLD, isMin: true };
      } else {
        return { ...current, step: current.step - INTERVAL, isMin: false };
      }
    });
  };

  const assign = (value: number) => dispatch({ ...store, step: value });

  React.useEffect(() => {}, [store.step]);

  return { store, next, prev, assign };
}

export const Progress: ProgressFactory = (props) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return <Component {...otherProps}>{children}</Component>;
};
