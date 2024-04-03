import { useStyleNonce } from '../utils';
import { stylesToString } from '@/utils';
import { InlineStylesInput } from '@/types';

export const InlineCSS = (props: InlineStylesInput) => {
  const { selector, styles, media } = props;
  const nonce = useStyleNonce();
  return (
    <style
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
      nonce={nonce?.()}
    />
  );
};
