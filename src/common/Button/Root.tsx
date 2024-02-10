import * as React from 'react';
import { ButtonRootComponent } from '@/types';
import { createEventCallback, createSurfaceAccent } from '../utils';

export const Button: ButtonRootComponent = React.forwardRef((props, ref) => {
  const {
    accent,
    readonly,
    disabled,
    children,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const [hovered, setHovered] = React.useState(false);

  const surface = React.useMemo(
    () =>
      createSurfaceAccent({
        accent,
        hovered,
        disabled,
        options: {
          backgroundAlpha: 0.1,
          borderAlpha: 0.7,
          colorAlpha: 0.9,
        },
      }),
    [hovered, disabled]
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      style={{ ...surface }}
      disabled={disabled}
      className="Button"
      data-disabled={disabled}
      data-readonly={readonly}
      onMouseLeave={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHovered(false),
        state: { disabled, readonly },
      })}
      onMouseOver={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseOver,
        handler: () => setHovered(true),
        state: { disabled, readonly },
      })}
    >
      {children}
    </Component>
  );
});
