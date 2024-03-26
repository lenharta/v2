import clsx from 'clsx';
import * as React from 'react';
import { createEventCallback } from '../utils';
import { ImageComponentType, ImageRenderType } from './types';

const ImageRender: ImageRenderType = (props, ref) => {
  const {
    alt,
    src,
    fit,
    style,
    width = 'auto',
    height = 500,
    radius,
    className,
    fallbackSrc = 'https://placehold.co/600x400?text=Placeholder',
    ...otherProps
  } = props;

  const [error, setError] = React.useState(!src);

  React.useEffect(() => setError(!src), [src]);

  const commonProps = {
    alt: alt || 'image',
    role: otherProps.role || 'img',
    style: { ...style, objectFit: fit, height, width },
    className: clsx('image', className),
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
      onError={createEventCallback(otherProps.onError, () => setError(true))}
      src={src}
      ref={ref}
    />
  );
};

export const Image = React.forwardRef(ImageRender) as ImageComponentType;
Image.displayName = '@v2/Image';
