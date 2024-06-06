import { Theme } from '@/types';

interface ToggleContext {
  orientation: Theme.Orientation;
}

interface ToggleGroupProps {
  orientation?: Theme.Orientation | undefined;
}

interface ToggleProps {
  label: string;
  error?: React.ReactNode | undefined;
  message?: React.ReactNode | undefined;
}

interface ToggleIndicatorProps {}

export type { ToggleProps, ToggleContext, ToggleGroupProps, ToggleIndicatorProps };
