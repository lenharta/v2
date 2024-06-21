import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { ImageProps } from './Image.types';
import { createEventCallback } from '@/utils';

const FALLBACK_SRC = 'https://placehold.co/600x400?text=Placeholder';

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
    fallbackSrc = FALLBACK_SRC,
    ...forwardedProps
  } = props;

  const [error, setError] = React.useState(!src);

  React.useEffect(() => setError(!src), [src]);

  const commonStyle = { borderRadius: radius, objectFit: fit, height, width };

  const commonProps = {
    className: clsx('v2-image', className),
    style: { ...style, ...commonStyle },
    role,
    alt,
  };

  if (error && fallbackSrc) {
    return (
      <img
        ref={ref}
        src={fallbackSrc}
        onError={forwardedProps.onError}
        {...commonProps}
        {...forwardedProps}
      />
    );
  }

  return (
    <img
      src={src}
      ref={ref}
      onError={createEventCallback(forwardedProps.onError, () => setError(true))}
      {...commonProps}
      {...forwardedProps}
    />
  );
});

Image.displayName = '@v2/Image';
export { Image };
