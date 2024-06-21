import { CheckGridCellProps } from '../CheckGrid.types';

const CheckGridCell: React.FC<CheckGridCellProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-check-grid-cell" {...forwardedProps}>
      {children}
    </div>
  );
};

export { CheckGridCell };
