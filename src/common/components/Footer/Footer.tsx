import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, Text, Title, factory } from '@/core';
import { FooterRootProps } from './types';
import { V2Logo } from '../Logo';

const css = {
  root: 'v2-footer',
  logobox: 'v2-footer-box-logo',
  menubox: 'v2-footer-box-menu',
};

type FooterRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'footer';
  props: FooterRootProps;
  omits: 'children';
}>;

const Footer = factory<FooterRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="footer" className={clsx(css.root, className)}>
      <Box className={css.logobox}>
        <V2Logo size="lg" />
        <Box>
          <Title h3>Andrew Lenhart</Title>
          <Title h4>Frontend Software Engineer</Title>
          <Text>North Carolina, United States</Text>
        </Box>
      </Box>
      <Box className={css.menubox}></Box>
    </Box>
  );
});

Footer.displayName = '@v2/Footer.Root';
export { Footer };
