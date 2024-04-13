import { Action } from '@/app/common/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Location } from 'react-router-dom';
import { createEventCallback } from '@/utils';

export interface LayoutLogoSkipProps {
  to?: string | undefined;
  style?: React.CSSProperties | undefined;
  navigate?: ((to: string) => void) | undefined;
  location?: Location;
}

export type LayoutLogoSkipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: LayoutLogoSkipProps;
}>;

export const LayoutLogoSkip = factory<LayoutLogoSkipFactory>((props, ref) => {
  const { to = 'main_content', navigate, location, style, ...otherProps } = props;
  const destination = [location?.pathname, to].join('#');
  return (
    <Action
      {...otherProps}
      ref={ref}
      style={style}
      variant="link"
      className="layout-logo-skip"
      aria-label="skip to main content"
      children="Skip To Main"
      onClick={createEventCallback(otherProps.onClick, (event) => {
        event.stopPropagation();
        navigate?.(destination);
      })}
    />
  );
});

LayoutLogoSkip.displayName = '@v2/LayoutLogo.Skip';
