import clsx from 'clsx';
import * as React from 'react';

export type SectionContentElementProps = React.ComponentPropsWithRef<'div'>;
export type SectionContentAttributeProps = React.RefAttributes<HTMLDivElement>;
export type SectionContentBaseProps = SectionContentElementProps & SectionContentAttributeProps;

export interface SectionContentProps extends SectionContentBaseProps {}

export const _SectionContent = (
  props: SectionContentProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Section-content', className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
};

export type SectionContentComponent = React.ForwardRefExoticComponent<SectionContentProps>;
export const SectionContent = React.forwardRef(_SectionContent) as SectionContentComponent;
SectionContent.displayName = '@v2/Section.Content';
