import React from 'react';
import { DemoRoot } from '../DemoRoot';
import { Checkbox, CheckboxProps, Icon, Text } from '@/core';

const DemoCheckboxSingle = () => {
  return (
    <Checkbox
      value="accept-terms"
      label="Accept Terms & Conditions"
      aria-label="accept terms and conditions"
    />
  );
};

const data: CheckboxProps[] = [
  { value: 'light', label: 'theme mode light', icon: <Icon name="modeLight" /> },
  { value: 'dark', label: 'theme mode dark', icon: <Icon name="modeDark" /> },
  { value: 'dim', label: 'theme mode dim', icon: <Icon name="modeDim" /> },
];

// const items = data.map(({ value, ...otherProps }) => {
//   return <Checkbox key={value} value={value} {...otherProps} />;
// });

// const DemoCheckboxGroup = () => {
//   const [value, setValue] = React.useState<string[]>([]);
//   return (
//     <Checkbox.Group value={value}>
//       {items}
//     </Checkbox.Group>
//   );
// };

const DemoCheckbox = () => {
  return (
    <DemoRoot>
      <Text>Checkbox</Text>
      {/* <DemoCheckboxSingle /> */}
      {/* <DemoCheckboxGroup /> */}
    </DemoRoot>
  );
};

export { DemoCheckbox };
