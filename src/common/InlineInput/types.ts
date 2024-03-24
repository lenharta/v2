import { ElementProps, ExoticRender, ExoticComponent, ValidationStatus, Size } from '@/types';

export interface InlineInputTextProps extends ElementProps<'p'> {
  text?: string;
  show?: boolean;
  status?: ValidationStatus;
  keepMounted?: boolean;
}

export type InlineInputTextRenderType = ExoticRender<HTMLParagraphElement, InlineInputTextProps>;
export type InlineInputTextComponent = ExoticComponent<HTMLParagraphElement, InlineInputTextProps>;

export interface InlineInputLabelProps extends ElementProps<'label'> {
  label: string;
}
export type InlineInputLabelRenderType = ExoticRender<HTMLLabelElement, InlineInputLabelProps>;
export type InlineInputLabelComponent = ExoticComponent<HTMLLabelElement, InlineInputLabelProps>;

export interface InlineInputProps extends ElementProps<'button'> {
  elevated?: boolean;
  compact?: boolean;
  label: string;
  size?: Size;
  id?: string;
}

export type InlineInputRenderType = ExoticRender<HTMLButtonElement, InlineInputProps>;
export type InlineInputComponent = ExoticComponent<HTMLButtonElement, InlineInputProps> & {
  Label: InlineInputLabelComponent;
  Text: InlineInputTextComponent;
};
