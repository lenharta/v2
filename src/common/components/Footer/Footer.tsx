import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, Divider, Icon, Stack, Text, Title, factory } from '@/core';
import { FooterRootProps } from './types';
import { V2Logo } from '../Logo';
import { Link } from 'react-router-dom';

const css = {
  root: 'v2-footer',
  logobox: 'v2-footer-box-logo',
  menubox: 'v2-footer-box-menu',
};

type FooterRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'footer';
  props: FooterRootProps;
  omits: 'children';
}>;

const Footer = factory<FooterRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <footer {...forwardedProps} ref={ref} className={clsx(css.root, className)}>
      <div className="v2-footer-content">
        <div className="v2-footer-branding">
          <V2Logo size="lg" />
        </div>
        <nav className="v2-footer-nav">
          <ul className="v2-footer-nav-list">
            <Divider label="Navigation" position="start" icon={<Icon name="link-deg45" />} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          </ul>
          <ul className="v2-footer-nav-list">
            <Divider label="Sandbox" position="start" icon={<Icon name="link-deg45" />} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          </ul>
          <ul className="v2-footer-nav-list">
            <Divider label="Design System" position="start" icon={<Icon name="link-deg45" />} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
            <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          </ul>
        </nav>
      </div>
      {/* <div className="v2-footer-branding">
        <V2Logo size="lg" className="v2-footer-branding-logo" />
      </div>
      <nav className="v2-footer-nav">
        <ul className="v2-footer-nav-list">
          <Divider label="Navigation" position="start" icon={<Icon name="link-deg45" />} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
        </ul>
        <ul className="v2-footer-nav-list">
          <Divider label="Navigation" position="start" icon={<Icon name="link-deg45" />} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
          <li className="v2-footer-nav-item" children={<Link to="/">Link</Link>} />
        </ul>
      </nav> */}
    </footer>
  );
});

Footer.displayName = '@v2/Footer.Root';
export { Footer };
