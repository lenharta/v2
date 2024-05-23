import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface FooterProps {}

type FooterFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'footer';
  props: FooterProps;
  omits: 'children';
}>;

const Footer = factory<FooterFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="footer" className={clsx('v2-footer', className)}>
      <span>footer</span>
    </Box>
  );
});

Footer.displayName = '@v2/Footer';
export { Footer, type FooterProps };
