import { Icon } from '@core';
import { createFactory } from '@factory';
import { Factory, Theme } from '@types';
import { capitalizeString } from '@utils';
import { StackItem } from '../types';

type StackTableBodyProps = {
  data?: StackItem[] | undefined;
  getAccentColor: (type?: StackItem['type'] | undefined) => Theme.Color;
};

type StackTableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: StackTableBodyProps;
}>;

// type CellPayloadProps = {
//   name: Pick<StackItem, 'name'>;
//   type: Pick<StackItem, 'type'>;
//   desc: Pick<StackItem, 'desc'>;
//   docs: Pick<StackItem, 'docs' | 'name'>;
// };

// type CellPayload =
//   | { column: 'name'; item: Pick<StackItem, 'name'> }
//   | { column: 'type'; item: Pick<StackItem, 'type'> }
//   | { column: 'desc'; item: Pick<StackItem, 'desc'> }
//   | { column: 'docs'; item: Pick<StackItem, 'docs' | 'name'> };

// function parseRootProps(column: CellPayload['column'], props?: Record<string, any>) {
//   const staticProps = { className: 'v2-stack-table-body-cell' };
//   const columnProps = { 'data-table-column': column };
//   return {
//     ...columnProps,
//     ...staticProps,
//     ...props,
//   };
// }

// function parseLinkProps(item: Pick<StackItem, 'docs' | 'name'>) {
//   const staticProps = { target: '_blank', rel: 'noopener' };
//   const ariaProps = { 'aria-label': item.name };
//   return {
//     ...ariaProps,
//     ...staticProps,
//     href: item.docs,
//   };
// }

// type TableCellPayload = {
//   name: { column: 'name'; item: Pick<StackItem, 'name'> };
//   type: { column: 'type'; item: Pick<StackItem, 'type'> };
//   desc: { column: 'desc'; item: Pick<StackItem, 'desc'> };
//   docs: { column: 'docs'; item: Pick<StackItem, 'docs' | 'name'> };
// };

// function getNameProps(element: 'root', payload: TableCellPayload['name']) {
//   if (!['root'].includes(element)) return {};

//   return parseRootProps(payload.column, {
//     children: payload.item.name,
//   });
// }

// function getTypeProps(element: 'root', payload: TableCellPayload['type']) {
//   if (!['root'].includes(element)) return {};

//   return parseRootProps(payload.column, {
//     children: capitalizeString(payload.item.type),
//   });
// }

// function getDescProps(element: 'root', payload: TableCellPayload['desc']) {
//   if (!['root'].includes(element)) return {};

//   return parseRootProps(payload.column, {
//     children: payload.item.desc,
//   });
// }

// const getRootProps = (column: CellPayload['column'], props: Record<string, any>) => {
//   const rootProps = { className: 'v2-stack-table-body-cell' };
//   const rootAttributes = { 'data-table-column': column };
//   return {
//     ...rootProps,
//     ...rootAttributes,
//     ...props,
//   }
// }

// function getDocsProps(element: 'root' | 'link', payload: TableCellPayload['docs']) {
//   if (!['root', 'link'].includes(element)) return {};

//   if (element === 'root') {
//     const { column, item } = payload;
//     return {
//       'data-table-column': column,
//       className:
//     };
//   }
//   if (element === 'link') {
//     return {};
//   }
//   return {};
// }

// function parseTableCellProps(payload: CellPayload) {
//   if (payload.column === 'name') {
//     const { item } = payload;
//     return {
//       getProps: (element: 'root') =>
//         ({
//           root: parseRootProps(payload.column, { children: item.name }),
//         })[element],
//     };
//   }

//   if (payload.column === 'type') {
//     const { column, item } = payload;
//     return {
//       getProps: (element: 'root') => {
//         if (element === 'root') {
//           return parseRootProps(column, {
//             children: capitalizeString(item.type),
//           });
//         }
//         return {};
//       },
//     };
//   }

//   if (payload.column === 'desc') {
//     const { item } = payload;
//     return {
//       getProps: (element: 'root') =>
//         ({
//           root: parseRootProps(payload.column, { children: item.desc }),
//         })[element],
//     };
//   }

//   if (payload.column === 'docs') {
//     const { item } = payload;
//     return {
//       getProps: (element: 'root' | 'link') =>
//         ({
//           root: parseRootProps(payload.column),
//           link: parseLinkProps(item),
//         })[element],
//     };
//   }
// }

// function isValidQuery<T extends string = string>(query: T, data: T[]) {
//   return data.includes(query) ? true : undefined;
// }

// const StackTableCell = (props: CellPayload) => {
//   const { column, item } = props;

//   const isValidColumn = isValidQuery(column, ['name', 'type', 'desc', 'docs']);

//   if (!isValidColumn) return null;

//   if (column === 'name') {
//     const { getProps } = parseTableCellProps({ column, item });
//     return <td {...getProps('root')} />;
//   }

//   if (column === 'type') {
//     const { getProps } = parseTableCellProps({ column, item });
//     return <td {...getProps('root')} />;
//   }

//   if (column === 'desc') {
//     const { getProps } = parseTableCellProps({ column, item });
//     return <td {...getProps('root')} />;
//   }

//   if (column === 'docs') {
//     const { getProps } = parseTableCellProps({ column, item });
//     return (
//       <td {...getProps('root')}>
//         <a {...getProps('link')}></a>
//       </td>
//     );
//   }
// };

const StackTableBody = createFactory<StackTableBodyFactory>((props, ref) => {
  const { data, getAccentColor, ...forwardedProps } = props;
  return (
    <tbody ref={ref} className="v2-stack-table-body" {...forwardedProps}>
      {(data || []).map(({ desc, docs, name, type, value }) => {
        return (
          <tr className="v2-stack-table-body-row" key={value}>
            {/* <StackTableCell payload={{ column: 'name', item: { name } }} />
            <StackTableCell payload={{ column: 'type', item: { type } }} />
            <StackTableCell payload={{ column: 'desc', item: { desc } }} />
            <StackTableCell payload={{ column: 'docs', item: { docs, name } }} /> */}
          </tr>
        );
      })}
    </tbody>
  );
});

StackTableBody.displayName = '@v2/StackTable.Body';
export { StackTableBody };
