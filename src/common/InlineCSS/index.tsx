import * as React from 'react';
import { createInlineCSS } from '@/utils';

export type InlineCSSProps = {
  selector: string;
  styles?: React.CSSProperties;
  nonce?: () => string;
};

export interface InlineCSSComponent {
  (props: InlineCSSProps): JSX.Element | null;
  displayName?: string;
}

export const InlineCSS: InlineCSSComponent = (props) => {
  const { selector, styles, nonce = () => '', ...otherProps } = props;
  return (
    <style
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: createInlineCSS(selector, styles) }}
      nonce={nonce()}
    />
  );
};

InlineCSS.displayName = '@v2/InlineCSS';
