import { Factory, Theme } from '@/types';
import { createFactory } from '@/factory';
import { StackItem } from '../types';
import { Icon } from '@/core';

type StackTableBodyProps = {
  data?: StackItem[] | undefined;
  getAccentColor: (type?: StackItem['type'] | undefined) => Theme.Color;
};

type StackTableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: StackTableBodyProps;
}>;

const StackTableBody = createFactory<StackTableBodyFactory>((props, ref) => {
  const { data, getAccentColor, ...forwardedProps } = props;
  return (
    <tbody ref={ref} className="v2-stack-table-body" {...forwardedProps}>
      {(data || []).map((item) => {
        return (
          <tr className="v2-stack-table-body-row" key={item.value}>
            <td className="v2-stack-table-body-cell" data-table-column="type">
              <Icon name="shape-circle" type="fill" fill={getAccentColor(item.type)} />
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="name">
              {item.name}
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="desc">
              {item.desc}
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="docs">
              <a href={item.docs} aria-label={item.name}>
                <Icon name="arrow-northeast-square" />
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
});

StackTableBody.displayName = '@v2/StackTable.Body';
export { StackTableBody };
