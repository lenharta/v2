import clsx from 'clsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useStore, useThemeCTX } from '@/store';
import { ToolButton } from '@/common';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

export interface HamburgerProps {}

const Hamburger = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<gsap.core.Timeline>();

  const store = useStore();
  const dispatch = useDispatch();

  const createSliceMotion = (index: number, open?: boolean): gsap.TweenVars => {
    if (index === 1) {
      const y = open ? 6 : 0;
      const rotate = open ? 45 : 0;
      const duration = 0.2;
      return { ease: 'power5.inOut', y, duration, rotate };
    }
    if (index === 2) {
      const x = open ? 100 : 0;
      const opacity = open ? 0 : 1;
      const duration = 0.2;
      return { ease: 'power5.inOut', x, duration, opacity };
    }
    if (index === 3) {
      const y = open ? -6 : 0;
      const rotate = open ? -45 : 0;
      const duration = 0.2;
      return { ease: 'power5.inOut', y, duration, rotate };
    }
    return {};
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to('.slice-2', createSliceMotion(2, store.menuOpen))
        .to('.slice-1', createSliceMotion(1, store.menuOpen))
        .to('.slice-3', createSliceMotion(3, store.menuOpen));
    },
    { scope: container, dependencies: [store.menuOpen] }
  );

  const handleClick = () => {
    dispatch({ menuOpen: !store.menuOpen });
    return tl.current?.play();
  };

  return (
    <div ref={container} onClick={handleClick} className="Page-hamburger">
      <div className="slice slice-1" />
      <div className="slice slice-2" />
      <div className="slice slice-3" />
    </div>
  );
};

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;

  const theme = useThemeCTX();
  const navigate = useNavigate();

  const clxss = clsx('Page-header', className);

  return (
    <header {...otherProps} className={clxss} ref={ref}>
      <nav className="Page-nav">
        <div className="primary">
          <ToolButton
            size="sm"
            icon="code"
            label="navigate to home"
            onChange={(value) => navigate(value as string)}
            scheme="default"
            value="/"
          />
        </div>
        <div className="primary">
          <Hamburger />
          {/* <ToolButton
            size="sm"
            icon="person"
            label="navigate to home"
            onChange={(value) => navigate(value as string)}
            scheme="default"
            value="/"
          /> */}
        </div>
      </nav>
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
