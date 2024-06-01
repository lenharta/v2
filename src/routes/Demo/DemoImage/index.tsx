import { Image, Stack, Title } from '@/core';
import { DemoRoot } from '../DemoRoot';
import React from 'react';

const placeholderImages = {
  xl: 'https://placehold.co/600x500/AC8E68/FFFFFF/svg',
  lg: 'https://placehold.co/500x400/0A84FF/FFFFFF/svg',
  md: 'https://placehold.co/300x300/FF9F0A/FFFFFF/svg',
  sm: 'https://placehold.co/200x200/FFD60A/000000/svg',
};

const DemoImageDefault = () => {
  return (
    <React.Fragment>
      <Title>Image | Default</Title>
      <Image alt="image alternate text" />
    </React.Fragment>
  );
};

const DemoImageExtraLarge = () => {
  return (
    <React.Fragment>
      <Title>Image | Extra Large</Title>
      <Image alt="image alternate text" src={placeholderImages.xl} />
    </React.Fragment>
  );
};

const DemoImageLarge = () => {
  return (
    <React.Fragment>
      <Title>Image | Large</Title>
      <Image alt="image alternate text" src={placeholderImages.lg} />
    </React.Fragment>
  );
};

const DemoImageMedium = () => {
  return (
    <React.Fragment>
      <Title>Image | Medium</Title>
      <Image alt="image alternate text" src={placeholderImages.md} />
    </React.Fragment>
  );
};

const DemoImageSmall = () => {
  return (
    <React.Fragment>
      <Title>Image | Small</Title>
      <Image alt="image alternate text" src={placeholderImages.sm} />
    </React.Fragment>
  );
};

const DemoImage = () => {
  return (
    <DemoRoot>
      <Stack gap="sm">
        <DemoImageDefault />
        <DemoImageExtraLarge />
        <DemoImageLarge />
        <DemoImageMedium />
        <DemoImageSmall />
      </Stack>
    </DemoRoot>
  );
};

export { DemoImage };
