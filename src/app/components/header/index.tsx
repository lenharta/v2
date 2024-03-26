import clsx from 'clsx';
import * as React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSkipTo } from './HeaderSkipTo';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderComponentType, HeaderRenderType } from './types';

const HeaderRender: HeaderRenderType = (props, ref) => {
  const { children, className, ...otherProps } = props;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div {...otherProps} ref={ref} className={clsx('header', className)}>
      <div className="left-content">
        <HeaderLogo navigate={navigate} location={location} />
        <HeaderSkipTo show={true} navigate={navigate} location={location} />
      </div>
    </div>
  );
};

export const Header = React.forwardRef(HeaderRender) as HeaderComponentType;
Header.displayName = '@v2/Header';
