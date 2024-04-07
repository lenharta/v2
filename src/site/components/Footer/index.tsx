import { Box } from '@/site/components';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface FooterProps {
  scheme?: Core.Scheme;
}

export type FooterFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'footer';
  props: FooterProps;
  omits: 'children' | 'className';
}>;

export const Footer = factory<FooterFactory>((props, ref) => {
  const { scheme = 'tertiary', ...otherProps } = props;
  const dataProps = { 'data-scheme': scheme };

  return (
    <footer {...otherProps} {...dataProps} className="footer" ref={ref}>
      <div className="content">
        <Box></Box>
        <Box></Box>
      </div>
    </footer>
  );
});

Footer.displayName = '@v2/site/Footer';
