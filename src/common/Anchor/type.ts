import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface AnchorProps extends ElementProps<'a'> {
  underline?: boolean;
}

export type AnchorComponentRender = ExoticRender<HTMLAnchorElement, AnchorProps>;
export type AnchorComponent = ExoticComponent<HTMLAnchorElement, AnchorProps>;
