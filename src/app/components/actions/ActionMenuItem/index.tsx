import * as React from 'react';
import { Icon } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/utils';
import { ActionsMenuItemComponentType, ActionsMenuItemRenderType } from '../types';

const ActionMenuItemRender: ActionsMenuItemRenderType = (props, ref) => {
  const { disabled, navigate, icon, location, label, ...otherProps } = props;

  const hasLabel = otherProps['aria-label'] || label;
  const hasTabIndex = otherProps.tabIndex || 0;

  const handleClick = createEventCallback(otherProps.onClick, (event) => {
    if (navigate && !disabled) {
      navigate(event.currentTarget.value);
    }
  });

  const accessibleProps = {
    id: otherProps.id,
    role: 'menuitem',
    title: otherProps.title,
    ...(!disabled ? { tabIndex: hasTabIndex } : {}),
    ...(hasLabel ? { 'aria-label': hasLabel } : {}),
  };

  const dataProps = {
    ...(location ? { 'data-active-item': location.pathname === otherProps.value } : {}),
  };

  return (
    <UnstyledButton
      {...otherProps}
      {...dataProps}
      {...accessibleProps}
      ref={ref}
      onClick={handleClick}
      className="page-actions-menu-item"
      children={<Icon name={icon} aria-label={[hasLabel, 'icon'].join(' ')} />}
    />
  );
};

export const ActionMenuItem = React.forwardRef(
  ActionMenuItemRender
) as ActionsMenuItemComponentType;
