import clsx from 'clsx';
import { Core } from '@/types';
import { Text, Label } from '@/core';
import { PolymorphicComponent } from '@/factory';

export type InlineInputFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.InlineInputProps;
  element: 'div';
}>;

export const InlineInput = PolymorphicComponent<InlineInputFactory>((props, ref) => {
  const {
    label,
    error,
    status,
    message,
    children,
    className,
    isLoading,
    isDisabled,
    isReadonly,
    component: Component = 'div',
    ...otherProps
  } = props;

  const dataProps = {
    'data-status': status,
    'data-loading': !!isLoading,
    'data-disabled': !!isDisabled,
    'data-readonly': !!isReadonly,
  };

  return (
    <Component
      {...otherProps}
      {...dataProps}
      className={clsx('v2-inline-input', className)}
      ref={ref}
    >
      {children}
      <div className="v2-inline-input-content">
        <Label>{label}</Label>
        {message && <Text>{message}</Text>}
        {error && <Text data-error={!!error}>{error}</Text>}
      </div>
    </Component>
  );
});

InlineInput.displayName = '@v2/InlineInput';
