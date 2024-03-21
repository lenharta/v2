import * as React from 'react';
import { Tile } from '@/common';
import { TileGroupProps } from '@/common/Tile/types';

export const TileGroupDemo = ({}: TileGroupProps) => {
  const groupRef = React.useRef<HTMLDivElement>(null);
  return (
    <Tile.Group ref={groupRef}>
      <Tile>Tile Component 1</Tile>
      <Tile>Tile Component 2</Tile>
      <Tile>Tile Component 3</Tile>
    </Tile.Group>
  );
};
