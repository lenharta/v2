import clsx from 'clsx';
import { Core, factory } from '@/core/factory';
import { Link, LinkProps } from 'react-router-dom';
import { useFocusIndex } from '@/core/hooks';

export interface InternalLinkProps extends LinkProps {
  /** Defines a index for tabbing the link element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the link element. */
  disabled?: boolean | undefined;

  /** Defines if the link element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Defines if the link element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;
}

export type InternalLinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  comp: typeof Link;
  props: InternalLinkProps;
}>;

export const InternalLink = factory<InternalLinkFactory>((props, ref) => {
  const {
    to = '/',
    disabled,
    tabIndex,
    children,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const focusProps = useFocusIndex({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  let accessibleProps = {
    ...focusProps,
  };

  return (
    <Link
      {...otherProps}
      {...accessibleProps}
      to={to}
      ref={ref}
      className={clsx('link', className)}
    >
      {children}
    </Link>
  );
});

InternalLink.displayName = '@v2/core/InternalLink';
