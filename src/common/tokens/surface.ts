import { objectKeys } from '@/utils';
import { SurfaceConfig, SurfaceToken } from '@/types';

const DEFAULT_SURFACE: SurfaceConfig = {
  type: 'primary',
  state: 'base',
  level: 0,
};

export function createSurfaceToken(config?: Partial<SurfaceConfig> | undefined): SurfaceToken {
  const merge = { ...DEFAULT_SURFACE, ...config } as SurfaceConfig;
  const mods = objectKeys(merge).reduce((prev, key) => prev + `-${merge[key]}`, '');
  return ['surface', mods].join('') as SurfaceToken;
}
