import { createInlineCSS } from '@/utils';
import { Core } from '@/types/core';

export type SurfaceProps = {
  nonce: () => string;
  selector: string;
  baseConfig: React.CSSProperties;
  hoverConfig: React.CSSProperties;
};

export type SurfaceFactory = Core.BaseFactory<{
  component: 'style';
  props: SurfaceProps;
}>;

export const Surface: SurfaceFactory = (props) => {
  const {
    selector,
    baseConfig,
    hoverConfig,
    nonce = () => '',
    component: Component = 'style',
  } = props;

  const mergeConfigs = (configs: string[]) => configs.join('');

  return (
    <Component
      dangerouslySetInnerHTML={{
        __html: mergeConfigs([
          createInlineCSS(`${selector}`, baseConfig),
          createInlineCSS(`${selector}:hover`, hoverConfig),
        ]),
      }}
      nonce={nonce()}
    />
  );
};
