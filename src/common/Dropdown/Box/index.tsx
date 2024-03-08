import * as React from 'react';
import { useMergeRefs } from '@/hooks';
import { useDropdownCTX } from '../context';

type DropdownBoxElementProps = React.ComponentPropsWithoutRef<'div'>;
type DropdownBoxAttributeProps = React.RefAttributes<HTMLDivElement>;
type DropdownBoxBaseProps = DropdownBoxElementProps & DropdownBoxAttributeProps;

export interface DropdownBoxProps extends DropdownBoxBaseProps {}

export const _DropdownBox = (props: DropdownBoxProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { children, ...otherProps } = props;

  const ctx = useDropdownCTX();
  const refs = useMergeRefs(ctx.boxRef, ref);

  if (!ctx.isOpen) return null;

  return (
    <div {...otherProps} className="dropdown-box" role="listbox" ref={refs}>
      {children}
    </div>
  );
};

export type DropdownBoxComponent = React.ForwardRefExoticComponent<DropdownBoxProps>;
export const DropdownBox = React.forwardRef(_DropdownBox) as DropdownBoxComponent;
DropdownBox.displayName = '@v2/Dropdown.Box';
