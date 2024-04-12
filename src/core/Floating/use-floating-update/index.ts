import * as React from 'react';
import { Floating } from '@/types';
import { autoUpdate } from '@floating-ui/react';
import { useDidUpdate } from '@/hooks';

export function useFloatingUpdate(props: Floating.Payload) {
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
