import { FooterMenuGroup } from '../FooterMenuGroup';
import { FooterMenuComponent } from '../types';

export const FooterMenu: FooterMenuComponent = (props) => {
  const { groups } = props;
  return (
    <nav className="footer-menu">
      {groups.map(({ group, items }) => (
        <FooterMenuGroup key={group} group={group} items={items} />
      ))}
    </nav>
  );
};
