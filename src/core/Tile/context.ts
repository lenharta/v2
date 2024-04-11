import * as React from 'react';
import { Core } from '@/types';

export interface TileInteractionProps {
  /** Defines the interaction type of the element */
  type?: Core.InteractionType | undefined;
  /** Indicates a `disabled` state for all elements. */
  disabled?: boolean | undefined;
  /** Indicates a selecatble interaction type for all elements. */
  selectable?: boolean | undefined;
  /** Indicates a clickable interaction type for all elements. */
  clickable?: boolean | undefined;
  /** Indicates a expandable interaction type for all elements. */
  expandable?: boolean | undefined;
}

export interface TileContextValue extends TileInteractionProps {
  /** Defines a theme scheme for all elements. */
  scheme?: Core.Scheme | undefined;
  /** Overrides the type of rendered component for all item. */
  component?: React.ElementType | undefined;
}

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileContext = () => React.useContext(TileContext);
