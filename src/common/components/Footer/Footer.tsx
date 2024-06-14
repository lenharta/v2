import { V2Logo } from '../Logo';
import { useNavigate } from 'react-router-dom';
import { Divider, Stack, UnstyledButton } from '@/core';

import { css } from './footer-constants';
import { FooterProps } from './footer-types';

const FooterNavList = (props: { group: string; items: { value: string; label: string }[] }) => {
  const { group, items = [] } = props;
  const navigate = useNavigate();
  return (
    <Stack gap="xs" component="ul" className={css.nav.list}>
      <Divider label={group} />
      {items.map((item) => (
        <li className={css.nav.item} key={item.value}>
          <UnstyledButton onClick={() => navigate(item.value)} className={css.nav.link}>
            {item.label}
          </UnstyledButton>
        </li>
      ))}
    </Stack>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={css.root}>
      <div className={css.content}>
        <div className={css.brand.root}>
          <V2Logo size="md" className={css.brand.logo} />
        </div>

        <nav className={css.nav.root}>
          <FooterNavList
            group="Navigation"
            items={[
              { value: '/', label: 'Home' },
              { value: '/experience', label: 'Experience' },
              { value: '/projects', label: 'Projects' },
              { value: '/toolbox', label: 'Toolbox' },
              { value: '/contact', label: 'Contact' },
              { value: '/settings', label: 'Settings' },
              { value: '/components', label: 'Components' },
            ]}
          />

          <FooterNavList
            group="Components"
            items={[
              { value: '/components/inputs', label: 'Inputs' },
              { value: '/components/buttons', label: 'Buttons' },
              { value: '/components/layouts', label: 'Layouts' },
              { value: '/components/overlays', label: 'Overlays' },
              { value: '/components/feedback', label: 'Feedback' },
              { value: '/components/navigation', label: 'Navigation' },
              { value: '/components/collections', label: 'Collections' },
              { value: '/components/miscellaneous', label: 'Miscellaneous' },
            ]}
          />

          <FooterNavList
            group="Components"
            items={[
              { value: '/components/inputs', label: 'Inputs' },
              { value: '/components/buttons', label: 'Buttons' },
              { value: '/components/layouts', label: 'Layouts' },
              { value: '/components/overlays', label: 'Overlays' },
              { value: '/components/feedback', label: 'Feedback' },
              { value: '/components/navigation', label: 'Navigation' },
              { value: '/components/collections', label: 'Collections' },
              { value: '/components/miscellaneous', label: 'Miscellaneous' },
            ]}
          />
        </nav>
      </div>
    </footer>
  );
};

Footer.displayName = '@v2/Footer.Root';
export { Footer };
