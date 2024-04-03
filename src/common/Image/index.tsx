import clsx from 'clsx';
import * as React from 'react';
import { ImageComponentType, ImageRenderType } from './types';
import { createEventCallback } from '@/utils';

const ImageRender: ImageRenderType = (props, ref) => {
  const {
    src,
    fit = 'cover',
    width = 'auto',
    height = 500,
    radius,
    className,
    fallbackSrc = 'https://placehold.co/600x400?text=Placeholder',
    ...otherProps
  } = props;

  const [error, setError] = React.useState(!src);

  React.useEffect(() => setError(!src), [src]);

  let hasAltText = otherProps['alt'] !== undefined ? true : false;
  let hasOtherRole = otherProps['role'] !== undefined ? true : false;
  let hasOtherStyles = otherProps['style'] !== undefined ? true : false;

  if (!hasAltText) {
    console.error(
      '[@v2/common/Image]: Image components should be provided `alt` prop for accessibility.'
    );
  }

  let style: React.CSSProperties = {};
  let staticStyles = { borderRadius: radius, objectFit: fit, height, width };

  if (hasOtherStyles) {
    style = { ...otherProps['style'], ...staticStyles };
  }
  if (!hasOtherStyles) {
    style = { ...staticStyles };
  }

  let commonProps = {
    ...(hasAltText ? { alt: otherProps['alt'] } : {}),
    ...(hasOtherRole ? { role: otherProps['role'] } : { role: 'img' }),
    className: clsx('image', className),
    style,
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
