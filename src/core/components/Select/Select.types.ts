import { FloatingProps, TransitionProps } from '@/core';
import { Theme } from '@/types';

interface SelectThemeProps {
  size?: Theme.SizeCompact | undefined;
  variant?: 'default' | 'default-elevated' | undefined;
}

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

interface SelectTargetProps extends SelectThemeProps {
  value?: string | undefined;
  placeholder: string;
}

interface SelectOptionProps extends SelectThemeProps {
  label: string;
  value?: string | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
}

interface SelectBoxProps extends SelectThemeProps {
  children: React.ReactNode;
}

interface SelectProps extends SelectThemeProps {
  dir?: FloatingProps['dir'] | undefined;
  data: SelectItem[];
  isOpen: boolean;
  value?: string | undefined;
  width?: FloatingProps['width'] | undefined;
  zIndex?: FloatingProps['zIndex'] | undefined;
  offset?: FloatingProps['offset'] | undefined;
  variant?: 'default' | 'default-elevated' | undefined;
  strategy?: FloatingProps['strategy'] | undefined;
  disabled?: FloatingProps['disabled'] | undefined;
  placement?: FloatingProps['placement'] | undefined;
  middleware?: FloatingProps['middleware'] | undefined;
  placeholder?: string | undefined;
  transitionProps?: Partial<TransitionProps>;
  placementDependencies?: FloatingProps['placementDependencies'] | undefined;
  clickOutsideIgnoreRefs?: FloatingProps['clickOutsideIgnoreRefs'] | undefined;
  closeOnClickOutside?: FloatingProps['closeOnClickOutside'] | undefined;
  closeOnEscape?: FloatingProps['closeOnEscape'] | undefined;
  onPlacementChange?: FloatingProps['onPlacementChange'] | undefined;
  onOpenChange: (isOpen: boolean) => void;
  onChange?: ((value: string | undefined) => void) | undefined;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

export type { SelectItem, SelectProps, SelectTargetProps, SelectOptionProps, SelectBoxProps };
