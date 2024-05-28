import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { InlineInputProps } from './InlineInput.types';

type InlineInputFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: InlineInputProps;
}>;

const InlineInput = factory<InlineInputFactory>((props, ref) => {
  const {
    icon,
    value,
    label,
    message,
    disabled,
    children,
    className,
    iconPosition,
    ...forwardedProps
  } = props;

  return (
    <button
      {...forwardedProps}
      className={clsx('v2-inline-input', className)}
      aria-disabled={disabled}
      data-disabled={disabled}
      aria-label={label}
      ref={ref}
    >
      <span className="v2-inline-input-inner">
        {children}
        <div className="v2-inline-input-content">
          {icon && iconPosition === 'start' && icon}
          {label}
        </div>
      </span>
      {message}
    </button>
  );
});

InlineInput.displayName = '@v2/InlineInput';
export { InlineInput };
