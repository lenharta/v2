import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { Text, Label, InlineInputProps } from '@/core';

type InlineInputFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: InlineInputProps;
}>;

const css = {
  root: 'v2-inline-input',
  layout: 'v2-inline-input-layout',
  content: 'v2-inline-input-content',
};

const InlineInput = createPolymorphicFactory<InlineInputFactory>((props, ref) => {
  const {
    error,
    label,
    message,
    checked,
    selected,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      className={clsx(css.content, className)}
      data-selected={selected}
      data-disabled={disabled}
      data-readonly={readOnly}
      data-checked={checked}
      {...forwardedProps}
    >
      <div className="v2-inline-input-layout">
        {children}
        <div className="v2-inline-input-content">
          <Label>{label}</Label>
          {error && <Text data-error={!!error}>{error}</Text>}
          {message && <Text>{message}</Text>}
        </div>
      </div>
    </div>
  );
});

InlineInput.displayName = '@v2/InlineInput';
export { InlineInput };
