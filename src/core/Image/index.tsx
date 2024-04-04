import clsx from 'clsx';
import * as React from 'react';
import { Core, factory } from '../factory';
import { createEventCallback } from '@/utils';

// [TODO]: Sizing Tokens
// [TODO]: Icon Fallbacks?

export const ImageDemoSrc = 'https://placehold.co/600x400?text=Placeholder';

export interface ImageProps {
  /**
   * Defines a fallback (alternate) text to display when the image is not loaded.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt
   */
  alt: string;
  /**
   * - Defines the image to display. If `undefined`, defaults to the `fallbackSrc` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src
   * @see {ImageProps.fallbackSrc}
   * @default undefined
   */
  src?: any | undefined;
  /**
   * - Specifies a shorthand for the CSS `objectFit` property.
   * - Sets how the content of a `replaced element` should be resized to fit its container.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element
   * @default 'cover'
   */
  fit?: React.CSSProperties['objectFit'] | undefined;
  /**
   * Specifies the CSS `width` property that sets the `width` of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
   * @default 'auto'
   */
  width?: React.CSSProperties['width'] | undefined;
  /**
   * Specifies the CSS `height` property that sets the `height` of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
   * @default 500
   */
  height?: React.CSSProperties['height'] | undefined;
  /**
   * - Defines a shorthand for the CSS `borderRadius` property.
   * - Rounds the corners of the element's outer border edge.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   * @default undefined
   */
  radius?: React.CSSProperties['borderRadius'] | undefined;
  /**
   * Specifies a fallback for when the `src` property is not set or image cannot be loaded.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src
   * @default 'https://placehold.co/600x400?text=Placeholder'
   */
  fallbackSrc?: string | undefined;
  /**
   * Defines a handler to be called when the error event is fired.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event
   * @default undefined
   */
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

// export const Image = React.forwardRef(ImageRender) as ImageComponentType;
// Image.displayName = '@v2/Image';
