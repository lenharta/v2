import clsx from 'clsx';
import { ExternalLink } from './External';
import { InternalLink } from './Internal';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';

export interface LinkProps {
  /**
   * Defines a unique global identifier for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   * @default undefined
   */
  id?: string | undefined;
  /**
   * - Specifies the destination `url` for the `Link`.
   * - If the `variant` property is set to `internal` the url is passed to the `InternalLink.to` property.
   * - If the `variant` property is set to `external` the url is passed to the `ExternalLink.href` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
   * @see https://reactrouter.com/en/main/components/link
   * @see {LinkProps.variant}
   */
  url: string | undefined;
  /**
   * Defines the inline style object of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
   * @default undefined
   */
  style?: React.CSSProperties | undefined;
  /**
   * - Specifies the intention of the `Link` destination.
   * - If provided `internal`, the `InternalLink` is rendered and provided a `to` property.
   * - If provided `external`, the `ExternalLink` is rendered and provided a `href` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
   * @see https://reactrouter.com/en/main/components/link
   * @see {LinkProps.url}
   */
  variant?: 'internal' | 'external';
  /**
   * Specifies a index for the `Link` tab order, if provided any other focusable props are ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  tabIndex?: number | undefined;
  /**
   * Indicates a `disabled` state for the `Link`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Specifies if the element should be ignored in the current tab order.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  excludeTabOrder?: boolean | undefined;
  /**
   * Defines if the element should be focused when `disabled` state is provided.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  allowDisabledFocus?: boolean | undefined;
  /**
   * Defines the content of the `Link`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Link` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
  /**
   * Specifies a shorthand CSS property that sets the appearance of decorative lines on the `Link`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
   * @default 'never'
   */
  underline?: 'always' | 'hover' | 'never' | undefined;
}

export type LinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: LinkProps;
  omits: 'to' | 'href';
}>;

export const Link = factory<LinkFactory>((props, ref) => {
  const {
    url,
    style,
    variant = 'internal',
    tabIndex,
    disabled,
    children,
    className,
    underline = 'never',
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const focusProps = useFocusIndex({
    disabled,
    tabIndex,
    excludeTabOrder,
    allowDisabledFocus,
  });

  let isInternal = variant !== 'external';

  let accessibleProps = {
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(!!(typeof children === 'string') ? { 'aria-label': children } : {}),
    ...(!!otherProps['aria-label'] ? { 'aria-label': otherProps['aria-label'] } : {}),
  };

  console.log(!!(typeof children === 'string'));

  if (isInternal) {
    return (
      <InternalLink
        {...otherProps}
        {...focusProps}
        {...accessibleProps}
        to={url ?? '/'}
        ref={ref}
        className={clsx('link link-internal', className)}
      >
        {children}
      </InternalLink>
    );
  }

  return (
    <ExternalLink
      {...otherProps}
      {...focusProps}
      {...accessibleProps}
      ref={ref}
      href={url}
      className={clsx('link link-external', className)}
    >
      {children}
    </ExternalLink>
  );
});
