import * as React from 'react';
import { mergeProps } from '@/utils';
import { Icon, IconName } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { ElementProps } from '@/types/global';
import clsx from 'clsx';

export interface FooterNavItemProps extends Omit<ElementProps<'button'>, 'children'> {
  icon?: IconName;
  value: string;
  label: string;
  disabled?: boolean;
}

const defaultProps: Partial<FooterNavItemProps> = {
  icon: 'placeholder',
};

export const FooterNavItem = React.forwardRef<HTMLButtonElement, FooterNavItemProps>(
  (props, ref) => {
    const { label, icon, className, disabled, ...otherProps } = mergeProps(defaultProps, props);
    const isDisabled = disabled ? true : undefined;
    const clxss = clsx('primary-interactive-1', 'footer-nav-item');
    return (
      <UnstyledButton
        {...otherProps}
        ref={ref}
        className={clxss}
        data-disabled={isDisabled}
        aria-disabled={isDisabled}
      >
        <span className="inner">
          <Icon name={icon} />
          <div>{label}</div>
        </span>
      </UnstyledButton>
    );
  }
);
