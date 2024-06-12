import { Link } from 'react-router-dom';
import { Divider, Icon } from '@/core';
import { V2Logo } from '../Logo';

import { css } from './footer-constants';
import { FooterProps } from './footer-types';

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={css.root}>
      <div className={css.content}>
        <div className={css.brand.root}>
          <V2Logo size="md" className={css.brand.logo} />
        </div>
        <nav className={css.nav.root}>
          <ul className={css.nav.list}>
            <Divider label="Navigation" position="start" />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
          </ul>
          <ul className={css.nav.list}>
            <Divider label="Sandbox" position="start" />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
          </ul>
          <ul className={css.nav.list}>
            <Divider label="Design System" position="start" />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
            <li className={css.nav.item} children={<Link to="/">Link</Link>} />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

Footer.displayName = '@v2/Footer.Root';
export { Footer };
