import clsx from 'clsx';
import { ExternalLink } from './External';
import { InternalLink } from './Internal';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';

export interface LinkProps {
  /**
   * Specifies destination url for the link element, if 'type' is set to 'internal', it provides
   * the `to` prop, if `external` provides the `href` prop. @see {LinkProps.variant}
   */
  url?: string | undefined;

  /** Specifies the type and destination of the link element. @see {LinkProps.url} */
  variant?: 'internal' | 'external';

  /** Defines a index for tabbing the link element. */
  tabIndex?: number | undefined;

  /** Defines the label for the link element. */
  children?: React.ReactNode | undefined;

  /** Indicates a `disabled` state for the link element. */
  disabled?: boolean | undefined;

  /** Defines if the link element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Defines if the link element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;
}

export type LinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: LinkProps;
  omits: 'to' | 'href';
}>;

export const Link = factory<LinkFactory>((props, ref) => {
  const {
    url = '/',
    variant = 'internal',
    tabIndex,
    disabled,
    children,
    className,
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
        to={url}
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
