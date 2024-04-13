import { Action } from '@/app/common/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Location } from 'react-router-dom';
import { createEventCallback } from '@/utils';

export interface LayoutLogoLinkProps {
  to?: string | undefined;
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  navigate?: ((to: string) => void) | undefined;
  location?: Location;
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
      variant="link"
      className="layout-logo-link"
      aria-label="site logo"
      children={label}
      ref={ref}
      onClick={createEventCallback(otherProps.onClick, (event) => {
        event.stopPropagation();
        navigate?.(to);
      })}
    />
  );
});

LayoutLogoLink.displayName = '@v2/LayoutLogo.Link';
