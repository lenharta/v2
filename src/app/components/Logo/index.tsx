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
  viewBox: '0 0 16 16',
  height: '16',
  width: '16',
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
      <svg {...SVGProps} strokeWidth={0.1} className="v2-logo-vector" data-name="v2-logo">
        <path d="M0 13.76L7.97395 0L9.12922 1.9806L3.49187 11.7533H14.8295L16 13.76H0Z" />
        <path d="M11.3876 9.79878H13.6895L10.2541 3.90909L9.12921 5.8897L11.3876 9.79878Z" />
        <path d="M9.12922 9.79879L7.97395 7.84426L6.85341 9.79879H9.12922Z" />
      </svg>
    </Component>
  );
});

Logo.displayName = '@v2/Logo';
export { Logo };
