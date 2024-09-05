import clsx from 'clsx';
import { Core } from '@/types';
import { Icon } from '@/core/components';
import { Component } from '@/factory';

export type IconButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.IconButtonProps;
  element: 'button';
}>;

export const IconButton = Component<IconButtonFactory>(
  ({ icon, size = 'md', variant = 'default', className, ...props }, ref) => {
    const classNames = clsx(
      'v2-iconbutton',
      `v2-iconbutton--${size}`,
      `v2-iconbutton--${variant}`,
      className
    );

    return (
      <button {...props} ref={ref} className={classNames}>
        <Icon {...icon} />
      </button>
    );
  }
);

IconButton.displayName = '@v2/IconButton';
