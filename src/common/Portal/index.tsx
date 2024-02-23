import * as React from 'react';
import { createPortal } from 'react-dom';
import { mergeProps } from '@/utils';

interface PortalProps {
  children?: React.ReactNode;
  target?: Element | DocumentFragment;
}

const defaultProps: Partial<PortalProps> = {
  target: document.body,
};

export const Portal = (props: PortalProps) => {
  const { children, target } = props;
  const mergedProps = mergeProps({ target }, defaultProps);

  return createPortal(
    <React.Fragment>{children}</React.Fragment>,
    mergedProps.target as Element | DocumentFragment
  );
};
