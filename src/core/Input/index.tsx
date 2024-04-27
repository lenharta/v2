import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../factory';
import { Text, Label, Box } from '@/core';

export interface InputProps {
  label: { text: string; id: string };
  message: { text?: string; id: string };
}

export type InputFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: InputProps;
}>;

export const Input = factory<InputFactory>((props, ref) => {
  const { label, message, children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('input', className)}>
      {children}
      <Box>
        <Label htmlFor={label.id} children={label.text} aria-describedby={message.id} />
        {message.text && <Text id={message.id} children={message.text} />}
      </Box>
    </Box>
  );
});
