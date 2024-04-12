import clsx from 'clsx';
import { ICON } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

import { TileGroup } from './TileGroup';
import { TileInteractionProps, useTileContext } from './context';

type TileBaseProps = Core.BaseProps & Core.FocusProps & Omit<TileInteractionProps, 'selectable'>;

export interface TileProps extends TileBaseProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;
  /** Specifies the name of the icon path to be rendered. */
  icon?: ICON | undefined;
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
  /** Defines a default html `class` for the element. */
  className?: string | undefined;
}

export type TileFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileProps;
  comps: {
    Group: typeof TileGroup;
  };
}>;

function findInteractionType(props: TileInteractionProps): Core.InteractionType {
  const { clickable, disabled, expandable, selectable, type } = props;
  if (type) return type;
  if (clickable && !disabled) return 'clickable';
  if (selectable && !disabled) return 'selectable';
  if (expandable && !disabled) return 'expandable';
  return 'base';
}

export const Tile = factoryPolymorphic<TileFactory>((props, ref) => {
  const {
    type,
    icon,
    scheme = 'primary',
    tabIndex,
    disabled,
    children,
    clickable,
    expandable,
    excludeTabOrder,
    allowDisabledFocus,
    component = 'div',
    ...otherProps
  } = props;

  const ctx = useTileContext();
  const Component = ctx.component ?? component;
  const isDisabled = ctx.disabled ?? disabled;

  const interactionType = findInteractionType({
    type: ctx.type ?? type,
    disabled: ctx.disabled ?? disabled,
    clickable: ctx.clickable ?? clickable,
    expandable: ctx.expandable ?? expandable,
    selectable: ctx.selectable ?? undefined,
  });

  const isInteractive = interactionType !== 'base';

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clsx('tile', `tile--${interactionType}`, otherProps.className)}
      data-scheme={ctx.scheme ?? scheme}
      aria-disabled={isInteractive && isDisabled}
    >
      {children}
    </Component>
  );
});

Tile.displayName = '@v2/core/Tile';
Tile.Group = TileGroup;
