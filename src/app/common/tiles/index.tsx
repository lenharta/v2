import { Icon, Text, Tile } from '@/core';
import { Store } from '@/types';

export interface RouteTileProps {
  items: Store.CopyItem[];
  navigate: (value: string) => void;
}

export type RouteTileComponent = React.FC<RouteTileProps>;

export const RouteTile: RouteTileComponent = (props) => {
  const { items = [], navigate } = props;
  return (
    <Tile.Group className="route-tile">
      {items.map((item) => (
        <Tile
          key={item.key || item.value}
          value={item.value ?? '/'}
          onClick={(event) => navigate(event.currentTarget.value)}
          aria-label={item.text ?? item.title}
          className="route-tile-item"
          variant="clickable"
        >
          <span className="route-tile-inner">
            <Text>{item.text ?? item.title}</Text>
            <Icon name="arrowUpRight" />
          </span>
        </Tile>
      ))}
    </Tile.Group>
  );
};
