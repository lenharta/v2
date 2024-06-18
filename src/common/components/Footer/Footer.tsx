import { V2Logo } from '../Logo';
import { useNavigate } from 'react-router-dom';
import { Divider, Stack, UnstyledButton } from '@/core';

import { css } from './footer-constants';
import { FooterProps } from './footer-types';
import { ROUTES, ROUTES_SANDBOX } from '@/types';

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
              { value: ROUTES.home, label: 'Home' },
              { value: ROUTES.projects, label: 'Projects' },
              { value: ROUTES.experience, label: 'Experience' },
              { value: ROUTES.toolbox, label: 'Toolbox' },
              { value: ROUTES.contact, label: 'Contact' },
              { value: ROUTES.settings, label: 'Settings' },
              { value: ROUTES.canvas, label: 'Canvas' },
            ]}
          />

          <FooterNavList
            group="Sandbox | Core"
            items={[
              { value: ROUTES_SANDBOX.icon, label: 'Icon' },
              { value: ROUTES_SANDBOX.text, label: 'Text' },
              { value: ROUTES_SANDBOX.tile, label: 'Tile' },
              { value: ROUTES_SANDBOX.title, label: 'Title' },
              { value: ROUTES_SANDBOX.label, label: 'Label' },
              { value: ROUTES_SANDBOX.action, label: 'Action' },
              { value: ROUTES_SANDBOX.button, label: 'Button' },
              { value: ROUTES_SANDBOX.divider, label: 'Divider' },
              { value: ROUTES_SANDBOX.floating, label: 'Floating' },
            ]}
          />

          <FooterNavList
            group="Sandbox | Hooks"
            items={[
              { value: ROUTES_SANDBOX.icon, label: 'Icon' },
              { value: ROUTES_SANDBOX.text, label: 'Text' },
              { value: ROUTES_SANDBOX.tile, label: 'Tile' },
              { value: ROUTES_SANDBOX.title, label: 'Title' },
              { value: ROUTES_SANDBOX.label, label: 'Label' },
              { value: ROUTES_SANDBOX.action, label: 'Action' },
              { value: ROUTES_SANDBOX.button, label: 'Button' },
              { value: ROUTES_SANDBOX.divider, label: 'Divider' },
              { value: ROUTES_SANDBOX.floating, label: 'Floating' },
            ]}
          />
        </nav>
      </div>
    </footer>
  );
};

Footer.displayName = '@v2/Footer.Root';
export { Footer };
