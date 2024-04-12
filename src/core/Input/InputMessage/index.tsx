import { Text } from '@/core/Text';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { InputConfiguration, InputMessageConfiguration } from '@/core/Input';

export interface InputMessageProps extends Core.BaseProps {
  /** A configuration object providing context for the input message element. */
  message: InputMessageConfiguration;

  /** A configuration object providing context for the input element. */
  input: InputConfiguration;
}

export type InputMessageFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: typeof Text;
  props: InputMessageProps;
  omits: 'children';
}>;

export const InputMessage = factory<InputMessageFactory>((props, ref) => {
  const { id, message, ...otherProps } = props;

  if (!message.text) {
    return null;
  }

  return (
    <div className="input-messagebox">
      <Text {...otherProps} ref={ref} id={message.id}>
        {message.text}
      </Text>
    </div>
  );
});

InputMessage.displayName = '@v2/core/Input.Message';
