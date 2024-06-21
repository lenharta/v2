import { CheckGridRowProps } from '../CheckGrid.types';

const CheckGridRow: React.FC<CheckGridRowProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-check-grid-row" {...forwardedProps}>
      CheckGridRow
    </div>
  );
};

export { CheckGridRow };
