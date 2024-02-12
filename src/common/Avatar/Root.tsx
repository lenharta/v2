import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../Icon';
import { useSurface } from '@/hooks';
import { createEventCallback } from '../utils';
import type { AvatarRootComponent } from '@/types';

export const Avatar: AvatarRootComponent = React.forwardRef((props, ref) => {
  const {
    to = '/',
    style,
    accent = 'blue',
    avatar = 'person',
    component: Component = Link,
    children,
    ...otherProps
  } = props;

  const [hover, setHover] = React.useState(false);

  const surface = React.useCallback(
    () =>
      useSurface({
        state: { hover },
        values: [
          { prop: 'backgroundColor', token: accent, alpha: 0.1 },
          { prop: 'borderColor', token: accent, alpha: 0.7 },
          { prop: 'color', token: accent, alpha: 0.9 },
        ],
      }),
    [hover]
  );

  return (
    <Component
      {...otherProps}
      to={to}
      ref={ref}
      className="Avatar"
      style={{ ...style, ...surface() }}
      onMouseEnter={createEventCallback<HTMLAnchorElement, MouseEvent>({
        callback: otherProps.onMouseOver,
        handler: () => setHover(true),
      })}
      onMouseLeave={createEventCallback<HTMLAnchorElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHover(false),
      })}
    >
      <Icon name={avatar} className="Avatar-icon" />
    </Component>
  );
});
