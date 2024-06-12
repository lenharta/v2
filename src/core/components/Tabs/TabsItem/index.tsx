import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { createKeyDownGroup, factory, Label, UnstyledButton } from '@/core';

import { TabsItemProps } from '../tabs-types';
import { useTabsContext } from '../tabs-context';
import { css, selectors } from '../tabs-constants';

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

  const handleKeyDown = createKeyDownGroup({
    onKeyDown,
    loop: ctx.trapFocus,
    orientation: ctx.orientation,
    preventDefault: ctx.preventDefault,
    parentSelector: ctx.parentSelector,
    childSelector: ctx.childSelector,
  });

  const handleClick = createEventCallback(onClick, (event) => {
    const { currentTarget } = event ?? {};
    if (!(ctx.disabled || disabled) && currentTarget.value) {
      ctx.onChange(currentTarget.value);
    }
  });

  return (
    <UnstyledButton
      id={ctx.getItemId()}
      ref={ref}
      role="tab"
      value={value}
      className={clsx(
        css.item,
        `${css.item}--scheme-${ctx.scheme}`,
        `${css.item}--variant-${ctx.variant}`,
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={label}
      aria-selected={ctx.value === value || undefined}
      aria-disabled={disabled || ctx.disabled}
      data-disabled={disabled || ctx.disabled}
      data-selected={ctx.value === value || undefined}
      {...selectors.item.prop}
      {...forwardedProps}
    >
      {leftContent && <div data-position="start">{leftContent}</div>}
      {<Label component="div">{label}</Label>}
      {rightContent && <div data-position="end">{rightContent}</div>}
    </UnstyledButton>
  );
});

TabsItem.displayName = '@v2/Tabs.Item';
export { TabsItem };
