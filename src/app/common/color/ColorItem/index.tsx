import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { getToken } from '@/core/utils';
import { ColorItemData } from '@/app/common/color';
import { Shape } from '../../shape';
import { useThemeDispatch } from '@/store';

interface ColorIconProps {
  id: string;
}

type ColorIconFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ColorIconProps;
  omits: 'viewBox';
}>;

export const ColorIcon = factory<ColorIconFactory>((props, ref) => {
  const { id, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      className="color-group-item-icon"
      style={{ backgroundColor: getToken(id) }}
      ref={ref}
    />
  );
});

interface ColorItemProps extends ColorItemData {}

type ColorItemFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: ColorItemProps;
}>;

export const ColorItem = factory<ColorItemFactory>((props, ref) => {
  const { id, label, value, className, ...forwardedProps } = props;
  const { setAccent } = useThemeDispatch();

  return (
    <button
      {...forwardedProps}
      id={id}
      ref={ref}
      title={label}
      value={value}
      className={clsx('color-group-item', className)}
      onClick={(event) => setAccent(event.currentTarget.value as any)}
      children={<ColorIcon id={id} />}
      aria-label={`choose color ${label}`}
    />
  );
});

ColorItem.displayName = '@v2/Color.Item';
