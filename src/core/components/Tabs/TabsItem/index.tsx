import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { Icon, UnstyledButton } from '@core';
import { TabsItemProps } from '../types';
import { useTabsContext } from '../context';
import { createKeyDownGroup } from '@utils';
import { TABS_SELECTORS } from '../constants';

type TabsItemFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: TabsItemProps;
}>;

const TabsItem = createFactory<TabsItemFactory>((props, ref) => {
  const {
    value,
    variant,
    className,
    children,
    disabled,
    readOnly,
    loading,
    iconLeft,
    iconRight,
    onKeyDown,
    ...forwardedProps
  } = props;

  const ctx = useTabsContext();

  return (
    <UnstyledButton
      id={ctx.getItemId(value)}
      ref={ref}
      value={value}
      loading={!!loading || !!ctx.loading || undefined}
      readOnly={!!readOnly || !!ctx.readOnly || undefined}
      disabled={!!disabled || !!ctx.disabled || undefined}
      selected={!!(ctx.value === value) || undefined}
      className={clsx(
        'v2-tabs-item',
        `v2-tabs-item--${variant || ctx.variant || 'default'}`,
        className
      )}
      onClick={(event) => ctx.onValueChange(event.currentTarget.value)}
      onKeyDown={createKeyDownGroup({
        loop: ctx.keyboardOptions?.loop,
        orientation: ctx.orientation,
        childSelector: TABS_SELECTORS.item.key,
        parentSelector: TABS_SELECTORS.list.key,
        preventDefault: ctx.keyboardOptions?.preventDefault,
        onKeyDown: (event) => {
          ctx.keyboardOptions?.onKeyDown?.(event);
          onKeyDown?.(event);

          // if (ctx.keyboardActivated) {
          //   ctx.onValueChange(event.currentTarget.value)
          // }
        },
      })}
      {...TABS_SELECTORS.item.prop}
      {...forwardedProps}
    >
      <div className="v2-tabs-item-layout">
        {iconLeft && <Icon {...iconLeft} />}
        {children}
        {iconRight && <Icon {...iconRight} />}
      </div>
    </UnstyledButton>
  );
});

export { TabsItem };
