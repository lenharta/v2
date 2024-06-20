import clsx from 'clsx';
import { DividerSeparatorProps } from '../types';

const DividerSeperator: React.FC<DividerSeparatorProps> = (props) => {
  const { variant, size, show, ...forwardedProps } = props;

  if (!show) return null;

  return (
    <div
      className={clsx(
        'v2-divider-seperator',
        `v2-divider-seperator--size-${size}`,
        `v2-divider-seperator--variant-${variant}`
      )}
      {...forwardedProps}
    />
  );
};

DividerSeperator.displayName = '@v2/Divider.Seperator';
export { DividerSeperator };
