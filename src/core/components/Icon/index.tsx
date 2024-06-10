import clsx from 'clsx';
import { factory } from '@/core';
import { Factory, Theme } from '@/types';
import { ICON_MAP } from './icon-library';

interface IconProps {
  size?: Theme.Size | undefined;
  name?: keyof (typeof ICON_MAP)['fill'] | undefined;
  scheme?: 'accent' | Theme.Color | undefined;
  variant?: 'fill' | 'outline' | undefined;
}

type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
}>;

const css = {
  root: 'v2-icon',
};

const Icon = factory<IconFactory>((props, ref) => {
  const {
    size = 'sm',
    name = 'shape-circle',
    scheme,
    variant = 'outline',
    className,
    ...forwardedProps
  } = props;

  const classNames = clsx(
    css.root,
    {
      [`${css.root}--size-${size}`]: size,
      [`${css.root}--scheme-${scheme}`]: !!scheme,
    },
    className
  );

  return (
    <svg
      {...forwardedProps}
      data-icon-name={name}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
      viewBox="0 0 16 16"
      height="16"
      width="16"
      fill="none"
      ref={ref}
    >
      {ICON_MAP[variant][name]}
    </svg>
  );
});

export { Icon, type IconProps };
