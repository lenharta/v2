import * as React from 'react';
import { createInlineCSS } from '@/utils';

export interface InlineCSSProps {
  selector: string;
  nonce?: () => string;
  styles?: React.CSSProperties;
}

export const InlineCSS = (props: InlineCSSProps) => {
  const { selector, styles, nonce = () => '', ...otherProps } = props;
  return (
    <style
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: createInlineCSS(selector, styles) }}
      nonce={nonce()}
    />
  );
};

InlineCSS.displayName = 'v2/InlineCSS';
