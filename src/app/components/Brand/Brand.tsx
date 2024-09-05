import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type BrandProps = {};

export type BrandFactory = Core.Factory<{
  ref: SVGSVGElement;
  props: BrandProps;
  element: 'svg';
}>;

export const Brand = Component<BrandFactory>(
  ({
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    viewBox = '0 0 500 430',
    className,
    ...props
  }) => (
    <svg className={clsx('v2-brand', className)} {...props}>
      <path d="M0 430L249.186 0L285.288 61.8939L109.121 367.292H463.423L500 430H0Z" />
      <path d="M355.863 306.212H427.796L320.44 122.159L285.288 184.053L355.863 306.212Z" />
      <path d="M285.288 306.212L249.186 245.133L214.169 306.212H285.288Z" />
    </svg>
  )
);

Brand.displayName = '@v2/Brand';
