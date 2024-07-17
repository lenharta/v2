import * as React from 'react';
import { DURATION, EASING, TransitionProps, Floating, Label } from '@core';
import { SelectBox } from './SelectBox';
import { SelectProps } from './types';
import { SelectOption } from './SelectOption';
import { SelectTarget } from './SelectTarget';

const defaultTransition: Partial<TransitionProps> = {
  duration: DURATION['moderate-01'],
  transition: {
    transitionProperty: 'opacity, transform',
    in: {
      opacity: 1,
      transform: 'scaleY(1)',
      transformOrigin: 'top',
      transitionTimingFunction: EASING['expressive-enter'],
    },
    out: {
      opacity: 0,
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      transitionTimingFunction: EASING['expressive-exit'],
    },
  },
};

type SelectFactory = React.FC<SelectProps> & {
  Box: typeof SelectBox;
  Target: typeof SelectTarget;
  Option: typeof SelectOption;
};

function getLockupData(data: SelectProps['data']): Record<string, string> {
  return data.reduce<Record<string, string>>((acc, item) => {
    acc[(item as any).value] = item as any;
    return acc;
  }, {});
}

const Select: SelectFactory = (props) => {
  const {
    dir = 'ltr',
    data,
    label,
    value,
    width = 'target',
    isOpen,
    offset = 0,
    zIndex = 300,
    variant,
    disabled,
    strategy = 'absolute',
    placement = 'bottom-start',
    middleware = { flip: true, shift: true, inline: false },
    placeholder = 'Select...',
    transitionProps,
    closeOnEscape = true,
    closeOnOptionClick = true,
    closeOnClickOutside = true,
    clickOutsideIgnoreRefs,
    placementDependencies,
    onPlacementChange,
    onOpenChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const transition: Partial<TransitionProps> = transitionProps
    ? transitionProps
    : defaultTransition;

  const labels = React.useMemo(() => getLockupData(data), [data]);

  return (
    <Floating
      dir={dir}
      width={width}
      zIndex={zIndex}
      offset={offset}
      isOpen={isOpen}
      disabled={disabled}
      strategy={strategy}
      placement={placement}
      middleware={middleware}
      closeOnEscape={closeOnEscape}
      transitionProps={transition}
      closeOnClickOutside={closeOnClickOutside}
      clickOutsideIgnoreRefs={clickOutsideIgnoreRefs}
      placementDependencies={placementDependencies}
      onPlacementChange={onPlacementChange}
      onChange={onOpenChange}
      onClose={onClose}
      onOpen={onOpen}
    >
      {label && <Label component="div">{label}</Label>}
      <Select.Target
        variant={variant}
        placeholder={placeholder}
        value={(labels[value as any] as any)?.label || undefined}
      />

      <Select.Box variant={variant}>
        {data.map((item) => (
          <Select.Option
            variant={variant}
            key={item.value}
            label={item.label}
            value={item.value}
            disabled={item.disabled}
            readOnly={item.readOnly}
            selected={item.value === value || undefined}
            onClick={() => {
              if (!disabled || !item.disabled || !item.readOnly) {
                if (closeOnOptionClick) {
                  onOpenChange(false);
                  onClose?.();
                }
                onChange?.(item.value);
              }
            }}
          />
        ))}
      </Select.Box>
    </Floating>
  );
};

Select.Box = SelectBox;
Select.Option = SelectOption;
Select.Target = SelectTarget;
Select.displayName = '@v2/Select';
export { Select };
