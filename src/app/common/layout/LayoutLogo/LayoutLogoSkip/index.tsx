import { Action } from '@/app/common/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Location } from 'react-router-dom';
import { createEventCallback } from '@/utils';

export interface LayoutLogoSkipProps {
  to?: string | undefined;
  style?: React.CSSProperties | undefined;
  location?: Location | undefined;
  navigate?: ((to: string) => void) | undefined;
}

export type LayoutLogoSkipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: LayoutLogoSkipProps;
}>;

export const LayoutLogoSkip = factory<LayoutLogoSkipFactory>((props, ref) => {
  const { to = 'main-content', navigate, location, style, ...otherProps } = props;

  const url = [location?.pathname, to].join('#');

  return (
    <Action
      {...otherProps}
      ref={ref}
      label="skip to main content"
      style={style}
      variant="link"
      className="layout-logo-skip"
      onClick={createEventCallback(otherProps.onClick, (event) => {
        event.stopPropagation();
        navigate?.(url);
      })}
    >
      Skip To Main
    </Action>
  );
});

LayoutLogoSkip.displayName = '@v2/LayoutLogo.Skip';
