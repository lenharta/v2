import React from 'react';
import { Logo } from '@/app/common/logo';
import { Action } from '@/app/common/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Location } from 'react-router-dom';
import { createEventCallback } from '@/utils';

export interface LayoutLogoLinkProps {
  to?: string | undefined;
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  location?: Location | undefined;
  navigate?: ((to: string) => void) | undefined;
}

export type LayoutLogoLinkFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: LayoutLogoLinkProps;
}>;

export const LayoutLogoLink = factory<LayoutLogoLinkFactory>((props, ref) => {
  const { label = 'Logo Link', navigate, to = '/', ...otherProps } = props;
  return (
    <Action
      {...otherProps}
      ref={ref}
      variant="link"
      label="Andrew Lenhart"
      aria-label="site logo"
      className="layout-logo-link"
      onClick={createEventCallback(otherProps.onClick, (event) => {
        event.stopPropagation();
        navigate && navigate(to);
      })}
    >
      <Logo />
    </Action>
  );
});

LayoutLogoLink.displayName = '@v2/LayoutLogo.Link';
