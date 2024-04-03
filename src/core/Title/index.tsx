import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface TitleProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
}

const defaultComponent = 'h2';

export type TitleFactory = Core.Factory<{
  ref: HTMLHeadingElement;
  comp: typeof defaultComponent;
  props: TitleProps;
}>;

function findComponent<T extends TitleProps, K extends keyof T>(props: T): K {
  const keys = Object.keys(props)! as K[];
  const search = keys.find((key) => props[key] !== undefined);
  return search !== undefined ? search : (defaultComponent as K);
}

export const Title = factory<TitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });

  return (
    <Component {...otherProps} ref={ref} className={clsx('title', className)}>
      {children}
    </Component>
  );
});

Title.displayName = '@v2/core/Title';
