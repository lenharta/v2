import clsx from 'clsx';
import * as React from 'react';
import { Scheme } from '@/types/common';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';
import { UnstyledButton } from '@/common/Button/Unstyled';

type TabsItemBaseProps = React.ComponentPropsWithoutRef<'button'>;

export interface TabsItemProps extends TabsItemBaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  label?: string;
  scheme?: 'default' | Scheme;
  disabled?: boolean;
  selected?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const defaultProps: Partial<TabsItemProps> = {};

function _TabsItem(props: TabsItemProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    label,
    value,
    selected,
    disabled,
    className,
    children,
    leftContent,
    rightContent,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useTabsCTX();
  const clxss = clsx('tabs-item', `tabs-item--size-${ctx.size}`, className);
  const isDisabled = ctx.disabled || disabled;
  const isSelected = !isDisabled && value === ctx.value;

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      className={clxss}
      data-selected={isSelected}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {(label || children) && <div data-position="center">{label || children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </UnstyledButton>
  );
}

export const TabsItem = React.forwardRef(_TabsItem) as React.ForwardRefExoticComponent<
  TabsItemProps & React.RefAttributes<HTMLButtonElement>
>;

TabsItem.displayName = '@v2/Tabs.Item';
