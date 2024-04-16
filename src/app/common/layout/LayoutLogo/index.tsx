import * as React from 'react';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useOutsideClick } from '@/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutLogoSkip, LayoutLogoSkipProps } from './LayoutLogoSkip';
import { LayoutLogoLink, LayoutLogoLinkProps } from './LayoutLogoLink';

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

  const skipRef = React.useRef<HTMLButtonElement>(null);
  const [isSkipFocus, setSkipFocus] = React.useState<boolean>();

  useOutsideClick([skipRef], () => {
    setSkipFocus(undefined);
  });

  const getVisibility = (show: boolean, element: 'logo' | 'skip'): React.CSSProperties => {
    const lookup: Record<'logo' | 'skip', React.CSSProperties> = {
      logo: { visibility: show ? 'hidden' : 'visible' },
      skip: { visibility: show ? 'visible' : 'hidden' },
    };
    return lookup[element];
  };

  return (
    <Box className="layout-header-left">
      <div {...otherProps} ref={ref} className="layout-logo">
        <LayoutLogo.Link
          {...linkProps}
          style={getVisibility(isSkipFocus ? true : false, 'logo')}
          navigate={navigate}
          location={location}
          onKeyDown={(event) => {
            event.stopPropagation();
            const events = {
              Tab: () => {
                if (!isSkipFocus && !event.shiftKey) {
                  skipRef.current?.focus();
                  setSkipFocus(true);
                }
              },
            }[event.key];
            events?.();
          }}
        />

        <LayoutLogo.Skip
          {...skipProps}
          ref={skipRef}
          style={getVisibility(isSkipFocus ? true : false, 'skip')}
          navigate={navigate}
          location={location}
          onKeyDown={(event) => {
            const events = {
              Escape: () => setSkipFocus(undefined),
              Tab: () => setSkipFocus(undefined),
            }[event.key];
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
