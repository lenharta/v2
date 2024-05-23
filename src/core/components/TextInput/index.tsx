import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

interface TextInputProps {}

type TextInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: TextInputProps;
}>;

const TextInput = factory<TextInputFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <input
      {...forwardedProps}
      className={clsx('v2-text-input', className)}
      role="textbox"
      type="text"
      ref={ref}
    />
  );
});

TextInput.displayName = '@v2/TextInput';
export { TextInput, type TextInputProps };
