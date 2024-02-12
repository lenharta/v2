import * as React from 'react';
import { ButtonRootComponent } from '@/types';
import { createEventCallback, createSurface } from '../utils';

export const Button: ButtonRootComponent = React.forwardRef((props, ref) => {
  const {
    // accent,
    scheme,
    readonly,
    disabled,
    children,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const [hover, setHover] = React.useState(false);

  // const surface = React.useCallback(
  //   () =>
  //     createSurface({
  //       scheme: accent ? accent : scheme,
  //       state: { hover },
  //       values: [
  //         { type: 'backgroundColor', alpha: accent ? 0.15 : 0.05 },
  //         { type: 'borderColor', alpha: accent ? 0.7 : 0.3 },
  //         { type: 'color', alpha: 1 },
  //       ],
  //     }),
  //   [hover, disabled, scheme, accent]
  // );

  return (
    <Component
      {...otherProps}
      ref={ref}
      // style={{ ...surface() }}
      disabled={disabled}
      className="Button"
      data-disabled={disabled}
      data-readonly={readonly}
      onMouseLeave={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHover(false),
        state: { disabled, readonly },
      })}
      onMouseOver={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseOver,
        handler: () => setHover(true),
        state: { disabled, readonly },
      })}
    >
      {children}
    </Component>
  );
});
