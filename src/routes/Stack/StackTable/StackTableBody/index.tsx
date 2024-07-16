import { Icon } from '@/core';
import { createFactory } from '@/factory';
import { Factory, Theme } from '@/types';
import { capitalizeString } from '@/utils';
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

const StackTableBody = createFactory<StackTableBodyFactory>((props, ref) => {
  const { data, getAccentColor, ...forwardedProps } = props;
  return (
    <tbody ref={ref} className="v2-stack-table-body" {...forwardedProps}>
      {(data || []).map((item) => {
        return (
          <tr className="v2-stack-table-body-row" key={item.value}>
            <td className="v2-stack-table-body-cell" data-table-column="name">
              {item.name}
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="type">
              <span
                children={capitalizeString(item.type)}
                style={{
                  backgroundColor: `rgba(var(--c-rgb-${getAccentColor(item.type)}), 0.05)`,
                  color: `rgba(var(--c-rgb-${getAccentColor(item.type)}), 1)`,
                }}
              />
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="desc">
              {item.desc}
            </td>

            <td className="v2-stack-table-body-cell" data-table-column="docs">
              <a href={item.docs} aria-label={item.name} target="_blank" rel="noopener">
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
