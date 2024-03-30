import clsx from 'clsx';
import * as React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSkipTo } from './HeaderSkipTo';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderComponentType, HeaderRenderType } from './types';

const HeaderRender: HeaderRenderType = (props, ref) => {
  const { children, className, ...otherProps } = props;
  const [showSkip, setShowSkip] = React.useState<boolean>();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header {...otherProps} ref={ref} className={clsx('page-header', className)}>
      <nav className="page-header-content">
        <div className="page-header-content--left">
          <HeaderLogo
            navigate={navigate}
            location={location}
            onKeyDown={(event) => {
              if (!showSkip && event.key === 'Tab' && !event.shiftKey) {
                setShowSkip(true);
              }
            }}
          />
          <HeaderSkipTo
            show={showSkip}
            location={location}
            onKeyDown={(event) => {
              if (showSkip && event.shiftKey && event.key === 'Tab') {
                setShowSkip(undefined);
              }
              if (showSkip && event.key === 'Tab') {
                setShowSkip(undefined);
              }
            }}
          />
        </div>

        <div className="page-header-content--right"></div>
      </nav>
    </header>
  );
};

export const Header = React.forwardRef(HeaderRender) as HeaderComponentType;
Header.displayName = '@v2/Header';
