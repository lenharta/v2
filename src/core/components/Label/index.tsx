import clsx from 'clsx';
import { Factory } from '@/types';
import { LabelProps } from './types';
import { factoryPolymorphic } from '@/core';

const css = {
  root: 'v2-label',
};

type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

const Label = factoryPolymorphic<LabelFactory>((props, ref) => {
  const {
    fz = 5,
    fw = 2,
    fh = 3,
    asText,
    component: Component = 'label',
    className,
    ...forwardedProps
  } = props;

  const classNames = clsx(
    css.root,
    `${css.root}--fz-${fz}`,
    `${css.root}--fw-${fw}`,
    `${css.root}--fh-${fh}`,
    className
  );

  return <Component {...forwardedProps} ref={ref} className={classNames} />;
});

Label.displayName = '@v2/Label';
export { Label, type LabelProps };
