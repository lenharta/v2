import { Factory } from '@types';
import { createFactory } from '@factory';

type StackTableBodyProps = {};

type StackTableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: StackTableBodyProps;
}>;

const StackTableBody = createFactory<StackTableBodyFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <tbody ref={ref} className="v2-stack-table-body" {...forwardedProps}></tbody>;
});

StackTableBody.displayName = '@v2/StackTable.Body';
export { StackTableBody };
