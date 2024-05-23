import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

interface TextboxProps {}

type TextboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: TextboxProps;
}>;

const Textbox = factory<TextboxFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <input {...forwardedProps} ref={ref} type="text" className={clsx('v2-textbox', className)} />
  );
});

Textbox.displayName = '@v2/Textbox';
export { Textbox, type TextboxProps };
