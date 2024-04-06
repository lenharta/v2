import clsx from 'clsx';
import * as React from 'react';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { createEventCallback } from '@/utils';

export const ImageDemoSrc = 'https://placehold.co/600x400?text=Placeholder';

export interface ImageProps extends Core.BaseProps {
  /** Defines a fallback (alternate) text to display when the image is not loaded. */
  alt: string;
  /** Defines the image to display. If `undefined`, defaults to the `fallbackSrc` property. */
  src?: any | undefined;
  /** Specifies a shorthand for the CSS `objectFit` property. */
  fit?: React.CSSProperties['objectFit'] | undefined;
  /** Specifies the CSS `width` property that sets the `width` of the element. */
  width?: React.CSSProperties['width'] | undefined;
  /** Specifies the CSS `height` property that sets the `height` of the element. */
  height?: React.CSSProperties['height'] | undefined;
  /** Defines a shorthand for the CSS `borderRadius` property. Rounds the corners of the element's outer border edge. */
  radius?: React.CSSProperties['borderRadius'] | undefined;
  /** Specifies a fallback for when the `src` property is not set or image cannot be loaded. */
  fallbackSrc?: string | undefined;
  /** Defines a handler to be called when the error event is fired. */
  onError?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
}

export type ImageFactory = Factory.Config<{
  ref: HTMLImageElement;
  comp: 'img';
  props: ImageProps;
  omits: 'children';
}>;

export const Image = factory<ImageFactory>((props, ref) => {
  const {
    src,
    alt,
    fit = 'cover',
    role = 'img',
    style,
    width = 'auto',
    height = 500,
    radius = 0,
    className,
    fallbackSrc,
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

Image.displayName = '@v2/core/Image';
