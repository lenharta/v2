import * as React from 'react';
import { autoUpdate } from '@floating-ui/react';
import { useDidUpdate } from '@/hooks';
import { FloatingPosition } from '../../types';

export interface Payload {
  opened?: boolean;
  floating: {
    update: () => void;
    refs: {
      reference: React.MutableRefObject<any>;
      floating: React.MutableRefObject<any>;
    };
  };
  positionDependencies?: React.DependencyList | any[];
  position: FloatingPosition;
}

export function useFloatingUpdate(props: Payload) {
  const { opened, floating, position, positionDependencies } = props;
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
    opened,
    delayedUpdate,
    position,
  ]);

  useDidUpdate(() => {
    floating.update();
  }, positionDependencies);

  useDidUpdate(() => {
    setDelayedUpdate((current) => current + 1);
  }, [opened]);
}
