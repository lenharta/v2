import { Action, Icon } from '@/core';
import { SideMenuLinkProps } from '../SideMenu.types';

const SideMenuLink: React.FC<SideMenuLinkProps> = (props) => {
  const { item, onClick, icon, location } = props;

  function isActiveLink(value: string): boolean | undefined {
    return location?.pathname === value ? true : undefined;
  }

  return (
    <Action
      value={item.value}
      label={item.label}
      icon={<Icon name={item.icon} {...icon} />}
      onClick={(event) => onClick(event.currentTarget.value)}
      selected={isActiveLink(item.value)}
      className="v2-sidemenu-link"
    />
  );
};

SideMenuLink.displayName = '@v2/SideMenu.Link';
export { SideMenuLink };
