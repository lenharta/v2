import React from 'react';
import { cx } from '@/app/utils';
import { objectKeys } from '@/utils';
import { Core, Factory } from '@/types';
import { factory, factoryPolymorphic } from '@/core/factory';
import { ICON_PATH_LOOKUP, ICON_SCHEME_LOOKUP } from './config';

export interface LogoIconProps {
  size?: Core.Size5 | undefined;
  scheme?: keyof typeof ICON_SCHEME_LOOKUP | undefined;
}

export interface LogoProps {
  iconProps?: (React.ComponentPropsWithRef<'svg'> & LogoIconProps) | undefined;
  scheme?: keyof typeof ICON_SCHEME_LOOKUP | undefined;
  size?: Core.Size5 | undefined;
}

export type LogoIconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: LogoIconProps;
}>;

export type LogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: LogoProps;
  omits: 'children' | 'className';
  comps: {
    Icon: typeof LogoIcon;
  };
}>;

const LogoIcon = factory<LogoIconFactory>((props, ref) => {
  const {
    size = 'sm',
    fill = 'none',
    xmlns = 'http://www.w3.org/2000/svg',
    scheme = 'default',
    viewBox = '0 0 500 430',
    height = '430',
    width = '500',
    ...forwardedProps
  } = props;

  return (
    <svg
      {...forwardedProps}
      ref={ref}
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      className={cx('logo-icon', `logo-icon--size-${size}`, `logo-icon--scheme-${scheme}`)}
    >
      {objectKeys(ICON_PATH_LOOKUP).map((pathKey) => (
        <path key={pathKey} d={ICON_PATH_LOOKUP[pathKey]} fill="currentColor" />
      ))}
    </svg>
  );
});

export const Logo = factoryPolymorphic<LogoFactory>((props, ref) => {
  const {
    size = 'sm',
    scheme = 'default',
    iconProps = {},
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <Component {...forwardedProps} ref={ref} className={cx('logo')}>
      <Logo.Icon {...iconProps} size={iconProps.size || size} scheme={iconProps.scheme || scheme} />
    </Component>
  );
});

Logo.displayName = '@v2/Logo';
Logo.Icon = LogoIcon;
