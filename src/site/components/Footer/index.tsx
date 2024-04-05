import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface FooterProps extends Core.BaseProps {
  scheme?: 'primary' | 'secondary' | 'tertiary' | undefined;
}

export type FooterFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'footer';
  props: FooterProps;
  omits: 'children';
}>;

export const Footer = factory<FooterFactory>((props, ref) => {
  const { scheme = 'tertiary', ...otherProps } = props;
  const dataProps = {
    'data-scheme': scheme,
  };
  return (
    <footer {...otherProps} {...dataProps} className="footer-layout" ref={ref}>
      <div className="footer-content">
        <div className="footer-box--left">
          <span>Footer Box (left)</span>
        </div>
        <div className="footer-box--right">
          <span>Footer Box (right)</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = '@v2/site/Footer';
