import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface TitleProps {
  /**
   * Specifies if the `Title` element should be rendered as an `h1` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default undefined
   */
  h1?: boolean | undefined;
  /**
   * Specifies if the `Title` element should be rendered as an `h2` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default undefined
   */
  h2?: boolean | undefined;
  /**
   * Specifies if the `Title` element should be rendered as an `h3` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default true
   */
  h3?: boolean | undefined;
  /**
   * Specifies if the `Title` element should be rendered as an `h4` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default undefined
   */
  h4?: boolean | undefined;
  /**
   * Specifies if the `Title` element should be rendered as an `h5` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default undefined
   */
  h5?: boolean | undefined;
  /**
   * Specifies if the `Title` element should be rendered as an `h6` heading.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
   * @default undefined
   */
  h6?: boolean | undefined;
  /**
   * Defines the content of the `Title`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Title` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'subtitle'
   */
  className?: string | undefined;
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
