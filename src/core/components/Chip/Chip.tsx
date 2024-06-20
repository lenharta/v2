import clsx from 'clsx';
import { css } from './chip-constants';
import { Factory } from '@/types';
import { ChipProps } from './chip-types';
import { useChipContext } from './chip-context';
import { factory, Label, UnstyledButton } from '@/core';

type ChipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ChipProps;
  omits: 'children';
}>;

const Chip = factory<ChipFactory>((props, ref) => {
  const {
    size = 'sm',
    label,
    value,
    radius = 6,
    variant = 'accent',
    className,
    withBorder,
    onChange,
    ...forwardedProps
  } = props;

  const ctx = useChipContext();

  const contextProps = ctx
    ? {
        style: { borderRadius: radius || ctx.radius },
        className: clsx(
          css.root,
          `${css.root}--size-${size || ctx.size}`,
          `${css.root}--variant-${variant || ctx.variant}`,
          className
        ),
        'data-bordered': withBorder || ctx.withBorder,
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      style={{ borderRadius: radius }}
      className={clsx(
        css.root,
        `${css.root}--size-${size}`,
        `${css.root}--variant-${variant}`,
        className
      )}
      data-bordered={withBorder}
      {...contextProps}
      {...forwardedProps}
    >
      {label}
    </UnstyledButton>
  );
});

Chip.displayName = '@v2/Chip';
export { Chip };
