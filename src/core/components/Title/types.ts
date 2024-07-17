import { Theme } from '@types';

interface TitleProps extends Theme.TypographyProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
  variant?:
    | 'base-min'
    | 'base-low'
    | 'base-med'
    | 'base-max'
    | 'accent-min'
    | 'accent-low'
    | 'accent-med'
    | 'accent-max'
    | undefined;
}

export type { TitleProps };
