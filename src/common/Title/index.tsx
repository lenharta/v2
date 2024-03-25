import clsx from 'clsx';
import * as React from 'react';
import { objectKeys, parseTokenData } from '@/utils';
import { TitleComponent, FindTitleComponent } from './types';

const findComponent: FindTitleComponent = (levels) => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

export const Title: TitleComponent = React.forwardRef((props, ref) => {
  const {
    h1,
    h2 = true,
    h3,
    h4,
    h5,
    h6,
    size = 'md',
    style,
    className,
    overrideTokens,
    ...otherProps
  } = props;

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  const hasSize = !overrideTokens ? size : undefined;

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clsx('title', className)}
      style={{
        ...style,
        ...parseTokenData([{ key: 'font-size-title', prop: 'fontSize', value: hasSize }]),
      }}
    />
  );
});

Title.displayName = '@v2/Title';
