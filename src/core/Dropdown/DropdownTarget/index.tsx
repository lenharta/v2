import clsx from 'clsx';
import { Factory } from '@/types';
import { isReactElement } from '@/utils';
import { factoryPolymorphic } from '@/core/factory';

export interface DropdownTargetProps {
  children: React.ReactElement;
  popupType?: React.AriaAttributes['aria-haspopup'] | undefined;
  withRoles?: boolean | undefined;
  refProp?: string | undefined;
}

export type DropdownTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: DropdownTargetProps;
}>;

export const DropdownTarget = factoryPolymorphic<DropdownTargetFactory>((props, ref) => {
  const {
    refProp = 'ref',
    children,
    popupType = 'dialog',
    withRoles,
    component: Component = 'button',
    ...otherProps
  } = props;

  const className = clsx(otherProps.className, children.props.className, 'dropdown-box');

  // const mergedRef = useMergeRefs(ref, ctx.reference);
  // 'aria-controls': ctx.getBoxId()
  // 'aria-expanded': ctx.isOpen,

  if (!isReactElement(children)) {
    console.error(`
      [@v2/core/Dropdown.Target]: children should be an element or component that accepts a ref. Fragments, strings, numbers are not supported.
    `);
  }

  const a11yProps = {
    'aria-haspopup': popupType,
  };

  return (
    <Component {...otherProps} {...(withRoles ? a11yProps : {})} className={className} ref={ref}>
      {children}
    </Component>
  );
});

DropdownTarget.displayName = '@v2/core/Dropdown.Box';
