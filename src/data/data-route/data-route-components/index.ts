import { ROUTE_MAP_COMPONENTS_BUTTONS } from './data-tunnel-buttons';
import { ROUTE_MAP_COMPONENTS_COLLECTIONS } from './data-tunnel-collections';
import { ROUTE_MAP_COMPONENTS_FEEDBACK } from './data-tunnel-feedback';
import { ROUTE_MAP_COMPONENTS_INPUTS } from './data-tunnel-inputs';
import { ROUTE_MAP_COMPONENTS_LAYOUTS } from './data-tunnel-layouts';
import { ROUTE_MAP_COMPONENTS_MISCELLANEOUS } from './data-tunnel-miscellaneous';
import { ROUTE_MAP_COMPONENTS_NAVIGATION } from './data-tunnel-navigation';
import { ROUTE_MAP_COMPONENTS_OVERLAYS } from './data-tunnel-overlays';

const ROUTE_MAP_COMPONENTS = {
  id: 'route:components',
  path: '/components',
  icon: 'document',
  pages: [
    ROUTE_MAP_COMPONENTS_BUTTONS,
    ROUTE_MAP_COMPONENTS_COLLECTIONS,
    ROUTE_MAP_COMPONENTS_FEEDBACK,
    ROUTE_MAP_COMPONENTS_INPUTS,
    ROUTE_MAP_COMPONENTS_LAYOUTS,
    ROUTE_MAP_COMPONENTS_MISCELLANEOUS,
    ROUTE_MAP_COMPONENTS_NAVIGATION,
    ROUTE_MAP_COMPONENTS_OVERLAYS,
  ],
};

export { ROUTE_MAP_COMPONENTS };
