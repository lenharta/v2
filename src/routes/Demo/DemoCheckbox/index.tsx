import React from 'react';
import { DemoRoot } from '../DemoRoot';
import { Icon, Text } from '@/core';

const data = [
  { value: 'light', label: 'Theme Light', icon: <Icon name="modeLight" />, indeterminate: true },
  { value: 'dark', label: 'Theme Dark', icon: <Icon name="modeDark" /> },
  { value: 'dim', label: 'Theme Dim', icon: <Icon name="modeDim" /> },
] as const;

// const DemoCheckboxSingle = () => {
//   const [isChecked, setChecked] = React.useState<boolean>(false);
//   return (
//     <Checkbox
//       value="accepted-terms"
//       label="Accept Terms & Conditions"
//       onChange={() => setChecked(!isChecked)}
//       checked={isChecked}
//     />
//   );
// };

// const items = data.map(({ value, ...otherProps }) => {
//   return <Checkbox key={value} value={value} {...otherProps} />;
// });

// const DemoCheckboxGroup = () => {
//   const [value, setValue] = React.useState<string[]>([]);
//   return (
//     <Checkbox.Group value={value} onChange={setValue}>
//       {items}
//     </Checkbox.Group>
//   );
// };

const DemoCheckbox = () => {
  return (
    <DemoRoot>
      <Text>Checkbox</Text>
    </DemoRoot>
  );
};

export { DemoCheckbox };
