import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';
import { Title, TitleProps } from '@/common';
import { SectionAnchor } from '../SectionAnchor';

export interface SectionHeaderProps extends TitleProps {
  id: string;
  label: string;
  rootProps?: ElementProps<'div'>;
}

const defaultProps: Partial<SectionHeaderProps> = {};

export const SectionHeader = React.forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  (props, ref) => {
    const { id, label, className, rootProps, ...otherProps } = mergeProps(defaultProps, props);
    return (
      <div className="section-header" {...rootProps}>
        <SectionAnchor id={id} label={label} className="section-title-anchor" />
        <Title
          {...otherProps}
          ref={ref}
          children={label}
          className={clsx('section-title', className)}
        />
      </div>
    );
  }
);
