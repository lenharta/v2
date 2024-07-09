import { Core } from '@/types';
import { Divider } from '@/core';

interface FooterMenuGroupProps extends Omit<Core.LinkGroup, 'items'> {
  children?: React.ReactNode | undefined;
}

type FooterMenuGroupFactory = React.FC<FooterMenuGroupProps>;

// TODO: `icon` needs to be passed to divider as props object.

const FooterMenuGroup: FooterMenuGroupFactory = (props) => {
  const { group, children } = props;
  return (
    <div className="v2-footer-menu-group">
      <Divider label={group.label || group.value} />
      <ul>{children}</ul>
    </div>
  );
};

FooterMenuGroup.displayName = '@v2/FooterMenu.Group';
export { FooterMenuGroup };
