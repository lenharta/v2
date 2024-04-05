import { Core } from '@/types';
import { useStyleNonce } from '../hooks';
import { stylesToString } from '@/utils';

export const InlineStyles = (props: Core.StylesInput) => {
  const { selector, styles, media } = props;
  const nonce = useStyleNonce();
  return (
    <style
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
      nonce={nonce?.()}
    />
  );
};
