import { Action } from '@/core';
import { DemoTool } from '../DemoTool';

export const DemoToolbar = () => {
  return (
    <Action.Group className="v2-demo-toolbar" gap="xxs">
      <DemoTool
        prop="accent"
        css={{
          drawer: 'v2-demo-tool-accent-drawer',
        }}
        items={[
          { label: 'Red', value: 'red' },
          { label: 'Orange', value: 'orange' },
          { label: 'Yellow', value: 'yellow' },
          { label: 'Green', value: 'green' },
          { label: 'Teal', value: 'teal' },
          { label: 'Cyan', value: 'cyan' },
          { label: 'Blue', value: 'blue' },
          { label: 'Purple', value: 'purple' },
          { label: 'Magenta', value: 'magenta' },
          { label: 'Stone', value: 'stone' },
          { label: 'Slate', value: 'slate' },
          { label: 'Grey', value: 'grey' },
        ]}
      />

      <DemoTool
        prop="mode"
        items={[
          { label: 'Light Mode', value: 'light' },
          { label: 'Dark Mode', value: 'dark' },
          { label: 'Dim Mode', value: 'dim' },
        ]}
      />

      <DemoTool
        prop="dir"
        items={[
          { label: 'writing mode left to right', value: 'ltr' },
          { label: 'writing mode right to left', value: 'rtl' },
        ]}
      />

      <Action.Spacer grow />
    </Action.Group>
  );
};
