export type SurfaceVariant = 'primary' | 'secondary';
export type SurfaceState = 'base' | 'interactive' | 'disabled' | 'loading';
export type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;
export type SurfaceType = `${SurfaceVariant}-${SurfaceLevel}`;
export type SurfaceKey = `${SurfaceVariant}-${SurfaceState}-${SurfaceLevel}`;

export interface SurfaceConfig {
  type: SurfaceType;
  state: SurfaceState;
  disabled?: boolean;
  elevated?: boolean;
}

const MAX_SURFACE_LEVEL = 4;

const DEFAULT_SURFACE_CONFIG: SurfaceConfig = {
  state: 'base',
  type: 'primary-0',
};

type ExtractedSurfaceData = [SurfaceVariant, number];
type ExtractedSurfaceProps = { variant: SurfaceVariant; level: number };

function extractSurfaceType(type: SurfaceType): ExtractedSurfaceProps {
  const data = type.split('-') as ExtractedSurfaceData;
  return { variant: data[0], level: Number(data[1]) };
}

function mergeSurface(defaultProps: SurfaceConfig, props: Partial<SurfaceConfig>): SurfaceConfig {
  return {
    ...props,
    state: props.state || defaultProps.state,
    type: props.type || defaultProps.type,
  };
}

function parseSurfaceProps(props: SurfaceConfig): SurfaceKey {
  let { level, variant } = extractSurfaceType(props.type);

  if (props.disabled) {
    props.state = 'disabled';
  }
  if (level <= MAX_SURFACE_LEVEL && props.elevated) {
    level = level + 1;
  }
  if (level > MAX_SURFACE_LEVEL) {
    console.error(`[@v2/create-surface]: Max surface level (${MAX_SURFACE_LEVEL}) exceeded.`);
  }
  return [variant, props.state, level].join('-') as SurfaceKey;
}

export function createSurface(props: Partial<SurfaceConfig>): SurfaceKey {
  const mergedProps = mergeSurface(DEFAULT_SURFACE_CONFIG, props);
  return parseSurfaceProps(mergedProps);
}
