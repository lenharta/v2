import * as React from 'react';
import { useClxss } from '@/hooks';
import { Factory, Theme } from '@/types';
import { createPolymorphicFactory } from '@/factory';

interface LogoThemeProps {
  size?: Theme.SizeExpanded | undefined;
  style?: React.CSSProperties | undefined;
  width?: React.CSSProperties['width'] | undefined;
  height?: React.CSSProperties['height'] | undefined;
  variant?: `default-${Theme.Emphasis}` | `accent-${Theme.Emphasis}` | undefined;
}

interface LogoProps extends LogoThemeProps {}

type LogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: LogoProps;
  omits: 'children' | 'width' | 'height';
}>;

const SVGProps: React.JSX.IntrinsicElements['svg'] = {
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 500 430',
  // height: '430',
  // width: '500',
};

const Logo = createPolymorphicFactory<LogoFactory>((props, ref) => {
  const {
    size,
    style,
    width,
    height,
    variant,
    className,
    component: Component = 'div',
    ...forwardedProps
  } = props;

  const clxss = useClxss({
    key: 'v2-logo',
    mods: { size, variant },
    opts: { className },
  });

  return (
    <Component ref={ref} style={{ ...style, height, width }} className={clxss} {...forwardedProps}>
      <svg {...SVGProps} className="v2-logo-vector" data-name="v2-logo">
        <path d="M0 430L249.186 0L285.288 61.8939L109.121 367.292H463.423L500 430H0Z" />
        <path d="M355.863 306.212H427.796L320.44 122.159L285.288 184.053L355.863 306.212Z" />
        <path d="M285.288 306.212L249.186 245.133L214.169 306.212H285.288Z" />
      </svg>
    </Component>
  );
});

Logo.displayName = '@v2/Logo';
export { Logo };
