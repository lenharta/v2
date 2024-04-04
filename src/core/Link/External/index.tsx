import { Core, factory } from '@/core/factory';

export interface ExternalLinkProps {
  /**
   * Defines a unique global identifier for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   * @default undefined
   */
  id?: string | undefined;
  /**
   * Specifies the destination `url` for the `ExternalLink`.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
   * @default undefined
   */
  href?: string | undefined;
  /**
   * Defines the inline style object of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
   * @default undefined
   */
  style?: React.CSSProperties | undefined;
  /**
   * Defines the content of the `Link`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
}

export type ExternalLinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: ExternalLinkProps;
}>;

export const ExternalLink = factory((props, ref) => {
  const { children, id, href, style, ...otherProps } = props;
  return (
    <a {...otherProps} id={id} ref={ref} href={href} style={style}>
      {children}
    </a>
  );
});

ExternalLink.displayName = '@v2/core/ExternalLink';
