import clsx from 'clsx';
import { Icon } from '@/core';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';

export type CheckboxIconFactory = Factory.Config<{
  ref: SVGSVGElement;
  props: Core.CheckboxIconProps;
  comp: 'svg';
}>;

const css: Record<'root', string> = {
  root: 'v2-checkbox-Icon',
};

const parseCheckboxIconState: Core.ParseCheckboxIconState = (props) => {
  let state: Core.CheckboxIconState = 'unchecked';
  let blocking: string[] = ['loading', 'disabled', 'readOnly'];

  for (let key in props) {
    if (blocking.includes(key)) {
      state = 'unchecked';
    }
    if (key === 'mixed') {
      state = 'mixed';
    }
    if (key === 'checked') {
      state = 'checked';
    }
  }
  return state;
};

const parseCheckboxIconName: Core.ParseCheckboxIconName = (state, shape) => ({
  name: `checkbox-${state}-${shape}`,
});

const parseCheckboxIconProps: Core.ParseCheckboxIconProps = ({ icon, state, shape }) => ({
  ...parseCheckboxIconName(state, shape),
  fill: icon?.fill || 'currentColor',
  type: icon?.type || 'outline',
});

export const CheckboxIcon = createFactory<CheckboxIconFactory>((props, ref) => {
  const {
    icon,
    shape = 'square',
    mixed,
    checked,
    loading,
    disabled,
    readOnly,
    className,
    ...forwardedProps
  } = props;

  const iconState = parseCheckboxIconState({ checked, mixed, loading });

  const iconProps = parseCheckboxIconProps({ state: iconState, shape, icon });

  return (
    <Icon {...forwardedProps} {...iconProps} className={clsx(css.root, className)} ref={ref} />
  );
});

CheckboxIcon.displayName = '@v2/Checkbox.Icon';
