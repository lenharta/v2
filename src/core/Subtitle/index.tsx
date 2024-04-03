import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface SubtitleProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
}

const defaultComponent = 'h3';

export type SubtitleFactory = Core.Factory<{
  ref: HTMLHeadingElement;
  comp: typeof defaultComponent;
  props: SubtitleProps;
}>;

function findComponent<T extends SubtitleProps, K extends keyof T>(props: T): K {
  const keys = Object.keys(props)! as K[];
  const search = keys.find((key) => props[key] !== undefined);
  return search !== undefined ? search : (defaultComponent as K);
}

export const Subtitle = factory<SubtitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });

  return (
    <Component {...otherProps} ref={ref} className={clsx('subtitle', className)}>
      {children}
    </Component>
  );
});

Subtitle.displayName = '@v2/core/Subtitle';
