import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { FooterUpper } from './FooterUpper';
import { FooterLower } from './FooterLower';

type FooterFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'footer';
  omits: 'children';
  props: {};
  comps: {
    Upper: typeof FooterUpper;
    Lower: typeof FooterLower;
  };
}>;

export const Footer = factory<FooterFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return (
    <footer {...forwardedProps} ref={ref} className={cx('footer')}>
      <Footer.Upper />
      <Footer.Lower />
    </footer>
  );
});

Footer.displayName = '@v2/Footer';
Footer.Lower = FooterLower;
Footer.Upper = FooterUpper;
