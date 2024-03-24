import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { LinkProvider } from '../context';
import { LinkGroupProps, LinkGroupRenderType } from '../types';

const defaultProps: Partial<LinkGroupProps> = {};

export const LinkGroupRender: LinkGroupRenderType = (props, ref) => {
  const { size, alignment, orientation, className, children, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('link-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <LinkProvider value={{ size, alignment, orientation }}>{children}</LinkProvider>
    </div>
  );
};
