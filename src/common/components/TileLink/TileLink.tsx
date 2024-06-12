import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Icon, Label, UnstyledButton, factory } from '@/core';

import { css } from './tilelink-contants';
import { TileLinkGroup } from './TileLinkGroup';
import { TileLinkProps } from './tilelink-types';
import { useTileLinkContext } from './tilelink-context';

type TileLinkFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TileLinkProps;
  comps: {
    Group: typeof TileLinkGroup;
  };
}>;

const TileLink = factory<TileLinkFactory>((props, ref) => {
  const { disabled, icon, value, label, variant, scheme, iconPosition, onClick } = props;

  const ctx = useTileLinkContext();

  return (
    <UnstyledButton
      ref={ref}
      aria-disabled={disabled}
      data-disabled={disabled}
      data-position={iconPosition || ctx.iconPosition}
      className={clsx(
        css.item,
        `${css.item}--scheme-${scheme || ctx.scheme}`,
        `${css.item}--variant-${variant || ctx.variant}`
      )}
      onClick={createEventCallback(onClick, () => {
        if (!disabled) ctx.navigate(value);
      })}
    >
      <Label component="span">{label}</Label>
      <Icon name={icon} variant={ctx.store.icons} />
    </UnstyledButton>
  );
});

TileLink.Group = TileLinkGroup;
TileLink.displayName = '@v2/TileLink';
export { TileLink };
