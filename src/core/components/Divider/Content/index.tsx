import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { DividerContentProps } from '../Divider.types';

type DividerContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerContentProps;
}>;

const DividerContent = factory<DividerContentFactory>((props, ref) => {
  const { label, position, show, className, ...forwardedProps } = props;

  if (!label || show !== true) {
    return null;
  }

  return (
    <div {...forwardedProps} ref={ref} className={className} data-position={position}>
      <React.Fragment>{label}</React.Fragment>
    </div>
  );
});

DividerContent.displayName = '@v2/Divider.Content';
export { DividerContent, type DividerContentFactory };
