import clsx from 'clsx';
import * as React from 'react';
import { Anchor, Divider, Subtitle, Text, Title } from '@/common';
import { SecHeaderComponentType, SecHeaderRenderType } from '../types';

const SectionHeaderRender: SecHeaderRenderType = (props, ref) => {
  const {
    id,
    title,
    subtitle,
    description,
    withDivider,
    className,
    titleProps,
    dividerProps,
    subtitleProps,
    descriptionProps,
    ...otherProps
  } = props;

  return (
    <header {...otherProps} ref={ref} className={clsx('sec-header', className)}>
      <Anchor id={id} />
      {title && <Title size="sm" {...titleProps} children={title} h2 />}
      {subtitle && <Subtitle size="sm" {...subtitleProps} children={subtitle} h3 />}
      {description && <Text size="lg" {...descriptionProps} children={description} />}
      {withDivider && <Divider size="sm" {...dividerProps} />}
    </header>
  );
};

export const SectionHeader = React.forwardRef(SectionHeaderRender) as SecHeaderComponentType;
SectionHeader.displayName = '@v2/Section.Header';
