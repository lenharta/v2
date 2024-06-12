import { Store } from '@/types';
import { IconProps } from './Icon.types';
import { createToken } from '@/core/utils';

function getStoreAccentIconProps(accent: Store.State['accent']): IconProps {
  return {
    name: 'shape-circle',
    style: { fill: createToken(`c-${accent}-A800`) },
  };
}

function getStoreDirIconProps(dir: Store.State['dir']): IconProps {
  if (dir === 'ltr') return { name: 'text-left' };
  return { name: 'text-right' };
}

function getStoreModeIconProps(mode: Store.State['mode']): IconProps {
  if (mode === 'dark') return { name: 'mode-dark' };
  if (mode === 'dim') return { name: 'mode-dim' };
  return { name: 'mode-light' };
}

export { getStoreAccentIconProps, getStoreDirIconProps, getStoreModeIconProps };
