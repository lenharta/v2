import clsx from 'clsx';
import * as React from 'react';
import { mergeProps, objectKeys } from '@/utils';
import {
  SubtitleProps,
  SubtitleComponent,
  FindSubtitleComponent,
  FindSubtitleSizeToken,
} from './types';

const defaultProps: Partial<SubtitleProps> = {
  size: 'md',
  h2: true,
};

const findSizeToken: FindSubtitleSizeToken = (size) => {
  if (!size) return `var(--font-size-subtitle-${defaultProps.size})`;
  return `var(--font-size-subtitle-${size})`;
};

const findComponent: FindSubtitleComponent = (levels) => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

export const Subtitle: SubtitleComponent = React.forwardRef((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, size, className, overrideTokens, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  const fontSize = !overrideTokens ? findSizeToken(size) : undefined;

  return (
    <Component
      {...otherProps}
      ref={ref}
      style={{ fontSize }}
      className={clsx('Subtitle', className)}
    />
  );
});

Subtitle.displayName = '@v2/Subtitle';
