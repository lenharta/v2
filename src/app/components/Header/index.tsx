import React from 'react';
import { cx } from '@/app/utils';
import { Search } from '../Search';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { HeaderLink } from './HeaderLink';
import { HeaderSkip } from './HeaderSkip';
import { HeaderSpacer } from './HeaderSpacer';
import { useFocusContext } from '@/app';

export interface HeaderProps {}

type HeaderFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  omits: 'children';
  props: HeaderProps;
  comps: {
    Link: typeof HeaderLink;
    Skip: typeof HeaderSkip;
    Spacer: typeof HeaderSpacer;
    Search: typeof Search;
  };
}>;

type HeaderActiveState = 'link' | 'skip';

export const Header = factory<HeaderFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  const focusCTX = useFocusContext();
  const [active] = React.useState<HeaderActiveState>('link');

  return (
    <header {...forwardedProps} ref={ref} className={cx('header')}>
      <span className={cx('header-inner')}>
        {active === 'link' && (
          <Header.Link
            ref={focusCTX.headerRef}
            onFocusMenu={focusCTX.onFocusMenu}
            onFocusSearchInput={focusCTX.onFocusSearchInput}
          />
        )}
        {active === 'skip' && <Header.Skip />}
        <Header.Search />
      </span>
    </header>
  );
});

Header.displayName = '@v2/Header';
Header.Link = HeaderLink;
Header.Skip = HeaderSkip;
Header.Spacer = HeaderSpacer;
Header.Search = Search;
