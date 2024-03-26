import clsx from 'clsx';
import * as React from 'react';
import { LinkProvider } from '@/common/Link/context';
import { LinkGroupComponentType, LinkGroupRenderType } from '@/common/Link/types';

const LinkGroupRender: LinkGroupRenderType = (props, ref) => {
  const {
    size = 'md',
    alignment = 'start',
    orientation = 'horizontal',
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('link-group', className)}
      aria-orientation={orientation}
    >
      <LinkProvider value={{ size, alignment, orientation }}>{children}</LinkProvider>
    </div>
  );
};

export const LinkGroup = React.forwardRef(LinkGroupRender) as LinkGroupComponentType;
