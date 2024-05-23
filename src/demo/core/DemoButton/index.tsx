import { Button } from '@/core';

interface DemoButtonProps {}

const DemoButton = (props: DemoButtonProps) => <Button {...props}>Button</Button>;

interface DemoButtonGroupProps {}

const DemoButtonGroup = (props: DemoButtonGroupProps) => (
  <Button.Group {...props}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Button.Group>
);

export { DemoButton, DemoButtonGroup };
