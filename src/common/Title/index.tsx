import clsx from 'clsx';
import * as React from 'react';
import { mergeProps, objectKeys } from '@/utils';
import { TitleProps, TitleComponent, FindTitleComponent, FindTitleSizeToken } from './types';

const defaultProps: Partial<TitleProps> = {
  size: 'md',
  h2: true,
};

const findSizeToken: FindTitleSizeToken = (size) => {
  if (!size) return `var(--font-size-title-${defaultProps.size})`;
  return `var(--font-size-title-${size})`;
};

const findComponent: FindTitleComponent = (levels) => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

export const Title: TitleComponent = React.forwardRef((props, ref) => {
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
      className={clsx('title', className)}
    />
  );
});

Title.displayName = '@v2/Title';
