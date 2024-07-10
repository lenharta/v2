import * as Router from 'react-router-dom';
import { Core } from '@/types';
import { Icon } from '@/core';

interface FooterMenuItemProps extends Core.LinkItem {
  type?: 'internal' | 'external' | undefined;
}

type PolymorphicProps = Router.LinkProps | React.JSX.IntrinsicElements['a'];

function useItemLinkComponent(props: Partial<FooterMenuItemProps>) {
  const { type = 'internal', value = '/' } = props;

  let Component: React.ElementType | null = 'a';
  let ComponentProps: PolymorphicProps = {};

  if (type === 'external') {
    Component = 'a';
    ComponentProps = {
      href: value as string,
    };
  }

  if (type === 'internal') {
    Component = Router.Link;
    ComponentProps = {
      to: value as string,
    };
  }

  return { Component, ComponentProps };
}

const FooterMenuItem: React.FC<FooterMenuItemProps> = (props) => {
  const { id, type = 'internal', label, value, icon, ...rootProps } = props;

  const { Component, ComponentProps } = useItemLinkComponent({ type, value });

  const { position = 'start', ...otherIconProps } = icon || {};
  const isIconStart = !!icon && icon.position === 'start';
  const isIconEnd = !!icon && icon.position === 'end';

  const iconProps =
    isIconEnd || isIconStart
      ? {
          className: 'v2-footer-menu-link-icon',
          'data-position': position,
          ...otherIconProps,
        }
      : {};

  return (
    <li className="v2-footer-menu-item" {...rootProps}>
      <Component className="v2-footer-menu-link" id={id} aria-label={label} {...ComponentProps}>
        {isIconStart && <Icon {...iconProps} />}
        <div>{label}</div>
        {isIconEnd && <Icon {...iconProps} />}
      </Component>
    </li>
  );
};

FooterMenuItem.displayName = '@v2/FooterMenu.Link';
export { FooterMenuItem };
