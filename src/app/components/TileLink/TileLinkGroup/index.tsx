import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { TileLinkGroupProps } from '../TileLink.types';
import { TileLinkProvider } from '../TileLink.context';

type TileLinkGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileLinkGroupProps;
}>;

const TileLinkGroup = createFactory<TileLinkGroupFactory>((props, ref) => {
  const {
    align,
    justify,
    variant,
    loading,
    readOnly,
    disabled,
    rotation,
    children,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <Group
      ref={ref}
      gap="xs"
      orientation={orientation}
      className={clsx('v2-tile-link-group', className)}
      {...forwardedProps}
    >
      <TileLinkProvider
        value={{ variant, orientation, justify, align, disabled, loading, readOnly, rotation }}
      >
        {children}
      </TileLinkProvider>
    </Group>
  );
});

TileLinkGroup.displayName = '@v2/TileLink.Group';
export { TileLinkGroup };
