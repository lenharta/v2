import { Theme } from '@/types';

type TileBehavior = 'default' | 'clickable' | 'selectable' | 'expandable';

interface TileContext {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated';
  behavior?: TileBehavior | undefined;
  orientation?: Theme.Orientation | undefined;
}

interface TileGroupProps {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated';
  collapse?: boolean | undefined;
  behavior?: TileBehavior | undefined;
  orientation?: Theme.Orientation | undefined;
}

interface TileProps {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated';
  behavior?: TileBehavior | undefined;
}

export type { TileProps, TileGroupProps, TileContext };
