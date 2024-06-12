import React from 'react';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { TabsProps } from './tabs-types';
import { selectors } from './tabs-constants';
import { TabsProvider } from './tabs-context';

type TabsComponent = React.FC<TabsProps> & {
  Item: typeof TabsItem;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
};

const Tabs: TabsComponent = (props) => {
  const {
    value: controlledValue,
    onChange: controlledChange,
    scheme = 'primary-0-interactive',
    variant = 'elevated',
    children,
    disabled,
    orientation = 'horizontal',
    defaultValue,
    keyboardActivated,
    trapFocus = false,
    preventDefault = false,
    parentSelector = selectors.list.key,
    childSelector = selectors.item.key,
  } = props;

  const uid = React.useId();
  const getItemId = () => `tabs${uid}item`;
  const getPanelId = () => `tabs${uid}panel`;

  if (!controlledValue && !defaultValue) {
    console.error(
      '[@v2/core/components/Tabs]: Tabs should be provided a value property, `defaultValue` (uncontrolled) -or- `value` (controlled)'
    );
  }

  const [uncontrolledValue, uncontrolledChange] = React.useState(defaultValue);
  const onChange = (uncontrolledChange || controlledChange) as (value: string) => void;
  const value = (uncontrolledValue || controlledValue) as string;

  return (
    <TabsProvider
      value={{
        value,
        scheme,
        variant,
        disabled,
        orientation,
        keyboardActivated,
        preventDefault,
        parentSelector,
        childSelector,
        trapFocus,
        onChange,
        getItemId,
        getPanelId,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </TabsProvider>
  );
};

Tabs.List = TabsList;
Tabs.Item = TabsItem;
Tabs.Panel = TabsPanel;
Tabs.displayName = '@v2/Tabs';
export { Tabs };
