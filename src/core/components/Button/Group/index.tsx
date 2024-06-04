import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory, Box } from '@/core';
import { ButtonProvider } from '../Button.context';
import { ButtonCSS, ButtonGroupProps } from '../types';

const css: Partial<ButtonCSS> = {
  group: 'v2-button-group',
};

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = factory<ButtonGroupFactory>((props, ref) => {
  const {
    size,
    theme,
    variant,
    disabled,
    children,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getItemId = () => `button:group${uid}item`;

  return (
    <ButtonProvider value={{ orientation, size, theme, variant, getItemId }}>
      <Box
        {...forwardedProps}
        ref={ref}
        className={clsx(css.group, className)}
        aria-orientation={orientation}
        data-orientation={orientation}
      >
        {children}
      </Box>
    </ButtonProvider>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup, type ButtonGroupFactory };
