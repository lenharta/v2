import { Icon, Text, Tile } from '@/core';

export const HomeTiles = () => (
  <Tile.Group variant="clickable" className="sec-home-tile-group">
    <Tile>
      <span>
        <Text>See Experience</Text>
        <Icon name="arrowUpRight" />
      </span>
    </Tile>
    <Tile>
      <span>
        <Text>Get In Touch</Text>
        <Icon name="arrowUpRight" />
      </span>
    </Tile>
  </Tile.Group>
);
