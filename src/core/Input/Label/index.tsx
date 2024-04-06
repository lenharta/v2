import { Label } from '@/core/Label';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { InputConfiguration, InputLabelConfiguration } from '@/core/Input';

export interface InputLabelProps extends Core.BaseProps {
  /** A configuration object providing context for the input label element. */
  label: InputLabelConfiguration;
  /** A configuration object providing context for the input element. */
  input: InputConfiguration;
}

export type InputLabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: typeof Label;
  props: InputLabelProps;
  omits: 'children';
}>;

export const InputLabel = factory<InputLabelFactory>((props, ref) => {
  const { label, input, id, ...otherProps } = props;

  if (!label.text) {
    return null;
  }

  return (
    <div className="input-labelbox">
      <Label {...otherProps} ref={ref} id={label?.id} htmlFor={input.id}>
        {label?.text}
      </Label>
    </div>
  );
});

InputLabel.displayName = '@v2/core/Input.Label';
