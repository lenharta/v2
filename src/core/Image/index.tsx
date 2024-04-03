import clsx from 'clsx';
import * as React from 'react';
import { Core, factory } from '../factory';
import { createEventCallback } from '@/utils';

// [TODO]: Sizing

export interface ImageProps {
  alt?: string | undefined;
  src?: any | undefined;
  fit?: React.CSSProperties['objectFit'] | undefined;
  width?: React.CSSProperties['width'] | undefined;
  height?: React.CSSProperties['height'] | undefined;
  radius?: React.CSSProperties['borderRadius'] | undefined;
  fallbackSrc?: string | undefined;
  onError?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
}

export type ImageFactory = Core.Factory<{
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
    width = 'auto',
    height = 500,
    radius = 0,
    style,
    className,
    fallbackSrc = 'https://placehold.co/600x400?text=Placeholder',
    ...otherProps
  } = props;

  const [error, setError] = React.useState(!src);

  React.useEffect(() => setError(!src), [src]);

  if (!alt) {
    console.error(
      '[@v2/common/Image]: Image components should be provided `alt` prop for accessibility.'
    );
  }

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

// export const Image = React.forwardRef(ImageRender) as ImageComponentType;
// Image.displayName = '@v2/Image';
