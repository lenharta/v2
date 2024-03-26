import { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Size, Alignment, Orientation, ExoticComponent, ExoticRender, ElementProps } from '@/types';

// export interface LinkStateProps {
//   active?: boolean;
//   opened?: boolean;
//   defaultActive?: string;
// }

export interface LinkContextValue {
  orientation?: Orientation;
  alignment?: Alignment;
  size?: Size;
}

export interface UnstyledLinkProps extends RouterLinkProps {}

export interface LinkProps extends UnstyledLinkProps {
  size?: Size;
  label?: React.ReactNode;
  alignment?: Alignment;
  description?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}

export interface LinkGroupProps extends ElementProps<'div'> {
  size?: Size;
  alignment?: Alignment;
  orientation?: Orientation;
}

export type UnstyledLinkRenderType = ExoticRender<HTMLAnchorElement, UnstyledLinkProps>;
export type UnstyledLinkComponentType = ExoticComponent<HTMLAnchorElement, UnstyledLinkProps>;

export type LinkRenderType = ExoticRender<HTMLAnchorElement, LinkProps>;
export type LinkComponentType = ExoticComponent<HTMLAnchorElement, LinkProps>;

export type LinkGroupRenderType = ExoticRender<HTMLDivElement, LinkGroupProps>;
export type LinkGroupComponentType = ExoticComponent<HTMLDivElement, LinkGroupProps>;
