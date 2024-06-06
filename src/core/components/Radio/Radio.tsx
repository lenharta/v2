import clsx from 'clsx';
import { Factory } from '@/types';
import { RadioProps } from './types';
import { RadioGroup } from './Group';
import { RadioIndicator } from './Indicator';
import { Box, Text, factory } from '@/core';

const css = {
  root: 'v2-radio',
  copy: 'v2-radio-copy',
  input: 'v2-radio-input',
  label: 'v2-radio-label',
  error: 'v2-radio-error',
  message: 'v2-radio-message',
};

type RadioFactory = Factory.Config<{
  comp: 'input';
  ref: HTMLInputElement;
  props: RadioProps;
  comps: {
    Group: typeof RadioGroup;
    Indicator: typeof RadioIndicator;
  };
}>;

const Radio = factory<RadioFactory>((props, ref) => {
  const { className, label, message, error, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx(css.root, className)}>
      <input className={css.input} />

      <Radio.Indicator />

      <Box className={css.copy}>
        {label && <Text className={css.label}>{label}</Text>}
        {message && <Text className={css.message}>{message}</Text>}
        {error && <Text className={css.error}>{error}</Text>}
      </Box>
    </Box>
  );
});

Radio.Group = RadioGroup;
Radio.Indicator = RadioIndicator;
Radio.displayName = '@v2/Radio';
export { Radio };
