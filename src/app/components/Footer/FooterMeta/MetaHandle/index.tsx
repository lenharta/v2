import { META } from '@data';

const MetaHandle: React.FC<{}> = ({}) => (
  <a className="v2-footer-meta-handle" href={META.social.link.github}>
    <span>
      {META.social.user.github}, {new Date().getFullYear()}
    </span>
  </a>
);

MetaHandle.displayName = '@v2/Footer.Meta.Handle';
export { MetaHandle };
