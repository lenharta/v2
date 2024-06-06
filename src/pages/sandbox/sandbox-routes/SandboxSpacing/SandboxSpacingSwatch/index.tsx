import clsx from 'clsx';
import { Box } from '@/core';
import { Theme } from '@/types';

const css = {
  swatch: 'v2-token-table-swatch',
};

interface SandboxSpacingSwatchProps {
  level?: Theme.Value16;
}

const SandboxSpacingSwatch = (props: SandboxSpacingSwatchProps) => {
  const { level = 1 } = props;
  return (
    <Box
      className={clsx(css.swatch)}
      style={{
        height: `var(--s-${level})`,
        width: `var(--s-${level})`,
      }}
    />
  );
};

export { SandboxSpacingSwatch };
