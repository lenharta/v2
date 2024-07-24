import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { Icon, UnstyledButton } from '@core';

import { ChipProps } from './types';
import { ChipGroup } from './ChipGroup';
import { useChipContext } from './context';

type ChipFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ChipProps;
  comps: {
    Group: typeof ChipGroup;
  };
}>;

const Chip = createFactory<ChipFactory>((props, ref) => {
  const {
    size,
    value,
    variant,
    loading,
    readOnly,
    disabled,
    children,
    className,
    ...forwardedProps
  } = props;

  const ctx = useChipContext();

  // const contextProps = ctx
  //   ? {
  //       onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
  //         if (disabled || readOnly || ctx.disabled || ctx.readOnly) {
  //           ctx.onChange?.(event);
  //         }
  //       },
  //     }
  //   : {};

  const contextProps = ctx ? {} : {};

  return (
    <div
      ref={ref}
      className={clsx(
        'v2-chip',
        `v2-chip--${size || ctx.size || 'sm'}`,
        `v2-chip--${variant || ctx.variant || 'default'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <div className="v2-chip-label">{children}</div>
      <UnstyledButton className="v2-chip-close" children={<Icon name="close-x-circle" />} />
    </div>
  );
});

Chip.Group = ChipGroup;
Chip.displayName = '@v2/Chip';
export { Chip };
