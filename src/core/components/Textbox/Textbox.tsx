import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';
import { TextboxProps } from './types';

const css = {
  root: 'v2-textbox',
};

type TextboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: TextboxProps;
}>;

const Textbox = factory<TextboxFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return <input {...forwardedProps} ref={ref} type="text" className={clsx(css.root, className)} />;
});

Textbox.displayName = '@v2/Textbox';
export { Textbox };
