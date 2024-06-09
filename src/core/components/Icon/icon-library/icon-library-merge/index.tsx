import { ICON_MAP_ARROW_FILL, ICON_MAP_ARROW_OUTLINE } from '../icon-library-arrow';
import { ICON_MAP_COMPONENT_FILL, ICON_MAP_COMPONENT_OUTLINE } from '../icon-library-component';
import { ICON_MAP_FILE_FILL, ICON_MAP_FILE_OUTLINE } from '../icon-library-file';
import { ICON_MAP_OBJECT_FILL, ICON_MAP_OBJECT_OUTLINE } from '../icon-library-object';
import { ICON_MAP_SHAPE_FILL, ICON_MAP_SHAPE_OUTLINE } from '../icon-library-shape';
import { ICON_MAP_SYMBOL_FILL, ICON_MAP_SYMBOL_OUTLINE } from '../icon-library-symbol';
import { ICON_MAP_TYPOGRAPHY_FILL, ICON_MAP_TYPOGRAPHY_OUTLINE } from '../icon-library-typography';

const ICON_MAP = {
  outline: {
    ...ICON_MAP_ARROW_OUTLINE,
    ...ICON_MAP_COMPONENT_OUTLINE,
    ...ICON_MAP_FILE_OUTLINE,
    ...ICON_MAP_OBJECT_OUTLINE,
    ...ICON_MAP_SHAPE_OUTLINE,
    ...ICON_MAP_SYMBOL_OUTLINE,
    ...ICON_MAP_TYPOGRAPHY_OUTLINE,
  },
  fill: {
    ...ICON_MAP_ARROW_FILL,
    ...ICON_MAP_COMPONENT_FILL,
    ...ICON_MAP_FILE_FILL,
    ...ICON_MAP_OBJECT_FILL,
    ...ICON_MAP_SHAPE_FILL,
    ...ICON_MAP_SYMBOL_FILL,
    ...ICON_MAP_TYPOGRAPHY_FILL,
  },
};

export { ICON_MAP };
