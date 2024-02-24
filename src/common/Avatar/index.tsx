import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { type IconName, Icon } from '../Icon';
import { type Size } from '@/types/common';

export type AvatarBaseProps = React.JSX.IntrinsicElements['button'];

export interface AvatarProps extends AvatarBaseProps {
  to?: string;
  size?: Size;
  icon?: IconName;
}

const defaultProps: Partial<AvatarProps> = {
  icon: 'person',
  size: 'sm',
  to: '/',
};

export const Avatar = React.forwardRef<HTMLButtonElement, AvatarProps>((props, ref) => {
  const { size, icon, to, onClick, className, disabled, ...otherProps } = props;

  const navigate = useNavigate();
  const mergedProps = mergeProps({ to, size }, defaultProps);

  const clxss = clsx(
    'Avatar',
    { [`Avatar--size-${mergedProps.size}`]: mergedProps.size },
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(mergedProps.to || '/');
    onClick?.(e);
  };

  return (
    <button
      {...otherProps}
      ref={ref}
      role="button"
      className={clxss}
      tabIndex={disabled ? undefined : 0}
      data-disabled={!disabled ? undefined : disabled}
      aria-disabled={!disabled ? undefined : disabled}
      onClick={handleClick}
    >
      <Icon name={icon} size={mergedProps.size} />
    </button>
  );
});
