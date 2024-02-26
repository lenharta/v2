import clsx from 'clsx';
import * as React from 'react';

export type SectionContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface SectionContentProps extends SectionContentBaseProps {}

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  (props, ref) => {
    const { children, className, ...otherProps } = props;
    const clxss = clsx('Section-content', className);
    return (
      <div {...otherProps} ref={ref} className={clxss}>
        {children}
      </div>
    );
  }
);

SectionContent.displayName = '@v2/Section.Content';
