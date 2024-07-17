import { Theme } from '@types';

interface TextProps extends Theme.TypographyProps {
  span?: boolean | undefined;
  children?: React.ReactNode | undefined;
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

export type { TextProps };
