import clsx from 'clsx';
import * as React from 'react';

export type FooterItemProps = {
  type?: 'internal' | 'external';
  label: string;
  value: string;
  onClick?: (value: string) => void;
  className?: string;
};

export type FooterItemComponent = {
  (props: FooterItemProps): React.ReactNode;
  displayName?: string;
};

export const FooterItem: FooterItemComponent = (props) => {
  const { type = 'internal', label, value, className, onClick } = props;

  let Component: React.ElementType = 'a';
  let componentProps = {};

  if (type === 'internal') {
    Component = 'button';
    componentProps = {
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(value);
      },
    };
  }

  if (type === 'external') {
    Component = 'a';
    componentProps = {
      target: '__blank',
      rel: 'noopener',
      href: value,
    };
  }

  return (
    <Component className={clsx('v2-footer-item', className)} {...componentProps}>
      {label}
    </Component>
  );
};

FooterItem.displayName = '@v2/Footer.Item';
