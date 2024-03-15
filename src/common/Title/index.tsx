import { mergeProps, objectKeys } from '@/utils';
import clsx from 'clsx';
import * as React from 'react';

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleBaseProps = React.ComponentPropsWithoutRef<'h1'>;
export type TitleLevelProps = Record<TitleLevel, boolean>;
export interface TitleProps extends TitleBaseProps, Partial<TitleLevelProps> {}

const defaultProps: Partial<TitleProps> = {
  h2: true,
};

const findComponent = (levels: Partial<TitleLevelProps>): TitleLevel => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

function _Title(props: TitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const { h1, h2, h3, h4, h5, h6, className, ...otherProps } = mergeProps(defaultProps, props);
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  const clxss = clsx('title', className);
  return <Component {...otherProps} ref={ref} className={clxss} />;
}

export const Title = React.forwardRef(_Title) as React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLHeadingElement>
>;

Title.displayName = '@v2/Title';
