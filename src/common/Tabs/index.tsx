import { Core } from '@/types/core';
import { Align, Justify, Orientation, Size } from '@/types/common';
import { TabsPlacement, TabsProvider, TabsVariant } from './context';
import { TabsPanel } from './TabsPanel';
import { TabsItem } from './TabsItem';
import { TabsGroup } from './TabsGroup';

export type TabsProps = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  readOnly?: boolean;
  disabled?: boolean;
  selected?: boolean;
  variant?: TabsVariant;
  placement?: TabsPlacement;
  orientation?: Orientation;
};

export type TabsFactory = Core.BaseFactory<{
  props: TabsProps;
  component: 'div';
  components: {
    Item: typeof TabsItem;
    Group: typeof TabsGroup;
    Panel: typeof TabsPanel;
  };
}>;

export const Tabs: TabsFactory = (props) => {
  const {
    size,
    align,
    variant,
    justify,
    readOnly,
    disabled,
    orientation = 'horizontal',
    placement,
    children,
    component: Component = 'div',
    ...otherProps
  } = props;

  return (
    <Component {...otherProps} className="Tabs">
      <TabsProvider
        value={{ size, align, justify, readOnly, disabled, orientation, placement, variant }}
      >
        {children}
      </TabsProvider>
    </Component>
  );
};

Tabs.Panel = TabsPanel;
Tabs.Group = TabsGroup;
Tabs.Item = TabsItem;
