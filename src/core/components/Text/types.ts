import { Theme } from '@/types';

interface TextProps extends Theme.TypographyProps {
  span?: boolean | undefined;
  children?: React.ReactNode | undefined;
}

export type { TextProps };
