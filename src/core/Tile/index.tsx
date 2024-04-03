import clsx from 'clsx';
import { Link } from '../Link';
import { useNavigate } from 'react-router-dom';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';
import { createEventCallback } from '@/utils';

// [TODO]: REFACTOR VARIANTS -- "selectable" | "expandable" | "base" | "clickable"

export interface TileProps {
  /**
   * Specifies destination url for the link element, if 'type' is set to 'internal', it provides
   * the `to` prop, if `external` provides the `href` prop. @see {TileProps.variant}
   */
  url?: string | undefined;

  /** Specifies the type and destination of the link element. @see {TileProps.url} */
  variant?: 'internal' | 'external' | undefined;

  /** Specifies a ref object passed to the link wrapper, if link render props props are provided */
  linkRef?: React.RefObject<HTMLAnchorElement> | null | undefined;

  /** Defines a mouse handler for the interactive Tile element. */
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | (() => void) | undefined;

  /** Defines a index for tabbing the interactive Tile element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the interactive Tile element. */
  disabled?: boolean | undefined;

  /** Defines if the interactive Tile element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Defines if the interactive Tile element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;
}

type LinkMouseEvent = ((event: React.MouseEvent<HTMLAnchorElement>) => void) | (() => void);

export type TileFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileProps;
}>;

export const Tile = factory<TileFactory>((props, ref) => {
  const {
    url,
    linkRef,
    variant,
    disabled,
    tabIndex,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const navigate = useNavigate();

  let isNavigating = url !== undefined;
  let isInteractive = otherProps.onClick !== undefined;

  let commonTileProps = {
    className: clsx('tile', className),
    ...(isInteractive && disabled ? { 'aria-disabled': true } : {}),
  };

  if (isInteractive && isNavigating) {
    return (
      <Link
        ref={linkRef}
        variant={variant}
        disabled={disabled}
        tabIndex={tabIndex}
        excludeTabOrder={excludeTabOrder}
        allowDisabledFocus={allowDisabledFocus}
        children={<div {...otherProps} {...commonTileProps} ref={ref} />}
        onClick={createEventCallback(otherProps.onClick as LinkMouseEvent, (event) => {
          event.stopPropagation();
          navigate(variant === 'internal' ? '/' : '#');
        })}
      />
    );
  }

  const focusTileProps = useFocusIndex({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  return (
    <div
      {...otherProps}
      {...focusTileProps}
      {...commonTileProps}
      role={isInteractive ? 'button' : 'presentation'}
      onClick={otherProps.onClick}
      ref={ref}
    />
  );
});

Tile.displayName = '@v2/core/Tile';
