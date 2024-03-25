import clsx from 'clsx';
import * as React from 'react';
import { parseTokenData } from '@/utils';
import { CaptionComponent, CaptionComponentRender } from './types';

export const CaptionRender: CaptionComponentRender = (props, ref) => {
  const { size = 'md', style, className, overrideTokens, ...otherProps } = props;
  const hasSize = !overrideTokens ? size : undefined;
  return (
    <caption
      {...otherProps}
      ref={ref}
      className={clsx('caption', className)}
      style={{
        ...style,
        ...parseTokenData([{ key: 'font-size-caption', prop: 'fontSize', value: hasSize }]),
      }}
    />
  );
};

export const Caption = React.forwardRef(CaptionRender) as CaptionComponent;
Caption.displayName = '@v2/Caption';
