import React from 'react';
import { DividerLabel } from '../Label';
import { DividerContentProps } from '../types';
import clsx from 'clsx';

const css = {
  content: 'v2-divider-content',
};

type DividerContentFactory = React.FC<DividerContentProps>;

const DividerContent: DividerContentFactory = (props) => {
  const { size, variant, icon, label } = props;

  return (
    <React.Fragment>
      {(icon || label) && (
        <div
          className={clsx(
            css.content,
            `${css.content}--variant-${variant}`,
            `${css.content}--size-${size}`
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
