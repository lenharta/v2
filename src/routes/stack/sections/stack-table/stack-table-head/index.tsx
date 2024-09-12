import { Store } from '@/types';
import { StackTableItem } from '..';
import { StackTableHeadCell } from '../stack-table-head-cell';
import { StackTableHeadControl } from '../stack-table-head-control';

const headers: { value: keyof StackTableItem; label: string }[] = [
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Category',
    value: 'category',
  },
  {
    label: 'Description',
    value: 'description',
  },
  {
    label: 'Website',
    value: 'website',
  },
];

export const StackTableHead = (props: {
  store: Partial<Store.State>;
  order: 'ascending' | 'descending' | undefined;
  active: keyof StackTableItem | undefined;
  isActive: (prop: keyof StackTableItem) => boolean;
  setAscending: (prop: keyof StackTableItem) => void;
  setDescending: (prop: keyof StackTableItem) => void;
}) => {
  const { order, store, active, isActive, setAscending, setDescending } = props;

  return (
    <thead className="v2-stack-table-head">
      <tr className="v2-stack-table-head-row">
        {headers.map(({ value, label }) => {
          const controls: (keyof StackTableItem)[] = ['name', 'category'];

          if (controls.includes(value)) {
            return (
              <StackTableHeadControl
                key={value}
                item={{ value, label }}
                store={store}
                order={order}
                active={active}
                isActive={isActive}
                setAscending={setAscending}
                setDescending={setDescending}
                className="v2-stack-table-head-cell"
              />
            );
          }

          return (
            <StackTableHeadCell
              key={value}
              item={{ value, label }}
              className="v2-stack-table-head-cell"
            />
          );
        })}
      </tr>
    </thead>
  );
};
