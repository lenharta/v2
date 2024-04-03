import { ElementProps, ExoticRender, ExoticComponent, Size7 } from '@/types';

export interface InlineInputProps extends ElementProps<'button'> {
  id: string;
  label: string;
  size?: Size7;
  group?: string;
  error?: string;
  scheme?: 'primary' | 'secondary';
  disabled?: boolean;
  description?: string;
}

export interface InputLabelProps extends ElementProps<'label'> {
  ids: { input: string; label: string; description: string };
  size?: Size7;
  label: string;
  error?: string;
  disabled?: boolean;
}

export interface InputDescriptionProps extends ElementProps<'p'> {
  id: string;
  size?: Size7;
  error?: string;
  disabled?: boolean;
  description?: string;
}

export type InlineInputRenderType = ExoticRender<HTMLButtonElement, InlineInputProps>;
export type InlineInputComponentType = ExoticComponent<HTMLButtonElement, InlineInputProps>;
