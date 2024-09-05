import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createEventCallback } from '@/utils';

const FALLBACK_SRC = 'https://placehold.co/600x400?text=Placeholder';

export type ImageFactory = Core.Factory<{
  ref: HTMLImageElement;
  props: Core.ImageProps;
  element: 'img';
}>;

export const Image = Component<ImageFactory>(
  (
    {
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
      ...props
    },
    ref
  ) => {
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
        <img ref={ref} src={fallbackSrc} onError={props.onError} {...commonProps} {...props} />
      );
    }

    return (
      <img
        src={src}
        ref={ref}
        onError={createEventCallback(props.onError, () => setError(true))}
        {...commonProps}
        {...props}
      />
    );
  }
);

Image.displayName = '@v2/Image';
