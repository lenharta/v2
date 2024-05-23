import { Divider, Text } from '@/core';

interface DemoDividerProps {}

const DemoDivider = (props: DemoDividerProps) => <Divider {...props} />;

const DemoDividerWithLabel = (props: DemoDividerProps) => (
  <Divider {...props} label={<Text>Label</Text>} />
);

export { DemoDivider, DemoDividerWithLabel };
