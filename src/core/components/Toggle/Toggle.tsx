import clsx from 'clsx';
import { Factory } from '@/types';
import { ToggleProps } from './types';
import { ToggleGroup } from './Group';
import { Box, Text, factory } from '@/core';

const css = {
  root: 'v2-toggle',
  copy: 'v2-toggle-copy',
  input: 'v2-toggle-input',
  label: 'v2-toggle-label',
  error: 'v2-toggle-error',
  message: 'v2-toggle-message',
};

type ToggleFactory = Factory.Config<{
  comp: 'input';
  ref: HTMLInputElement;
  props: ToggleProps;
  comps: {
    Group: typeof ToggleGroup;
  };
}>;

const Toggle = factory<ToggleFactory>((props, ref) => {
  const { className, label, message, error, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx(css.root, className)}>
      <input className={css.input} />

      <Box className={css.copy}>
        {label && <Text className={css.label}>{label}</Text>}
        {message && <Text className={css.message}>{message}</Text>}
        {error && <Text className={css.error}>{error}</Text>}
      </Box>
    </Box>
  );
});

Toggle.Group = ToggleGroup;
Toggle.displayName = '@v2/Toggle';
export { Toggle };
