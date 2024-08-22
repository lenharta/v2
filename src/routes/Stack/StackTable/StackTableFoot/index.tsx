import { Factory } from '@types';
import { createFactory } from '@factory';

export type StackTableFootProps = {};

export type StackTableFootFactory = Factory.Config<{
  comp: 'tfoot';
  props: StackTableFootProps;
  ref: HTMLTableSectionElement;
}>;

export const StackTableFoot = createFactory<StackTableFootFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return (
    <tfoot ref={ref} className="v2-stack-table-foot" {...forwardedProps}>
      <span>Table Foot</span>
    </tfoot>
  );
});

StackTableFoot.displayName = '@v2/StackTable.Foot';
