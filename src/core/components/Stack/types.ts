import { Theme } from '@/types';

interface StackProps {
  gap?: 'unset' | Theme.SizeExpanded | undefined;
  children?: React.ReactNode | undefined;
}

export type { StackProps };
