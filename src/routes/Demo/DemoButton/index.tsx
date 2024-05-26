import { DemoRoot } from '../DemoRoot';
import { Box, Button, Title } from '@/core';

const DemoButtonDefault = () => {
  return (
    <Box className="v2-demo-box-button">
      <Button>Button</Button>
    </Box>
  );
};

const DemoButtonGroupDefault = () => (
  <Box className="v2-demo-box-button">
    <Button.Group>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Button.Group>
  </Box>
);

const DemoButtonGroupVertical = () => (
  <Box className="v2-demo-box-button">
    <Button.Group orientation="vertical">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Button.Group>
  </Box>
);

const DemoButtonGroupHorizontal = () => (
  <Box className="v2-demo-box-button">
    <Button.Group orientation="horizontal">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Button.Group>
  </Box>
);

const DemoButton = () => {
  return (
    <DemoRoot>
      <Title>Button | Default</Title>
      <DemoButtonDefault />
      <Title>Button.Group | Default</Title>
      <DemoButtonGroupDefault />
      <Title>Button.Group | Vertical</Title>
      <DemoButtonGroupVertical />
      <Title>Button.Group | Horizontal</Title>
      <DemoButtonGroupHorizontal />
    </DemoRoot>
  );
};

export {
  DemoButton,
  DemoButtonDefault,
  DemoButtonGroupDefault,
  DemoButtonGroupVertical,
  DemoButtonGroupHorizontal,
};
