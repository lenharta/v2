import clsx from 'clsx';
import { DividerLabelProps } from '../types';

const DividerLabel: React.FC<DividerLabelProps> = (props) => {
  const { label, variant, size, className, ...forwardedProps } = props;

  if (!label) return null;

  return (
    <span
      className={clsx(
        'v2-divider-label',
        `v2-divider-label--size-${size}`,
        `v2-divider-label--variant-${variant}`,
        className
      )}
      {...forwardedProps}
    >
      {label}
    </span>
  );
};

DividerLabel.displayName = '@v2/Divider.Label';
export { DividerLabel };
