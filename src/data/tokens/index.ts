import { 
  Align, 
  IndexLevel, 
  Justify, 
  Orientation, 
  Placement, 
  Position, 
  Scheme, 
  Size, 
  SizeCompact, 
  SizeExpanded, 
  Weight, 
} from "@/types/common";

export const DATA_TOKEN_SIZE_COMPACT: SizeCompact[] = ['sm', 'md', 'lg']; 

export const DATA_TOKEN_SIZE_STANDARD: Size[] = ['xs', 'sm', 'md', 'lg', 'xl']; 

export const DATA_TOKEN_SIZE_EXPANDED: SizeExpanded[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const DATA_TOKEN_WEIGHT: Weight[] = ['xlt', 'lgt', 'reg', 'med', 'bld', 'xbd'];

export const DATA_TOKEN_ALIGN: Align[] = ['center', 'start', 'end'];

export const DATA_TOKEN_JUSTIFY: Justify[] = ['center', 'start', 'end'];

export const DATA_TOKEN_POSITION: Position[] = ['top', 'left', 'right', 'bottom'];

export const DATA_TOKEN_PLACEMENT: Placement[] = ['bottom', 'bottom-center', 'bottom-end', 'bottom-start', 'left', 'left-center', 'left-end', 'left-start', 'right', 'right-center', 'right-end', 'right-start', 'top', 'top-center', 'top-end', 'top-start'];

export const DATA_TOKEN_ORIENTATION: Orientation[] = ['horizontal', 'vertical'];

export const DATA_TOKEN_INDEX_LEVEL: IndexLevel[] = ['app', 'modal', 'popover', 'overlay', 'max'];

export const DATA_TOKEN_SCHEME: Scheme[] = ['primary', 'secondary', 'accent'];