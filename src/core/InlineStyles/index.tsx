import { Core } from '@/types';
import { useStyleNonce } from '@/core/hooks';
import { stylesToString } from '@/utils';

export const InlineStyles: React.FC<Core.StylesInput> = (props) => {
  const { selector, styles, media } = props;
  const nonce = useStyleNonce();
  return (
    <style
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
      nonce={nonce?.()}
    />
  );
};

InlineStyles.displayName = '@v2/core/InlineStyles';
