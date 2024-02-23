import React from 'react';
import { DropdownBoxProps, useDropdownCTX } from '../context';

export const DropdownBox = React.forwardRef<HTMLDivElement, DropdownBoxProps>((props, ref) => {
  const { children, ...otherProps } = props;

  const ctx = useDropdownCTX();

  return (
    <>
      {!ctx.isOpen ? null : (
        <div {...otherProps} ref={ref} className="Dropdown-box">
          {children}
        </div>
      )}
    </>
  );
});
