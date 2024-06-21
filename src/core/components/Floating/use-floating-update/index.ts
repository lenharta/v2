import React from 'react';
import { autoUpdate } from '@floating-ui/react';
import { useDidUpdate } from '@/hooks';
import { UseFloatingConfig } from '../Floating.types';

const useFloatingUpdate = (config: UseFloatingConfig) => {
  const { floating, open, placement, placementDependencies } = config;
  const [delayedUpdate, setDelayedUpdate] = React.useState(0);

  React.useEffect(() => {
    if (floating.refs.floating.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return undefined;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    placement,
    delayedUpdate,
    open,
  ]);

  useDidUpdate(() => {
    floating.update();
  }, placementDependencies);

  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [open]);
};

export { useFloatingUpdate };
