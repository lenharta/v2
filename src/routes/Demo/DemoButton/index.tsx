import { Button, Title } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoButton = () => {
  return (
    <DemoRoot>
      <Button>Button</Button>
    </DemoRoot>
  );
};

const DemoButtonGroupHorizontal = () => (
  <Button.Group orientation="horizontal">
    <Button>Button Start</Button>
    <Button>Button Center</Button>
    <Button>Button End</Button>
  </Button.Group>
);

const DemoButtonGroupVertical = () => (
  <Button.Group orientation="vertical">
    <Button>Button Top</Button>
    <Button>Button Middle</Button>
    <Button>Button Bottom</Button>
  </Button.Group>
);

const DemoButtonGroup = () => {
  return (
    <DemoRoot>
      <Title>Button Group | Default</Title>
      <Button.Group>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
      <Title>Button Group | Vertical</Title>
      <Button.Group>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
      <Title>Button Group | Horizontal</Title>
      <Button.Group>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
    </DemoRoot>
  );
};

export { DemoButton, DemoButtonGroup };
