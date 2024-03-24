import { objectKeys } from '..';

type SurfaceType = 'accent' | 'primary' | 'secondary';
type SurfaceState = 'base' | 'disabled' | 'loading' | 'interactive';
type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;

const inverseSurfaceTypes: Record<SurfaceType, SurfaceType> = {
  accent: 'accent',
  primary: 'secondary',
  secondary: 'primary',
};

export type TokenProperty = keyof React.CSSProperties;

interface TokenProps {
  key: string | string[];
  prop: TokenProperty | TokenProperty[];
  value?: any | any[];
}

export function parseToken(config: TokenProps | TokenProps[]) {
  if (Array.isArray(config)) {
    return config.reduce(
      (prev, item) => ({
        ...prev,
      }),
      {}
    );
  }
}

const isArray = (config: any) => {
  return Array.isArray(config) ? true : false;
};

function isEqualTokenConfig(config: TokenProps) {
  const hasValidArrays = isArray(config.key) && isArray(config.prop);
  const hasValidLengths = config.key.length === config.prop.length;
  return hasValidArrays && hasValidLengths ? true : false;
}

export function createToken(props: TokenProps) {
  const isEqual = isEqualTokenConfig(props);
  return isEqual;
}

interface SurfaceProps {
  disabled?: boolean;
}

function findDisabledSurface(props: SurfaceProps) {
  const {} = props;
}

export function createSurface(props: {}) {
  const {} = props;
}
