import React from 'react';
import { Core } from '@/types';
import { autoUpdate } from '@floating-ui/react';
import { useDidUpdate } from '@/hooks';

function useFloatingUpdate(props: Core.FloatingPayload) {
  const { opened, floating, placement, placementDependencies } = props;
  const [delayedUpdate, setDelayedUpdate] = React.useState(0);

  React.useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return undefined;
  }, [
    floating.refs.floating.current,
    floating.refs.reference.current,
    delayedUpdate,
    placement,
    opened,
  ]);

  useDidUpdate(() => {
    floating.update();
  }, placementDependencies);

  useDidUpdate(() => {
    setDelayedUpdate((current) => current + 1);
  }, [opened]);
}

export { useFloatingUpdate };
