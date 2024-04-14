import * as React from 'react';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutLogoSkip, LayoutLogoSkipProps } from './LayoutLogoSkip';
import { LayoutLogoLink, LayoutLogoLinkProps } from './LayoutLogoLink';
import { useClickOutside, useExhibit, useMergeRefs } from '@/hooks';

interface LayoutLogoProps {
  skipProps?: LayoutLogoSkipProps;
  linkProps?: LayoutLogoLinkProps;
}

export type LayoutLogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: LayoutLogoProps;
  comps: {
    Skip: typeof LayoutLogoSkip;
    Link: typeof LayoutLogoLink;
  };
}>;

export const LayoutLogo = factory<LayoutLogoFactory>((props, ref) => {
  const { skipProps, linkProps, ...otherProps } = props;

  const navigate = useNavigate();

  const location = useLocation();

  const skipLink = React.useRef<HTMLButtonElement>(null);

  const [isSkipFocus, { show, remove }] = useExhibit(false);

  const clickRef = useClickOutside<HTMLDivElement>(() => isSkipFocus && remove());

  const mergedRefs = useMergeRefs(ref, clickRef);

  return (
    <Box className="layout-header-left">
      <div {...otherProps} ref={mergedRefs} className="layout-logo">
        <LayoutLogo.Link
          {...linkProps}
          navigate={navigate}
          location={location}
          style={{ visibility: isSkipFocus ? 'hidden' : 'visible' }}
          onKeyDown={(event) => {
            event.stopPropagation();
            const shouldShow = !isSkipFocus && !event.shiftKey;
            const focusSkip = () => shouldShow && skipLink.current?.focus();
            const showSkip = () => shouldShow && show();
            const Tab = () => showSkip() && focusSkip();
            const events = { Tab }[event.key];
            events?.();
          }}
        />
        <LayoutLogo.Skip
          {...skipProps}
          navigate={navigate}
          location={location}
          style={{ visibility: isSkipFocus ? 'visible' : 'hidden' }}
          onKeyDown={(event) => {
            const Tab = () => remove();
            const Escape = () => remove();
            const events = { Tab, Escape }[event.key];
            events?.();
            // logic for skiping to first header anchor
          }}
        />
      </div>
    </Box>
  );
});

LayoutLogo.displayName = '@v2/LayoutLogo';
LayoutLogo.Skip = LayoutLogoSkip;
LayoutLogo.Link = LayoutLogoLink;
