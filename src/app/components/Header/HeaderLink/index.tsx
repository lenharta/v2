import { cx } from '@/app/utils';
import { Logo } from '@/app/components/Logo';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { useFocusContext } from '@/app';
import { createEventCallback } from '@/utils';
import { eventCodes } from '@/data';

export interface HeaderLinkProps {
  onFocusMenu: () => void;
  onFocusSearchInput: () => void;
}

export type HeaderLinkFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: HeaderLinkProps;
}>;

export const HeaderLink = factory<HeaderLinkFactory>((props, ref) => {
  const { children, onFocusMenu, onFocusSearchInput, ...forwardedProps } = props;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const onArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusMenu();
    };

    const onArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchInput();
    };

    const events = {
      [eventCodes.ArrowLeft]: onArrowLeft,
      [eventCodes.ArrowRight]: onArrowRight,
    }[event.code];

    events?.();
  });

  return (
    <button
      {...forwardedProps}
      ref={ref}
      className={cx('header-link-logo')}
      onKeyDown={onKeyDown}
      children={<Logo />}
    />
  );
});

HeaderLink.displayName = '@v2/Header.Link';
