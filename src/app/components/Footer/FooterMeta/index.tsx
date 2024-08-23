import { MetaLogo } from './MetaLogo';
import { MetaName } from './MetaName';
import { MetaEmail } from './MetaEmail';
import { MetaHandle } from './MetaHandle';
import { MetaLocation } from './MetaLocation';

type FooterMetaFactory = React.FC<{}> & {
  Logo: typeof MetaLogo;
  Name: typeof MetaName;
  Email: typeof MetaEmail;
  Handle: typeof MetaHandle;
  Location: typeof MetaLocation;
};

const FooterMeta: FooterMetaFactory = ({}) => (
  <div className="v2-footer-meta">
    <FooterMeta.Handle />
  </div>
);

FooterMeta.Name = MetaName;
FooterMeta.Logo = MetaLogo;
FooterMeta.Email = MetaEmail;
FooterMeta.Handle = MetaHandle;
FooterMeta.Location = MetaLocation;

FooterMeta.displayName = '@v2/Footer.Meta';
export { FooterMeta };
