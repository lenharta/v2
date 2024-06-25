import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { TileLinkProps } from './TileLink.types';
import { useTileLinkContext } from './TileLink.context';
import { TileLinkGroup } from './TileLinkGroup';

type TileLinkFactory = Factory.Config<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: TileLinkProps;
  comps: {
    Group: typeof TileLinkGroup;
  };
}>;

const TileLink = createFactory<TileLinkFactory>((props, ref) => {
  const {
    to = '/',
    label,
    align,
    justify,
    variant,
    loading,
    readOnly,
    disabled,
    rotation = true,
    className,
    leftContent,
    rightContent,
    ...forwardedProps
  } = props;

  const ctx = useTileLinkContext();

  const contextProps = ctx
    ? {
        'data-loading': loading || ctx.loading,
        'data-readonly': readOnly || ctx.readOnly,
        'data-disabled': disabled || ctx.disabled,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
        className: clsx(
          'v2-tile-link',
          `v2-tile-link--${variant || ctx.variant || 'default'}`,
          `v2-tile-link--align-${align || ctx.align || 'start'}`,
          `v2-tile-link--justify-${justify || ctx.justify || 'start'}`,
          className
        ),
      }
    : {};

  return (
    <Link
      to={to}
      ref={ref}
      className={clsx(
        'v2-tile-link',
        `v2-tile-link--${variant || 'default'}`,
        `v2-tile-link--align-${align || 'start'}`,
        `v2-tile-link--justify-${justify || 'start'}`,
        className
      )}
      data-loading={loading}
      data-disabled={disabled}
      data-readonly={readOnly}
      {...forwardedProps}
      {...contextProps}
    >
      <div className="v2-tile-link-inner">
        {leftContent && (
          <div className="v2-tile-link-content" data-position="left" data-rotation={rotation}>
            {leftContent}
          </div>
        )}

        <span className="v2-tile-link-label">{label}</span>

        {rightContent && (
          <div className="v2-tile-link-content" data-position="right" data-rotation={rotation}>
            {rightContent}
          </div>
        )}
      </div>
    </Link>
  );
});

TileLink.Group = TileLinkGroup;
TileLink.displayName = '@v2/Tile.Link';
export { TileLink };
