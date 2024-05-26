import React from 'react';
import { DemoRoot } from '../DemoRoot';
import { Box, Divider, Icon, Text, Title } from '@/core';

const DemoDividerDefault = () => (
  <Box className="v2-demo-box-divider">
    <Divider />
  </Box>
);

const DemoDividerWithLabel = () => (
  <Box className="v2-demo-box-divider">
    <Divider label="Label" />
  </Box>
);

const DemoDividerPosition = () => (
  <React.Fragment>
    <Box className="v2-demo-box-divider">
      <Divider label="Label" position="start" />
    </Box>
    <Box className="v2-demo-box-divider">
      <Divider label="Label" position="center" />
    </Box>
    <Box className="v2-demo-box-divider">
      <Divider label="Label" position="end" />
    </Box>
  </React.Fragment>
);

const DemoDividerIcon = () => (
  <React.Fragment>
    <Box className="v2-demo-box-divider">
      <Divider icon={<Icon name="search" />} label="Label" position="start" iconPosition="start" />
    </Box>
    <Box className="v2-demo-box-divider">
      <Divider
        icon={<Icon name="taskComplete" />}
        label="Label"
        position="center"
        iconPosition="end"
      />
    </Box>
    <Box className="v2-demo-box-divider">
      <Divider icon={<Icon name="done" />} label="Label" position="end" iconPosition="start" />
    </Box>
  </React.Fragment>
);

const DemoDividerVertical = () => (
  <Box className="v2-demo-box-divider--vertical">
    <Box children={<Text>Label</Text>} />
    <Divider orientation="vertical" />
    <Box children={<Text>Label</Text>} />
    <Divider orientation="vertical" />
    <Box children={<Text>Label</Text>} />
    <Divider orientation="vertical" />
    <Box children={<Text>Label</Text>} />
  </Box>
);

const DemoDivider = () => {
  return (
    <DemoRoot>
      <Title h2>Divider Demo</Title>
      <Title h3>Default</Title>
      <DemoDividerDefault />
      <Title h3>Labelled</Title>
      <DemoDividerWithLabel />
      <Title h3>Positions</Title>
      <DemoDividerPosition />
      <Title h3>Icon</Title>
      <DemoDividerIcon />
      <Title h3>Vertical</Title>
      <DemoDividerVertical />
    </DemoRoot>
  );
};

export { DemoDivider };
