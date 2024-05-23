import { ACCENT } from '@/types';
import { getTokenValue } from '@/core';

interface TokenColorSwatchProps {
  name: keyof typeof ACCENT;
}

const DemoColorSwatch = (props: TokenColorSwatchProps) => {
  const { name = 'blue' } = props;
  const tokenBase = `c-${name}`;
  return (
    <div
      children={tokenBase}
      className="v2-color-swatch"
      style={{
        backgroundColor: getTokenValue(`${tokenBase}-A100`),
        color: getTokenValue(tokenBase),
      }}
    />
  );
};

export { DemoColorSwatch };
