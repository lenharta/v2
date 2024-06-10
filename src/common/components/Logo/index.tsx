import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';
import { V2LogoProps } from './types';

type V2LogoFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: V2LogoProps;
}>;

const css = {
  root: 'v2-logo',
};

const V2Logo = factory<V2LogoFactory>((props, ref) => {
  const { size = 'sm', scheme, variant, className, ...forwardedProps } = props;

  const classNames = clsx(
    css.root,
    {
      [`${css.root}--size-${size}`]: size,
    },
    className
  );

  return (
    <svg
      ref={ref}
      fill="none"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
      data-scheme={scheme}
      data-variant={variant}
      {...forwardedProps}
    >
      <path d="M0 13.76L7.97395 0L9.12922 1.9806L3.49187 11.7533H14.8295L16 13.76H0Z" />
      <path d="M11.3876 9.79878H13.6895L10.2541 3.90909L9.12921 5.8897L11.3876 9.79878Z" />
      <path d="M9.12922 9.79879L7.97395 7.84426L6.85341 9.79879H9.12922Z" />
    </svg>
  );
});

V2Logo.displayName = '@v2/V2Logo';
export { V2Logo };
