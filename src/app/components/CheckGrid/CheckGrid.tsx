import { CheckGridRow } from './CheckGridRow';
import { CheckGridCell } from './CheckGridCell';
import { CheckGridProps } from './CheckGrid.types';

type CheckGridFactory = React.FC<CheckGridProps> & {
  Row: typeof CheckGridRow;
  Cell: typeof CheckGridCell;
};

const CheckGrid: CheckGridFactory = (props) => {
  const { size, variant = 'default', ...forwardedProps } = props;
  return (
    <div className="v2-check-grid" {...forwardedProps}>
      <CheckGrid.Row>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
      </CheckGrid.Row>

      <CheckGrid.Row>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
      </CheckGrid.Row>

      <CheckGrid.Row>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
        <CheckGridCell>Cell</CheckGridCell>
      </CheckGrid.Row>
    </div>
  );
};

CheckGrid.Row = CheckGridRow;
CheckGrid.Cell = CheckGridCell;
CheckGrid.displayName = '@v2/CheckGrid';
export { CheckGrid };
