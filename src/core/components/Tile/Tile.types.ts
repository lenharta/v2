import { Theme } from '@/types';

type TileVariant = 'static' | 'clickable' | 'selectable' | 'optionable' | 'expandable';

interface TileVariantProps {
  /** By default, the tile is static and presentational only. No action is given to the tile. */
  basic?: boolean | undefined;
  /** When choosen, the user will be able to click the tile and activate the desired action. */
  clickable?: boolean | undefined;
  /** When choosen, the user will be able to choose one or multiple tiles, similar to a checkbox input. */
  selectable?: boolean | undefined;
  /** When choosen, the user will be able to choose only one tiles, similar to a radio input. */
  optionable?: boolean | undefined;
  /** When chosen the card will expand and collapse when a target is clicked.  */
  expandable?: boolean | undefined;
}

interface TileProps extends TileVariantProps {
  disabled?: boolean | undefined;
}

interface TileGroupProps extends TileVariantProps {
  disabled?: boolean | undefined;
  orientation?: Theme.Orientation | undefined;
}

interface TileContext extends TileVariantProps {
  disabled?: boolean | undefined;
  orientation?: Theme.Orientation | undefined;
}

export type { TileVariant, TileVariantProps, TileProps, TileGroupProps, TileContext };
