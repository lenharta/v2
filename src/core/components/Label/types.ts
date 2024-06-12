import { Theme } from '@/types';

interface LabelProps {
  fz?: Theme.TokenFontSizeLevel | undefined;
  fw?: Theme.TokenFontWeightLevel | undefined;
  fh?: Theme.TokenFontHeightLevel | undefined;
  asText?: boolean | undefined;
  children?: React.ReactNode | undefined;
}

export type { LabelProps };
