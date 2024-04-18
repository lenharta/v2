import clsx from 'clsx';
import { ICON } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { useTileContext } from './context';
import { TileGroup } from './TileGroup';

export interface TileProps extends Core.BaseProps, Core.FocusProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;
  /** Specifies the name of the icon path to be rendered. */
  icon?: ICON | undefined;
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
  /** Specifies the interaction variant for the element */
  variant?: 'default' | 'clickable' | 'selectable' | 'expandable';
  /** Indicates a `disabled` state for the element. */
  disabled?: boolean | undefined;
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

export const Tile = factoryPolymorphic<TileFactory>((props, ref) => {
  const {
    icon,
    scheme = 'primary',
    variant = 'default',
    tabIndex,
    disabled,
    children,
    excludeTabOrder,
    allowDisabledFocus,
    component: Component = 'div',
    ...otherProps
  } = props;

  const context = useTileContext();
  const hasScheme = context.scheme || scheme || undefined;
  const hasVariant = context.variant || variant || undefined;
  const hasDisabled = context.disabled || disabled || undefined;

  const isInteractive = ['clickable', 'selectable', 'expandable'].includes(hasVariant);
  const isDisabled = (isInteractive && hasDisabled) || undefined;

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clsx('tile', `tile--${hasVariant}`, otherProps.className)}
      data-scheme={hasScheme}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {children}
    </Component>
  );
});

Tile.displayName = '@v2/core/Tile';
Tile.Group = TileGroup;
