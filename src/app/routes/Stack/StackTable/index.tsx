import * as React from 'react';
import { StackTableHead } from './StackTableHead';
import { StackTableBody } from './StackTableBody';
import { useStackTable } from './use-stack-table';
import { STACK_TABLE_ROW_DATA } from './data';

type StackTableFactory = React.FC<{}> & {
  Head: typeof StackTableHead;
  Body: typeof StackTableBody;
};

const StackTable: StackTableFactory = ({}) => {
  const table = useStackTable(STACK_TABLE_ROW_DATA);
  return (
    <div className="v2-stack-table">
      <table className="v2-stack-table-layout">
        <StackTable.Head
          order={table.order}
          active={table.active}
          isActive={table.isActive}
          setAscendingData={table.setAscendingData}
          setDescendingData={table.setDescendingData}
        />
        <StackTable.Body data={table.state} getAccentColor={table.getAccentColor} />
      </table>
    </div>
  );
};

StackTable.Head = StackTableHead;
StackTable.Body = StackTableBody;
StackTable.displayName = '@v2/Stack.Table';
export { StackTable };

// import clsx from 'clsx';

// const StackTableTypeIcon = (props: Partial<StackItem>) => {
//   const { category = 'language' } = props;
//   return (
//     <Icon
//       name="shape-circle"
//       className="v2-stack-table-icon"
//       fill={STACK_MAP_CATEGORY_COLORS[category]}
//       type="fill"
//     />
//   );
// };

// const StackTableCellLink = (props: Partial<StackItem>) => {
//   const { link, label } = props;
//   return (
//     <a href={link} className="v2-stack-table-link" aria-label={label}>
//       <Icon name="arrow-northeast" />
//     </a>
//   );
// };

// interface StackCellProps extends StackItem {
//   column: 'info' | 'label' | 'type' | 'link';
// }

// const StackTableCell = (props: StackCellProps) => {
//   const { column, category, info, label, link, value } = props;

//   const elements = {
//     link: <StackTableCellLink link={link} label={label} />,
//     type: <StackTableTypeIcon category={category} />,
//     info,
//     label,
//   };

//   return (
//     <td id={`stack:cell:${value}:${column}`} data-table-column={column}>
//       {elements[column]}
//     </td>
//   );
// };

// const StackTableHead = () => (
//   <thead>
//     <tr>
//       <th data-table-column="type">Type</th>
//       <th data-table-column="label">Name</th>
//       <th data-table-column="info">Info</th>
//       <th data-table-column="link">Link</th>
//     </tr>
//   </thead>
// );

// const StackTableBody = ({ data }: { data: StackItem[] }) => (
//   <tbody>
//     {data.map((item) => (
//       <tr key={`stack:row:${item.value}`}>
//         <StackTableCell column="type" {...item} />
//         <StackTableCell column="label" {...item} />
//         <StackTableCell column="info" {...item} />
//         <StackTableCell column="link" {...item} />
//       </tr>
//     ))}
//   </tbody>
// );
