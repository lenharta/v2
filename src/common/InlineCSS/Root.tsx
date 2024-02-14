import { createInlineCSS } from '@/utils';
import { InlineCSSRootComponent } from '@/types';

export const InlineCSS: InlineCSSRootComponent = ({ selector, styles, nonce = () => '' }) => {
  const createStyles = createInlineCSS(selector, styles ?? ({} as React.CSSProperties));
  return <style dangerouslySetInnerHTML={{ __html: createStyles }} nonce={nonce()} />;
};
