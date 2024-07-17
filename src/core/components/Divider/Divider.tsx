import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { DividerProps } from './types';

type DividerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerProps;
}>;

const Divider = createFactory<DividerFactory>((props, ref) => {
  const {
    icon,
    label,
    decoration = 'solid',
    iconPosition = 'start',
    labelPosition = 'start',
    className,
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      role="separator"
      data-position={labelPosition}
      className={clsx('v2-divider', `v2-divider--decoration-${decoration}`, className)}
      {...forwardedProps}
    >
      <div
        className="v2-divider-content"
        data-position={labelPosition}
        data-with-icon={!!icon || undefined}
        data-with-label={!!label || undefined}
      >
        {icon && iconPosition === 'start' && icon}

        {label && <span className="v2-divider-label">{label}</span>}

        {icon && iconPosition === 'end' && icon}
      </div>
    </div>
  );
});

Divider.displayName = '@v2/Divider';
export { Divider };
