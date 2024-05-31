import React from 'react';
import { Box, Stack, Text } from '@/core';
import { DemoRoot } from '../DemoRoot';

const data = [
  { value: 'light', label: 'Theme Light' },
  { value: 'dark', label: 'Theme Dark' },
  { value: 'dim', label: 'Theme Dim' },
];

const DemoCheckbox = () => {
  return (
    <DemoRoot>
      <Text>Checkbox</Text>
      <Stack gap="md">
        <Box>Checkbox Item</Box>
        <Box>Checkbox Item</Box>
        <Box>Checkbox Item</Box>
        <Box>Checkbox Item</Box>
      </Stack>
    </DemoRoot>
  );
};

export { DemoCheckbox };
