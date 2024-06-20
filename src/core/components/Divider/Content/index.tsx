import clsx from 'clsx';
import React from 'react';
import { DividerLabel } from '../Label';
import { DividerContentProps } from '../types';

const DividerContent: React.FC<DividerContentProps> = (props) => {
  const { size, variant, icon, label } = props;

  return (
    <React.Fragment>
      {(icon || label) && (
        <div
          className={clsx(
            'v2-divider-content',
            `v2-divider-content--size-${size}`,
            `v2-divider-content--variant-${variant}`
          )}
        >
          {icon && icon}
          <DividerLabel variant={variant} size={size} label={label} />
        </div>
      )}
    </React.Fragment>
  );
};

DividerContent.displayName = '@v2/Divider.Content';
export { DividerContent };
