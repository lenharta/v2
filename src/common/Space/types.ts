import { ElementProps, SizeExpanded } from '@/types';

export interface SpaceProps extends Omit<ElementProps<'div'>, 'children'> {
  size?: SizeExpanded;
}

export type SpaceComponent = React.FC<SpaceProps>;
