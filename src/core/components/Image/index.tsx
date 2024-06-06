import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';

const DEFAULT_IMAGE_SRC = 'https://placehold.co/600x400?text=Placeholder';

interface ImageProps {
  alt: string;
  src?: any | undefined;
  fit?: React.CSSProperties['objectFit'] | undefined;
  width?: React.CSSProperties['width'] | undefined;
  height?: React.CSSProperties['height'] | undefined;
  radius?: React.CSSProperties['borderRadius'] | undefined;
  fallbackSrc?: string | undefined;
  onError?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
}

type ImageFactory = Factory.Config<{
  ref: HTMLImageElement;
  comp: 'img';
  props: ImageProps;
}>;

const Image = factory<ImageFactory>((props, ref) => {
  const {
    src,
    alt,
    fit = 'cover',
    role = 'img',
    style,
    width = 'auto',
    height = 'auto',
    radius = 0,
    className,
    fallbackSrc = 'https://placehold.co/150x150/svg',
    ...otherProps
  } = props;

  const [error, setError] = React.useState(!src);
  React.useEffect(() => setError(!src), [src]);

  let commonProps = {
    alt,
    role,
    className: clsx('image', className),
    style: {
      ...(style ? style : {}),
      ...{ borderRadius: radius, objectFit: fit, height, width },
    },
  };

  if (error && fallbackSrc) {
    return (
      <img
        {...otherProps}
        {...commonProps}
        onError={otherProps.onError}
        src={fallbackSrc}
        ref={ref}
      />
    );
  }

  return (
    <img
      {...otherProps}
      {...commonProps}
      src={src}
      ref={ref}
      onError={createEventCallback(otherProps.onError, () => {
        setError(true);
      })}
    />
  );
});

Image.displayName = '@v2/Image';
export { Image, DEFAULT_IMAGE_SRC, type ImageProps };
