import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { ICON_MAP } from './library';
import { mergeProps } from '@/core/utils';

type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: Core.IconComponentProps;
}>;

const defaultProps: Core.IconComponentProps = {
  type: 'outline',
  name: 'shape-circle',
  fill: 'currentColor',
};

const css: Record<'root' | 'vector', string> = {
  root: 'v2-icon',
  vector: 'v2-icon-vector',
};

export const Icon = createFactory<IconFactory>((props, ref) => {
  const { name, type, fill, children, className, rootProps, ...forwardedProps } = mergeProps(
    props,
    defaultProps
  );

  // const fillToken = fill;

  return (
    <div className={clsx(css.root, className)} {...rootProps}>
      <svg
        {...forwardedProps}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-icon-name={name}
      >
        {ICON_MAP[type][name]}
      </svg>
    </div>
  );
});

Icon.displayName = '@v2/Icon';
