import React from 'react';

const ICON_MAP_SHAPES_SHARED = {
  ['shape-circle-half']: (
    <React.Fragment>
      <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
    </React.Fragment>
  ),
  ['shape-square-half']: (
    <React.Fragment>
      <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
    </React.Fragment>
  ),
  ['shape-triangle-half']: <React.Fragment></React.Fragment>,
  ['shape-heptagon-half']: <React.Fragment></React.Fragment>,
  ['shape-hexagon-half']: <React.Fragment></React.Fragment>,
  ['shape-diamond-half']: <React.Fragment></React.Fragment>,
  ['shape-heart-half']: <React.Fragment></React.Fragment>,
  ['shape-octagon-half']: <React.Fragment></React.Fragment>,
  ['shape-pentagon-half']: <React.Fragment></React.Fragment>,
};

export const ICON_MAP_SHAPES_FILLED = {
  ...ICON_MAP_SHAPES_SHARED,
  ['shape-circle']: (
    <React.Fragment>
      <circle cx="8" cy="8" r="8" />
    </React.Fragment>
  ),
  ['shape-square']: (
    <React.Fragment>
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
    </React.Fragment>
  ),
  ['shape-triangle']: <React.Fragment></React.Fragment>,
  ['shape-heptagon']: <React.Fragment></React.Fragment>,
  ['shape-hexagon']: <React.Fragment></React.Fragment>,
  ['shape-diamond']: <React.Fragment></React.Fragment>,
  ['shape-heart']: <React.Fragment></React.Fragment>,
  ['shape-octagon']: <React.Fragment></React.Fragment>,
  ['shape-pentagon']: <React.Fragment></React.Fragment>,
};

export const ICON_MAP_SHAPES_OUTLINED = {
  ...ICON_MAP_SHAPES_SHARED,
  ['shape-circle']: (
    <React.Fragment>
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    </React.Fragment>
  ),
  ['shape-square']: (
    <React.Fragment>
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </React.Fragment>
  ),
  ['shape-triangle']: <React.Fragment></React.Fragment>,
  ['shape-heptagon']: <React.Fragment></React.Fragment>,
  ['shape-hexagon']: <React.Fragment></React.Fragment>,
  ['shape-diamond']: <React.Fragment></React.Fragment>,
  ['shape-heart']: <React.Fragment></React.Fragment>,
  ['shape-octagon']: <React.Fragment></React.Fragment>,
  ['shape-pentagon']: <React.Fragment></React.Fragment>,
};
