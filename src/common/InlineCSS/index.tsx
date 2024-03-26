import { useStyleNonce } from '@/hooks';
import { stylesToString } from '@/utils';
import { InlineStylesInput } from '@/types/global';

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
