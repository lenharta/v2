import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { createEventCallback, createSurfaceAccent } from '../utils';
import type { AvatarRootComponent } from '@/types';
import { useThemeCTX } from '@/store';

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

  const [hovered, setHovered] = React.useState(false);
  const { state } = useThemeCTX();

  const surface = React.useCallback(
    () =>
      createSurfaceAccent({
        accent,
        hovered,
        options: {
          backgroundAlpha: 0.1,
          borderAlpha: 0.7,
          colorAlpha: 0.9,
        },
      }),
    [hovered, accent]
  );

  return (
    <Component
      {...otherProps}
      to={to}
      ref={ref}
      style={{ ...style, ...surface() }}
      className="Avatar"
      onMouseLeave={createEventCallback<HTMLAnchorElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHovered(false),
      })}
      onMouseOver={createEventCallback<HTMLAnchorElement, MouseEvent>({
        callback: otherProps.onMouseOver,
        handler: () => setHovered(true),
      })}
    >
      <Icon name={state.avatar || avatar} className="Avatar-icon" />
    </Component>
  );
});
