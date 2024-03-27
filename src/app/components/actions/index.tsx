import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { ActionsComponentType, ActionsRenderType } from './types';

const ActionsRender: ActionsRenderType = (props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <aside {...otherProps} ref={ref} className={clsx('page-actions', className)}>
      <div className="page-actions-menu">
        <UnstyledButton className="page-actions-menu-item">
          <Icon name="code" />
        </UnstyledButton>
        <UnstyledButton className="page-actions-menu-item">
          <Icon name="mention" />
        </UnstyledButton>
        <UnstyledButton className="page-actions-menu-item">
          <Icon name="briefcase" />
        </UnstyledButton>
      </div>
    </aside>
  );
};

export const Actions = React.forwardRef(ActionsRender) as ActionsComponentType;
Actions.displayName = '@v2/Actions';
