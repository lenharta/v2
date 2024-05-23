import { Core } from '@/types';

interface DividerProps {
  label?: React.ReactNode | undefined;
  position?: Core.Align | undefined;
  orientation?: Core.Orientation | undefined;
}

interface DividerContentProps {
  show: boolean;
  label?: React.ReactNode | undefined;
  position?: Core.Align | undefined;
  className?: string | undefined;
}

interface DividerSeparatorProps {
  className?: string | undefined;
}

export type { DividerProps, DividerContentProps, DividerSeparatorProps };
