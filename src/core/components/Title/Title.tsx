import clsx from 'clsx';
import { Core } from '@/types';
import { objectKeys } from '@/utils';
import { PolymorphicComponent } from '@/factory';

export type TitleFactory = Core.Factory<{
  ref: HTMLHeadingElement;
  props: Core.TitleProps;
  element: 'h2';
  excluded: 'color';
}>;

export function findComponent(props: Core.TitleElementProps) {
  const { component = 'h2', ...elementProps } = props;
  const data = objectKeys(elementProps);
  const prop = data.find((key) => elementProps[key] === true);
  return prop ? prop : component;
}

export const Title = PolymorphicComponent<TitleFactory>(
  ({ h1, h2, h3, h4, h5, h6, children, className, component, ...props }, ref) => {
    let Component = findComponent({ h1, h2, h3, h4, h5, h6, component });

    return (
      <Component {...props} ref={ref} className={clsx('v2-title', className)}>
        {children}
      </Component>
    );
  }
);

Title.displayName = '@v2/Title';
