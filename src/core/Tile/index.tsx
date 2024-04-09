import * as React from 'react';
import { createPolymorphic } from '../factory';

export interface TileProps {
  clickable?: boolean;
  expandable?: boolean;
  selectable?: boolean;
}

export const TileRender = React.forwardRef<HTMLDivElement, TileProps & { component: any }>(
  (props, ref) => {
    const { component: Component = 'div', ...otherProps } = props;
    return <Component {...otherProps} ref={ref} />;
  }
);

export const Tile = createPolymorphic<'div', TileProps>(TileRender);
