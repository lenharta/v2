import * as React from 'react';

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

export type { ImageProps };
