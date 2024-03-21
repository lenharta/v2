import * as React from 'react';
import { ElementProps } from '@/types';

export interface FooterLayoutProps extends ElementProps<'footer'> {}

export const FooterLayout = React.forwardRef<HTMLElement, FooterLayoutProps>((props, ref) => {
  const { children, ...otherProps } = props;
  return <footer {...otherProps} ref={ref} className="footer-layout" children={children} />;
});

FooterLayout.displayName = '@v2/Footer.Layout';
