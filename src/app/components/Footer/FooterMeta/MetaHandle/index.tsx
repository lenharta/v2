import { META } from '@data';

const MetaHandle: React.FC<{}> = ({}) => (
  <a className="v2-footer-meta-handle" href={META.social.github.url}>
    <span>
      {META.social.github.username}, {new Date().getFullYear()}
    </span>
  </a>
);

MetaHandle.displayName = '@v2/Footer.Meta.Handle';
export { MetaHandle };
