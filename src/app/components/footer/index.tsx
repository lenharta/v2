import * as React from 'react';
import { Text } from '@/common';
import { FooterComponentType, FooterRenderType } from './types';

export interface FooterContentRightProps {}

const FooterContentRight = (props: FooterContentRightProps) => {
  const {} = props;
  return (
    <div className="footer-content--right">
      <Text>Content Right</Text>
    </div>
  );
};

export interface FooterContentLeftProps {}

const FooterContentLeft = (props: FooterContentLeftProps) => {
  const {} = props;
  return (
    <div className="footer-content--left">
      <Text>Content Left</Text>
    </div>
  );
};

export const FooterRender: FooterRenderType = (props, ref) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} className="footer-layout" ref={ref}>
      <div className="footer-content">
        <FooterContentLeft />
        <FooterContentRight />
      </div>
    </footer>
  );
};

export const Footer = React.forwardRef(FooterRender) as FooterComponentType;
Footer.displayName = '@v2/Footer';
