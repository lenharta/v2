import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Size, ElementProps } from '@/types';
import { createEventCallback } from '../utils';

export interface ImageProps extends Omit<ElementProps<'img'>, 'alt'> {
  alt?: string;
  src?: any;
  fit?: React.CSSProperties['objectFit'];
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  radius?: Size;
  fallbackSrc?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const defaultProps: Partial<ImageProps> = {
  fallbackSrc: 'https://placehold.co/600x400?text=Placeholder',
  height: 500,
  width: 'auto',
  alt: 'image',
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    alt,
    fit,
    width,
    height,
    radius,
    className,
    fallbackSrc,
    src: defaultSrc,
    onError,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const clxss = clsx('image', `image--radius-${radius}`, className);
  const styles = { ...otherProps.style, objectFit: fit, height, width };

  const [error, setError] = React.useState(!defaultSrc);
  React.useEffect(() => setError(!defaultSrc), [defaultSrc]);

  if (error && fallbackSrc) {
    return (
      <img
        {...otherProps}
        ref={ref}
        alt={alt}
        src={fallbackSrc}
        style={styles}
        className={clxss}
        onError={onError}
      />
    );
  }
  return (
    <img
      {...otherProps}
      ref={ref}
      alt={alt}
      src={defaultSrc}
      style={styles}
      className={clxss}
      onError={createEventCallback(onError, () => setError(true))}
    />
  );
});

Image.displayName = '@v2/Image';
