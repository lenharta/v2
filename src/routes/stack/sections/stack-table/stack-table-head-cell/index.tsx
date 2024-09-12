import { StackTableItem } from '..';

export const StackTableHeadCell = (props: {
  item: { value: keyof StackTableItem; label: string };
  className: string;
}) => {
  const { item, className } = props;
  return (
    <th className={className} data-table-column={item.value}>
      <span>{item.label}</span>
    </th>
  );
};
