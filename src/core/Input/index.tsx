import clsx from 'clsx';
import { Text } from '@/core/Text';
import { Label } from '@/core/Label';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface InputProps extends Core.BaseProps {
  /** A configuration object for the child input, used to provide context for accessibility purposes. */
  input: { id: string };
  /** A configuration object for the input label. If no `text` prop is provided, the `Label` will not be rendered. */
  label: { id: string | undefined; text?: string | undefined };
  /** A configuration object for the input message. If no `text` prop is provided, the `Label` will not be rendered. */
  message: { id: string | undefined; text?: string | undefined };
}

export type InputFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: InputProps;
  omits: 'id';
}>;

export const Input = factory<InputFactory>((props, ref) => {
  const { input, label, message, className, children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx('input-layout', className)}>
      {children}

      <div className="input-inner">
        {label?.text && (
          <div className="input-labelbox">
            <Label id={label?.id} htmlFor={input.id}>
              {label?.text}
            </Label>
          </div>
        )}

        {message.text && (
          <div className="input-messagebox">
            <Text id={message.id}>{message.text}</Text>
          </div>
        )}
      </div>
    </div>
  );
});

Input.displayName = '@v2/core/Input';
