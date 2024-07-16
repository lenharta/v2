import { FloatingProps, TransitionProps, UnstyledButtonProps } from '@/core';

interface SelectThemeProps {
  variant?:
    | 'default'
    | 'elevated'
    | 'default-accent'
    | 'elevated-accent'
    | 'tonal-accent'
    | undefined;
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

interface SelectOptionProps extends UnstyledButtonProps, SelectThemeProps {
  label: string;
  value?: string | undefined;
}

interface SelectBoxProps extends SelectThemeProps {
  children: React.ReactNode;
}

interface SelectProps extends SelectThemeProps {
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
