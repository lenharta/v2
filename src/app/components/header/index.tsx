import clsx from 'clsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSkipTo } from './HeaderSkipTo';
import { HeaderComponentType, HeaderRenderType } from './types';

const HeaderRender: HeaderRenderType = (props, ref) => {
  const { children, className, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div {...otherProps} ref={ref} className={clsx('header', className)}>
      <div className="left-content">
        <HeaderSkipTo show={true} navigate={navigate} />
        <HeaderLogo navigate={navigate} />
      </div>
    </div>
  );
};

export const Header = React.forwardRef(HeaderRender) as HeaderComponentType;
Header.displayName = '@v2/Header';
