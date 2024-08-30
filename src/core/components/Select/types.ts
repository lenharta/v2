import { Theme } from '@/types';
import { FloatingProps, TransitionProps, UnstyledButtonProps } from '@/core';

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

interface SelectTargetProps extends Partial<Theme.SelectProps> {
  value?: string | undefined;
  placeholder: string;
}

interface SelectOptionProps extends UnstyledButtonProps, Partial<Theme.SelectProps> {
  label: string;
  value?: string | undefined;
}

interface SelectBoxProps extends Partial<Theme.SelectProps> {
  children: React.ReactNode;
}

interface SelectProps extends Partial<Theme.SelectProps> {
  dir?: FloatingProps['dir'] | undefined;
  data: SelectItem[];
  isOpen: boolean;
  value?: string | undefined;
  label?: string | undefined;
  width?: FloatingProps['width'] | undefined;
  zIndex?: FloatingProps['zIndex'] | undefined;
  offset?: FloatingProps['offset'] | undefined;
  strategy?: FloatingProps['strategy'] | undefined;
  disabled?: FloatingProps['disabled'] | undefined;
  placement?: FloatingProps['placement'] | undefined;
  middleware?: FloatingProps['middleware'] | undefined;
  placeholder?: string | undefined;
  transitionProps?: Partial<TransitionProps>;
  placementDependencies?: FloatingProps['placementDependencies'] | undefined;
  clickOutsideIgnoreRefs?: FloatingProps['clickOutsideIgnoreRefs'] | undefined;
  closeOnClickOutside?: FloatingProps['closeOnClickOutside'] | undefined;
  closeOnOptionClick?: boolean | undefined;
  closeOnEscape?: FloatingProps['closeOnEscape'] | undefined;
  onPlacementChange?: FloatingProps['onPlacementChange'] | undefined;
  onOpenChange: (isOpen: boolean) => void;
  onChange?: ((value: string | undefined) => void) | undefined;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

export type { SelectItem, SelectProps, SelectTargetProps, SelectOptionProps, SelectBoxProps };
