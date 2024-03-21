import { Accent, AccentLevel, Sizes } from '@/types';

declare namespace TokenFactory {
  function createSizeToken(id: string, size?: Sizes | undefined): string | undefined;
  function createAccentToken(accent: Accent | undefined, level: AccentLevel): string | undefined;
}

export const createSizeToken: typeof TokenFactory.createSizeToken = (id, size) => {
  return !size ? undefined : `var(--${id}--size-${size})`;
};

export const createAccentToken: typeof TokenFactory.createAccentToken = (accent, level) => {
  return !accent ? undefined : `var(--c-${accent}-${level})`;
};
