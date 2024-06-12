import clsx from 'clsx';
import { Label } from '../../Label';
import { DividerLabelProps } from '../types';

type DividerLabelFactory = React.FC<DividerLabelProps>;

const css = {
  label: 'v2-divider-label',
};

const DividerLabel: DividerLabelFactory = (props) => {
  const { label, variant, size, className, ...forwardedProps } = props;

  if (!label) return null;

  return (
    <Label
      component="p"
      className={clsx(
        css.label,
        `${css.label}--size-${size}`,
        `${css.label}--variant-${variant}`,
        className
      )}
      {...forwardedProps}
    >
      {label}
    </Label>
  );
};

DividerLabel.displayName = '@v2/Divider.Label';
export { DividerLabel };
