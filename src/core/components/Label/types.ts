import { Theme } from '@types';

interface LabelThemeProps extends Theme.TypographyProps {
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

interface LabelProps extends LabelThemeProps {}

export type { LabelProps };
