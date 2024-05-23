import { objectKeys } from '@/utils';

interface MenuGridProps {
  open?: boolean | undefined;
}

interface MenuGridRowProps {
  className: string;
  children: React.ReactNode;
  key: string;
  id: string;
}

interface MenuGridCellProps {
  className: string;
  key: string;
  id: string;
}

type MenuGridComponent = React.FC<MenuGridProps> & {
  Row: React.FC<MenuGridRowProps>;
  Cell: React.FC<MenuGridCellProps>;
};

const data: Record<string, string[]> = {
  'row:a': ['row:a:cell:a', 'row:a:cell:b', 'row:a:cell:c'],
  'row:b': ['row:b:cell:a', 'row:b:cell:b', 'row:b:cell:c'],
  'row:c': ['row:c:cell:a', 'row:c:cell:b', 'row:c:cell:c'],
};

const MenuGrid: MenuGridComponent = (props) => {
  const { open, ...forwardedProps } = props;

  const createGridMatrixId = (...args: string[]) => {
    return ['menu', ...args].join(':');
  };

  return (
    <div {...forwardedProps} className="v2-menu-grid">
      {objectKeys(data).map((row) => (
        <MenuGrid.Row
          id={createGridMatrixId(row)}
          key={createGridMatrixId(row)}
          className="v2-menu-grid-row"
        >
          {data[row].map((cell) => (
            <MenuGrid.Cell
              id={createGridMatrixId(row, cell)}
              key={createGridMatrixId(row, cell)}
              className="v2-menu-grid-cell"
            />
          ))}
        </MenuGrid.Row>
      ))}
    </div>
  );
};

MenuGrid.Cell = (props) => <div {...props} />;
MenuGrid.Row = (props) => <div {...props} />;
MenuGrid.displayName = '@v2/Menu.Grid';
export { MenuGrid, type MenuGridProps };
