import clsx from 'clsx';
import { Factory } from '@/types';
import { TabsItemProps } from '../types';
import { useTabsContext } from '../context';
import { createEventCallback } from '@/utils';
import { factory, Label, UnstyledButton } from '@/core';

type TabsItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TabsItemProps;
  omits: 'children';
}>;

const TabsItem = factory<TabsItemFactory>((props, ref) => {
  const {
    label,
    value,
    disabled,
    className,
    leftContent,
    rightContent,
    onKeyDown,
    onClick,
    ...forwardedProps
  } = props;

  const ctx = useTabsContext();
  const itemLabel = forwardedProps['aria-label'] || label;
  const isSelectedItem = ctx.value === value;
  const isDisabledItem = ctx.disabled || disabled;

  const handleKeyDown = createEventCallback(onKeyDown, (event) => {
    const { key, currentTarget } = event ?? {};
    if (!isDisabledItem && key === 'Enter' && currentTarget.value) {
      ctx.onChange(currentTarget.value);
    }
  });

  const handleClick = createEventCallback(onClick, (event) => {
    const { currentTarget } = event ?? {};
    if (!isDisabledItem && currentTarget.value) {
      ctx.onChange(currentTarget.value);
    }
  });

  return (
    <UnstyledButton
      {...forwardedProps}
      id={ctx.getItemId()}
      ref={ref}
      role="tab"
      value={value}
      aria-label={itemLabel}
      aria-selected={isSelectedItem}
      aria-disabled={isDisabledItem}
      data-selected={isSelectedItem}
      data-disabled={isDisabledItem}
      className={clsx('v2-tabs-item', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <span className="v2-tabs-item-inner">
        {leftContent && <div data-position="start">{leftContent}</div>}
        {<Label component="div">{label}</Label>}
        {rightContent && <div data-position="end">{rightContent}</div>}
      </span>
    </UnstyledButton>
  );
});

TabsItem.displayName = '@v2/Tabs.Item';
export { TabsItem, type TabsItemProps };
