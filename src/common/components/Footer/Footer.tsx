import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { FooterRootCSS, FooterRootProps } from './types';

const css: FooterRootCSS = {
  root: 'v2-footer-root',
  content: 'v2-footer-content',
};

type FooterRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'footer';
  omits: 'children';
  props: FooterRootProps;
}>;

const Footer = factory<FooterRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="footer" className={clsx(css.root, className)}>
      <Box className={css.content}>
        <span>FOOTER CONTENT</span>
      </Box>
    </Box>
  );
});

Footer.displayName = '@v2/Footer.Root';
export { Footer };
