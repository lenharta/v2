import { Action } from '@/app/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

export type LayoutSearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {};
}>;

export const LayoutSearchTarget = factory<LayoutSearchTargetFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <Action
      {...otherProps}
      ref={ref}
      icon="search"
      label="header action item"
      variant="button"
      className="layout-search-target"
    />
  );
});

LayoutSearchTarget.displayName = '@v2/app/LayoutSearch.Target';
