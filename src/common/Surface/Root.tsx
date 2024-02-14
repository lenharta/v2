import { createInlineCSS } from '@/utils';
import { SurfaceRootComponent } from '@/types';

export const Surface: SurfaceRootComponent = (props) => {
  const { selector, baseConfig, hoverConfig, nonce = () => '' } = props;

  const buildStyleConfiguration = (): string => {
    const styles: string[] = [createInlineCSS(`${selector}`, baseConfig)];

    if (hoverConfig) {
      styles.push(createInlineCSS(`${selector}:hover`, hoverConfig));
    }

    return styles.join('');
  };

  return <style dangerouslySetInnerHTML={{ __html: buildStyleConfiguration() }} nonce={nonce()} />;
};
