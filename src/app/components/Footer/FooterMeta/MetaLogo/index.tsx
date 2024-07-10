import { Logo } from '@/app';

const MetaLogo: React.FC<{}> = ({}) => (
  <Logo
    variant="default-min"
    className="v2-footer-meta-logo"
    height="var(--v2-footer-meta-logo-height)"
    width="var(--v2-footer-meta-logo-width)"
  />
);

MetaLogo.displayName = '@v2/Footer.Meta.Logo';
export { MetaLogo };
