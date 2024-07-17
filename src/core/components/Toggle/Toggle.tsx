import clsx from 'clsx';
import { Factory } from '@types';
import { InlineInput } from '@core';
import { ToggleProps } from './types';
import { createFactory } from '@factory';

type ToggleFactory = Factory.Config<{
  comp: 'input';
  omits: 'size';
  props: ToggleProps;
  ref: HTMLInputElement;
}>;

const Toggle = createFactory<ToggleFactory>((props, ref) => {
  const {
    size,
    disabled,
    readOnly,
    checked,
    variant,
    label,
    className,
    onChange,
    ...forwardedProps
  } = props;

  return (
    <InlineInput
      ref={ref}
      label={label}
      checked={checked}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(
        'v2-toggle',
        { [`v2-toggle--${size}`]: size },
        { [`v2-toggle--${variant}`]: variant },
        className
      )}
    >
      <input
        role="switch"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="v2-toggle-input"
        {...forwardedProps}
      />

      <span className="v2-toggle-track">
        <div className="v2-toggle-thumb" data-checked={!!checked || undefined} />
      </span>
    </InlineInput>
  );
});

Toggle.displayName = '@v2/Toggle';
export { Toggle };
