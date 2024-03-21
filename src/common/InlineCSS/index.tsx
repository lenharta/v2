import { useStyleNonce } from '@/hooks';
import { InlineStylesInput } from '@/types/global';
import { stylesToString } from '@/utils';

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
