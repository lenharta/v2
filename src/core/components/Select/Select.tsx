import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Floating, Label } from '@/core/components';
import { DURATION, EASING } from '@/core/constants';
import { SelectOption } from './SelectOption';
import { SelectTarget } from './SelectTarget';
import { SelectBox } from './SelectBox';

const defaultTransition: Partial<Core.TransitionProps> = {
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

export type SelectFactory = React.FC<Core.SelectProps> & {
  Box: typeof SelectBox;
  Target: typeof SelectTarget;
  Option: typeof SelectOption;
};

export function getLockupData(data: Core.SelectProps['data']): Record<string, string> {
  return data.reduce<Record<string, string>>((acc, item) => {
    acc[(item as any).value] = item as any;
    return acc;
  }, {});
}

export const Select: SelectFactory = (props) => {
  const {
    dir = 'ltr',
    data,
    label,
    value,
    width = 'target',
    isOpen,
    offset = 0,
    zIndex = 300,
    variant = 'default',
    strategy = 'absolute',
    placement = 'bottom-start',
    isDisabled,
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

  const transition: Partial<Core.TransitionProps> = transitionProps
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
      disabled={isDisabled}
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
        <div className={clsx('v2-select-list', { [`v2-select-list--${variant}`]: variant })}>
          {data.map((item) => (
            <Select.Option
              variant={variant}
              key={item.value}
              label={item.label}
              value={item.value}
              isDisabled={item.isDisabled}
              isReadonly={item.isReadonly}
              isSelected={item.value === value || undefined}
              onClick={() => {
                if (!isDisabled || !item.isDisabled || !item.isReadonly) {
                  if (closeOnOptionClick) {
                    onOpenChange(false);
                    onClose?.();
                  }
                  onChange?.(item.value);
                }
              }}
            />
          ))}
        </div>
      </Select.Box>
    </Floating>
  );
};

Select.Box = SelectBox;
Select.Option = SelectOption;
Select.Target = SelectTarget;
Select.displayName = '@v2/Select';
