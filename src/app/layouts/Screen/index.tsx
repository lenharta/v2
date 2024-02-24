import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ScreenContent } from './Content';

export type ScreenBaseProps = React.JSX.IntrinsicElements['div'];

export interface ScreenProps extends ScreenBaseProps {
  variant?: 'default';
}

export interface ScreenComponent {
  (props: ScreenProps): JSX.Element | null;
  displayName?: string;
  Content: typeof ScreenContent;
}

const defaultProps: Partial<ScreenProps> = {
  variant: 'default',
};

export const Screen: ScreenComponent = (props) => {
  const { variant, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ variant }, defaultProps);

  const clxss = clsx('Screen', { [`Screen--variant-${variant}`]: mergedProps.variant }, className);

  return (
    <div {...otherProps} className={clxss}>
      {children}
    </div>
  );
};

Screen.displayName = '@v2/Screen';
Screen.Content = ScreenContent;
