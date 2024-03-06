import * as React from 'react';
import { useMergeRefs } from '@/hooks';
import { useDropdownCTX } from '../context';

export type DropdownBoxElementProps = React.ComponentPropsWithoutRef<'div'>;
export type DropdownBoxAttributeProps = React.RefAttributes<HTMLDivElement>;
export type DropdownBoxBaseProps = DropdownBoxElementProps & DropdownBoxAttributeProps;

export interface DropdownBoxProps extends DropdownBoxBaseProps {}

export const _DropdownBox = (props: DropdownBoxProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { children, ...otherProps } = props;

  const ctx = useDropdownCTX();
  const refs = useMergeRefs(ctx.boxRef, ref);

  if (!ctx.isOpen) return null;

  return (
    <div {...otherProps} className="Dropdown-box" role="listbox" ref={refs}>
      {children}
    </div>
  );
};

export type DropdownBoxComponent = React.ForwardRefExoticComponent<DropdownBoxProps>;
export const DropdownBox = React.forwardRef(_DropdownBox) as DropdownBoxComponent;
DropdownBox.displayName = '@v2/Dropdown.Box';
