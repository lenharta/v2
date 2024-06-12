import clsx from 'clsx';
import { DividerSeparatorProps } from '../types';

type DividerSeperatorFactory = React.FC<DividerSeparatorProps>;

const css = {
  seperator: 'v2-divider-seperator',
};

const DividerSeperator: DividerSeperatorFactory = (props) => {
  const { variant, size, show } = props;
  if (!show) return null;
  return (
    <div
      className={clsx(
        css.seperator,
        `${css.seperator}--size-${size}`,
        `${css.seperator}--variant-${variant}`
      )}
    />
  );
};

DividerSeperator.displayName = '@v2/Divider.Seperator';
export { DividerSeperator };
