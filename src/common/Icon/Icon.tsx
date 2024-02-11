import * as React from 'react';
import { DATA_ICON_LOOKUP } from '@/data';
import type { IconRootComponent, IconRootProps } from '@/types';

function findIcon(props: IconRootProps) {
  const { type = 'filled', name = 'person' } = props;
  return DATA_ICON_LOOKUP[type][name];
}

export const Icon: IconRootComponent = React.forwardRef((props, ref) => {
  const { type, name, component: Component = 'svg' } = props;
  const path = findIcon({ type, name });
  return (
    <Component
      ref={ref}
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      children={<path d={path} fill="currentColor" />}
    />
  );
});
