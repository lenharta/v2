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

const css = {
  item: 'v2-tabs-item',
};

const TabsItem = factory<TabsItemFactory>((props, ref) => {
  const {
    label,
    value,
    scheme,
    variant,
    disabled,
    className,
    leftContent,
    rightContent,
    onKeyDown,
    onClick,
    ...forwardedProps
  } = props;

  const ctx = useTabsContext();

  const contextProps = ctx
    ? {
        'aria-selected': ctx.value === value || undefined,
        'aria-disabled': ctx.disabled || disabled,
        'data-selected': ctx.value === value || undefined,
        'data-disabled': ctx.disabled || disabled,
        'data-variant': ctx.variant || variant,
        'data-scheme': ctx.scheme || scheme,
        onClick: createEventCallback(onClick, (event) => {
          const { currentTarget } = event ?? {};
          if (!(ctx.disabled || disabled) && currentTarget.value) {
            ctx.onChange(currentTarget.value);
          }
        }),
      }
    : {};

  return (
    <UnstyledButton
      id={ctx.getItemId()}
      ref={ref}
      role="tab"
      value={value}
      className={clsx(css.item, className)}
      aria-label={forwardedProps['aria-label'] || label}
      aria-disabled={disabled}
      data-disabled={disabled}
      data-variant={variant}
      data-scheme={scheme}
      {...forwardedProps}
      {...contextProps}
    >
      {leftContent && <div data-position="start">{leftContent}</div>}
      {<Label component="div">{label}</Label>}
      {rightContent && <div data-position="end">{rightContent}</div>}
    </UnstyledButton>
  );
});

TabsItem.displayName = '@v2/Tabs.Item';
export { TabsItem, type TabsItemProps };
