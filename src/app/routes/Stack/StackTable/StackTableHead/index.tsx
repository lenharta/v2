import { Factory } from '@/types';
import { StackItem } from '../types';
import { createFactory } from '@/factory';
import { Icon, IconProps } from '@/core';

type StackTableHeadProps = {
  order?: 'ascending' | 'descending' | undefined;
  active?: keyof StackItem | undefined;
  isActive: (prop: keyof StackItem) => boolean;
  setAscendingData: (prop: keyof StackItem) => void;
  setDescendingData: (prop: keyof StackItem) => void;
};

type StackTableHeadFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'thead';
  props: StackTableHeadProps;
}>;

const StackTableHead = createFactory<StackTableHeadFactory>((props, ref) => {
  const { order, active, isActive, setAscendingData, setDescendingData, ...forwardedProps } = props;

  const getControlIcon = (prop: keyof StackItem): IconProps['name'] => {
    if (order === 'ascending' && isActive(prop)) return 'sort-up';
    if (order === 'descending' && isActive(prop)) return 'sort-down';
    return 'dash';
  };

  const toggleOrder = (prop: keyof StackItem) => {
    if (order === 'ascending') {
      return setDescendingData(prop);
    } else {
      return setAscendingData(prop);
    }
  };

  return (
    <thead ref={ref} className="v2-stack-table-head" {...forwardedProps}>
      <tr className="v2-stack-table-head-row">
        <td
          tabIndex={0}
          onClick={() => toggleOrder('type')}
          className="v2-stack-table-head-cell"
          data-table-column="type"
          data-table-control
        >
          <span>Type</span>
          <Icon name={getControlIcon('type')} />
        </td>

        <td
          tabIndex={0}
          onClick={() => toggleOrder('name')}
          className="v2-stack-table-head-cell"
          data-table-column="name"
          data-table-control
        >
          <span>Name</span>
          <Icon name={getControlIcon('name')} />
        </td>

        <td className="v2-stack-table-head-cell" data-table-column="desc">
          <span>Desc</span>
        </td>

        <td className="v2-stack-table-head-cell" data-table-column="docs">
          <span>Docs</span>
        </td>
      </tr>
    </thead>
  );
});

StackTableHead.displayName = '@v2/StackTable.Head';
export { StackTableHead };
