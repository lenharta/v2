import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { FooterRootProps } from './types';

const css = {
  root: 'v2-footer',
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
      <span>FOOTER</span>
    </Box>
  );
});

Footer.displayName = '@v2/Footer.Root';
export { Footer };
