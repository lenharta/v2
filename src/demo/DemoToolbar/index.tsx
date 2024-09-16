import { DEMO } from '@/types';
import { Action } from '@/core';
import { useStore } from '@/app';

import { DemoTool } from '../DemoTool';
import { DemoControls } from '../DemoControls';
import { useDemoContext } from '../Demo.context';

export const DemoToolbar = (props: { controls: DEMO.ControlOptions[] }) => {
  const { controls } = props;
  const store = useStore();
  const { display } = useDemoContext();

  return (
    <Action.Group className="v2-demo-toolbar" gap="xxs">
      <DemoTool
        prop="accent"
        store={store}
        state={display.state}
        dispatch={display.dispatch}
        css={{ drawer: 'v2-demo-tool-accent-drawer' }}
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
        store={store}
        state={display.state}
        dispatch={display.dispatch}
        items={[
          { label: 'Light Mode', value: 'light' },
          { label: 'Dark Mode', value: 'dark' },
          { label: 'Dim Mode', value: 'dim' },
        ]}
      />

      <DemoTool
        prop="dir"
        store={store}
        state={display.state}
        dispatch={display.dispatch}
        items={[
          { label: 'writing mode left to right', value: 'ltr' },
          { label: 'writing mode right to left', value: 'rtl' },
        ]}
      />

      <Action.Spacer grow />

      <DemoControls controls={controls} />
    </Action.Group>
  );
};
