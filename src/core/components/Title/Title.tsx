import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { TitleProps } from './types';
import { objectKeys } from '@/utils';

type TitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: 'h3';
  props: TitleProps;
  omits: 'color';
}>;

type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleElementProps = { [K in TitleElement]?: boolean | undefined } & {
  component?: React.ElementType | undefined;
};

function findComponent(props: TitleElementProps) {
  const { component = 'h2', ...elementProps } = props;
  const data = objectKeys(elementProps);
  const prop = data.find((key) => elementProps[key] === true);
  return prop ? prop : component;
}

const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, component, ...forwardedProps } = props;

  let Component = findComponent({ h1, h2, h3, h4, h5, h6, component });

  return (
    <Component ref={ref} className={clsx('v2-title', className)} {...forwardedProps}>
      {children}
    </Component>
  );
});

Title.displayName = '@v2/Title';
export { Title };
