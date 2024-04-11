import { ICON } from '@/core';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

export interface PageTileProps {
  label: string;
  icon?: ICON | undefined;
  to?: string | undefined;
}

export type PageTileFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: PageTileProps;
}>;

export const PageTile = factoryPolymorphic<PageTileFactory>((props, ref) => {
  const {
    to = '/',
    icon = 'placeholder',
    label,
    children,
    component: Component = 'button',
    ...otherProps
  } = props;

  return (
    <Component {...otherProps} ref={ref} aria-label={label} className="page-tile">
      {children}
    </Component>
  );
});

PageTile.displayName = '@v2/core/Page.Tile';
