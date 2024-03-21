import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';

type TextBaseProps = React.ComponentPropsWithoutRef<'p'>;

export interface TextProps extends TextBaseProps {}

const defaultProps: Partial<TextProps> = {};

function _Text(props: TextProps, ref: React.ForwardedRef<HTMLParagraphElement>) {
  const { className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('text', className);
  return <p {...otherProps} ref={ref} className={clxss} />;
}

export const Text = React.forwardRef(_Text) as React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLParagraphElement>
>;

Text.displayName = '@v2/Text';
