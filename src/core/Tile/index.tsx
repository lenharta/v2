import clsx from 'clsx';
import { ICON } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { useFocusProps } from '@/core/hooks';
import { useTileContext } from './context';

export interface TileProps extends Core.BaseProps, Core.FocusProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;
  /** Specifies the name of the icon path to be rendered. */
  icon?: ICON | undefined;
  /** Defines the interaction type of the element */
  type?: Core.InteractionType | undefined;
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  clickable?: boolean | undefined;
  selectable?: boolean | undefined;
  expandable?: boolean | undefined;
}

export type TileFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileProps;
}>;

interface TileInteractionProps {
  type?: Core.InteractionType | undefined;
  disabled?: boolean | undefined;
  clickable?: boolean | undefined;
  selectable?: boolean | undefined;
  expandable?: boolean | undefined;
}

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
    selectable,
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
    selectable: ctx.selectable ?? selectable,
  });

  const isInteractive = interactionType !== 'base';
  const focusProps = useFocusProps({ allowDisabledFocus, disabled, excludeTabOrder, tabIndex });

  return (
    <Component
      {...otherProps}
      {...(isInteractive ? focusProps : {})}
      ref={ref}
      className={clsx('tile', `tile--${interactionType}`, otherProps.className)}
      data-scheme={ctx.scheme ?? scheme}
      aria-disabled={isInteractive && isDisabled}
    >
      <div className="="></div>
      {children}
    </Component>
  );
});

Tile.displayName = '@v2/core/Tile';
