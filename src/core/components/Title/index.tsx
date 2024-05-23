import clsx from 'clsx';
import { Factory } from '@/types';
import { objectKeys } from '@/utils';
import { factoryPolymorphic } from '@/core/factory';

interface TitleComponentProp {
  component?: React.ElementType;
}

interface TitleElementProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
}

interface TitleProps extends TitleElementProps {}

type TitleFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'h2';
  props: TitleProps;
}>;

function findComponent(props: TitleElementProps & TitleComponentProp) {
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
export { Title, type TitleProps };
