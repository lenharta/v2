import React from 'react';
import { Hero, Main, Section } from '@/common';
import { Box, Button, Text, Tile, Title } from '@/core';

const TileContent = ({ title }: { title: string }) => {
  return (
    <Box className="v2-sbdx-tile-content">
      <Title h2>{title}</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rem porro provident
        optio iusto reprehenderit cum officia nam nobis magni est laudantium culpa illo eligendi
        eius facere. Numquam, quam. Odio?
      </Text>
      <Button>Button</Button>
    </Box>
  );
};

const SandboxTileDefault = () => {
  return <Tile children={<TileContent title="Tile | Default" />} />;
};
const SandboxTileClickable = () => {
  return <Tile clickable children={<TileContent title="Tile | Clickable" />} />;
};
const SandboxTileSelectable = () => {
  return <Tile selectable children={<TileContent title="Tile | Selectable" />} />;
};
const SandboxTileOptionable = () => {
  return <Tile optionable children={<TileContent title="Tile | Optionable" />} />;
};
const SandboxTileExpandable = () => {
  return <Tile expandable children={<TileContent title="Tile | Expandable" />} />;
};

const SandboxTile = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Tile</Title>} />
      <Main>
        <Section>
          <SandboxTileDefault />
          <SandboxTileClickable />
          <SandboxTileSelectable />
          <SandboxTileOptionable />
          <SandboxTileExpandable />
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxTile };
