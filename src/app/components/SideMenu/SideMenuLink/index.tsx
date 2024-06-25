import { Static } from '@/types';
import { Action, Icon, IconProps } from '@/core';

interface SideMenuLinkProps {
  icon: Partial<IconProps>;
  item: Static.RouteItem['link'];
  onClick: (to: string) => void;
}

const SideMenuLink: React.FC<SideMenuLinkProps> = (props) => {
  const { item, onClick, icon } = props;
  return (
    <Action
      value={item.value}
      label={item.label}
      icon={<Icon name={item.icon} {...icon} />}
      onClick={(event) => onClick(event.currentTarget.value)}
    />
  );
};

SideMenuLink.displayName = '@v2/SideMenu.Link';
export { SideMenuLink };
