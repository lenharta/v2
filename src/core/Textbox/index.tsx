import { Factory } from '@/types';
import { factory } from '../factory';

export interface TextboxProps {}

export type TextboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: TextboxProps;
}>;

export const Textbox = factory<TextboxFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <input {...forwardedProps} ref={ref} type="text" role="textbox" className="textbox" />;
});

Textbox.displayName = '@v2/core/Input.Textbox';
