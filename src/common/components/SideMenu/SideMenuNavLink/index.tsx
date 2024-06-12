import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';
import { SideMenuNavLinkProps } from '../sidemenu-types';
import { css } from '../sidemenu-constants';

type SideMenuNavLinkFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SideMenuNavLinkProps;
}>;

const SideMenuNavLink = factory<SideMenuNavLinkFactory>((props, ref) => {
  const { icon, value, label, navigate, store, selected, disabled, ...forwardedProps } = props;

  return (
    <Action
      ref={ref}
      value={value}
      label={label}
      icon={<Icon name={icon} variant={store.icons} />}
      selected={selected}
      disabled={disabled}
      className={css.link}
      onClick={(event) => navigate(event.currentTarget.value)}
      {...forwardedProps}
      {...forwardedProps}
    />
  );
});

SideMenuNavLink.displayName = '@v2/SideMenuNav.Link';
export { SideMenuNavLink };
