import clsx from 'clsx';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionsComponentType, ActionsRenderType } from './types';
import { ActionMenuItem } from './ActionMenuItem';

const ActionsRender: ActionsRenderType = (props, ref) => {
  const { className, ...otherProps } = props;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside {...otherProps} ref={ref} className={clsx('page-actions', className)}>
      <div className="page-actions-menu">
        <ActionMenuItem
          navigate={navigate}
          location={location}
          label="navigate to projects page"
          title="Projects"
          value="/projects"
          icon="code"
        />
        <ActionMenuItem
          navigate={navigate}
          location={location}
          label="navigate to experience page"
          title="Experience"
          value="/experience"
          icon="briefcase"
        />
        <ActionMenuItem
          navigate={navigate}
          location={location}
          label="navigate to contact page"
          title="Contact"
          value="/contact"
          icon="mention"
        />
        <ActionMenuItem
          navigate={navigate}
          location={location}
          label="navigate to sandbox page"
          title="Sandbox"
          value="/sandbox"
          icon="cube"
        />
      </div>
    </aside>
  );
};

export const Actions = React.forwardRef(ActionsRender) as ActionsComponentType;
Actions.displayName = '@v2/Actions';
