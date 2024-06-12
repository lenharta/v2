import clsx from 'clsx';
import { Factory } from '@/types';
import { objectKeys } from '@/utils';
import { factoryPolymorphic } from '@/core';
import { TitleElementProps, TitleProps } from './types';

const css = {
  root: 'v2-title',
};

type TitleFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'h2';
  props: TitleProps;
}>;

function findComponent(props: TitleElementProps & { component?: React.ElementType }) {
  const { component, ...rest } = props;
  const elements = objectKeys(rest);
  const search = elements.find((element) => element !== undefined);
  return !search ? component! : search;
}

const Title = factoryPolymorphic<TitleFactory>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    fz = 7,
    fw = 2,
    fh = 1,
    clamp,
    className,
    component,
    ...forwardedProps
  } = props;

  const classNames = clsx(
    css.root,
    `${css.root}--fz-${fz}`,
    `${css.root}--fw-${fw}`,
    `${css.root}--fh-${fh}`,
    className
  );

  const Component = findComponent({ h1, h2, h3, h4, h5, h6, component });

  return <Component ref={ref} className={classNames} data-clamp={clamp} {...forwardedProps} />;
});

Title.displayName = '@v2/Title';
export { Title };
