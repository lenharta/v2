import { ElementProps, ExoticRender, ExoticComponent, Size } from '@/types';

export interface InlineInputProps extends ElementProps<'button'> {
  id: string;
  label: string;
  size?: Size;
  group?: string;
  error?: string;
  scheme?: 'primary' | 'secondary';
  disabled?: boolean;
  description?: string;
}

export interface InputLabelProps extends ElementProps<'label'> {
  ids: { input: string; label: string; description: string };
  size?: Size;
  label: string;
  error?: string;
  disabled?: boolean;
}

export interface InputDescriptionProps extends ElementProps<'p'> {
  id: string;
  size?: Size;
  error?: string;
  disabled?: boolean;
  description?: string;
}

export type InlineInputRenderType = ExoticRender<HTMLButtonElement, InlineInputProps>;
export type InlineInputComponentType = ExoticComponent<HTMLButtonElement, InlineInputProps>;
