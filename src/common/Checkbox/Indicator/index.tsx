import * as React from 'react';
import { Icon } from '../../Icon';
import { CheckboxIndicatorRootComponent } from '@/types';
import { useSurface } from '@/hooks';
import { useThemeCTX } from '@/store';

export const CheckboxIndicator: CheckboxIndicatorRootComponent = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    error,
    checked,
    readOnly,
    disabled,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const theme = useThemeCTX();
  const iconLabel = checked ? 'input checked icon' : 'input unchecked icon';
  const icon = checked ? 'checkbox_checked' : 'checkbox_unchecked';

  const surface = React.useCallback(
    () =>
      useSurface({
        values: [{ prop: 'color', token: theme.state.accent, alpha: 0.9 }],
      }),
    [disabled]
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      data-error={error}
      data-checked={checked}
      data-readonly={readOnly}
      data-disabled={disabled}
      style={{ ...surface() }}
    >
      <Icon name={icon} aria-label={iconLabel} />
    </Component>
  );
});
