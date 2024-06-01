import { Core } from '@/types';

interface RadioContext {
  orientation: Core.Orientation;
}

interface RadioGroupProps {
  orientation?: Core.Orientation | undefined;
}

interface RadioProps {
  label: string;
  description?: React.ReactNode | undefined;
  error?: React.ReactNode | undefined;
}

interface RadioIndicatorProps {}

export type { RadioProps, RadioContext, RadioGroupProps, RadioIndicatorProps };
