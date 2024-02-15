import * as React from 'react';
import { createInlineCSS } from '@/utils';
import type { Core } from '@/types/core';

type InlineCSSProps = {
  selector: string;
  styles?: React.CSSProperties;
  nonce?: () => string;
};

type InlineCSSFactory = Core.BaseFactory<{
  props: InlineCSSProps;
  component: 'style';
}>;

export const InlineCSS: InlineCSSFactory = (props) => {
  const {
    selector,
    styles,
    nonce = () => '',
    component: Component = 'style',
    ...otherProps
  } = props;

  return (
    <Component
      dangerouslySetInnerHTML={{ __html: createInlineCSS(selector, styles) }}
      nonce={nonce()}
      {...otherProps}
    />
  );
};
