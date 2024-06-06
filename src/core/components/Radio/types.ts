import { Theme } from '@/types';

interface RadioContext {
  orientation: Theme.Orientation;
}

interface RadioGroupProps {
  orientation?: Theme.Orientation | undefined;
}

interface RadioProps {
  label: string;
  error?: React.ReactNode | undefined;
  message?: React.ReactNode | undefined;
}

interface RadioIndicatorProps {}

export type { RadioProps, RadioContext, RadioGroupProps, RadioIndicatorProps };
