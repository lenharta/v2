import clsx from 'clsx';
import { Factory } from '@/types';
import { objectKeys } from '@/utils';
import { factoryPolymorphic } from '@/core';
import { TitleElementProps, TitleProps } from './types';

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
  const { h1, h2, h3, h4, h5, h6, className, component, ...forwardedProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6, component });
  return <Component {...forwardedProps} ref={ref} className={clsx('v2-title', className)} />;
});

Title.displayName = '@v2/Title';
export { Title };
