import { TransitionProps } from '@/core';

interface ToastProps extends Partial<TransitionProps> {
  mounted: boolean;
  icon?: React.ReactNode | undefined;
  text?: string | undefined;
  title?: string | undefined;
  zIndex?: number | undefined;
  offset?: { x?: number | undefined; y: number | undefined } | undefined;
  onClose?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export type { ToastProps };
