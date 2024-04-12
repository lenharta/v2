import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { InputMessage } from './InputMessage';
import { InputLabel } from './InputLabel';

export interface InputConfiguration {
  /** A unique identifier for the input. */
  id: string;
}

export interface InputLabelConfiguration {
  /** A unique identifier for the input message. */
  id: string | undefined;

  /** Defines the content of the input message, If not provided, no message is rendered. */
  text?: string | undefined;
}

export interface InputMessageConfiguration {
  /** A unique identifier for the input message. */
  id: string | undefined;

  /** Defines the content of the input message, If not provided, no message is rendered. */
  text?: string | undefined;
}

export interface InputProps extends Core.BaseProps {
  /** A configuration object providing context for the input element */
  input: InputConfiguration;

  /** A configuration object providing context for the input label element. */
  label: InputLabelConfiguration;

  /** A configuration object providing context for the input message element. */
  message: InputLabelConfiguration;
}

export type InputFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: InputProps;
  omits: 'id';
  comps: {
    Label: typeof InputLabel;
    Message: typeof InputMessage;
  };
}>;

export const Input = factory<InputFactory>((props, ref) => {
  const { input, label, message, className, children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx('input-layout', className)}>
      {children}
      <div className="input-inner">
        <Input.Label input={input} label={label} />
        <Input.Message input={input} message={message} />
      </div>
    </div>
  );
});

Input.displayName = '@v2/core/Input';
