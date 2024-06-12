import { Theme } from '@/types';

interface TitleElementProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
}

interface TitleProps extends TitleElementProps {
  component?: React.ElementType;
  fz?: Theme.TokenFontSizeLevel | undefined;
  fw?: Theme.TokenFontWeightLevel | undefined;
  fh?: Theme.TokenFontHeightLevel | undefined;
  clamp?: boolean | undefined;
}

export type { TitleElementProps, TitleProps };
