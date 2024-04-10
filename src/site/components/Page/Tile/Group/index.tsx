import { Core, Factory } from '@/types';
import { useNavigate } from 'react-router-dom';
import { factory } from '@/core/factory';
import { PageTile } from '..';

export interface PageTileGroupProps {
  items?: Core.LinkItemObj[];
}

export type PageTileGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageTileGroupProps;
}>;

export const PageTileGroup = factory<PageTileGroupFactory>((props, ref) => {
  const { items, children, ...otherProps } = props;
  const navigate = useNavigate();

  const isDataGroup = items && !children;
  const isChildGroup = !items && children;

  const dataGroup = items?.map(({ to, icon, label }) => (
    <PageTile
      to={to}
      key={label}
      icon={icon}
      label={label}
      onClick={(event) => {
        event.stopPropagation();
        navigate(to);
      }}
    />
  ));

  return (
    <div {...otherProps} ref={ref} className="page-tile-group">
      {isDataGroup && dataGroup}
      {isChildGroup && children}
    </div>
  );
});

PageTileGroup.displayName = '@v2/core/Page.TileGroup';
